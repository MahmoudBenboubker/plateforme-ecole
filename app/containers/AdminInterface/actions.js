/*
 *
 * AdminInterface actions
 *
 */

import { DEFAULT_ACTION, FETCH_CLASSES, STORE_CLASSES } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchClassesBySubNiveauAction(id) {
  return {
    type: FETCH_CLASSES,
    id,
  };
}

export function storeClassesById(id) {
  return {
    type: STORE_CLASSES,
    id,
  };
}
