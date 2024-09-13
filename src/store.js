import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import authReducer from "./features/authSlice.js";
import splitBetweenReducer from "./features/splitBetweenSlice.js";
import triPlanReducer from "./features/tripPlanSlice.js";

// Step 1: Create a persist configuration
const persistConfig = {
  key: "auth", // Key for the persisted state
  storage, // Storage engine to use (localStorage here)
  whitelist: ["user", "isAuthenticated"], // Only persist specific parts of the state
};

// Step 2: Wrap the authReducer with persistReducer
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// Step 3: Configure the store with the persisted reducer
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer, // Use the persisted reducer
    splitBetween: splitBetweenReducer,
    tripPlan: triPlanReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Step 4: Export the persistor
export const persistor = persistStore(store);
