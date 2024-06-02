import React from "react";
import { Header } from "./components";
import ExpenseTrackerGraphs from "./components/ExpenseTrackerGraphs";

function ExpenseTracker() {
  return (
    <div className="p-8">
      <Header />
      <div>
        <ExpenseTrackerGraphs />
      </div>
    </div>
  );
}

export default ExpenseTracker;
