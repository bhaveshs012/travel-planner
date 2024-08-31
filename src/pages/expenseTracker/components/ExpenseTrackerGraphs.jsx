import React, { useState, useMemo } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import ApiConstants from "../../../constants/apiConstants";
import {
  convertCategoryDataForSelectedYear,
  convertMonthDataForSelectedYear,
} from "../utils/dataConvertor";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);

const ExpenseTrackerGraphs = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleYearChange = (e) => {
    const newYear = parseInt(e.target.value, 10);
    console.log("Year changed to:", newYear);
    setSelectedYear(e.target.value);
  };

  //* Get Entire Data for Every Year ::
  const fetchMonthWiseSpendingForYear = async () => {
    const response = await axios.get(
      `${ApiConstants.baseUrl}/expenses/getMonthWiseExpenses`,
      { withCredentials: true }
    );
    return response.data.data;
  };

  const fetchCategoryWiseSpendingForYear = async () => {
    const response = await axios.get(
      `${ApiConstants.baseUrl}/expenses/getCategoryWiseExpenses`,
      { withCredentials: true }
    );
    return response.data.data;
  };

  const {
    data: monthwiseData,
    error: monthwiseDataError,
    isLoading: isMonthwiseLoading,
  } = useQuery({
    queryKey: ["monthWiseSpending"],
    queryFn: fetchMonthWiseSpendingForYear,
  });

  const {
    data: categoryWiseData,
    error: categoryDataError,
    isLoading: isCategoryWiseLoading,
  } = useQuery({
    queryKey: ["categoryWiseSpending"],
    queryFn: fetchCategoryWiseSpendingForYear,
  });

  //* Filter out the data only for the selected year
  const filteredMonthWiseData = useMemo(() => {
    if (!monthwiseData) return null;
    const data = convertMonthDataForSelectedYear(monthwiseData, selectedYear);
    console.log("Filtered Month Wise Data:", data);
    return data;
  }, [monthwiseData, selectedYear]);

  const filteredCategoryWiseData = useMemo(() => {
    if (!categoryWiseData) return null;
    const data = convertCategoryDataForSelectedYear(
      categoryWiseData,
      selectedYear
    );
    console.log("Filtered Category Wise Data:", data);
    return data;
  }, [categoryWiseData, selectedYear]);

  if (isMonthwiseLoading || isCategoryWiseLoading) {
    return <div>Loading...</div>;
  }

  if (monthwiseDataError || categoryDataError) {
    return (
      <div>
        Error: {monthwiseDataError?.message || categoryDataError?.message}
      </div>
    );
  }

  return (
    <div className="flex flex-col p-4 space-y-8">
      <div className="flex justify-end w-full mb-4">
        <select
          className="ml-4 p-2 border border-gray-300 rounded"
          value={selectedYear}
          onChange={handleYearChange}
        >
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
      <div className="flex flex-row space-x-8 w-full">
        <div className="w-1/2" style={{ height: "250px" }}>
          {filteredMonthWiseData ? (
            <>
              <Bar
                data={filteredMonthWiseData}
                options={{ maintainAspectRatio: false }}
              />
              <p className="text-center text-md my-4 font-semibold mb-4">
                Monthwise Spending
              </p>
            </>
          ) : (
            <p>No data available for Monthwise Spending</p>
          )}
        </div>
        <div className="w-1/2" style={{ height: "250px" }}>
          {filteredCategoryWiseData ? (
            <>
              <Pie
                data={filteredCategoryWiseData}
                options={{ maintainAspectRatio: false }}
              />
              <p className="text-center text-md my-4 font-semibold mb-4">
                Categorywise Spending
              </p>
            </>
          ) : (
            <p>No data available for Categorywise Spending</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpenseTrackerGraphs;
