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
      state.error = null; // Clear error on successful login
    },
    loginFailure(state, action) {
      state.error = action.payload;
      state.isAuthenticated = false; // Ensure this is set to false on failure
    },
    resetFailure(state, action) {
      state.error = null;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null; // Clear any errors on logout
    },
  },
});

export const { login, loginFailure, logout, setUser, resetFailure } =
  authSlice.actions;
export default authSlice.reducer;
