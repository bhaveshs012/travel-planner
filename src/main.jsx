import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Contact,
  Features,
  Home,
  Login,
  Profile,
  Signup,
  Bookings,
  ExpenseTracker,
  CreatePlanStarterPage,
  EditPlan,
  TripwiseExpenseDetail,
  Discover,
  PageNotFound,
} from "./pages/index";
import ProtectedRoute from "./wrappers/ProtectedRoute.jsx";
import Layout from "./Layout";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import { Provider } from "react-redux";
import { store, persistor } from "./store.js";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SidebarContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "features",
        element: <Features />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/expenses",
    element: <ExpenseTracker />,
  },
  {
    path: "/plan",
    children: [
      {
        path: "create",
        element: (
          <ProtectedRoute>
            <CreatePlanStarterPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "edit",
        element: (
          <ProtectedRoute>
            <EditPlan />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/:tripId",
    children: [
      {
        path: "",
        element: (
          <ProtectedRoute>
            <EditPlan />
          </ProtectedRoute>
        ),
      },
      {
        path: "bookings",
        element: (
          <ProtectedRoute>
            <Bookings />
          </ProtectedRoute>
        ),
      },
      {
        path: "expenses",
        element: (
          <ProtectedRoute>
            <TripwiseExpenseDetail />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/discover",
    element: <Discover />,
  },
  {
    path: "*", // This will catch all unmatched routes
    element: <PageNotFound />,
  },
]);

const Main = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded }}>
      <RouterProvider router={router} />
      <ToastContainer />
    </SidebarContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
