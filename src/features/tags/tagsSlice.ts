import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTags: []
} as {selectedTags: string[]};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    selectTag: (state, action: PayloadAction<string>) => {
      if(state.selectedTags.includes(action.payload)) {
          state.selectedTags = state.selectedTags.filter(t => t !== action.payload) 
      } else {
          state.selectedTags.push(action.payload)
      }
  },
  resetTag: (state, _action: {payload?: string}) => {
      state.selectedTags = []
  }
  },
});

export const {selectTag, resetTag} = tagsSlice.actions;
export default tagsSlice.reducer;
