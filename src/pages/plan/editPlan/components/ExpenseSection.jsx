import React from "react";
import { SectionHeading, ExpenseListItem } from "./index";

function ExpenseSection() {
  return (
    <section>
      <SectionHeading title={"Expenses"} subtile={"Add your expenses here.."} />
      <div className="space-y-8">
        <ExpenseListItem
          category={"accomodation"}
          paidTo={"Beach View Resort"}
          paidBy={"Bhavesh Sengunthar"}
          paymentDate={"02-08-2024"}
          amount={5500}
          peopleInvoled={["Rajesh", "Suresh", "Vishesh"]}
        />
        <ExpenseListItem
          category={"travel"}
          paidTo={"Train Tickets"}
          paidBy={"Bhavesh Sengunthar"}
          paymentDate={"02-08-2024"}
          amount={1200}
          peopleInvoled={["Rajesh", "Suresh", "Vishesh"]}
        />
        <ExpenseListItem
          category={"entertainment"}
          paidTo={"Club Visit"}
          paidBy={"Vishesh Karan"}
          paymentDate={"02-08-2024"}
          amount={7000}
          peopleInvoled={["Rajesh", "Suresh", "Bhavesh"]}
        />
      </div>
    </section>
  );
}

export default ExpenseSection;
