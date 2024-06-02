import React, { useState } from "react";
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

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);

const ExpenseTrackerGraphs = () => {
  const [selectedYear, setSelectedYear] = useState("2024");

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const monthwiseData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Expenses",
        data:
          selectedYear === "2024"
            ? [
                1200, 1500, 800, 1600, 1900, 2100, 1500, 2000, 2200, 1700, 1800,
                1600,
              ]
            : [
                1000, 1400, 900, 1500, 1800, 2000, 1400, 1900, 2100, 1600, 1700,
                1500,
              ],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const categorywiseData = {
    labels: [
      "Travel",
      "Accommodation",
      "Food",
      "Entertainment",
      "Miscellaneous",
    ],
    datasets: [
      {
        label: "Expenses",
        data: [4000, 2500, 3000, 1500, 800],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

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
        </select>
      </div>
      <div className="flex flex-row space-x-8 w-full">
        <div className="w-1/2" style={{ height: "250px" }}>
          <Bar data={monthwiseData} options={{ maintainAspectRatio: false }} />
          <p className="text-center text-md my-4 font-semibold mb-4">
            Monthwise Spending
          </p>
        </div>
        <div className="w-1/2" style={{ height: "250px" }}>
          <Pie
            data={categorywiseData}
            options={{ maintainAspectRatio: false }}
          />
          <p className="text-center text-md my-4 font-semibold mb-4">
            Categorywise Spending
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTrackerGraphs;
