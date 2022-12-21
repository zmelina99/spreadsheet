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
  [key: string]: Record<string, number>;
}
export interface IValues {
  values: IValuesDictionary;
}
export type Store = IValues;

export enum Types {
  generateOperation = 'GENERATE_OPERATION',
}

export interface Action {
  type: string;
  payload?: StoragePayload;
}

export type StoragePayload = {
  [Types.generateOperation]: {
    value: number;
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
