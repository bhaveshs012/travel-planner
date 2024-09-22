import React from "react";
import SideBarHeader from "./SideBarHeader";
import SideBarLink from "./SideBarLink";
import { Button } from "../Form";

function SideBar({
  sideBarOpen,
  handleToggleSideBar,
  sideBarLinks,
  CTA,
  CTAFunction,
  isCTADisabled,
  CTAIcon,
  tripId,
}) {
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
      <div className="flex flex-col h-full justify-between">
        {/* Sidebar links section */}
        <div className="p-4 flex flex-col space-y-4 flex-grow font-bold text-md">
          {sideBarLinks.map((link) => (
            <SideBarLink
              key={link.name}
              title={link.name}
              sideBarOpen={sideBarOpen}
              icon={link.icon}
              path={link.path}
              handleScroll={
                link.ref
                  ? () =>
                      link.ref.current.scrollIntoView({
                        behavior: "smooth",
                      })
                  : null
              }
              tripId={tripId}
            />
          ))}
        </div>

        {/* CTA button section */}
        {CTA && (
          <div className="p-4">
            <Button
              className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-gray-900"
              onClick={CTAFunction}
              disabled={isCTADisabled}
            >
              {sideBarOpen ? CTA : CTAIcon}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SideBar;
