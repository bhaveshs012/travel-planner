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
    setInitialData(state, action) {
      state.tripName = action.payload.tripName;
      state.tripDesc = action.payload.tripDesc;
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
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
      state.tripMembers.push(action.payload);
    },
    // Remove a trip member
    removeTripMember(state, action) {
      state.tripMembers = state.tripMembers.filter(
        (member) => member.userId !== action.payload.userId
      );
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
  setInitialData,
  setNotes,
  setCoverImage,
  setItinerary,
  addTripMember,
  removeTripMember,
  resetTripMembers,
  setPlannedBudget,
  resetTripPlan,
} = tripPlanSlice.actions;

export default tripPlanSlice.reducer;
