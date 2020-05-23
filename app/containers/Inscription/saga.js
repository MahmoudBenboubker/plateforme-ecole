import { takeLatest, call, all, put } from 'redux-saga/effects';
import { SIGNIN_ACTION } from './constants';
import { requestLogin } from '../../services/request/request';
import { addToastAction, showLoaderAction } from '../App/actions';
import { TOAST_SUCCESS, TOAST_ERROR } from '../../constants/constants';
import history from '../../utils/history';

// import { callApi } from '../../services/saga';

function* signInSaga(action) {
  try {
    // console.log('saga', action);
    // yield call(
    //   callApi,
    //   '/signup',
    //   'POST',
    //   action.credentials,
    //   null,
    //   'Inscription réussie',
    //   null,
    //   null,
    //   () => '/',
    //   null,
    //   true,
    //   null,
    // );
    const requestUrl = '/signup';
    yield put(showLoaderAction(true));
    const response = yield call(requestLogin, requestUrl, {
      body: JSON.stringify(action.credentials),
    });
    if (response) {
      yield put(addToastAction('Inscription réussie', TOAST_SUCCESS));
      yield history.push('/');
    } else {
      yield put(addToastAction('Connexion échouée', TOAST_ERROR));
    }
    yield put(showLoaderAction(false));
  } catch (e) {
    console.error(e);
  }
}

function* watchSignin() {
  yield takeLatest(SIGNIN_ACTION, signInSaga);
}

export default function* inscriptionSaga() {
  yield all([watchSignin()]);
}
