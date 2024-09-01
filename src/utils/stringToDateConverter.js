const stringToDateConverter = (string) => {
  return new Date(string).toLocaleString("en-US", {
    year: "numeric", // e.g., "2024"
    month: "short", // e.g., "August"
    day: "numeric", // e.g., "31"
  });
};

export { stringToDateConverter };
