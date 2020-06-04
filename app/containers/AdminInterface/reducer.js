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
  CURRENT_CLASSE,
  TOGGLE_DELETE_MODAL,
} from './constants';

export const initialState = {
  classes: [],
  modalState: false,
  currentSousNiveau: '',
  currentSousNiveauName: '',
  currentNiveau: '',
  currentClasse: {},
  modalDeleteState: false,
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
      case TOGGLE_DELETE_MODAL:
        draft.modalDeleteState = action.state;
        break;
      case CURRENT_CLASSE:
        draft.currentClasse = action.classe;
        break;
    }
  });

export default adminInterfaceReducer;
