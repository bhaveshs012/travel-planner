import React from "react";
import { AvatarRow } from "../../../components";
import { convertToINR } from "../../../utils/currencyFormatter";

function TripWiseExpenseCard({
  tripName,
  tripDesc,
  plannedBudget,
  totalExpenses,
  totalMembers,
  placesToVisit,
  tripId,
}) {
  return (
    <div className="flex flex-shrink-0 w-1/2 shadow-lg cursor-pointer">
      <div className="w-1/2 p-4 rounded-tl-lg space-y-4 rounded-bl-lg">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Manali_City.jpg/1280px-Manali_City.jpg"
          alt="Trip Image"
          className="w-full h-100 object-cover rounded-lg"
        />
        <p className="text-xl font-bold my-4">{tripName}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {placesToVisit.map((location, index) => (
            <div
              key={index}
              className="rounded-full bg-gray-300   text-black px-8 py-2"
            >
              <p className="text-xs">{location}</p>
            </div>
          ))}
        </div>
        <div>
          <AvatarRow totalMembers={totalMembers} />
        </div>
      </div>
      <div className="flex flex-col w-1/2 p-4 space-y-8 rounded-tr-lg rounded-br-lg bg-black text-white justify-center items-center text-center">
        <div>
          <p className="text-lg">Planned Budget</p>
          <p className="text-2xl font-bold">{convertToINR(plannedBudget)}</p>
        </div>
        <div>
          <p className="text-lg">Actual Spending</p>
          <p className="text-2xl font-bold">{convertToINR(totalExpenses)}</p>
        </div>
        <div>
          <p className="text-lg">
            {totalExpenses > plannedBudget ? "Overspent" : "Saved"}
          </p>
          <p
            className={`text-2xl font-bold ${
              totalExpenses > plannedBudget ? "text-red-500" : "text-green-500"
            }`}
          >
            {convertToINR(Math.abs(totalExpenses - plannedBudget))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TripWiseExpenseCard;
