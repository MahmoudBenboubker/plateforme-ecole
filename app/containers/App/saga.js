/* eslint-disable prettier/prettier */
import { takeLatest, all, call } from 'redux-saga/effects';
// import { loginCredentialsAction } from './actions';
import { LOGIN_CREDENTIALS_LOGIN } from './constants';
import { callApi } from '../../services/saga';

// eslint-disable-next-line no-unused-vars
function* loginSaga(action) {
  yield call(
    callApi,
    '/niveaux',
    'GET',
    null,
    null,
    'Connexion avec succès',
    null,
    null,
    null,
    null,
    true,
  );
}

function* watchLogin() {
  yield takeLatest(LOGIN_CREDENTIALS_LOGIN, loginSaga);
}

export default function* rootSaga() {
  yield all([watchLogin()]);
}
