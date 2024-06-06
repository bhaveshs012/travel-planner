import React from "react";
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
} from "./pages/index";
import Layout from "./Layout";
import DashBoardLayout from "./pages/dashboard/DashBoardLayout";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
