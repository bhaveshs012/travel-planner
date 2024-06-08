import React from "react";
import Logo from "../../../../assets/Logo2.png";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

function SideBarHeader({ handleToggleSideBar, isSideBarOpen }) {
  return (
    <div className="transition-all duration-300 ease-in-out flex justify-between items-center p-4">
      {isSideBarOpen && (
        <div className="flex items-center">
          <img src={Logo} className="mr-3 h-12" alt="Logo" />
          <p className="text-sm font-bold">JourneySync</p>
        </div>
      )}
      <button
        className={!isSideBarOpen ? "flex items-center mx-auto" : null}
        onClick={handleToggleSideBar}
      >
        {isSideBarOpen ? <FaAnglesLeft /> : <FaAnglesRight />}
      </button>
    </div>
  );
}

export default SideBarHeader;
