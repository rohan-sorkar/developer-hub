import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../types";

const initialState = {
  accessToken: "",
  user: {
    id: "",
    name: "",
    email: "",
  },
} as AuthState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loggedIn: (state, action: PayloadAction<AuthState>) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    loggedOut: (state, _action) => {
      state.accessToken = '';
      state.user = {id: '', name: '', email: ''}
    },
  },
});

export const { loggedIn, loggedOut } = authSlice.actions;
export default authSlice.reducer;
