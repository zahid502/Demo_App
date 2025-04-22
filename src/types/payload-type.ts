import {
  AuthenticateUserPayload,
  MoviesListPayload,
  RegisterUserPayload,
} from './request-payload';

export type PayloadType =
  | AuthenticateUserPayload
  | RegisterUserPayload
  | MoviesListPayload;
