/*
 *
 * ListCours actions
 *
 */

import {
  DEFAULT_ACTION,
  FETCH_CLASSES,
  STORE_CLASSES,
  FETCH_DOCS_CLASSES_ACTION,
  STORE_DOCS_ACTION,
  ERASE_ACTION,
} from './constants';

export function fetchClassesBySubNiveauAction(id) {
  return {
    type: FETCH_CLASSES,
    id,
  };
}

export function storeClassesBySubNiveauAction(data) {
  return {
    type: STORE_CLASSES,
    data,
  };
}

export function fetchDocsByClasseAction(query) {
  return {
    type: FETCH_DOCS_CLASSES_ACTION,
    query,
  };
}

export function eraseDocsAction(query) {
  return {
    type: ERASE_ACTION,
    query,
  };
}

export function storeDocsAction(data) {
  return {
    type: STORE_DOCS_ACTION,
    data,
  };
}

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
