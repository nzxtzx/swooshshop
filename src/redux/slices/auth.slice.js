import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";

export const fetchAuth = createAsyncThunk("auth/fetchAuth", async (params) => {
  const { data } = await axios.post("/auth/login", params);
  return data;
});

export const fetchRegister = createAsyncThunk("auth/fetchRegister", async (params) => {
  const { data } = await axios.post("/auth/register", params);
  return data;
});

export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async () => {
  const { data } = await axios.get("/auth/me");
  return data;
});

export const fetchEditMe = createAsyncThunk("auth/fetchEditMe", async ({ id, params }) => {
    const {data} = await axios.patch(`/auth/me/edit/${id}`, params);
    return data;
});

export const fetchEditPassword = createAsyncThunk("auth/fetchEditedPassword", async ({id, params}) => {
  const {data} = await axios.patch(`/auth/me/edit/password/${id}`, params);
  return data;
});

export const fetchAddress = createAsyncThunk("auth/fetchAddress", async ({id, params}) => {
  const {data} = await axios.post(`/auth/me/address/${id}`, params);
  return data;
});

export const fetchEditAddress = createAsyncThunk("auth/fetchEditedAddress", async ({id, params}) => {
  const {data} = await axios.patch(`/auth/me/address/edit/${id}`, params);
  return data;
});

export const fetchDeleteAddress = createAsyncThunk("auth/fetchDeleteAddress", async ({id}) => {
  const {data} = await axios.patch(`/auth/me/address/remove/${id}`);
  return data;
});


const initialState = {
  data: null,
  status: "loading",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
      window.localStorage.removeItem("token");
    }
  },
  extraReducers: {
    [fetchAuth.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchAuth.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchAuth.rejected]: (state) => {
      state.status = "error";
      state.data = null;
    },
    [fetchRegister.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchRegister.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchRegister.rejected]: (state) => {
      state.status = "error";
      state.data = null;
    },
    [fetchAuthMe.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchAuthMe.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchEditMe.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchEditPassword.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchAddress.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchAddress.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchEditAddress.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchEditAddress.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchDeleteAddress.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchDeleteAddress.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
  },
});

export const selectIsAuth = (state) => Boolean(state.auth.data);
 
export const authReducer = authSlice.reducer;

export const { logout, setEditingUser } = authSlice.actions;