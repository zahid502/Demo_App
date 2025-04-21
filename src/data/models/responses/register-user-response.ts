import {BaseResponse} from './base-response';
import {UserDto} from '@dto-models';

export class RegisterUserResponse extends BaseResponse<UserDto> {
  constructor(response: RegisterUserResponse, status: number) {
    super(status, response.message, response.data);
  }
}
