import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tripName: "",
  tripDesc: "",
  notes: "",
  coverImage: "",
  startDate: new Date(),
  endDate: new Date(),
  itinerary: [],
  tripMembers: [], // Ensure it's initialized as an empty array
  plannedBudget: [],
};

const tripPlanSlice = createSlice({
  name: "tripPlan",
  initialState,
  reducers: {
    setTripPlan(state, action) {
      return { ...state, ...action.payload };
    },
    setInitialData(state, action) {
      state.tripName = action.payload.tripName;
      state.tripDesc = action.payload.tripDesc;
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
    },
    setTripName(state, action) {
      state.tripName = action.payload;
    },
    setTripDesc(state, action) {
      state.tripDesc = action.payload;
    },
    setStartDate(state, action) {
      state.startDate = action.payload;
    },
    setEndDate(state, action) {
      state.endDate = action.payload;
    },
    // Set notes
    setNotes(state, action) {
      state.notes = action.payload;
    },
    // Set cover image
    setCoverImage(state, action) {
      state.coverImage = action.payload;
    },
    // Set itinerary
    setItinerary(state, action) {
      state.itinerary = action.payload;
    },
    // Add a trip member
    addTripMember(state, action) {
      const newMember = action.payload;
      // Check if the member with the same userId already exists
      const memberExists = state.tripMembers.some(
        (member) => member.userId === newMember.userId
      );
      // Add the new member only if they don't already exist in the array
      if (!memberExists) {
        state.tripMembers.push(newMember);
      }
    },
    // Remove a trip member
    removeTripMember(state, action) {
      state.tripMembers = state.tripMembers.filter(
        (member) => member.userId !== action.payload.userId
      );
    },
    // Set Trip Members
    setTripMembers(state, action) {
      state.tripMembers = action.payload;
    },
    // Reset trip members
    resetTripMembers(state) {
      state.tripMembers = [];
    },
    // Set planned budget
    setPlannedBudget(state, action) {
      state.plannedBudget = action.payload;
    },
    // Reset the entire trip plan state
    resetTripPlan(state) {
      return initialState;
    },
  },
});

export const {
  setTripPlan,
  setInitialData,
  setTripName,
  setTripDesc,
  setStartDate,
  setEndDate,
  setNotes,
  setCoverImage,
  setItinerary,
  addTripMember,
  removeTripMember,
  setTripMembers,
  resetTripMembers,
  setPlannedBudget,
  resetTripPlan,
} = tripPlanSlice.actions;

export default tripPlanSlice.reducer;
