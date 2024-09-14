import React, { useRef } from "react";
import { PageHeader } from "../../components";
import { BudgetSummaryCard } from "../plan/editPlan/components";
import { BasicTableLayout, TransactionTile } from "./components";
import { FaPlus } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../../api/apiClient";
import { AddTransactionModal } from "../../components/index";

function TripwiseExpenseDetail() {
  const { tripId } = useParams();
  //* Add Transaction Modal
  const transactionModalRef = useRef(null);
  const handleOpenModal = () => {
    transactionModalRef.current.openModal();
  };

  //* Trip Expense Summary
  const fetchTripSummary = async () => {
    const response = await apiClient.get(`/tripPlan/${tripId}/getSummary`);
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
    const response = await apiClient.get(
      `/expenses/${tripId}/getAmountOwedByUser`
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
    const response = await apiClient.get(
      `/expenses/${tripId}/getAmountOwedToTheUser`
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
    const response = await apiClient.get(
      `/expenses/${tripId}/getAmountContributedByEachUser`
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
    const response = await apiClient.get(`/expenses/${tripId}/getTripExpenses`);
    return response.data.data;
  };
  const {
    data: transactionData,
    error: transactionError,
    isLoading: isTransactionLoading,
  } = useQuery({
    queryKey: ["fetchTransactions", tripId, handleOpenModal],
    queryFn: fetchTransactions,
  });

  if (
    isLoading ||
    isAmountOwedByUserLoading ||
    isAmountOwedToUserLoading ||
    contributionError ||
    isTransactionLoading
  )
    return <div>Loading...</div>;
  if (
    error ||
    amountOwedByUserError ||
    amountOwedToUserError ||
    contributionDetailsLoading ||
    transactionError
  ) {
    return <div>Error</div>;
  }

  return (
    <div className="p-8 flex flex-col gap-y-8">
      <AddTransactionModal tripId={tripId} ref={transactionModalRef} />
      <PageHeader
        title={tripSummaryData.tripName}
        subtitle={tripSummaryData.tripDesc}
      />
      <div className="w-full">
        <BudgetSummaryCard
          tripExpenseSummaryForDashboard={tripSummaryData}
          buttonsRequired={false}
          isDetailedExpensePage={true}
        />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold">Contribution Summary</p>
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
        <button
          onClick={handleOpenModal}
          className="flex space-x-4 justify-center items-center px-4 py-2 border-2 border-black text-black text-sm font-semibold rounded hover:bg-black hover:text-white"
        >
          <FaPlus />
          <p>Add new Transaction</p>
        </button>
      </div>
      <div className="flex flex-col gap-y-4">
        {transactionData.map((transaction, index) => (
          <TransactionTile key={index} {...transaction} />
        ))}
      </div>
    </div>
  );
}

export default TripwiseExpenseDetail;
