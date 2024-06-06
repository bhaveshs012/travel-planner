import React, { useContext } from "react";
import { SidebarContext } from "../../pages/dashboard/DashBoardLayout";

export default function Sidebar({ children }) {
  const { expanded, setExpanded } = useContext(SidebarContext);

  return (
    <aside className="h-screen bg-black text-white">
      <nav className="h-screen inline-flex flex-col border-r shadow-sm fixed bg-black text-white">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-white"
          >
            <img
              src={`src/assets/navIcons/${expanded ? 'chevron_first_dark' : 'chevron_last_dark'}.png`}
              className="h-6 w-6"
              alt="Logo"
            />
          </button>
        </div>

        <ul className="flex-1 px-3">
          <SidebarItem icon="home_dark" text="Dashboard" />
          <SidebarItem icon="favourites_dark" text="Favourites" />
          <SidebarItem icon="discover_dark" text="Discover" />
          <SidebarItem icon="ticket_dark" text="Tickets" />
          <SidebarItem icon="budget_dark" text="Budget" />
          <SidebarItem icon="profile_dark" text="Profile" />
        </ul>

        <div className="border-t border-gray-700 flex p-3">
          <SidebarItem icon="logout_dark" text="Logout" />
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-2
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${active ? "bg-gray-700 text-white" : "hover:bg-gray-800 text-gray-400"}
    `}
    >
      <div className="flex items-center">
        <img
          src={`src/assets/navIcons/${icon}.png`}
          className="h-6 w-6"
          alt="Logo"
        />
      </div>
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-gray-700 text-white text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
