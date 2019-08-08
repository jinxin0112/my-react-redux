import * as React from 'react';
import { Store } from 'redux';
import ReactReduxContext from './Context';

export interface ProviderProps {
  store: Store;
}

const Provider: React.SFC<ProviderProps> = ({ store, children }) => {
  return <ReactReduxContext.Provider value={store}>{children}</ReactReduxContext.Provider>;
};

export default Provider;
