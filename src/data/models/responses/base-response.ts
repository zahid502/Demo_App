import {RequestStatus} from '@app-types';

export type TBaseResponse<T> = {
  status: RequestStatus;
  message: string;
  data: T;
};

export class BaseResponse<T> {
  public status: RequestStatus;
  public message: string;
  public data: T;

  constructor(status: RequestStatus, message: string, data: T) {
    this.status = status;
    this.message = message;
    this.data = data;
  }

  public toJson = (): TBaseResponse<T> => ({
    status: this.status,
    data: this.data,
    message: this.message,
  });
}
