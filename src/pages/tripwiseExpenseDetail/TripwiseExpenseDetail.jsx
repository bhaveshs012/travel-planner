import React from "react";
import { PageHeader } from "../../components";
import { BudgetSummaryCard } from "../plan/editPlan/components";
import { BasicTableLayout, FilterModal, TransactionTile } from "./components";
import { FaFilter } from "react-icons/fa6";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ButtonWithIcon, SmallFilledButton } from "../../components/Buttons";
import ApiConstants from "../../constants/apiConstants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function TripwiseExpenseDetail() {
  const { tripId } = useParams();

  //* Trip Expense Summary
  const fetchTripSummary = async () => {
    const response = await axios.get(
      `${ApiConstants.baseUrl}/tripPlan/${tripId}/getSummary`,
      { withCredentials: true }
    );
    return response.data.data;
  };

  const {
    data: tripSummaryData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["tripSummary"],
    queryFn: fetchTripSummary,
  });

  //* Contribution and Split Summary
  const getAmountOwedByUser = async () => {
    const response = await axios.get(
      `${ApiConstants.baseUrl}/expenses/${tripId}/getAmountOwedByUser`,
      { withCredentials: true }
    );
    return {
      heading: ["Name", "Amount Owed"],
      data: response.data.data,
    };
  };

  const {
    data: amountOwedByUser,
    error: amountOwedByUserError,
    isLoading: isAmountOwedByUserLoading,
  } = useQuery({
    queryKey: ["amountOwedByUser"],
    queryFn: getAmountOwedByUser,
  });

  const getAmountOwedToTheUser = async () => {
    const response = await axios.get(
      `${ApiConstants.baseUrl}/expenses/${tripId}/getAmountOwedToTheUser`,
      { withCredentials: true }
    );
    return {
      heading: ["Name", "Amount Owed"],
      data: response.data.data,
    };
  };

  const {
    data: amountOwedToUser,
    error: amountOwedToUserError,
    isLoading: isAmountOwedToUserLoading,
  } = useQuery({
    queryKey: ["amountOwedToUser"],
    queryFn: getAmountOwedToTheUser,
  });

  const getAmountContributedByEachUser = async () => {
    const response = await axios.get(
      `${ApiConstants.baseUrl}/expenses/${tripId}/getAmountContributedByEachUser`,
      { withCredentials: true }
    );
    return {
      heading: ["Name", "Amount Contributed"],
      data: response.data.data,
    };
  };

  const {
    data: amountContributedByEachUser,
    error: contributionError,
    isLoading: contributionDetailsLoading,
  } = useQuery({
    queryKey: ["amountContributedByEachUser"],
    queryFn: getAmountContributedByEachUser,
  });

  //* Transaction History
  const fetchTransactions = async () => {
    const response = await axios.get(
      `${ApiConstants.baseUrl}/expenses/${tripId}/getTripExpenses`,
      { withCredentials: true }
    );
    return response.data.data;
  };
  const {
    data: transactionData,
    error: transactionError,
    isLoading: isTransactionLoading,
  } = useQuery({
    queryKey: ["fetchTransactions", tripId],
    queryFn: fetchTransactions,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  if (
    isLoading ||
    isAmountOwedByUserLoading ||
    isAmountOwedToUserLoading ||
    isTransactionLoading
  )
    return <div>Loading...</div>;
  if (
    error ||
    amountOwedByUserError ||
    amountOwedToUserError ||
    transactionError
  )
    return <div>Error: {error.message}</div>;
  if (transactionData === undefined) return <div>Something messed up</div>;

  return (
    <div className="p-8 flex flex-col gap-y-8">
      <PageHeader
        title={tripSummaryData.tripName}
        subtitle={tripSummaryData.tripDesc}
      />
      <div className="w-full">
        <BudgetSummaryCard
          totalExpenses={tripSummaryData.totalExpenses}
          fixedBudget={tripSummaryData.plannedBudget}
          buttonsRequired={false}
        />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold">Contribution Summary</p>
        <SmallFilledButton title={"Settle Up"} />
      </div>

      <div className="flex gap-x-4 justify-evenly w-full shadow-lg rounded-lg p-4">
        <BasicTableLayout
          heading={"Amount Contributed by Each"}
          data={amountContributedByEachUser}
        />
        <BasicTableLayout
          heading={"Amount Owed by You"}
          data={amountOwedByUser}
        />
        <BasicTableLayout
          heading={"Amount Owed to You"}
          data={amountOwedToUser}
        />
      </div>
      <div className="flex justify-between items-center">
        <PageHeader
          title={"Transaction History"}
          subtitle={"View all of your transactions at one place"}
        />
        <ButtonWithIcon
          title={"Filter By"}
          icon={<FaFilter />}
          onClick={handleOpenModal}
        />
      </div>
      <FilterModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <div className="flex flex-col gap-y-4">
        {transactionData.map((transaction, index) => (
          <TransactionTile key={index} {...transaction} />
        ))}
      </div>
    </div>
  );
}

export default TripwiseExpenseDetail;
