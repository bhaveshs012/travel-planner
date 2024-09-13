import React from "react";
import Detail from "./Detail";
import { FaCalendarDays } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import tripIllustration from "../../assets/trip-illustration.jpg";

const TripSummaryCard = ({
  // image,
  tripName,
  tripId,
  placesToVisit,
  tripDesc,
  totalDays,
  totalNights,
  totalMembers,
  plannedBudget,
}) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/${tripId}`);
  };
  return (
    <div
      className="flex flex-col flex-shrink-0 w-1/2 rounded-lg overflow-hidden shadow-lg bg-white space-y-4 gap-y-2 p-2 cursor-pointer"
      onClick={handleOnClick}
    >
      <img className="w-full rounded-t" src={tripIllustration} alt="Trip" />
      <div>
        <div className="font-bold text-2xl overflow-auto">{tripName}</div>
        <p className="text-gray-700 text-base font-normal">{tripDesc}</p>
        <div className="flex-grow space-y-4">
          {placesToVisit.map(
            (place, index) =>
              place !== "" && <Detail key={index} content={place} />
          )}
        </div>
      </div>
      <div className="flex flex-wrap items-center">
        <div className="flex-grow space-y-4">
          <Detail
            className="align-middle content-center"
            content={`${totalDays} Days - ${totalNights} Nights`}
            icon={<FaCalendarDays />}
            boldText
          />

          <Detail
            content={`${totalMembers} People`}
            icon={<FaPeopleGroup />}
            boldText
          />
          <Detail
            content={`₹ ${plannedBudget}`}
            icon={<FaMoneyBillWave />}
            boldText
          />
        </div>
      </div>
    </div>
  );
};

export default TripSummaryCard;
