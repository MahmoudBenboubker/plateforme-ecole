/* eslint-disable prettier/prettier */
import { takeLatest, all, call, put, takeEvery } from 'redux-saga/effects';
// import { loginCredentialsAction } from './actions';
import { LOGIN_CREDENTIALS_LOGIN, FETCH_NIVEAUX } from './constants';
import { callApi } from '../../services/saga';
import history from '../../utils/history';
import AccessTokenStorage from '../../services/storage/AccessTokenStorage';
import { requestLogin } from '../../services/request/request';
import {
  showLoaderAction,
  addToastAction,
  toggleModalLoginAction,
  updateUserStateAction,
  storeNiveauxAction,
} from './actions';
import { TOAST_SUCCESS, TOAST_ERROR } from '../../constants/constants';

// eslint-disable-next-line no-unused-vars
// function* loginSaga(action) {
//   yield call(
//     callApi,
//     '/login',
//     'POST',
//     action.credentials,
//     null,ch
//     'Connexion avec succès',
//     null,
//     null,
//     null,
//     null,
//     true,
//   );
// }

function* loginSaga(action) {
  const requestURL = '/login';
  try {
    yield put(updateUserStateAction(false));
    AccessTokenStorage.clear();
    yield put(showLoaderAction(true));
    const form = new FormData();
    form.append('email', action.credentials.email);
    form.append('password', action.credentials.password);
    const response = yield call(requestLogin, requestURL, {
      body: JSON.stringify(action.credentials),
    });
    if (response && response.token) {
      AccessTokenStorage.setAccessToken(response.token);
      yield put(addToastAction('Connexion réussie', TOAST_SUCCESS));
      yield put(toggleModalLoginAction(false));
      yield put(updateUserStateAction(true));
      yield history.push('/');
    } else {
      yield put(addToastAction('Connexion échouée', TOAST_ERROR));
    }
  } catch (err) {
    console.error(err);
  }
  yield put(showLoaderAction(false));
}

function* watchLogin() {
  yield takeLatest(LOGIN_CREDENTIALS_LOGIN, loginSaga);
}

function* fetchNiveauxSaga() {
  try {
    yield call(
      callApi,
      '/niveaux',
      'GET',
      null,
      storeNiveauxAction,
      null,
      null,
      null,
      null,
      null,
      true,
      null,
    );
  } catch (e) {
    console.error(e);
  }
}

function* watchFetchNiveaux() {
  yield takeLatest(FETCH_NIVEAUX, fetchNiveauxSaga);
}

export default function* rootSaga() {
  yield all([watchLogin(), watchFetchNiveaux()]);
}
