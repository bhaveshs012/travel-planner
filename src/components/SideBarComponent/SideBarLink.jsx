import React from "react";
import { useNavigate } from "react-router-dom";
function SideBarLink({ sideBarOpen, icon, title, path }) {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Clicked: ", path);

    navigate(path);
  };
  return (
    <button
      onClick={handleClick}
      title={title}
      className="flex items-center gap-x-4 text-black text-opacity-90 hover:bg-gray-100 p-3 rounded"
    >
      <span>{icon}</span>
      {sideBarOpen && <span>{title}</span>}
    </button>
  );
}

export default SideBarLink;
