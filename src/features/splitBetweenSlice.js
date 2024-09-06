import { createSlice } from "@reduxjs/toolkit";

const splitBetweenSlice = createSlice({
  name: "splitBetween",
  initialState: [],
  reducers: {
    addTripMember(state, action) {
      const updatedSet = new Set(state);
      updatedSet.add(action.payload);
      return [...updatedSet];
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
