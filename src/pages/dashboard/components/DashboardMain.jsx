import React from "react";
import Topnav from "./Topnav";
import Calendar from "./Calendar";
import SearchBar from "../../../components/SearchBar/SearchBar";
const DashboardMain = () => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-6">
        <div className="col-span-4">
          <SearchBar/>
        </div>
        <div className="col-span-2">
          <Topnav />
        </div>
      </div>
      <div className="h-screen">
        <div className="grid grid-cols-6">
          <h1 className="text-2xl col-span-4 text-center text-gray-500">Dashboard Main</h1>
          <h1 className="text-2xl col-span-2 text-gray-500">
            <Calendar/>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
