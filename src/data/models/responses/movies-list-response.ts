import {BaseResponse} from './base-response';
import {UserDto} from '@dto-models';

export class MoviesListResponse extends BaseResponse<Array<any>> {
  constructor(response: MoviesListResponse, status: number) {
    super(status, response.message, response.data);
  }
}
