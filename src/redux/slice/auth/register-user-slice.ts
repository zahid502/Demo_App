import {RegisterUserPayload} from '@app-types';
import {strings} from '@constants';
import {User} from '@domain-models';
import {UserDtoMapper} from '@mappers';
import {RegisterUserState, RejectState} from '@redux/states';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ErrorResponse, RegisterUserResponse} from '@responses';
import {ApiService} from '@services';
import {goBack} from '../../../../root-navigation';
import {setToastMessage} from '../common/toast-slice';

//---------------------------------------
const userDtoMapper = new UserDtoMapper();
//---------------------------------------

export const registerUser = createAsyncThunk<
  User | undefined,
  RegisterUserPayload,
  RejectState
>(
  'registerUser',
  async (payload: RegisterUserPayload, {rejectWithValue, dispatch}) => {
    const response = await ApiService.getInstance()
      .safeApiCall<RegisterUserPayload, RegisterUserResponse>(
        payload,
        'registerUser',
      )
      .then(response => response)
      .catch((error: ErrorResponse) => error);

    if (response.status !== 200 || response instanceof ErrorResponse) {
      return rejectWithValue((response as ErrorResponse).toJson());
    } else if (response instanceof RegisterUserResponse) {
      dispatch(
        setToastMessage({
          message: 'User signed up successfully.',
          type: 'success',
        }),
      );
      goBack();
      const userInfo = userDtoMapper.mapToDomainModel(response?.data);
      return userInfo;
    }
  },
);

//-------------------------------
const initialState: RegisterUserState = {
  loading: false,
  error: false,
  message: '',
};

//-----------------------------
const registerUserSlice = createSlice({
  name: 'registerUserSlice',
  initialState: initialState,
  reducers: {
    setError: (state, {payload}) => {
      state.error = payload;
    },
    setLoading: (state, {payload}) => {
      state.loading = payload;
    },
    setErrorMessage: (state, {payload}) => {
      state.message = payload;
    },
    clearRegisterUserState: state => {
      Object.assign(state, initialState);
    },
  },
  extraReducers(builder) {
    builder.addCase(registerUser.pending, () => ({
      loading: true,
      error: false,
      message: strings.Loading,
    }));
    builder.addCase(registerUser.rejected, (state, action) => {
      return {
        loading: false,
        error: true,
        message: action.payload?.message ?? strings.Error.UnkownError,
      };
    });
    builder.addCase(registerUser.fulfilled, (state, {payload}) => {
      return {
        loading: false,
        error: false,
        message: strings.Success,
      };
    });
  },
});

const registerUserReducer = registerUserSlice.reducer;
export const {setError, setErrorMessage, setLoading, clearRegisterUserState} =
  registerUserSlice.actions;
export default registerUserReducer;
