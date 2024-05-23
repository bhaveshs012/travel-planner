import React from "react";

import NavButtons from "./NavButtons";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full px-4 rounded-lg bg-white">
      <div className="mb-4 text-center flex justify-center  ">
        <img src="src/assets/Logo.png" className="w-24 h-24"/>
      </div>
      <NavButtons title="Dashboard" icon="home" active={true} />
      <NavButtons title="Favourites" icon="favourites" />
      <NavButtons title="Discover" icon="discover" />
      <NavButtons title="Tickets" icon="ticket" />
      <NavButtons title="Budget" icon="budget" />
      <NavButtons title="Profile" icon="profile" />
      <div className="mt-auto">
        <NavButtons title="Logout" icon="logout" />
      </div>
    </div>
  );
};

export default Sidebar;
