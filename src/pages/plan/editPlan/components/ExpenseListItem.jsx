import React from "react";
import { FaPerson, FaCalendarDays, FaPeopleGroup } from "react-icons/fa6";
import categoryIconList from "../data/categoryIconList.jsx";

function ExpenseListItem({
  category,
  paidTo,
  paidBy,
  amount,
  paymentDate,
  peopleInvoled,
}) {
  const IconComponent =
    categoryIconList[category] || categoryIconList.miscellaneous;
  return (
    <div className="flex items-center justify-between p-4 shadow-lg">
      <div className="flex items-center">
        <div className="p-4 rounded-lg bg-black text-center mr-4 text-white">
          <IconComponent />
        </div>
        <div className="items-start">
          <div className="text-lg font-semibold text-black">{paidTo}</div>
          <div className="flex gap-1 my-2 items-center text-sm text-gray-600">
            <FaPerson />
            <p className="text-sm font-bold text-green-500">{paidBy}</p>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-1 items-center text-sm text-gray-600">
              <FaCalendarDays />
              <p>
                <span className="font-semibold">Paid On:</span> {paymentDate}
              </p>
            </div>
            <div className="flex gap-1 items-center text-sm text-gray-600">
              <FaPeopleGroup />
              <div className="flex space-x-1">
                <span className="font-semibold">People Involed:</span>
                {peopleInvoled.map((person) => (
                  <p className="flex">{person}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="px-4 py-2 bg-black text-white text-sm font-semibold rounded hover:bg-gray-900">
        {`${Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
          minimumFractionDigits: 2,
        }).format(amount)}`}
      </button>
    </div>
  );
}

export default ExpenseListItem;
