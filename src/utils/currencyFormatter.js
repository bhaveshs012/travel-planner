const convertToINR = (amount) => {
  return `${Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  }).format(amount)}`;
};

export { convertToINR };
