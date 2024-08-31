import { categoryMapping, categorywiseData } from "../data/categoryWiseExpense";
import { monthwiseData, monthWiseMapping } from "../data/monthwiseExpense";

function convertCategoryDataForSelectedYear(data, year) {
  // Reset the data array to zero before processing
  categorywiseData.datasets[0].data = [0, 0, 0, 0, 0];

  // Filter data for the selected year
  const filteredData = data.filter((item) => item.year === year);

  // Aggregate the totalAmount per category
  filteredData.forEach((item) => {
    const categoryKey = item.category.toLowerCase();
    const mappedCategory = categoryMapping[categoryKey];
    if (mappedCategory) {
      const categoryIndex = categorywiseData.labels.indexOf(mappedCategory);
      if (categoryIndex !== -1) {
        // Ensure that totalAmount is a number
        const amount = parseFloat(item.totalAmount);
        if (!isNaN(amount)) {
          categorywiseData.datasets[0].data[categoryIndex] += amount;
        }
      }
    }
  });
  return categorywiseData;
}

const convertMonthDataForSelectedYear = (data, year) => {
  // reset the previous data
  monthwiseData.datasets[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  // filter out data for only selected year
  const filteredData = data.filter((item) => item.year === year);

  // aggregate the data to find total amount
  filteredData.forEach((item) => {
    const monthKey = item.month;
    const mappedMonth = monthWiseMapping[monthKey];
    if (mappedMonth) {
      const monthIndex = monthwiseData.labels.indexOf(mappedMonth);
      if (monthIndex !== -1) {
        // Ensure that totalAmount is a number
        const amount = parseFloat(item.totalAmount);
        if (!isNaN(amount)) {
          monthwiseData.datasets[0].data[monthIndex] += amount;
        }
      }
    }
  });
  return monthwiseData;
};

export { convertCategoryDataForSelectedYear, convertMonthDataForSelectedYear };
