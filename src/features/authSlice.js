import { createSlice } from "@reduxjs/toolkit";

//* Create the Initial State
const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

//* Create the Slice and add reducers
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    loginFailure(state, action) {
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
