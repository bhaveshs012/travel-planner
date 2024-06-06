import React from "react";
import Topnav from "./Topnav";
import Calendar from "./Calendar";
import SearchBar from "../../../components/SearchBar/SearchBar";
import { MainCard, Card } from "../../../components";

const DashboardMain = () => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-6">
        <div className="col-span-4">
          <SearchBar />
        </div>
        <div className="col-span-2">
          <Topnav />
        </div>
      </div>
      <div className="h-screen p-4">
        <div className="flex flex-col lg:flex-row justify-evenly items-center">
          <div>
            <MainCard />
          </div>
          <h1 className="text-2xl text-gray-500">
            <Calendar />
          </h1>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <Card key={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
