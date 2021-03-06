/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const selectShowNiveaux = () =>
  createSelector(
    selectGlobal,
    subState => subState.niveaux,
  );
const selectUserState = createSelector(
  selectGlobal,
  subState => subState.currentUser,
);

const selectToasts = createSelector(
  selectGlobal,
  subState => subState.toasts,
);

const selectIsLoading = createSelector(
  selectGlobal,
  subState => subState.isLoading,
);

const makeSelectToggleModalLogin = createSelector(
  selectGlobal,
  subState => subState.toggleModalLogin,
);

const makeSelectToggleModalLogout = createSelector(
  selectGlobal,
  subState => subState.toggleModalLogout,
);

const makeSelectCurrentUser = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.currentUser,
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectRepos = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.userData.repositories,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
  makeSelectToggleModalLogin,
  selectIsLoading,
  selectToasts,
  selectUserState,
  selectShowNiveaux,
  makeSelectToggleModalLogout,
};
