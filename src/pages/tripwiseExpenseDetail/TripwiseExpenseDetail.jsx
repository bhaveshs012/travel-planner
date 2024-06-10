import React from "react";
import { PageHeader } from "../../components";
import { BudgetSummaryCard } from "../plan/editPlan/components";
import { BasicTableLayout } from "./components";
import { amountPaidByEach, amountOwedByYou, amountOwedToYou } from "./data";
import { SmallFilledButton } from "../../components/Buttons";

function TripwiseExpenseDetail() {
  const [totalExpenses, fixedBudget] = [12500, 40000];
  console.log(totalExpenses);
  console.log(fixedBudget);
  return (
    <div className="p-8 flex flex-col gap-y-8">
      <PageHeader
        title={"Goa Trip With the Boys"}
        subtitle={"Keep Track of This Journey's Finances with Ease"}
      />
      <div className="w-full">
        <BudgetSummaryCard
          totalExpenses={totalExpenses}
          fixedBudget={fixedBudget}
          buttonsRequired={false}
        />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold">Contribution Summary</p>
        <SmallFilledButton title={"Settle Up"} />
      </div>

      <div className="flex gap-x-4 justify-evenly w-full shadow-lg rounded-lg p-4">
        <BasicTableLayout
          heading={"Amount Contributed by Each"}
          data={amountPaidByEach}
        />
        <BasicTableLayout
          heading={"Amount Owed by You"}
          data={amountOwedByYou}
        />
        <BasicTableLayout
          heading={"Amount Owed to You"}
          data={amountOwedToYou}
        />
      </div>
    </div>
  );
}

export default TripwiseExpenseDetail;
