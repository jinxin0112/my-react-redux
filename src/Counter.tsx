import React from 'react';
import { ActionCreatorsMapObject } from 'redux';
import { connect } from './react-redux';
import { ADD, MINS } from './App';

interface CounterProps {
  count: number;
  add(count?: number): ActionCreatorsMapObject<any>;
  mins(count?: number): ActionCreatorsMapObject<any>;
}

const Counter: React.FC<CounterProps> = props => {
  return (
    <>
      <button onClick={() => props.add()}>+</button>
      <div>{props.count}</div>
      <button onClick={() => props.mins(2)}>-</button>
    </>
  );
};

const mapStateToProps = <S extends any>(state: S): S => state;
const mapDispatchToProps: ActionCreatorsMapObject<any> = {
  add(count: number = 1) {
    return { type: ADD, count };
  },
  mins(count: number = 1) {
    return { type: MINS, count };
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
