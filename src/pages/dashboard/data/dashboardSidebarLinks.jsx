import {
  FaHome, // Dashboard
  FaStar, // Favourites
  FaCompass, // Discover
  FaMoneyBillWave, // Expenses
  FaUser, // Profile
} from "react-icons/fa";
import { FaBell } from "react-icons/fa6";

const sideBarLinks = [
  {
    name: "Dashboard",
    icon: <FaHome className="text-xl" />,
    path: "/dashboard",
  },
  {
    name: "Favourites",
    icon: <FaStar className="text-xl" />,
    path: "/dashboard/notifications",
  },
  {
    name: "Discover",
    icon: <FaCompass className="text-xl" />,
    path: "/dashboard/discover",
  },
  {
    name: "Expenses",
    icon: <FaMoneyBillWave className="text-xl" />,
    path: "/dashboard/expenses",
  },
  {
    name: "Notifications",
    icon: <FaBell className="text-xl" />,
    path: "/dashboard/notifications",
  },
  {
    name: "Profile",
    icon: <FaUser className="text-xl" />,
    path: "/dashboard/profile",
  },
];

export { sideBarLinks };
