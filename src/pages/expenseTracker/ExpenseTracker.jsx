import React from "react";
import { ExpenseTrackerGraphs, TripWiseExpenseCard } from "./components";
import { PageHeader } from "../../components/index";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ApiConstants from "../../constants/apiConstants";

function ExpenseTracker() {
  const fetchTripWiseExpenseData = async () => {
    const response = await axios.get(
      `${ApiConstants.baseUrl}/tripPlan/getTripExpenseSummaryForUser`,
      { withCredentials: true }
    );
    return response.data.data;
  };

  const {
    data: tripwiseExpenseData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["tripwiseExpense"],
    queryFn: fetchTripWiseExpenseData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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
            {tripwiseExpenseData.map((expenseData, index) => (
              <TripWiseExpenseCard key={index} {...expenseData} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseTracker;
