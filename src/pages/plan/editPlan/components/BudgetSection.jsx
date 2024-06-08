import React from "react";
import { FaPlus } from "react-icons/fa6";
import { BudgetSummaryCard, ExpenseSection, SectionHeading } from "./index";
import { ButtonWithIcon } from "../../../../components/Buttons";

function BudgetSection() {
  return (
    <section className="grid gap-y-8">
      <div className="flex justify-between items-center">
        <SectionHeading
          title={"Budgeting"}
          subtile={"Track all of your trip expenses at one place.."}
        />
        <div>
          <ButtonWithIcon title={"Add an Expense"} icon={<FaPlus />} />
        </div>
      </div>
      <BudgetSummaryCard totalExpenses={12500} fixedBudget={40000} />
      <ExpenseSection />
    </section>
  );
}

export default BudgetSection;
