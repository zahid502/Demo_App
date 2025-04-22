import {FavoritesState} from '@redux/states';
import {createSlice} from '@reduxjs/toolkit';

const initialState: FavoritesState = {
  data: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, {payload}) => {
      const exists = state.data.find(m => m.id === payload.id);
      if (!exists) {
        state.data.push(payload);
      }
    },
    removeFavorite: (state, {payload}) => {
      state.data = state.data.filter(m => m.id !== payload);
    },
    clearFavoritesState: state => {
      state.data = [];
    },
  },
});

const favoritesReducer = favoritesSlice.reducer;
export const {clearFavoritesState, addFavorite, removeFavorite} =
  favoritesSlice.actions;
export default favoritesReducer;
