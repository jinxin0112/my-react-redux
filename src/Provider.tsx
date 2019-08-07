import * as React from 'react';
import { Store } from 'redux';
import reactReduxContext from './Context';

export interface ProviderProps {
  store: Store;
}

const Provider: React.SFC<ProviderProps> = ({ store, children }) => {
  return <reactReduxContext.Provider value={store}>{children}</reactReduxContext.Provider>;
};

export default Provider;
