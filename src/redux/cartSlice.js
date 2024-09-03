import { createSlice } from "@reduxjs/toolkit";
import { findIndex } from "../ultis/ultis";
import { toast } from "react-toastify";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) ?? [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const index = findIndex(state.cart, action.payload);
      if (index === -1) {
        state.cart.push(action.payload);
      } else {
        state.cart[index].amount += action.payload.amount;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload._id);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    increaseAmount: (state, action) => {
      const index = findIndex(state.cart, action.payload);
      state.cart[index].amount += 1;
      state.cart[index].quantity -= 1;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decreaseAmount: (state, action) => {
      const index = findIndex(state.cart, action.payload);
      state.cart[index].amount -= 1;
      state.cart[index].quantity += 1;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    setCart: (state, action) => {
      state.cart = action.payload;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { addCart, removeCart, increaseAmount, decreaseAmount, setCart } =
  cartSlice.actions;
export default cartSlice.reducer;
