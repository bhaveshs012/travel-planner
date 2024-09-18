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
  Dashboard,
  Notifications,
} from "../pages/index";
import ProtectedRoute from "../wrappers/ProtectedRoute";
import Layout from "../Layout";
import { createBrowserRouter } from "react-router-dom";
import DashBoardMainContent from "../pages/dashboard/components/DashBoardMainContent";
import TripWrapper from "../wrappers/TripWrapper";

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
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: (
          <ProtectedRoute>
            <DashBoardMainContent />
          </ProtectedRoute>
        ),
      },
      {
        path: "expenses",
        element: (
          <ProtectedRoute>
            <ExpenseTracker />
          </ProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "notifications",
        element: (
          <ProtectedRoute>
            <Notifications />
          </ProtectedRoute>
        ),
      },
      {
        path: "discover",
        element: (
          <ProtectedRoute>
            <Discover />
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
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
    ],
  },
  {
    path: "/:tripId",
    children: [
      {
        path: "",
        element: (
          <ProtectedRoute>
            <TripWrapper>
              <EditPlan />
            </TripWrapper>
          </ProtectedRoute>
        ),
      },
      {
        path: "bookings",
        element: (
          <ProtectedRoute>
            <TripWrapper>
              <Bookings />
            </TripWrapper>
          </ProtectedRoute>
        ),
      },
      {
        path: "expenses",
        element: (
          <ProtectedRoute>
            <TripWrapper>
              <TripwiseExpenseDetail />
            </TripWrapper>
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "*", // This will catch all unmatched routes
    element: <PageNotFound />,
  },
]);

export default router;
