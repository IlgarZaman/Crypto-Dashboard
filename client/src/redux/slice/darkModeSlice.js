// slices/darkModeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    isEnabled: localStorage.getItem("darkMode") === "enabled", // localStorage'dan durumu al
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.isEnabled = !state.isEnabled;
      // localStorage'a güncel durumu kaydetme
      localStorage.setItem(
        "darkMode",
        state.isEnabled ? "enabled" : "disabled"
      );
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export const selectDarkMode = (state) => state.darkMode.isEnabled;
export default darkModeSlice.reducer;
