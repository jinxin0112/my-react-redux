import * as react from 'react';
import { Store } from 'redux';

const reactReduxContext = react.createContext<Store | null>(null);

export default reactReduxContext;
