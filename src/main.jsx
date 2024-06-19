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
import TripCardMain from "./components/TripCardMain/MainCard"

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
    </SidebarContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
