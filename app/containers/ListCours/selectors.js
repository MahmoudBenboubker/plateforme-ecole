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

const makeSelectListCours = () =>
  createSelector(
    selectListCoursDomain,
    substate => substate,
  );

export default makeSelectListCours;
export { selectListCoursDomain };
