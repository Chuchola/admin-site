import { BaseReducer } from '../../services/BaseReducer';

export interface State {
  count: number;
}

export class HomePageService extends BaseReducer {
  getInitialState(): State {
    return {
      count: 0,
    };
  }

  $count(): number {
    return this.select().count;
  }

  increment(): void {
    this.changeState((state: State) => {
      state.count = state.count + 1;
    }, 'increment');
  }

  decrement(): void {
    this.changeState((state: State) => {
      state.count = state.count - 1;
    }, 'decrement');
  }
}
