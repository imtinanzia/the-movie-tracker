// features/darkModeSlice.ts

import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface DarkModeState {
  isDarkMode: boolean;
}

const darkTheme = Cookies.get("isDarkMode");

const isDarktheme = darkTheme ? JSON.parse(darkTheme) : false;

const initialState: DarkModeState = {
  isDarkMode: isDarktheme,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      if (state.isDarkMode) {
        Cookies.set("isDarkMode", JSON.stringify(true));
      } else {
        Cookies.remove("isDarkMode");
      }
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export const selectDarkMode = (state: { darkMode: DarkModeState }) =>
  state.darkMode.isDarkMode;

export default darkModeSlice.reducer;
