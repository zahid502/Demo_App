import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import 'immutable';
import {persistReducer, persistStore} from 'redux-persist';
import authReducer from './slice/auth/auth-slice';
import registerUserReducer from './slice/auth/register-user-slice';
import netInfoReducer from './slice/common/net-info-slice';
import toastReducer from './slice/common/toast-slice';
import moviesListReducer from './slice/main/movies-list-slice';
import favoritesReducer from './slice/main/favourites-slice';

const rootReducer = combineReducers({
  toast: toastReducer,
  netInfo: netInfoReducer,
  auth: authReducer,
  registerUser: registerUserReducer,
  moviesList: moviesListReducer,
  favorites: favoritesReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['toast', 'netInfo', 'registerUser', 'moviesList', 'favorites'],
};

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
const persistor = persistStore(store);
persistor.flush();
export const storeDispatch = store.dispatch;
export const storeState = store.getState;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default {store, persistor};
