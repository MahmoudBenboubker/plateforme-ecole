/*
 *
 * CoursInterface reducer
 *
 */
import produce from 'immer';
import { TOGGLE_MODAL_ACTION, STORE_DOCUMENTS_ACTION } from './constants';

export const initialState = {
  toggleModal: false,
  documents: [],
};

/* eslint-disable default-case, no-param-reassign */
const coursInterfaceReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case TOGGLE_MODAL_ACTION:
        draft.toggleModal = action.state;
        break;
      case STORE_DOCUMENTS_ACTION:
        draft.documents = action.data;
        break;
    }
  });

export default coursInterfaceReducer;
