import React from "react";
import { SideBarHeader, SideBarLink } from "./index";
import {
  FaGlobe,
  FaNoteSticky,
  FaRegCalendarDays,
  FaMoneyBill1,
} from "react-icons/fa6";

function SideBar({ sideBarOpen, handleToggleSideBar }) {
  return (
    <div
      className={`${
        sideBarOpen ? "w-1/4" : "w-20"
      } h-screen ease-in-out transition-all duration-300 sticky top-0 flex flex-col z-10 border border-r-1 border-black border-opacity-25`}
    >
      <SideBarHeader
        handleToggleSideBar={handleToggleSideBar}
        isSideBarOpen={sideBarOpen}
      />

      <div className="p-4 flex text-lg font-mono font-bold flex-col space-y-4">
        <SideBarLink
          title={"Overview"}
          sideBarOpen={sideBarOpen}
          icon={<FaGlobe className="text-xl" />}
        />
        <SideBarLink
          title={"Notes"}
          sideBarOpen={sideBarOpen}
          icon={<FaNoteSticky className="text-xl" />}
        />
        <SideBarLink
          title={"Itinerary"}
          sideBarOpen={sideBarOpen}
          icon={<FaRegCalendarDays className="text-xl" />}
        />
        <SideBarLink
          title={"Budget"}
          sideBarOpen={sideBarOpen}
          icon={<FaMoneyBill1 className="text-xl" />}
        />
      </div>
    </div>
  );
}

export default SideBar;
