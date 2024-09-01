function calculateTravelHours(
  departureDate,
  departureTime,
  arrivalDate,
  arrivalTime
) {
  // Combine date and time strings to create full Date objects
  const departure = new Date(`${departureDate.split("T")[0]} ${departureTime}`);
  const arrival = new Date(`${arrivalDate.split("T")[0]} ${arrivalTime}`);

  // Calculate the difference in milliseconds
  const differenceInMs = arrival - departure;

  // Convert milliseconds to hours
  const differenceInHours = differenceInMs / (1000 * 60 * 60);

  return differenceInHours;
}

export { calculateTravelHours };
