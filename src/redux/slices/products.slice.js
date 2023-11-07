import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";

export const fetchProductsHomeData = createAsyncThunk("products/fetchProductsHomeData", async ({ page, pageSize }) => {
  const { data } = await axios.get(`/products/paginate?page=${page}&pageSize=${pageSize}`);
  return data;
});

export const fetchDiscountedProductsHomeData = createAsyncThunk("products/fetchDiscountedProductsHomeData", async ({ page, pageSize }) => {
  const { data } = await axios.get(`/products/discounted?page=${page}&pageSize=${pageSize}`);
  return data;
});

export const fetchProduct = createAsyncThunk("products/fetchProduct", async ({ id }) => {
  const { data } = await axios.get(`/products/product/${id}`);
  return data;
});

export const fetchProductReviews = createAsyncThunk("fetchProductReviews", async ({ id, userId, params }) => {
  const { data } = await axios.post(`/products/product/${id}/reviews/review/${userId}`, params);
  return data;
});

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const { data } = await axios.get("/products");
  return data;
});

export const fetchFilteredProducts = createAsyncThunk("products/fetchFiltered", async ({ filterParams }) => {
  const { data } = await axios.get(`/products/filters?`, { params: filterParams });

  return data;
});

export const fetchSearchingProducts = createAsyncThunk("products/fetchSearchingProducts", async ({ productsName, pageNumber, pageSize }) => {
  const params = new URLSearchParams({ ...productsName, pageNumber, pageSize }).toString();
  const { data } = await axios.get(`/products/search?${params}`);

  return data;
});

const initialState = {
  recentProducts: {
    products: [],
    status: "loading",
  },
  discountedProducts: {
    products: [],
    status: "loading",
  },
  singleProduct: {
    product: [],
    status: "loading",
    reviews: [],
  },
  allProducts: {
    products: [],
    status: "loading",
  },
  filteredProducts: {
    products: [],
    status: "loading",
  },
  searchingProducts: {
    products: [],
    status: "loading",
  },
};

const homeProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProductsHomeData.pending]: (state, action) => {
      state.recentProducts.products = [];
      state.recentProducts.status = "loading";
    },
    [fetchProductsHomeData.fulfilled]: (state, action) => {
      state.recentProducts.products = action.payload;
      state.recentProducts.status = "loaded";
    },
    [fetchProductsHomeData.rejected]: (state) => {
      state.recentProducts.products = [];
      state.recentProducts.status = "error";
    },
    [fetchDiscountedProductsHomeData.pending]: (state, action) => {
      state.discountedProducts.products = [];
      state.discountedProducts.status = "loading";
    },
    [fetchDiscountedProductsHomeData.fulfilled]: (state, action) => {
      state.discountedProducts.products = action.payload;
      state.discountedProducts.status = "loaded";
    },
    [fetchDiscountedProductsHomeData.rejected]: (state) => {
      state.discountedProducts.products = [];
      state.discountedProducts.status = "error";
    },
    [fetchProduct.pending]: (state, action) => {
      state.singleProduct.product = [];
      state.singleProduct.reviews = [];
      state.singleProduct.status = "loading";
    },
    [fetchProduct.fulfilled]: (state, action) => {
      state.singleProduct.product = action.payload;
      state.singleProduct.reviews = action.payload.reviews;
      state.singleProduct.status = "loaded";
    },
    [fetchProduct.rejected]: (state) => {
      state.singleProduct.product = [];
      state.singleProduct.reviews = [];
      state.singleProduct.status = "error";
    },
    [fetchProducts.pending]: (state, action) => {
      state.allProducts.products = [];
      state.allProducts.status = "loading";
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.allProducts.products = action.payload;
      state.allProducts.status = "loaded";
    },
    [fetchProducts.rejected]: (state) => {
      state.allProducts.products = [];
      state.allProducts.status = "error";
    },
    [fetchFilteredProducts.pending]: (state) => {
      state.filteredProducts.products = [];
      state.filteredProducts.status = "loading";
    },
    [fetchFilteredProducts.fulfilled]: (state, action) => {
      state.filteredProducts.products = action.payload;
      state.filteredProducts.status = "loaded";
    },
    [fetchFilteredProducts.rejected]: (state) => {
      state.filteredProducts.products = [];
      state.filteredProducts.status = "error";
    },
    [fetchSearchingProducts.pending]: (state) => {
      state.searchingProducts.products = [];
      state.searchingProducts.status = "loading";
    },
    [fetchSearchingProducts.fulfilled]: (state, action) => {
      state.searchingProducts.products = action.payload;
      state.searchingProducts.status = "loaded";
    },
    [fetchSearchingProducts.rejected]: (state) => {
      state.searchingProducts.products = [];
      state.searchingProducts.status = "error";
    },
  },
});

export const homeProductsReducer = homeProductsSlice.reducer;
