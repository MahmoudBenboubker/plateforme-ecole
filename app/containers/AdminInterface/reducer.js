/*
 *
 * AdminInterface reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  STORE_CLASSES,
  TOGGLE_MODAL,
  CURRENT_NIVEAU,
} from './constants';

export const initialState = {
  classes: [],
  modalState: false,
  currentSousNiveau: '',
  currentSousNiveauName: '',
  currentNiveau: '',
};

/* eslint-disable default-case, no-param-reassign */
const adminInterfaceReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case STORE_CLASSES:
        draft.classes = action.classes;
        break;
      case CURRENT_NIVEAU:
        draft.currentSousNiveau = action.id;
        draft.currentSousNiveauName = action.currentSousNiveau;
        draft.currentNiveau = action.currentNiveau;
        break;
      case TOGGLE_MODAL:
        draft.modalState = action.state;
        break;
    }
  });

export default adminInterfaceReducer;
