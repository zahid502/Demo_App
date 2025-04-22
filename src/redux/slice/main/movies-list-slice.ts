import {MoviesListPayload} from '@app-types';
// import {MoviesListDtoMapper} from '@mappers';
import {MoviesListState, RejectState} from '@redux/states';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ErrorResponse, MoviesListResponse} from '@responses';
import {ApiService} from '@services';
import {setToastMessage} from '../common/toast-slice';

//-------------------------------------------------------
// const moviesListDtoMapper = new MoviesListDtoMapper();
//-------------------------------------------------------

export const moviesList = createAsyncThunk<any, MoviesListPayload, RejectState>(
  'moviesList',
  async (payload: MoviesListPayload, {rejectWithValue, dispatch}) => {
    const response = await ApiService.getInstance()
      .safeApiCall<MoviesListPayload, MoviesListResponse>(payload, 'moviesList')
      .then(response => response)
      .catch((error: ErrorResponse) => error);

    if (response instanceof ErrorResponse) {
      dispatch(setToastMessage({message: response.message, type: 'error'}));
      return rejectWithValue((response as ErrorResponse).toJson());
    } else if (response instanceof MoviesListResponse) {
      // const data = moviesListDtoMapper.mapToDomainList(response?.data);
      // dispatch(setCurrentUser(data));
      return response?.data;
    }
    return null;
  },
);

//-------------------------------
const initialState: MoviesListState = {
  loading: false,
  data: [],
};

//-----------------------------
const moviesListSlice = createSlice({
  name: 'moviesList',
  initialState: initialState,
  reducers: {
    setLoading: (state, {payload}) => {
      state.loading = payload;
    },

    clearMoviesListState: state => {
      Object.assign(state, initialState);
    },
  },
  extraReducers(builder) {
    builder.addCase(moviesList.pending, state => ({
      ...state,
      loading: true,
    }));
    builder.addCase(moviesList.rejected, state => {
      return {
        ...state,
        loading: false,
      };
    });
    builder.addCase(moviesList.fulfilled, (state, {payload}) => {
      return {
        loading: false,
        data: payload,
      };
    });
  },
});

const moviesListReducer = moviesListSlice.reducer;
export const {setLoading, clearMoviesListState} = moviesListSlice.actions;
export default moviesListReducer;
