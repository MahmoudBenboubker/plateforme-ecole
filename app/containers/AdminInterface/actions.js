/*
 *
 * AdminInterface actions
 *
 */

import {
  DEFAULT_ACTION,
  FETCH_CLASSES,
  STORE_CLASSES,
  DISPLAY_CLASSES,
  TOGGLE_MODAL,
  CREATE_COURS,
  CURRENT_NIVEAU,
} from './constants';

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

export function storeClassesById(classes) {
  return {
    type: STORE_CLASSES,
    classes,
  };
}

export function displayClassesById() {
  return {
    type: DISPLAY_CLASSES,
  };
}

export function toggleModalAction(state) {
  return {
    type: TOGGLE_MODAL,
    state,
  };
}

export function createCoursName(name, currentSousNiveau) {
  return {
    type: CREATE_COURS,
    name,
    currentSousNiveau,
  };
}

export function currentSubNiveauAction(currentSousNiveau, id, currentNiveau) {
  return {
    type: CURRENT_NIVEAU,
    currentSousNiveau,
    id,
    currentNiveau,
  };
}
