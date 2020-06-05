/*
 *
 * CoursInterface actions
 *
 */

import {
  DEFAULT_ACTION,
  TOGGLE_MODAL_ACTION,
  FETCH_DOCUMENTS_ACTION,
  STORE_DOCUMENTS_ACTION,
  CREATE_DOCUMENT_ACTION,
  TOGGLE_MODAL_ADD_ACTION,
  UPLOAD_FILE_ACTION,
  TOGGLE_MODAL_DELETE_ACTION,
  DELETE_DOCUMENT_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function toggleModalAction(state) {
  return {
    type: TOGGLE_MODAL_ACTION,
    state,
  };
}

export function toggleModalAddAction(state, currentDoc) {
  return {
    type: TOGGLE_MODAL_ADD_ACTION,
    state,
    currentDoc,
  };
}

export function toggleModalDeleteAction(state, currentDoc) {
  return {
    type: TOGGLE_MODAL_DELETE_ACTION,
    state,
    currentDoc,
  };
}
export function fetchDocuments(id) {
  return {
    type: FETCH_DOCUMENTS_ACTION,
    id,
  };
}

export function uploadFileAction(data, currentDoc) {
  return {
    type: UPLOAD_FILE_ACTION,
    data,
    currentDoc,
  };
}
export function storeDocumentsAction(data) {
  return {
    type: STORE_DOCUMENTS_ACTION,
    data,
  };
}
export function createDocumentAction(payload, idClasse) {
  return {
    type: CREATE_DOCUMENT_ACTION,
    payload,
    idClasse,
  };
}

export function deleteDocumentAction(currentDoc) {
  return {
    type: DELETE_DOCUMENT_ACTION,
    currentDoc,
  };
}
