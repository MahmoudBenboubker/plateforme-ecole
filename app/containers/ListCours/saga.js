import { takeLatest, all, call } from 'redux-saga/effects';
import { callApi } from '../../services/saga';
import { FETCH_CLASSES, FETCH_DOCS_CLASSES_ACTION } from './constants';
import { storeClassesBySubNiveauAction, storeDocsAction } from './actions';

function* fetchClassesSaga(action) {
  try {
    yield call(
      callApi,
      `/classes/${action.id}`,
      'GET',
      null,
      storeClassesBySubNiveauAction,
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

function* fetchDocsbyClasse(action) {
  try {
    if (!(action.matiere === '')) {
      yield call(
        callApi,
        `/resources/${action.query.classe}?matiere=${action.query.matiere}`,
        'GET',
        null,
        storeDocsAction,
        null,
        null,
        null,
        null,
        null,
        true,
        null,
      );
    } else {
      yield call(
        callApi,
        `/resources/${action.query.classe}`,
        'GET',
        null,
        storeDocsAction,
        null,
        null,
        null,
        null,
        null,
        true,
        null,
      );
    }
  } catch (e) {
    console.error(e);
  }
}

function* watchFetchDocsbyClasse() {
  yield takeLatest(FETCH_DOCS_CLASSES_ACTION, fetchDocsbyClasse);
}

// Individual exports for testing
export default function* listCoursSaga() {
  // See example in containers/HomePage/saga.js
  yield all([watchFetchClasses(), watchFetchDocsbyClasse()]);
}
