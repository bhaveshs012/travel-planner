import React from "react";
import Detail from "./Detail";
import { FaCalendarDays } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa6";

const TripSummaryCard = ({
  image,
  title,
  tripStartDate,
  placesToVisit,
  description,
  days,
  nights,
  people,
  amount,
}) => {
  return (
    <div className="flex flex-col flex-shrink-0 w-1/2 rounded-lg overflow-hidden shadow-lg bg-white space-y-4 gap-y-4 p-2">
      <img className="w-full rounded-t" src={image} alt="Trip" />
      <div>
        <div className="font-bold text-2xl overflow-auto">{title}</div>
        <p className="text-gray-700 text-base font-normal">{description}</p>
        <div className="flex-grow space-y-4">
          {placesToVisit.map((place) => (
            <Detail content={place} />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap items-center">
        <div className="flex-grow">
          <Detail
            className="align-middle content-center"
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

export default TripSummaryCard;
