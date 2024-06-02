import React from "react";
import {
  Header,
  ExpenseTrackerGraphs,
  TripWiseExpenseCard,
} from "./components";
import tripWiseExpense from "./data/tripwiseExpense";

function ExpenseTracker() {
  return (
    <div className="p-8">
      <Header />
      <div>
        <ExpenseTrackerGraphs />
      </div>
      <div className="mt-12">
        <p className="text-xl font-bold my-4">
          Review Your Recent Trip Expenses
        </p>
        <div className="overflow-x-auto scroll-m-2">
          <div className="flex space-x-4">
            {tripWiseExpense.map((expenseData, index) => (
              <TripWiseExpenseCard key={index} {...expenseData} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseTracker;
