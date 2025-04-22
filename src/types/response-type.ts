import {
  ErrorResponse,
  AuthenticateUserResponse,
  RegisterUserResponse,
  MoviesListResponse,
} from '@responses';

export type ResponseType =
  | ErrorResponse
  | AuthenticateUserResponse
  | RegisterUserResponse
  | MoviesListResponse;
