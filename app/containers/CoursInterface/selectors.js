import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the coursInterface state domain
 */

const selectCoursInterfaceDomain = state =>
  state.coursInterface || initialState;

/**
 * Other specific selectors
 */

const selectToggleModal = () =>
  createSelector(
    selectCoursInterfaceDomain,
    substate => substate.toggleModal,
  );
const selectToggleModalAdd = () =>
  createSelector(
    selectCoursInterfaceDomain,
    substate => substate.toggleModalAdd,
  );

const selectCurrentDoc = () =>
  createSelector(
    selectCoursInterfaceDomain,
    substate => substate.currentDoc,
  );

const selectDocuments = () =>
  createSelector(
    selectCoursInterfaceDomain,
    substate => substate.documents,
  );

/**
 * Default selector used by CoursInterface
 */

const makeSelectCoursInterface = () =>
  createSelector(
    selectCoursInterfaceDomain,
    substate => substate,
  );

export default makeSelectCoursInterface;
export {
  selectCoursInterfaceDomain,
  selectToggleModal,
  selectDocuments,
  selectToggleModalAdd,
  selectCurrentDoc,
};
