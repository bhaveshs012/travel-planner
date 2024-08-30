import {
  FaHome, // Dashboard
  FaStar, // Favourites
  FaCompass, // Discover
  FaSuitcase, // Bookings
  FaMoneyBillWave, // Expenses
  FaUser, // Profile
} from "react-icons/fa";

const sideBarLinks = [
  { name: "Dashboard", icon: <FaHome className="text-xl" /> },
  { name: "Favourites", icon: <FaStar className="text-xl" /> },
  { name: "Discover", icon: <FaCompass className="text-xl" /> },
  { name: "Bookings", icon: <FaSuitcase className="text-xl" /> },
  { name: "Expenses", icon: <FaMoneyBillWave className="text-xl" /> },
  { name: "Profile", icon: <FaUser className="text-xl" /> },
];

export { sideBarLinks };
