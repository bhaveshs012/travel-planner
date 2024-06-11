import React from "react";
import { getIconForCategory } from "../../../utils/getIconForCategory";
import { AvatarRow } from "../../../components";

function TransactionTile({
  category,
  paidTo,
  description,
  paidBy,
  splitBetween,
  amountPaid,
}) {
  return (
    <div className="flex p-4 shadow-lg rounded-lg justify-between items-center">
      <div className="flex items-center gap-x-2">
        <div className="p-4 rounded-lg bg-black text-center mr-4 text-white">
          {getIconForCategory(category)}
        </div>
        <div className="space-y-2">
          <p className="text-lg font-bold ">{paidTo}</p>
          <p className="text-sm font-medium text-gray-400 ">{description}</p>
          <div className="flex items-center gap-x-2">
            <img
              src="https://i.pravatar.cc/150?img=3"
              alt="Paid By"
              className="object-cover rounded-full h-8 w-8"
            />
            <p className="text-sm font-semibold text-gray-500">{paidBy}</p>
          </div>
        </div>
      </div>
      <div className="text-sm font-semibold">
        <p className="text-sm font-bold text-gray-500">Split Between</p>
        <AvatarRow />
      </div>
      <div className="px-4 py-2 bg-black text-white text-sm font-semibold rounded hover:bg-gray-900">
        {`${Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
          minimumFractionDigits: 2,
        }).format(amountPaid)}`}
      </div>
    </div>
  );
}

export default TransactionTile;
