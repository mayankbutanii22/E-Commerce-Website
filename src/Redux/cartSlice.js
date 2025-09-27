import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {}, 
  total: 0,  
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existing = state.items[product.id];

      if (existing) {
        state.items[product.id].qty += 1;
      } else {
        state.items[product.id] = { ...product, qty: 1 };
      }

      state.total = Object.values(state.items).reduce(
        (sum, item) => sum + item.price * item.qty,
        0
      );
    },

    removeFromCart(state, action) {
      delete state.items[action.payload];
      state.total = Object.values(state.items).reduce(
        (sum, item) => sum + item.price * item.qty,
        0
      );
    },

    updateQuantity(state, action) {
      const { id, qty } = action.payload;
      if (state.items[id]) {
        state.items[id].qty = qty;
      }
      state.total = Object.values(state.items).reduce(
        (sum, item) => sum + item.price * item.qty,
        0
      );
    },

    clearCart(state) {
      state.items = {};
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

