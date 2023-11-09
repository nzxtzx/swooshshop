import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: JSON.parse(localStorage.getItem('favourites')) || [],
  reducers: {
    addToFavourites: (state, action) => {
      const existingProduct = state.find(product => product.id === action.payload.id);

      if (!existingProduct) {
        state.push(action.payload);
        localStorage.setItem('favourites', JSON.stringify(state));
      }
    },
    removeFromFavourites: (state, action) => {
      const filteredState = state.filter((product) => product.id !== action.payload.id);
      localStorage.setItem('favourites', JSON.stringify(filteredState));
      return filteredState;
    },
  },
});
export const { addToFavourites, removeFromFavourites } = favouritesSlice.actions;
export const selectFavouritesCount = (state) => state.favourites.length;
export const favouritesReducer = favouritesSlice.reducer;