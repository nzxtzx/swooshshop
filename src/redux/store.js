import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../redux/slices/auth.slice";
import { swiperReducer } from "./slices/swiper.slice";
import { homeProductsReducer } from "./slices/products.slice";
import { filtersReducer } from "./slices/products-filters";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    swiper: swiperReducer,
    homeProducts: homeProductsReducer,
    filters: filtersReducer,
  },
});
