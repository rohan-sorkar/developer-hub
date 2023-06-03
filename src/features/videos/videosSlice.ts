import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
} as { searchTerm: string };

const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    searchInputChange: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { searchInputChange } = videosSlice.actions;
export default videosSlice.reducer;
