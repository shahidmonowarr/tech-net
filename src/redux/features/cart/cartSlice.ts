import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../types/globalTypes";

interface ICart {
  products: IProduct[];
}

const initialState: ICart = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existing = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (existing) {
        existing.quantity! += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
