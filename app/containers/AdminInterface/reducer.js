/*
 *
 * AdminInterface reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, STORE_CLASSES } from './constants';

export const initialState = {
  classes: [],
};

/* eslint-disable default-case, no-param-reassign */
const adminInterfaceReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case STORE_CLASSES:
        draft.classes = action.id;
        break;
    }
  });

export default adminInterfaceReducer;
