import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../constance/API";
import axios from "axios";

const initialState = {
  products: [],
  totalPage: 0,
  isLoading: false,
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.totalPage = action.payload.totalPage;
        state.isLoading = false;
      });
  },
});

export const fetchProducts = createAsyncThunk(
  "productSlice/fetchProducts",
  async (page = 1) => {
    try {
      const res = await axios.get(api, {
        params: {
          page,
          limit: 20,
        },
      });
      const data = {
        products: res.data.data.listProduct,
        totalPage: res.data.data.totalPage,
      };
      return data;
    } catch {}
  }
);

export default productSlice.reducer;
