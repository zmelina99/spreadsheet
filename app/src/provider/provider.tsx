import React, { createContext, useReducer } from 'react';
import { reducer } from './provider.reducer';

import {
  Store,
  ContextValues,
  Props,
  StorageActions,
} from './provider.interfaces';

type Reducer<S, A> = (state: S, action: A) => S;

const storeInit: Store = {};

export const SheetsContext = createContext<ContextValues>({
  store: storeInit,
  setStore: () => {},
});

const StoreProvider: React.FC<Props> = ({ children }) => {
  const [store, dispatch] = useReducer<Reducer<Store, StorageActions>>(
    reducer as any,
    storeInit
  );
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <SheetsContext.Provider value={{ store, setStore: dispatch }}>
      {children}
    </SheetsContext.Provider>
  );
};

export default StoreProvider;

export {};
