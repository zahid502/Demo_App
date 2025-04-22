import {AuthenticateUserPayload} from '@app-types';
import {strings} from '@constants';
import {UserDtoMapper} from '@mappers';
import {AuthState, RejectState} from '@redux/states';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AuthenticateUserResponse, ErrorResponse} from '@responses';
import {AuthApiService, PrefManager} from '@services';

//---------------------------------------
const userDtoMapper = new UserDtoMapper();
//---------------------------------------

export const authenticateUser = createAsyncThunk<
  any,
  AuthenticateUserPayload,
  RejectState
>(
  'authenticateUser',
  async (payload: AuthenticateUserPayload, {rejectWithValue, dispatch}) => {
    const response = await AuthApiService.getInstance()
      .safeApiCall<AuthenticateUserPayload, AuthenticateUserResponse>(
        payload,
        'authenticateUser',
      )
      .then(response => response)
      .catch((error: ErrorResponse) => error);

    if (response.status !== 200 || response instanceof ErrorResponse) {
      return rejectWithValue((response as ErrorResponse).toJson());
    } else if (response instanceof AuthenticateUserResponse) {
      PrefManager.storeString('accessToken', response?.data?.token);
      const userInfo = userDtoMapper.mapToDomainModel(response?.data);
      return userInfo;
    }
  },
);

//-------------------------------
const initialState: AuthState = {
  loading: false,
  error: false,
  message: '',
  currentUser: undefined,
};

//-----------------------------
const authSlice = createSlice({
  name: 'authSlice',
  initialState: initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },

    setError: (state, {payload}) => {
      state.error = payload;
    },
    setLoading: (state, {payload}) => {
      state.loading = payload;
    },
    setErrorMessage: (state, {payload}) => {
      state.message = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(authenticateUser.pending, () => ({
      loading: true,
      error: false,
      message: strings.Loading,
    }));
    builder.addCase(authenticateUser.rejected, (state, action) => {
      return {
        loading: false,
        error: true,
        message: action.payload?.message ?? strings.Error.UnkownError,
      };
    });
    builder.addCase(authenticateUser.fulfilled, (state, {payload}) => {
      return {
        loading: false,
        error: false,
        message: strings.Success,
        currentUser: payload,
      };
    });
  },
});

const authReducer = authSlice.reducer;
export const {setCurrentUser, setError, setErrorMessage, setLoading} =
  authSlice.actions;
export default authReducer;
