import {
  FaGlobe,
  FaNoteSticky,
  FaRegCalendarDays,
  FaMoneyBill1,
  FaHotel,
} from "react-icons/fa6";
import {
  overviewSectionRef,
  notesSectionRef,
  budgetSectionRef,
  itinerarySectionRef,
} from "../components/MainContentSpace";

const sideBarLinks = [
  {
    name: "Overview",
    icon: <FaGlobe className="text-xl" />,
    ref: overviewSectionRef,
  },
  {
    name: "Notes",
    icon: <FaNoteSticky className="text-xl" />,
    ref: notesSectionRef,
  },
  {
    name: "Itinerary",
    icon: <FaRegCalendarDays className="text-xl" />,
    ref: itinerarySectionRef,
  },
  {
    name: "Budget",
    icon: <FaMoneyBill1 className="text-xl" />,
    ref: budgetSectionRef,
  },
  {
    name: "Bookings",
    icon: <FaHotel className="text-xl" />,
  },
];

export { sideBarLinks };
