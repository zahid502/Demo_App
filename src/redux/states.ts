import {Movie, User} from '@app-types';

export type BaseState<T> = {
  message: string;
  error: boolean;
  loading: boolean;
  data?: T;
};

export type RejectState = {
  rejectValue: {
    status: number;
    message: string;
    networkError: boolean;
    msg?: string;
  };
};

export type NetInfoState = {
  isConnected: boolean;
};

export type ToastState = {
  message?: string;
  type?: string;
};

export type AuthState = BaseState<User> & {
  currentUser?: User | undefined;
};

export type RegisterUserState = BaseState<any> & {};
export type MoviesListState = {
  loading: boolean;
  data: Array<any>;
};

export type FavoritesState = {
  data: Array<Movie>;
};
