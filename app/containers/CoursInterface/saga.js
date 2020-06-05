import { takeLatest, all, call, put } from 'redux-saga/effects';

import { FETCH_DOCUMENTS_ACTION, CREATE_DOCUMENT_ACTION } from './constants';
import { callApi } from '../../services/saga';
import {
  storeDocumentsAction,
  toggleModalAction,
  fetchDocuments,
} from './actions';
import { showLoaderAction, addToastAction } from '../App/actions';
import { requestLogged } from '../../services/request/request';
import { TOAST_SUCCESS, TOAST_ERROR } from '../../constants/constants';

function* fetchDocumentsSaga(action) {
  try {
    yield call(
      callApi,
      `/resources/${action.id}`,
      'GET',
      null,
      storeDocumentsAction,
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

function* watchFetchDocuments() {
  yield takeLatest(FETCH_DOCUMENTS_ACTION, fetchDocumentsSaga);
}

function* createDocumentSaga(action) {
  try {
    const requestUrl = `/resource/${action.idClasse}`;
    yield put(showLoaderAction(true));
    const newDocument = {
      title: action.payload.title,
      matiere: action.payload.matiere,
      content: action.payload.content,
    };
    const response = yield call(
      requestLogged,
      requestUrl,
      {
        body: JSON.stringify(newDocument),
      },
      'POST',
    );
    if (response) {
      yield put(addToastAction('Création réussie', TOAST_SUCCESS));
      yield put(toggleModalAction(false));
      yield put(fetchDocuments(action.idClasse));
    } else {
      yield put(addToastAction('Création échouée', TOAST_ERROR));
    }
  } catch (e) {
    yield put(addToastAction('Création échouée', TOAST_ERROR));
    yield put(showLoaderAction(false));

    console.error(e);
  }
}

function* watchCreateDocument() {
  yield takeLatest(CREATE_DOCUMENT_ACTION, createDocumentSaga);
}
export default function* coursInterfaceSaga() {
  yield all([watchFetchDocuments(), watchCreateDocument()]);
}
