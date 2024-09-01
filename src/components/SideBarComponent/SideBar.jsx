import React from "react";
import SideBarHeader from "./SideBarHeader";
import SideBarLink from "./SideBarLink";

function SideBar({ sideBarOpen, handleToggleSideBar, sideBarLinks }) {
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

      <div className="p-4 flex text-lg font-bold flex-col space-y-4">
        {sideBarLinks.map((link) => (
          <SideBarLink
            key={link.name}
            title={link.name}
            sideBarOpen={sideBarOpen}
            icon={link.icon}
            path={link.path}
          />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
