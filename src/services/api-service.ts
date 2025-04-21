import {
  AuthenticateUserPayload,
  RegisterUserPayload,
  RequestStatus,
  ResponseType,
} from '@app-types';
import {PayloadType} from '@app-types/payload-type';
import {endpoints, strings} from '@constants';
import {
  AuthenticateUserResponse,
  ErrorResponse,
  RegisterUserResponse,
} from '@responses';
import {HelperService, PrefManager} from '@services';
import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import qs from 'qs';
import Logger from './log-service';

//-------------------------------

interface AxiosError<T = any> extends Error {
  config: AxiosRequestConfig;
  code?: string;
  request?: any;
  response?: AxiosResponse<T>;
  isAxiosError: boolean;
  error_description?: string;
  toJSON: () => object;
}

//-------------------------------

abstract class HttpClient {
  protected readonly axiosInstance: AxiosInstance;

  protected constructor(baseUrl: string) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      responseType: 'json',
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    });

    this._initializeResponseInterceptor =
      this._initializeResponseInterceptor.bind(this);
    this._initializeResponseInterceptor();
  }
  private _initializeResponseInterceptor = () => {
    this.axiosInstance.interceptors.request.use(
      async request => {
        const accessToken = await PrefManager.getString('accessToken');
        const headerToken = `bearer ${accessToken}`;
        request.headers['Authorization'] = headerToken ?? '';
        return request;
      },

      async error => Promise.reject(error),
    );

    this.axiosInstance.interceptors.response.use(
      response => response,
      async apiError => {
        const originalConfig = apiError.config;
        if (apiError.response) {
          // Access Token was expired
          if (apiError.response.status === 401 && !originalConfig._retry) {
            // logout
            HelperService.getInstance().clearAllStates();
          }
        }
        return Promise.reject(apiError);
      },
    );
  };
  public get initializeResponseInterceptor() {
    return this._initializeResponseInterceptor;
  }
  public set initializeResponseInterceptor(value) {
    this._initializeResponseInterceptor = value;
  }
}

//-------------------------------------------

type ApiTypes = 'authenticateUser' | 'registerUser';

//-------------------------------------------

export class ApiService extends HttpClient {
  //-----------------------------------------

  private static _instance = new ApiService();
  private constructor() {
    Logger.log('API_URL: ', endpoints.API_URL);
    super(endpoints.API_URL);
  }
  public static getInstance = () => {
    if (!ApiService._instance) {
      ApiService._instance = new ApiService();
    }

    return ApiService._instance;
  };

  //---------------------
  private handleError = (
    error: AxiosError,
    apiType: ApiTypes,
  ): ErrorResponse => {
    if (error.response) {
      // Request made and server responded
      Logger.log(apiType, error.response.data);
      Logger.log(apiType, error.response.status);
      Logger.log(apiType, error.response.headers);
      return new ErrorResponse(
        error.response.status as RequestStatus,
        error.response.data?.error || 'Unknown server error',
        false,
      );
    } else if (error.request) {
      // The request was made but no response was received
      Logger.log(apiType, error.request);
      return new ErrorResponse(
        RequestStatus.NO_RESPONSE,
        'No response received from server',
        true,
      );
    } else if (error.error_description) {
      // The request was made but error_description exists
      Logger.log(apiType, error.error_description);
      return new ErrorResponse(
        RequestStatus.UNEXPECTED_ERROR,
        error.error_description,
        false,
      );
    } else {
      Logger.log(apiType, error.message);
      return new ErrorResponse(
        RequestStatus.NETWORK_ERROR,
        strings.Error.NetworkError || 'Network error occurred',
        true,
      );
    }
  };

  //-------------------------------------------------------------------------
  public safeApiCall = async <P extends PayloadType, R extends ResponseType>(
    payload: P,
    apiType: ApiTypes,
  ): Promise<R> => {
    switch (apiType) {
      case 'authenticateUser': {
        const response = await this.authenticateUser<AuthenticateUserResponse>(
          payload as AuthenticateUserPayload,
        )
          .then(
            response =>
              new AuthenticateUserResponse(response, response?.status),
          )
          .catch((error: AxiosError) => this.handleError(error, apiType));

        if (response instanceof ErrorResponse) throw response;
        else if (
          response instanceof AuthenticateUserResponse &&
          response.status !== 200
        ) {
          throw new ErrorResponse(response.status, response.message, false);
        }

        return response as R;
      }

      case 'registerUser': {
        const response = await this.registerUser<RegisterUserResponse>(
          payload as RegisterUserPayload,
        )
          .then(
            response => new RegisterUserResponse(response, response?.status),
          )
          .catch((error: AxiosError) => this.handleError(error, apiType));

        if (response instanceof ErrorResponse) throw response;
        else if (
          response instanceof RegisterUserResponse &&
          response.status !== 200
        ) {
          throw new ErrorResponse(response.status, response.message, false);
        }

        return response as R;
      }
    }
  };

  //--------------------------------------------------------------------
  private authenticateUser = async <R>(payload: AuthenticateUserPayload) =>
    this.axiosInstance.post<R>(
      endpoints.authenticateUser,
      qs.stringify({
        email: payload.email,
        password: payload.password,
      }),
    );

  private registerUser = async <R>(payload: RegisterUserPayload) =>
    this.axiosInstance.post<R>(
      endpoints.registerUser,
      qs.stringify({
        email: payload.email,
        password: payload.password,
      }),
    );
}
