import { Dispatch } from 'react';

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export interface IValuesDictionary {
  [key: string]: Record<string, string>;
}
export interface IValues {
  values: IValuesDictionary;
  selectedCell: string;
  currentCell: string;
}
export type Store = IValues;

export enum Types {
  generateOperation = 'GENERATE_OPERATION',
  setSelectedCell = 'SET_SELECTED_CELL',
  setCurrentCell = 'SET_CURRENT_CELL',
  changeBgColor = 'CHANGE_BG_COLOR',
  changeFontColor = 'CHANGE_FONT_COLOR',
}

export interface Action {
  type: string;
  payload?: StoragePayload;
}

export type StoragePayload = {
  [Types.generateOperation]: {
    value: string;
    id: string;
  };
  [Types.setSelectedCell]: {
    value: string;
  };
  [Types.setCurrentCell]: {
    value: string;
  };
  [Types.changeBgColor]: {
    value: string;
    id: string;
  };
  [Types.changeFontColor]: {
    value: string;
    id: string;
  };
};

export interface ContextValues {
  store: Store;
  setStore: Dispatch<StorageActions>;
}

export interface Props {
  children: React.ReactNode;
}

export type StorageActions =
  ActionMap<StoragePayload>[keyof ActionMap<StoragePayload>];
