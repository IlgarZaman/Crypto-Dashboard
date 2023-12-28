// darkModeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    isEnabled: localStorage.getItem("darkMode") === "enabled",
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.isEnabled = !state.isEnabled;
      localStorage.setItem(
        "darkMode",
        state.isEnabled ? "enabled" : "disabled"
      );
    },
    setInitialDarkMode: (state) => {
      state.isEnabled = localStorage.getItem("darkMode") === "enabled";
    },
  },
});

export const { toggleDarkMode, setInitialDarkMode } = darkModeSlice.actions;
export const selectDarkMode = (state) => state.darkMode.isEnabled;
export default darkModeSlice.reducer;
