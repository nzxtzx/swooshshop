import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    size: "",
    color: "",
    sort: "asc",
    gender: "",
    priceMin: "",
    priceMax: "",
    pageNumber: "",
    pageSize: "6",
    discount: false,
    childs: false,
  },

  reducers: {
    setFilter: (state, action) => {
      const { filterType, filterValue } = action.payload;
      return { ...state, [filterType]: filterValue };
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
    setPage: (state, action) => {
      state.pageNumber = action.payload;
    },
    resetFilters: (state) => {
      return {
        size: "",
        color: "",
        sort: "asc",
        gender: "",
        priceMin: "",
        priceMax: "",
        pageNumber: "",
        pageSize: "6",
        discount: false,
        childs: false,
      }
    }
  },
});

export const { setFilter, setPageSize, setPage, resetFilters } = filtersSlice.actions;
export const selectFilters = (state) => state.filters;
export const filtersReducer = filtersSlice.reducer;
