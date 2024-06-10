import React from "react";
import { ExpenseTrackerGraphs, TripWiseExpenseCard } from "./components";
import tripWiseExpense from "./data/tripwiseExpense";
import { PageHeader } from "../../components/index";

function ExpenseTracker() {
  return (
    <div className="p-8">
      <PageHeader
        title={"Expense Tracker"}
        subtitle={"Keep Track of Your Journey's Finances with Ease"}
      />
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
