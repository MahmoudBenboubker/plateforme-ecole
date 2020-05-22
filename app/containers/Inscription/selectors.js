import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the inscription state domain
 */

const selectInscriptionDomain = state => state.inscription || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Inscription
 */

const makeSelectInscription = () =>
  createSelector(
    selectInscriptionDomain,
    substate => substate,
  );

export default makeSelectInscription;
export { selectInscriptionDomain };
