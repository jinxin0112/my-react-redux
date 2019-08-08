import * as react from 'react';
import { Store } from 'redux';

const ReactReduxContext = react.createContext<Store | null>(null);

export default ReactReduxContext;
