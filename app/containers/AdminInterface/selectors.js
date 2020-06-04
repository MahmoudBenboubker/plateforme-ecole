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
const selectModalDelete = () =>
  createSelector(
    selectAdminInterfaceDomain,
    substate => substate.modalDeleteState,
  );
const selectCurrentSousNiveau = () =>
  createSelector(
    selectAdminInterfaceDomain,
    substate => substate.currentSousNiveau,
  );
const selectCurrentClasse = () =>
  createSelector(
    selectAdminInterfaceDomain,
    substate => substate.currentClasse,
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
  selectCurrentClasse,
  selectModalDelete,
};
