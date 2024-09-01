const categorywiseData = {
  labels: ["Travel", "Accommodation", "Food", "Entertainment", "Miscellaneous"],
  datasets: [
    {
      label: "Expenses",
      data: [0, 0, 0, 0, 0],
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

const categoryMapping = {
  travel: "Travel",
  accommodation: "Accommodation",
  food: "Food",
  entertainment: "Entertainment",
  miscellaneous: "Miscellaneous",
};

export { categorywiseData, categoryMapping };
