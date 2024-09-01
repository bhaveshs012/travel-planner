import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const TopBar = ({ userName = "Bhavesh" }) => {
  const date = new Date();
  return (
    <div className="space-y-2">
      <div className="flex flex-row justify-between items-center">
        <div>
          <div className="text-xl font-bold">Hello, {userName} !!</div>
          <div className="text-lg text-gray-400">
            Review Your Trips and Stay and Budgets to avoid last minute mess ups
            !!
          </div>
        </div>
        <div className="flex flex-row gap-x-5 items-center">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
            <FaCalendarAlt className="text-lg" />
          </div>
          <div className="text-md font-medium">
            {new Date().toLocaleDateString("en-US", {
              year: "numeric", // e.g., "2024"
              month: "long", // e.g., "August"
              day: "numeric", // e.g., "31"
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
