import { BaseReducer } from '../BaseReducer';

import { PendingStatus } from '../App/enums/PendingStatus';

import { AuthServiceState as State } from './interfaces/AuthServiceState';
import { SignUpFormValues } from './interfaces/SignUpFormValues';

export class AuthService extends BaseReducer {
  getInitialState(): State {
    return {
      signUpRS: {
        error: null,
        status: PendingStatus.None,
      },
    };
  }

  async signUp(_values: SignUpFormValues): Promise<void> {
    this.changeState((state: State) => {
      state.signUpRS.error = null;
      state.signUpRS.status = PendingStatus.Pending;
    }, 'signUpRequest');
  }
}
