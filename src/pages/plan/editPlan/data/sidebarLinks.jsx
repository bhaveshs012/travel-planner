import {
  FaGlobe,
  FaNoteSticky,
  FaRegCalendarDays,
  FaMoneyBill1,
} from "react-icons/fa6";

const sideBarLinks = [
  { name: "Overview", icon: <FaGlobe className="text-xl" /> },
  { name: "Notes", icon: <FaNoteSticky className="text-xl" /> },
  { name: "Itinerary", icon: <FaRegCalendarDays className="text-xl" /> },
  { name: "Budget", icon: <FaMoneyBill1 className="text-xl" /> },
];

export { sideBarLinks };
