import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/user";
import MovieSlice from "./slices/movies";
import SearchSlice from "./slices/search";
import ThemeSlice from "./slices/theme";

export const store = configureStore({
  reducer: {
    user: UserSlice,
    movies: MovieSlice,
    search: SearchSlice,
    theme: ThemeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
