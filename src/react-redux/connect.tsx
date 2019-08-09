import * as React from 'react';
import { Dispatch, ActionCreatorsMapObject, bindActionCreators } from 'redux';
import ReactReduxContext from './Context';
import isPlainObject from '../utils/isPlainObject';

interface MapStateToProps<S = any> {
  (state: S): { [prop: string]: any };
}

type MapDispatchToProps =
  | {
      (dispatch: Dispatch, ownProps?: any): ActionCreatorsMapObject;
    }
  | ActionCreatorsMapObject;

const connect = <S extends any>(
  mapStateToProps: MapStateToProps<S>,
  mapDispatchToProps: MapDispatchToProps
) => (Element: React.ComponentType<any>) => {
  return (props: any) => {
    const store = React.useContext(ReactReduxContext);
    if (!store) {
      throw new Error('no store');
    }
    const { getState, dispatch, subscribe } = store;
    const [state, setState] = React.useState(getState());
    React.useEffect(() => {
      subscribe(() => {
        setState(getState());
      });
    }, []);
    const connectProps = React.useMemo(() => {
      const mapStateObject = mapStateToProps(state);
      if (isPlainObject(mapDispatchToProps)) {
        const mapDispatchObject = bindActionCreators(
          mapDispatchToProps as ActionCreatorsMapObject,
          dispatch
        );
        return {
          ...props,
          ...mapStateObject,
          ...mapDispatchObject,
          dispatch
        };
      }
      if (typeof mapDispatchToProps === 'function') {
        const mapDispatchObject = mapDispatchToProps(dispatch, props);
        return {
          ...props,
          ...mapStateObject,
          ...mapDispatchObject,
          dispatch
        };
      }
      return {
        ...props,
        ...mapStateObject,
        dispatch
      };
    }, [state, dispatch, props, mapDispatchToProps, mapStateToProps]);
    return <Element {...connectProps} />;
  };
};

export default connect;
