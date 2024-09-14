import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice.js";
import splitBetweenReducer from "./features/splitBetweenSlice.js";
import triPlanReducer from "./features/tripPlanSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer, // Direct reducer without persist
    splitBetween: splitBetweenReducer,
    tripPlan: triPlanReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
