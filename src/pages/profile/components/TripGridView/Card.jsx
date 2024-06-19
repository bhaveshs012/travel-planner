import React from "react";
import Detail from "./Detail";
import { FaCalendarDays } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa6";

const Card = ({ image, title, description, days, nights, people, amount }) => {
  return (
    <div className="max-w-md rounded-lg overflow-hidden shadow-lg bg-white space-y-4 ">
      <img className="w-full rounded-t" src={image} alt="Trip" />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-4 overflow-auto">{title}</div>
        <div className="flex-grow">
          <Detail content="Disneyland" />
          <Detail content="Man Mo Temple" />
          <Detail content="The Peak" />
          <Detail content="The Big Buddha" />
          <Detail content="The Big Buddha" />
        </div>
        <p className="text-gray-700 text-base font-normal mt-2">
          {description}
        </p>
      </div>
      <div className="px-6 pb-4 flex flex-wrap items-center">
        <div className="flex-grow">
          <Detail
            className="align-middle content-center"
            content={`${days}D-${nights}N`}
            icon={<FaCalendarDays/>}
            boldText
          />

          <Detail content={`${people} People`} icon={<FaPeopleGroup/>} boldText/>
          <Detail content={`₹ ${amount}`} icon={<FaMoneyBillWave />} boldText/>
        </div>
      </div>
    </div>
  );
};

export default Card;
