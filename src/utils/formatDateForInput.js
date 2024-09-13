const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so we add 1
  const day = String(d.getDate()).padStart(2, "0"); // Pad single digits with a leading 0

  return `${year}-${month}-${day}`;
};

export default formatDate;
