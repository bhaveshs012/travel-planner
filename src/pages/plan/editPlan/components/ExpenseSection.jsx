import React from "react";
import { SectionHeading } from "./index";
import TransactionTile from "../../../tripwiseExpenseDetail/components/TransactionTile";

function ExpenseSection({ tripExpenseSummaryForDashboard }) {
  const recentTransactions = tripExpenseSummaryForDashboard.recentExpenses;

  return (
    <section>
      <SectionHeading title={"Expenses"} subtile={"Add your expenses here.."} />
      <div className="space-y-8">
        {recentTransactions.length === 0 ? (
          <div className="text-center p-4">
            <p className="text-lg font-semibold">No expenses added !!</p>
            <p className="text-md text-gray-400">
              Add some expenses by visiting the detailed summary page !!
            </p>
          </div>
        ) : (
          recentTransactions.map((transaction, index) => {
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
          })
        )}
      </div>
    </section>
  );
}

export default ExpenseSection;
