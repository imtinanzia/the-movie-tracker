import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  searchString: string;
}

const initialState: SearchState = {
  searchString: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchString: (state, action: PayloadAction<string>) => {
      state.searchString = action.payload;
    },
  },
});

export const { setSearchString } = searchSlice.actions;

export const selectSearchString = (state: { search: SearchState }) =>
  state.search.searchString;

export default searchSlice.reducer;
