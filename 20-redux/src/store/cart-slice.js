import { createSlice } from "@reduxjs/toolkit";
const INITIAL_CART_STATE = { items: [], showCart: true };

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_CART_STATE,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
    },
    add(state, action) {
      const existingItem = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItem >= 0) {
        state.items[existingItem].quantity++;
        state.items[existingItem].totalPrice =
          state.items[existingItem].quantity * state.items[existingItem].price;
      } else {
        const product = {
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        };
        state.items.push(product);
      }
    },
    remove(state, action) {
      const product = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.items[product].quantity > 1) {
        state.items[product].quantity--;
        state.items[product].totalPrice -= state.items[product].price;
      } else {
        // const removeProduct = state.items[product];
        state.items[product] = state.items[state.items.length - 1];
        state.items.pop();
      }
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
