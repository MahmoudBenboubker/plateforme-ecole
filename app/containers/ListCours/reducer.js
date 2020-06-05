/*
 *
 * ListCours reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  STORE_CLASSES,
  STORE_DOCS_ACTION,
  ERASE_ACTION,
} from './constants';

export const initialState = {
  classes: [],
  documents: [],
};

/* eslint-disable default-case, no-param-reassign */
const listCoursReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ERASE_ACTION:
        draft.documents = [];
        break;
      case STORE_DOCS_ACTION:
        draft.documents = action.data;
        break;
      case STORE_CLASSES:
        draft.classes = action.data;
        break;
      case DEFAULT_ACTION:
        break;
    }
  });

export default listCoursReducer;
