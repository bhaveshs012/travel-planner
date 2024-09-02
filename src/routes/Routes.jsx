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
} from "../pages/index";
import ProtectedRoute from "../wrappers/ProtectedRoute";
import Layout from "../Layout";
import { createBrowserRouter } from "react-router-dom";
import DashBoardMainContent from "../pages/dashboard/components/DashBoardMainContent";
import AddBookingModal from "../components/Modals/AddBookingModal";

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
    element: (
      <ProtectedRoute>
        {/* A wrapper component for plan routes if needed */}
      </ProtectedRoute>
    ),
    children: [
      {
        path: "create",
        element: <CreatePlanStarterPage />,
      },
      {
        path: "edit",
        element: <EditPlan />,
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
    path: "/addBooking",
    element: <AddBookingModal />,
  },
  {
    path: "*", // This will catch all unmatched routes
    element: <PageNotFound />,
  },
]);

export default router;
