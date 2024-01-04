import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export interface Movie {
  image: string;
  title: string;
  description: string;
  id: string;
  genres?: any[];
  backdrop_path?: string;
  homepage?: string;
  rating?: number;
  views?: number;
}

interface MoviesState {
  currentlyWatching: Movie[];
  suggestToWatch: Movie[];
  previousWatch: Movie[];
  selectedMovies: Movie;
  favourites: string[];
}

const favoriteIdsCookie = Cookies.get("favoriteIds");
const parsedFavoriteIds = favoriteIdsCookie
  ? JSON.parse(favoriteIdsCookie)
  : [];

const initialState: MoviesState = {
  currentlyWatching: [],
  suggestToWatch: [],
  previousWatch: [],
  selectedMovies: {
    description: "",
    id: "",
    image: "",
    title: "",
  },
  favourites: parsedFavoriteIds,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addToCurrentlyWatching: (state, action: PayloadAction<Movie[]>) => {
      state.currentlyWatching = action.payload;
    },
    addToSuggestToWatch: (state, action: PayloadAction<Movie[]>) => {
      state.suggestToWatch = action.payload;
    },
    addToPreviousWatch: (state, action: PayloadAction<Movie[]>) => {
      state.previousWatch = action.payload;
    },
    addToSelectedMovies: (state, action: PayloadAction<Movie>) => {
      state.selectedMovies = action.payload;
    },
    addToFavorites: (state, action: PayloadAction<string>) => {
      state.favourites = [...state.favourites, action.payload];
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.favourites = state.favourites.filter(
        (favoriteId) => favoriteId !== action.payload
      );
    },
  },
});

export const {
  addToCurrentlyWatching,
  addToSuggestToWatch,
  addToPreviousWatch,
  addToSelectedMovies,
  addToFavorites,
  removeFromFavorites,
} = moviesSlice.actions;

export default moviesSlice.reducer;
