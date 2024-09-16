import React from "react";
import { FaRegMoneyBill1, FaMoneyBillTransfer } from "react-icons/fa6";
import { ButtonWithIcon } from "../../../../components/Buttons";
import { convertToINR } from "../../../../utils/currencyFormatter";
import { useLocation, useNavigate } from "react-router-dom";

function BudgetSummaryCard({
  tripExpenseSummaryForDashboard,
  isDetailedExpensePage,
}) {
  const getSpendingPercentage = () => {
    // Convert inputs to numbers
    const expenses = Number(tripExpenseSummaryForDashboard.totalExpenses);
    const budget = Number(tripExpenseSummaryForDashboard.plannedBudget);

    // Handle division by zero and invalid numbers
    if (isNaN(expenses) || isNaN(budget) || budget === 0) {
      return 0;
    }

    // Calculate the percentage
    const percentage = Math.floor((expenses / budget) * 100);

    // Return the percentage
    return `${percentage}%`;
  };
  const navigate = useNavigate();
  const location = useLocation();
  const handleOnClick = () => {
    if (
      location.pathname !== `/${tripExpenseSummaryForDashboard.tripId}/expenses`
    )
      navigate(`/${tripExpenseSummaryForDashboard.tripId}/expenses`);
  };

  return (
    <div className="h-full bg-gray-100 border border-[0.5] border-gray-200 shadow-lg justify-center items-center p-8 rounded-lg">
      <div className="flex flex-col gap-y-4">
        <div>
          <p className="text-lg">Expenses</p>
          <p className="text-2xl font-bold">
            {convertToINR(tripExpenseSummaryForDashboard.totalExpenses)}
          </p>
        </div>
        <div>
          <p className="text-lg">Planned Budget</p>
          <p className="text-2xl font-bold">
            {convertToINR(tripExpenseSummaryForDashboard.plannedBudget)}
          </p>
        </div>
        {/* Spending Indicator */}
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-black h-2.5 rounded-full"
            style={{
              width: getSpendingPercentage(
                tripExpenseSummaryForDashboard.totalExpenses,
                tripExpenseSummaryForDashboard.plannedBudget
              ),
            }}
          ></div>
        </div>
        {
          <div className="flex space-x-4">
            <div>
              {!isDetailedExpensePage && (
                <ButtonWithIcon
                  title={
                    tripExpenseSummaryForDashboard.plannedBudget !== 0
                      ? "Edit Budget"
                      : "Set a Budget"
                  }
                  icon={<FaRegMoneyBill1 />}
                />
              )}
            </div>
            <div>
              {!isDetailedExpensePage && (
                <ButtonWithIcon
                  title={"View Detailed Summary"}
                  onClick={handleOnClick}
                  icon={<FaMoneyBillTransfer />}
                />
              )}
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default BudgetSummaryCard;
