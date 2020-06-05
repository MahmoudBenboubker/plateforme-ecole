import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the listCours state domain
 */

const selectListCoursDomain = state => state.listCours || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ListCours
 */

const selectClasses = () =>
  createSelector(
    selectListCoursDomain,
    substate => substate.classes,
  );

const selectDocuments = () =>
  createSelector(
    selectListCoursDomain,
    substate => substate.documents,
  );

const makeSelectListCours = () =>
  createSelector(
    selectListCoursDomain,
    substate => substate,
  );

export default makeSelectListCours;
export { selectListCoursDomain, selectClasses, selectDocuments };
