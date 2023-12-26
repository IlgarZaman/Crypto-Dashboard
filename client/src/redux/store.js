import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "./slice/crypto";
import darkModeReducer from "./slice/darkModeSlice";
export default configureStore({
  reducer: {
    crypto: cryptoReducer,
    darkMode: darkModeReducer,
  },
});
