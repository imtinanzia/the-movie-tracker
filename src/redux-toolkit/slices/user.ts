import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface UserState {
  username: string | null;
}

const initialState: UserState = {
  username: Cookies.get("username") || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string | null>) => {
      state.username = action.payload;
      if (action.payload) {
        Cookies.set("username", action.payload, {
          expires: 7,
        });
      } else {
        Cookies.remove("username");
      }
    },
  },
});

export const { setUsername } = userSlice.actions;
export default userSlice.reducer;
