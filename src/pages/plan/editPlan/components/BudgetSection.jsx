import React from "react";
import { FaPlus } from "react-icons/fa6";

function BudgetSection() {
  return (
    <section className="grid gap-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Budgeting</h1>
          <p className="text-md text-gray-400 mt-2">
            Track all of your trip expenses at one place..
          </p>
        </div>
        <div>
          <button className="my-1 flex justify-center items-center space-x-2 bg-black text-white p-2 rounded-lg">
            <span>
              <FaPlus />
            </span>
            <span className="text-sm font-semibold">Add an Expense</span>
          </button>
        </div>
      </div>
      <div className="bg-gray-300 shadow-lg justify-center items-center p-8 rounded-lg">
        Expense Summary
      </div>
    </section>
  );
}

export default BudgetSection;
