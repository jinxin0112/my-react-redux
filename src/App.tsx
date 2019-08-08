import React from 'react';
import './App.css';
import Counter from './Counter';
import { createStore, Reducer } from 'redux';
import { Provider } from './react-redux';

export const ADD = 'ADD';
export const MINS = 'MINS';
const initState = {
  count: 0
};

const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, count: state.count + action.count };
    case MINS:
      return { ...state, count: state.count - action.count };
  }
  return state;
};

const store = createStore(reducer, initState);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Counter />
        </header>
      </div>
    </Provider>
  );
};

export default App;
