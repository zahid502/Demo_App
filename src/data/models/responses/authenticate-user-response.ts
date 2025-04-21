import {BaseResponse} from './base-response';
import {UserDto} from '@dto-models';

export class AuthenticateUserResponse extends BaseResponse<UserDto> {
  constructor(response: AuthenticateUserResponse, status: number) {
    super(status, response.message, response.data);
  }
}
