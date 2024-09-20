import React from "react";
import { ExpenseTrackerGraphs, TripWiseExpenseCard } from "./components";
import { PageHeader } from "../../components/index";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../../api/apiClient";
import LoadingScreen from "../common/LoadingScreen";
import ErrorScreen from "../common/ErrorScreen";

function ExpenseTracker() {
  const fetchTripWiseExpenseData = async () => {
    const response = await apiClient.get(
      "/tripPlan/getTripExpenseSummaryForUser"
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

  if (isLoading) return <LoadingScreen />;
  if (error) return <ErrorScreen />;

  return (
    <div className="p-8">
      <PageHeader
        title={"Expense Tracker"}
        subtitle={"Keep Track of Your Journey's Finances with Ease"}
      />
      <div>
        <ExpenseTrackerGraphs />
      </div>
      <div className="mt-20">
        <p className="text-xl font-bold my-4">
          Review Your Recent Trip Expenses
        </p>
        <div className="overflow-x-auto scroll-m-2">
          <div className="flex space-x-4">
            {tripwiseExpenseData && tripwiseExpenseData.length !== 0 ? (
              tripwiseExpenseData.map((expenseData, index) => (
                <TripWiseExpenseCard key={index} {...expenseData} />
              ))
            ) : (
              <div className="w-full text-center p-4">
                <p className="text-lg font-semibold">No expenses found</p>
                <p className="text-md text-gray-400">
                  Please add some expenses !! 😁
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseTracker;
