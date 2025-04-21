import {
  ErrorResponse,
  AuthenticateUserResponse,
  RegisterUserResponse,
} from '@responses';

export type ResponseType =
  | ErrorResponse
  | AuthenticateUserResponse
  | RegisterUserResponse;
