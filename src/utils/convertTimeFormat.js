function convertToTimeFormat(timeStr) {
  // Regular expression to match and validate the input time format
  const timeRegex = /^([01]?[0-9]):([0-5][0-9])$/;

  // Check if the input matches the expected HH:MM format
  const match = timeStr.match(timeRegex);
  if (!match) {
    throw new Error("Invalid time format. Please use HH:MM or H:MM format.");
  }

  let [hours, minutes] = match.slice(1).map(Number); // Extract hours and minutes as numbers
  let period = "AM"; // Default to AM

  if (hours === 0) {
    hours = 12; // Convert "0" hours to "12 AM"
  } else if (hours === 12) {
    period = "PM"; // 12 PM is noon
  } else if (hours > 12) {
    hours -= 12; // Convert 24-hour format to 12-hour format
    period = "PM";
  }

  // Convert hours back to string and pad with leading zero if necessary
  const hoursStr = hours < 10 ? `0${hours}` : `${hours}`;

  return `${hoursStr}:${minutes < 10 ? `0${minutes}` : minutes} ${period}`;
}

export { convertToTimeFormat };
