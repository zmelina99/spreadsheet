import { Store, StorageActions } from './provider.interfaces';

export const reducer = (state: Store, action: StorageActions) => {
  switch (action.type) {
    case 'GENERATE_OPERATION':
      return {
        ...state,
        values: {
          ...state.values,
          [action.payload.id]: {
            ...state.values[action.payload.id],
            id: action.payload.id,
            value: action.payload.value,
          },
        },
      };
    case 'CHANGE_BG_COLOR':
      return {
        ...state,
        values: {
          ...state.values,
          [action.payload.id]: {
            ...state.values[action.payload.id],
            id: action.payload.id,
            bgColor: action.payload.value,
          },
        },
      };
    case 'CHANGE_FONT_COLOR':
      return {
        ...state,
        values: {
          ...state.values,
          [action.payload.id]: {
            ...state.values[action.payload.id],
            id: action.payload.id,
            fontColor: action.payload.value,
          },
        },
      };
    case 'SET_SELECTED_CELL':
      return {
        ...state,
        selectedCell: action.payload.value,
      };
    case 'SET_CURRENT_CELL':
      return {
        ...state,
        currentCell: action.payload.value,
      };
    default:
      return state;
  }
};
