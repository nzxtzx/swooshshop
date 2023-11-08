import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../redux/slices/auth.slice";
import { swiperReducer } from "./slices/swiper.slice";
import { homeProductsReducer } from "./slices/products.slice";
import { filtersReducer } from "./slices/products-filters";
import { cartReducer } from "./slices/cart.slice";
import { favouritesReducer } from "./slices/favourites.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    swiper: swiperReducer,
    homeProducts: homeProductsReducer,
    filters: filtersReducer,
    cart: cartReducer,
    favourites: favouritesReducer,
  },
});
