import env from 'react-native-config';

const appConfigs = {
  BASE_URL: env.BASE_URL,
  BASE_URL_AUTH: env.BASE_URL_AUTH,

  PRODUCTION: env.PRODUCTION === 'true',
};

export default appConfigs;
