import React from "react";
import { Link } from "react-router-dom";
const NavButtons = ({ icon, title, active = false }) => {
  return (
    <Link to="/dashboard" className="flex items-center my-2">
      <button
        className={`block w-full py-3 px-4 rounded-lg mb-2 ${
          active
            ? "bg-gray-200 font-semibold text-gray-900"
            : "text-gray-800 hover:bg-gray-200 hover:font-semibold"
        }`}
      >
        <div className="flex items-center ">
          <img
            src={`src/assets/navIcons/${icon}.png`}
            className="mr-3 h-5 w-5"
            alt="Logo"
          />
          <p className="text-md">{title}</p>
        </div>
      </button>
    </Link>
  );
};

export default NavButtons;
