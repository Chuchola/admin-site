import { legacy_createStore as createStore, combineReducers } from 'redux';

const configureStore = (store: any, initialReducers: any) => {
  const createReducer = (asyncReducers: any) => {
    return combineReducers({
      ...initialReducers,
      ...asyncReducers
    })
  };

  store.asyncReducers = {}
  store.injectReducer = (key: any, asyncReducer: any) => {
    store.asyncReducers[key] = asyncReducer
    store.replaceReducer(createReducer(store.asyncReducers))
  }
  return store
};

const store = createStore(
  combineReducers({}),
  {},
  (window.window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && (window.window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

export default configureStore(store, {});
