/*
 *
 * Inscription actions
 *
 */

import { DEFAULT_ACTION, SIGNIN_ACTION } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function signInAction(credentials) {
  return {
    type: SIGNIN_ACTION,
    credentials,
  };
}
