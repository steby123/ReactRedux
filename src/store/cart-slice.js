import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  changed: false
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    replaceCart(state, action) {
        state.totalQuantity = action.payload.totalQuantity;
        state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      
      state.totalQuantity++;
      state.changed = true;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          itemPrice: newItem.price,
          itemQuntity: 1,
          itemTotal: newItem.price,
          itemName: newItem.title,
        });
      } else {
        existingItem.itemQuntity++;
        existingItem.itemTotal = existingItem.itemQuntity * existingItem.itemPrice;
      }
    },
    removeItemToCart(state, action) {
      const id = action.payload;
      const removingItem = state.items.find((item) => item.id === id);

      state.totalQuantity--;
      state.changed = true;

      if (removingItem.itemQuntity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        removingItem.itemQuntity--;
        removingItem.itemTotal = removingItem.itemTotal - removingItem.itemPrice;
      }
    },
  },
});

export default cartSlice.reducer;
export const cartAction = cartSlice.actions;
