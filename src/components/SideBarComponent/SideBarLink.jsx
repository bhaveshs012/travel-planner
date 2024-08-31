import React from "react";

function SideBarLink({ sideBarOpen, icon, title }) {
  return (
    <a
      href="#"
      title={title}
      className="flex items-center gap-x-4 text-black text-opacity-90 hover:bg-gray-100 p-3 rounded"
    >
      <span>{icon}</span>
      {sideBarOpen && <span>{title}</span>}
    </a>
  );
}

export default SideBarLink;
