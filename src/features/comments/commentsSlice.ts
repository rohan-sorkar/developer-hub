import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { string } from "yup";

const initialState = {
  updateCommentId: ''
} as { updateCommentId: string };

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    editComment: (state, action: PayloadAction<string>) => {
      state.updateCommentId = action.payload
  }
  },
});

export const {editComment} = commentsSlice.actions;
export default commentsSlice.reducer;
