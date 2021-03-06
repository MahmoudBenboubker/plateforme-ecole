/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  TOGGLE_MODAL_LOGIN,
  LOGIN_CREDENTIALS_LOGIN,
  SHOW_LOADER_ACTION,
  ADD_TOAST,
  REMOVE_TOAST,
  UPDATE_CONNECTED_USER,
  USER_STATE,
  FETCH_NIVEAUX,
  STORE_NIVEAUX,
  RESET_NIVEAUX,
  TOGGLE_MODAL_LOGOUT,
  LOGGING_OUT,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadRepos() {
  return {
    type: LOAD_REPOS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function reposLoaded(repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}

export function toggleModalLoginAction(toggle) {
  return {
    type: TOGGLE_MODAL_LOGIN,
    toggle,
  };
}

export function loginCredentialsAction(credentials) {
  return {
    type: LOGIN_CREDENTIALS_LOGIN,
    credentials,
  };
}

export function showLoaderAction(show = true) {
  return {
    type: SHOW_LOADER_ACTION,
    show,
  };
}

export function addToastAction(message, typeToast) {
  return {
    type: ADD_TOAST,
    message,
    typeToast,
  };
}

export function removeToastAction(id) {
  return {
    type: REMOVE_TOAST,
    id,
  };
}

export function updateConnectedUserAction(newUser) {
  return {
    type: UPDATE_CONNECTED_USER,
    newUser,
  };
}
export function updateUserStateAction(userState) {
  return {
    type: USER_STATE,
    userState,
  };
}

export function fetchNiveauxAction() {
  return {
    type: FETCH_NIVEAUX,
  };
}
export function storeNiveauxAction(niveaux) {
  return {
    type: STORE_NIVEAUX,
    niveaux,
  };
}
export function resetNiveauxAction() {
  return {
    type: RESET_NIVEAUX,
  };
}

export function toggleModalLogoutAction(toggle) {
  return {
    type: TOGGLE_MODAL_LOGOUT,
    toggle,
  };
}

export function loggingOutAction() {
  return {
    type: LOGGING_OUT,
  };
}
