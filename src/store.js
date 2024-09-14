import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice.js";
import splitBetweenReducer from "./features/splitBetweenSlice.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import triPlanReducer from "./features/tripPlanSlice.js";

const persistConfig = {
  key: "auth", // Key for the persisted state
  storage, // Storage engine to use (localStorage here)
  whitelist: ["user", "isAuthenticated"], // Only persist specific parts of the state
};

// Step 2: Wrap the authReducer with persistReducer
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer, // Direct reducer without persist
    splitBetween: splitBetweenReducer,
    tripPlan: triPlanReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
