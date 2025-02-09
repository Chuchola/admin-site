import { produce } from 'immer';

export class BaseReducer {
  #serviceName = null;

  constructor (store, initialState = null) {
    this.#serviceName = this.constructor.name;
    this.store = store;
    if (store) {
      this.store.injectReducer(this.#serviceName, this.getReducer(initialState));
    } else {
      throw new Error('There is no redux store available.');
    }
  }

  getReducer(initialState = null) {
    try {
      const initialSubState = initialState ? initialState[this.#serviceName] : null;
      return (...params) => {
        const state = params[0] || initialSubState || this.getInitialState();
        const action = params[1];
        const { type, newState } = action;
        return type.startsWith(this.#serviceName) ? newState : state;
      };
    } catch (e) {
      throw e;
    }
  }

  select() {
    try {
      const state = this.store.getState();
      return state[this.#serviceName];
    } catch (e) {
      throw e;
    }
  }

  changeState(newStateFn, trace = 'changeState') {
    if (!this.store) {
      throw new Error('There is no redux store available.');
    }
    try {
      const state = this.select(this.store.getState());
      const newState = produce(state, newStateFn);
      this.store.dispatch({
        type: `${this.#serviceName}::${trace}`,
        newState,
      });
    } catch (e) {
      throw e;
    }
  }
}
