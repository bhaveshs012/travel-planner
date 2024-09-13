import React from "react";
import { SectionHeading } from "./index";
import TransactionTile from "../../../tripwiseExpenseDetail/components/TransactionTile";

function ExpenseSection({ tripExpenseSummaryForDashboard }) {
  const recentTransactions = tripExpenseSummaryForDashboard.recentExpenses;

  return (
    <section>
      <SectionHeading title={"Expenses"} subtile={"Add your expenses here.."} />
      <div className="space-y-8">
        {recentTransactions.map((transaction, index) => {
          return (
            <TransactionTile
              key={index}
              category={transaction.category}
              paidTo={transaction.paidTo}
              paidBy={transaction.paidBy}
              description={transaction.description}
              splitBetween={transaction.splitBetween}
              amount={transaction.amount}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ExpenseSection;
