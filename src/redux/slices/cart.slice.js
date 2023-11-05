import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem('cart')) || [],
  reducers: {
    addToCart: (state, action) => {
      const { id, color, size } = action.payload;
      const existingItemIndex = state.findIndex((item) => item.id === id && item.color === color && item.size === size);

      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      
      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const { id, color, size } = action.payload;
      const itemIndex = state.findIndex((item) => item.id === id && item.color === color && item.size === size);

      if (itemIndex !== -1) {
        state.splice(itemIndex, 1);
      }
      
      localStorage.setItem('cart', JSON.stringify(state));
    },
    decrementQuantity: (state, action) => {
      const { id, color, size } = action.payload;
      const itemIndex = state.findIndex((item) => item.id === id && item.color === color && item.size === size);

      if (itemIndex !== -1 && state[itemIndex].quantity > 1) {
        state[itemIndex].quantity -= 1;
      }
      
      localStorage.setItem('cart', JSON.stringify(state));
    },
    clearCart: (state) => {
      state = [];
      localStorage.removeItem('cart');
    },
  },
});

export const { addToCart, removeFromCart, decrementQuantity, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;