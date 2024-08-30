import React from "react";
import Detail from "../../../components/TripSummaryCard/Detail";
import { FaBolt, FaCalendarDays } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa6";

const TripSummaryCardHorizontal = ({
  image,
  title,
  description,
  days,
  nights,
  people,
  tripStartDate,
  amount,
}) => {
  return (
    <div className="flex w-full h-2/4 rounded-lg overflow-hidden shadow-lg">
      <img className="w-1/3 h-64 object-cover" src={image} alt="Trip" />
      <div className="w-2/3 p-6 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="flex justify-between">
            <div className="font-bold text-2xl">{title}</div>
            <div className="flex space-x-4 items-center justify-center">
              <FaBolt className="text-yellow-400" />
              <p className="font-medium text-md">
                {tripStartDate.toLocaleString("en-US", {
                  year: "numeric", // e.g., "2024"
                  month: "short", // e.g., "August"
                  day: "numeric", // e.g., "31"
                })}
              </p>
            </div>
          </div>
          <p className="text-gray-700 text-base font-normal">{description}</p>
          <div className="flex-grow">
            <Detail content="Disneyland" />
            <Detail content="Man Mo Temple" />
            <Detail content="The Peak" />
            <Detail content="The Big Buddha" />
            <Detail content="The Big Buddha" />
          </div>
        </div>
        <div className="flex">
          <Detail
            content={`${days} Days - ${nights} Nights`}
            icon={<FaCalendarDays />}
            boldText
          />
          <Detail
            content={`${people} People`}
            icon={<FaPeopleGroup />}
            boldText
          />
          <Detail content={`₹ ${amount}`} icon={<FaMoneyBillWave />} boldText />
        </div>
      </div>
    </div>
  );
};

export default TripSummaryCardHorizontal;
