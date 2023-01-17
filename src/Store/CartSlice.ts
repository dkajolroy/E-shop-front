import { createSlice } from "@reduxjs/toolkit";
import {
  CartProductType,
  AddCartPayload,
  UniqCartItemPayload,
} from "../utils/Interface";

const storedCartItem = localStorage.getItem("cart");
const parseStoreCart: CartProductType[] = storedCartItem
  ? JSON.parse(storedCartItem || "")
  : null;

const initialState: {
  products: CartProductType[];
} = {
  products: parseStoreCart || [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: AddCartPayload) => {
      const findItem = state.products.find((x) => x.id === action.payload.id);
      if (!findItem) {
        state.products.push({ ...action.payload, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(state.products));
      }
    },
    removeFromCart: (state, action: UniqCartItemPayload) => {
      state.products = state.products.filter((x) => x.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    increment: (state, action: UniqCartItemPayload) => {
      state.products = state.products.map((x) => {
        if (x.id === action.payload) {
          if (x.quantity !== 10) {
            x.quantity += 1;
          }
        }
        return x;
      });
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    decrement: (state, action: UniqCartItemPayload) => {
      state.products = state.products.map((x) => {
        if (x.id === action.payload) {
          if (x.quantity !== 1) {
            x.quantity -= 1;
          }
        }
        return x;
      });
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
  },
});

export const { addToCart, removeFromCart, increment, decrement } =
  cartSlice.actions;
export default cartSlice.reducer;
