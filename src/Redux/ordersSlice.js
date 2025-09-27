import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    placeOrder: {
      reducer(state, action) {
       
        state.orders.push(action.payload);
      },
      prepare({ items, total, address }) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            items,
            total,
            address,
          },
        };
      },
    },
  },
});

export const { placeOrder } = ordersSlice.actions;
export default ordersSlice.reducer;

