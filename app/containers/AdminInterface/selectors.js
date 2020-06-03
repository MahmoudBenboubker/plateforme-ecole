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

const selectClasses = () =>
  createSelector(
    selectAdminInterfaceDomain,
    substate => substate.classes,
  );
const selectModal = () =>
  createSelector(
    selectAdminInterfaceDomain,
    substate => substate.modalState,
  );
const selectCurrentSousNiveau = () =>
  createSelector(
    selectAdminInterfaceDomain,
    substate => substate.currentSousNiveau,
  );

/**
 * Default selector used by AdminInterface
 */

const makeSelectAdminInterface = () =>
  createSelector(
    selectAdminInterfaceDomain,
    substate => substate,
  );

export default makeSelectAdminInterface;
export {
  selectAdminInterfaceDomain,
  selectClasses,
  selectModal,
  selectCurrentSousNiveau,
};
