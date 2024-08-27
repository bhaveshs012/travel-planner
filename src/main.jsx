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
  CreatePlan,
  EditPlan,
  TripwiseExpenseDetail,
  Discover,
} from "./pages/index";
import Layout from "./Layout";
import DashBoardLayout from "./pages/dashboard/DashBoardLayout";
import { Provider } from "react-redux";
import { store } from "./store.js";
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
        path: "plan",
        element: <CreatePlan />,
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
    path: "plan/edit",
    element: <EditPlan />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout />,
  },
  {
    path: "/bookings",
    element: <Bookings />,
  },
  {
    path: "/expenses",
    element: <ExpenseTracker />,
  },
  {
    path: "/expenses/detail",
    element: <TripwiseExpenseDetail />,
  },
  {
    path: "/discover",
    element: <Discover />,
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
      <Main />
    </Provider>
  </React.StrictMode>
);
