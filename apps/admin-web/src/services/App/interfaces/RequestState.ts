import { PendingStatus } from '../enums/PendingStatus';

export interface RequestState<D = any> {
  status: PendingStatus;
  error: string | null;
  data?: D;
}
