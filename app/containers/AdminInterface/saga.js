import { takeLatest, all, call, put } from 'redux-saga/effects';

import { FETCH_CLASSES, CREATE_COURS, DELETE_CLASSE_ACTION } from './constants';
import { callApi } from '../../services/saga';
import {
  storeClassesById,
  toggleModalAction,
  fetchClassesBySubNiveauAction,
  toggleModalDeleteAction,
} from './actions';
import { showLoaderAction, addToastAction } from '../App/actions';
import { TOAST_SUCCESS, TOAST_ERROR } from '../../constants/constants';
import { requestLogged } from '../../services/request/request';

function* fetchClassesSaga(action) {
  try {
    yield call(
      callApi,
      `/classes/${action.id}`,
      'GET',
      null,
      storeClassesById,
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
function* watchFetchClasses() {
  yield takeLatest(FETCH_CLASSES, fetchClassesSaga);
}

function* addCours(action) {
  try {
    const requestUrl = `/classes/${action.currentSousNiveau}`;
    yield put(showLoaderAction(true));
    const newClasse = { name: action.name };
    console.log(JSON.stringify(action.name));
    const response = yield call(
      requestLogged,
      requestUrl,
      {
        body: JSON.stringify(newClasse),
      },
      'POST',
    );
    if (response) {
      yield put(addToastAction('Création réussie', TOAST_SUCCESS));
      yield put(toggleModalAction(false));
      yield put(fetchClassesBySubNiveauAction(action.currentSousNiveau));
    } else {
      yield put(addToastAction('Création échouée', TOAST_ERROR));
    }
    yield put(showLoaderAction(false));
  } catch (e) {
    yield put(addToastAction('Création échouée', TOAST_ERROR));
    console.error(e);
    yield put(showLoaderAction(false));
  }
}

function* watchAddCours() {
  yield takeLatest(CREATE_COURS, addCours);
}

function* deleteCoursSaga(action) {
  console.log(action);
  try {
    const requestUrl = `/classes/${action.classe.id}`;
    yield put(showLoaderAction(true));
    const response = yield call(requestLogged, requestUrl, null, 'DELETE');
    if (response) {
      yield put(addToastAction('Suppression réussie', TOAST_SUCCESS));
      yield put(toggleModalDeleteAction(false));
      yield put(fetchClassesBySubNiveauAction(action.classe.subNiveauId));
    } else {
      yield put(addToastAction('Suppression échouée', TOAST_ERROR));
    }
    yield put(showLoaderAction(false));
  } catch (e) {
    yield put(addToastAction('Suppression échouée', TOAST_ERROR));
    console.error(e);
    yield put(showLoaderAction(false));
  }
}

function* watchDeleteCours() {
  yield takeLatest(DELETE_CLASSE_ACTION, deleteCoursSaga);
}
// Individual exports for testing
export default function* adminInterfaceSaga() {
  // See example in containers/HomePage/saga.js
  yield all([watchFetchClasses(), watchAddCours(), watchDeleteCours()]);
}
