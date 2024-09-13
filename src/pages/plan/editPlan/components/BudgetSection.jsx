import React from "react";
import { FaPlus } from "react-icons/fa6";
import { BudgetSummaryCard, ExpenseSection, SectionHeading } from "./index";
import { ButtonWithIcon } from "../../../../components/Buttons";
import apiClient from "../../../../api/apiClient";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const BudgetSection = React.forwardRef(({ props }, ref) => {
  const { tripId } = useParams();

  const getTripExpenseSummaryForDashboard = async () => {
    const response = await apiClient.get(
      `/tripPlan/${tripId}/getTripExpenseSummaryForDashboard`
    );
    return response.data.data;
  };

  const {
    data: tripExpenseSummaryForDashboard,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["getTripExpenseSummaryForDashboard", tripId],
    queryFn: getTripExpenseSummaryForDashboard,
  });

  if (isLoading) return <div>Loading ...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <section className="grid gap-y-8" ref={ref} {...props}>
      <div className="flex justify-between items-center">
        <SectionHeading
          title={"Budgeting"}
          subtile={"Track all of your trip expenses at one place.."}
        />
        <div>
          <ButtonWithIcon title={"Add an Expense"} icon={<FaPlus />} />
        </div>
      </div>
      <BudgetSummaryCard
        tripExpenseSummaryForDashboard={tripExpenseSummaryForDashboard}
      />
      <ExpenseSection
        tripExpenseSummaryForDashboard={tripExpenseSummaryForDashboard}
      />
    </section>
  );
});

export default BudgetSection;
