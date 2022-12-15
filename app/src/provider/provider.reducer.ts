/* eslint-disable no-case-declarations */
import { Store, StorageActions } from './provider.interfaces';

export const reducer = (state: Store, action: StorageActions) => {
  switch (action.type) {
    case 'GENERATE_OPERATION':
      return {
        ...state,
        values: {
            ...state.values,
          [action.payload.id]: {
            id: action.payload.id,
            value: action.payload.value,
          },
        },
      };
    default:
      return state;
  }
};
