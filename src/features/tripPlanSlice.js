import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tripName: "",
  tripDesc: "",
  notes: "",
  coverImage: "",
  startDate: new Date(),
  endDate: new Date(),
  itinerary: [],
  tripMembers: [],
  plannedBudget: [],
};

const tripPlanSlice = createSlice({
  name: "tripPlan",
  initialState,
  reducers: {
    setTripPlan(state, action) {
      return { ...state, ...action.payload }; // Spread current state and action payload
    },
    setInitialData(state, action) {
      return {
        ...state,
        tripName: action.payload.tripName,
        tripDesc: action.payload.tripDesc,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
      };
    },
    setTripName(state, action) {
      return { ...state, tripName: action.payload };
    },
    setTripDesc(state, action) {
      return { ...state, tripDesc: action.payload };
    },
    setStartDate(state, action) {
      return { ...state, startDate: action.payload };
    },
    setEndDate(state, action) {
      return { ...state, endDate: action.payload };
    },
    setNotes(state, action) {
      return { ...state, notes: action.payload };
    },
    setCoverImage(state, action) {
      return { ...state, coverImage: action.payload };
    },
    setInitialItinerary(state) {
      let startDate = new Date(state.startDate);
      let endDate = new Date(state.endDate);

      let newItinerary = [];
      for (
        let currDate = new Date(startDate); // Clone the start date to avoid mutation
        currDate <= endDate;
        currDate.setDate(currDate.getDate() + 1)
      ) {
        const itineraryItem = {
          date: new Date(currDate.valueOf()), // Create a new Date object
          placeToVisit: "",
          checklist: [],
          notes: "",
        };
        newItinerary.push(itineraryItem);
      }
      return { ...state, itinerary: newItinerary };
    },
    shiftItinerary(state) {
      const startDate = state.startDate;
      const endDate = state.endDate;
      const numberOfDays = (endDate - startDate) / 86400000 + 1; // convert milliseconds to days and add +1
      let newArray = Array(numberOfDays).fill({});
      let index = 0;

      // Create a copy of the startDate
      let currDate = new Date(startDate);

      for (index = 0; currDate <= endDate; index++) {
        const prevData = state.itinerary;

        if (index < numberOfDays && index < prevData.length) {
          // get the old data
          newArray[index] = {
            ...prevData[index],
            date: new Date(currDate.valueOf()), // New Date object
          };
        } else {
          const itineraryItem = {
            date: new Date(currDate.valueOf()), // Create a new Date object
            placeToVisit: "",
            checklist: [],
            notes: "",
          };
          newArray[index] = itineraryItem;
        }

        // Increment the currDate for the next day
        currDate.setDate(currDate.getDate() + 1);
      }

      return { ...state, itinerary: newArray };
    },
    setItineraryItemNote(state, action) {
      const { index, notes } = action.payload;
      return {
        ...state,
        itinerary: state.itinerary.map((item, idx) =>
          idx === index ? { ...item, notes } : item
        ),
      };
    },
    setItineraryItemPlaceToVisit(state, action) {
      const { index, placeToVisit } = action.payload;
      return {
        ...state,
        itinerary: state.itinerary.map((item, idx) =>
          idx === index ? { ...item, placeToVisit } : item
        ),
      };
    },
    addTripMember(state, action) {
      const newMember = action.payload;
      const memberExists = state.tripMembers.some(
        (member) => member.userId === newMember.userId
      );
      if (!memberExists) {
        return {
          ...state,
          tripMembers: [...state.tripMembers, newMember], // Add new member immutably
        };
      }
      return state;
    },
    removeTripMember(state, action) {
      return {
        ...state,
        tripMembers: state.tripMembers.filter(
          (member) => member.userId !== action.payload.userId
        ),
      };
    },
    setTripMembers(state, action) {
      return { ...state, tripMembers: action.payload };
    },
    resetTripMembers(state) {
      return { ...state, tripMembers: [] };
    },
    setPlannedBudget(state, action) {
      return { ...state, plannedBudget: action.payload };
    },
    resetTripPlan() {
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
  setInitialItinerary,
  shiftItinerary,
  setItineraryItemPlaceToVisit,
  setItineraryItemNote,
  addTripMember,
  removeTripMember,
  setTripMembers,
  resetTripMembers,
  setPlannedBudget,
  resetTripPlan,
} = tripPlanSlice.actions;

export default tripPlanSlice.reducer;
