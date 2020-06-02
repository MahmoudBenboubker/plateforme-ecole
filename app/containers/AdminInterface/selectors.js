import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the adminInterface state domain
 */

const selectAdminInterfaceDomain = state =>
  state.adminInterface || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AdminInterface
 */

const makeSelectAdminInterface = () =>
  createSelector(
    selectAdminInterfaceDomain,
    substate => substate,
  );

export default makeSelectAdminInterface;
export { selectAdminInterfaceDomain };
