import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../AppFunction";
const store = configureStore({
  reducer: {
    cart: dataSlice,
  },
});

export default store;
