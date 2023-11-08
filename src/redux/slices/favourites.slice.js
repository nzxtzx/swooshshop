import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: JSON.parse(localStorage.getItem('cart')) || [],
  reducers: {
    addToFavourites: (state, action) => {
      const { id, color, size } = action.payload;
      
      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeFromFavourites: (state, action) => {
      const { id, color, size } = action.payload;
      
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const { addFavourites, removeFromFavourites } = favouritesSlice.actions;
export const favouritesReducer = favouritesSlice.reducer;