import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    // name: "cart",
    // initialState: {
    //     items: [],
    // },
    // reducers: {
    //     addItem : (state, action) => {
    //         // Redux Toolkit uses immer BTS
    //         state.items.push(action.payload);
    //     },
    //     removeItem : (state) => {
    //         state.items.pop();
    //     },
    //     clearCart : (state) => {
    //         // RTK - either mutate the existing state  or return []
    //         // mutate the state
    //         state.items.length = 0;

    //         // or return []
    //         //return []
    //     }
    // },


    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            const itemId = item.card.info.id;
      
            // Check if the item already exists in the cart
            if (state.items[itemId]) {
              state.items[itemId].quantity += 1; // Increment quantity
            } else {
              state.items[itemId] = { ...item, quantity: 1 }; // Add new item
            }
          },
          incrementItem: (state, action) => {
            const itemId = action.payload;
      
            if (state.items[itemId]) {
              state.items[itemId].quantity += 1; // Increment quantity
            }
          },
          decrementItem: (state, action) => {
            const itemId = action.payload;
      
            if (state.items[itemId]) {
              state.items[itemId].quantity -= 1;
      
              // Remove item from cart if quantity reaches 0
              if (state.items[itemId].quantity <= 0) {
                delete state.items[itemId];
              }
            }
          },
          clearCart: (state) => {
            state.items.length = 0;
          }
        },
    });
  
  export const { addItem, incrementItem, decrementItem, clearCart } = cartSlice.actions;
    



//  Export actions
//export const {addItem, removeItem, clearCart, addButton, removeButton} = cartSlice.actions;


//  Export reducer
export default cartSlice.reducer;