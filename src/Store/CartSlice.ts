import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../utils/Interface";

const initialState: { products: ProductType[] } = {
  products: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter((x) => x.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
