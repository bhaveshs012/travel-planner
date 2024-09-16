import { createSlice } from "@reduxjs/toolkit";

const splitBetweenSlice = createSlice({
  name: "splitBetween",
  initialState: [],
  reducers: {
    addTripMember(state, action) {
      const newMember = action.payload;
      const memberExists = state.some(
        (member) => member.userId === newMember.userId
      );
      if (!memberExists) {
        return [...state, newMember]; // Add new member immutably
      }
    },
    removeTripMember(state, action) {
      //* Removing Based on the id's objects cannot be matched like normal strings and numbers
      const updatedSet = new Set(
        state.filter((member) => member.userId !== action.payload.userId)
      );
      return [...updatedSet];
    },
    resetSplitBetween(state, _) {
      return [];
    },
  },
});

export const { addTripMember, removeTripMember, resetSplitBetween } =
  splitBetweenSlice.actions;
export default splitBetweenSlice.reducer;
