/* eslint-disable no-case-declarations */
/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  TOGGLE_MODAL_LOGIN,
  SHOW_LOADER_ACTION,
  ADD_TOAST,
  REMOVE_TOAST,
  UPDATE_CONNECTED_USER,
  USER_STATE,
  STORE_NIVEAUX,
  RESET_NIVEAUX,
  TOGGLE_MODAL_LOGOUT,
} from './constants';
import AccessTokenStorage from '../../services/storage/AccessTokenStorage';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: !!AccessTokenStorage.getAccessToken(),
  userData: {
    repositories: false,
  },
  toggleModalLogin: false,
  toggleModalLogout: false,
  connectedUser: null,
  isLoading: false,
  toasts: [],
  niveaux: [],
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        draft.userData.repositories = false;
        break;

      case LOAD_REPOS_SUCCESS:
        draft.userData.repositories = action.repos;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case UPDATE_CONNECTED_USER:
        draft.connectedUser = { ...state.connectedUser, ...action.newUser };
        break;

      case REMOVE_TOAST:
        draft.toasts.splice(
          state.toasts.findIndex(toast => toast.id === action.id),
          1,
        );
        break;

      case LOAD_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case TOGGLE_MODAL_LOGIN:
        draft.toggleModalLogin = action.toggle;
        break;

      case TOGGLE_MODAL_LOGOUT:
        draft.toggleModalLogout = action.toggle;
        break;

      case SHOW_LOADER_ACTION:
        draft.isLoading = action.show;
        break;

      case ADD_TOAST:
        const toastIndex = state.toasts.findIndex(
          toast => toast.message === action.message,
        );
        // Add toast only if not in the stack
        if (toastIndex === -1)
          draft.toasts.push({
            message: action.message,
            typeToast: action.typeToast,
            id: Math.random(),
          });
        break;

      case USER_STATE:
        draft.currentUser = action.userState;
        break;

      case STORE_NIVEAUX:
        draft.niveaux = action.niveaux;
        break;

      case RESET_NIVEAUX:
        draft.niveaux = [];
        break;
    }
  });

export default appReducer;
