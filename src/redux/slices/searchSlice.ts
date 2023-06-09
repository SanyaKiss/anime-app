import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

interface SearchState {
  query: string;
  result: any[];
}

const initialState: SearchState = {
  query: "",
  result: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;

export const selectQuery = (state: RootState) => state.search.query;
