//----------- Api Payloads ------------

export type AuthenticateUserPayload = {
  email: string;
  password: string;
};

export type RegisterUserPayload = {
  email: string;
  password: string;
};

export type MoviesListPayload = {};
