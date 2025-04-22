import appConfigs from '@app-configs';

//auth
export const authenticateUser = 'login';
export const registerUser = 'register';

//main
export const moviesList = 'movies';

//global
export const BASE_URL_AUTH = appConfigs.BASE_URL_AUTH;
export const BASE_URL = appConfigs.BASE_URL;
export const AUTH_API_URL = `${BASE_URL_AUTH}/api/`;
export const API_URL = `${BASE_URL}/api/v1/`;
