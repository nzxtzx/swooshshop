import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";

export const fetchSwiperData = createAsyncThunk("swiper/fetcSwiperData", async () => {
  const { data } = await axios.get("/swiper");
  return data;
});

const initialState = {
    swiper: {
        swiperData: [],
        status: "loading",
    }
};

const swiperSlice = createSlice({
  name: "swiper",
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchSwiperData.pending]: (state, action) => {
        state.swiper.swiperData = []
        state.swiper.status = "loading";
    },
    [fetchSwiperData.fulfilled]: (state, action) => {
        state.swiper = action.payload;
        state.swiper.status = "loaded";
    },
    [fetchSwiperData.rejected]: (state) => {
        state.swiper.swiperData = [];
        state.swiper.status = "error";
    }
  }
});;
 
export const swiperReducer = swiperSlice.reducer;
