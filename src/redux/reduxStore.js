import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
//import buttonReducer from "./cartSlice";
import cardsReducer from "./cartSlice";


const reduxStore = configureStore({
    reducer : {
        cart : cartReducer,
      //  cards : cardsReducer
       // button : buttonReducer
    }

});

export default reduxStore;