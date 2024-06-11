const transactions = [
  {
    category: "food",
    paidTo: "Pizza Place",
    description: "Dinner with friends",
    paidBy: "John Doe",
    splitBetween: [
      { personName: "Alice", imageUrl: "https://i.pravatar.cc/150?img=1" },
      { personName: "Bob", imageUrl: "https://i.pravatar.cc/150?img=2" },
      { personName: "Charlie", imageUrl: "https://i.pravatar.cc/150?img=3" },
    ],
    amountPaid: 1500,
  },
  {
    category: "travel",
    paidTo: "Uber",
    description: "Ride to airport",
    paidBy: "Jane Smith",
    splitBetween: [
      { personName: "David", imageUrl: "https://i.pravatar.cc/150?img=4" },
      { personName: "Eva", imageUrl: "https://i.pravatar.cc/150?img=5" },
    ],
    amountPaid: 500,
  },
  {
    category: "miscellaneous",
    paidTo: "Supermarket",
    description: "Weekly groceries",
    paidBy: "Michael Johnson",
    splitBetween: [
      { personName: "Fiona", imageUrl: "https://i.pravatar.cc/150?img=6" },
      { personName: "George", imageUrl: "https://i.pravatar.cc/150?img=7" },
      { personName: "Hannah", imageUrl: "https://i.pravatar.cc/150?img=8" },
      { personName: "Ivy", imageUrl: "https://i.pravatar.cc/150?img=9" },
    ],
    amountPaid: 3000,
  },
  {
    category: "entertainment",
    paidTo: "Cinema",
    description: "Movie night",
    paidBy: "Chris Lee",
    splitBetween: [
      { personName: "Jack", imageUrl: "https://i.pravatar.cc/150?img=10" },
      { personName: "Kate", imageUrl: "https://i.pravatar.cc/150?img=11" },
    ],
    amountPaid: 800,
  },
  {
    category: "miscellaneous",
    paidTo: "Electric Company",
    description: "Monthly bill",
    paidBy: "Laura Adams",
    splitBetween: [
      { personName: "Liam", imageUrl: "https://i.pravatar.cc/150?img=12" },
      { personName: "Mia", imageUrl: "https://i.pravatar.cc/150?img=13" },
    ],
    amountPaid: 1200,
  },
  {
    category: "food",
    paidTo: "Restaurant",
    description: "Lunch with colleagues",
    paidBy: "Olivia Brown",
    splitBetween: [
      { personName: "Nathan", imageUrl: "https://i.pravatar.cc/150?img=14" },
      { personName: "Olivia", imageUrl: "https://i.pravatar.cc/150?img=15" },
      { personName: "Paul", imageUrl: "https://i.pravatar.cc/150?img=16" },
    ],
    amountPaid: 1100,
  },
  {
    category: "miscellaneous",
    paidTo: "Mall",
    description: "New clothes",
    paidBy: "Emma Wilson",
    splitBetween: [
      { personName: "Quinn", imageUrl: "https://i.pravatar.cc/150?img=17" },
      { personName: "Rachel", imageUrl: "https://i.pravatar.cc/150?img=18" },
    ],
    amountPaid: 2500,
  },
  {
    category: "miscellaneous",
    paidTo: "Pharmacy",
    description: "Medicine",
    paidBy: "Sophia Thompson",
    splitBetween: [
      { personName: "Sam", imageUrl: "https://i.pravatar.cc/150?img=19" },
      { personName: "Taylor", imageUrl: "https://i.pravatar.cc/150?img=20" },
    ],
    amountPaid: 600,
  },
  {
    category: "accomodation",
    paidTo: "Landlord",
    description: "Monthly rent",
    paidBy: "Lucas Martinez",
    splitBetween: [
      { personName: "Ursula", imageUrl: "https://i.pravatar.cc/150?img=21" },
      { personName: "Victor", imageUrl: "https://i.pravatar.cc/150?img=22" },
      { personName: "Wendy", imageUrl: "https://i.pravatar.cc/150?img=23" },
    ],
    amountPaid: 20000,
  },
  {
    category: "entertainment",
    paidTo: "Streaming Service",
    description: "Monthly subscription",
    paidBy: "Isabella Garcia",
    splitBetween: [
      { personName: "Xander", imageUrl: "https://i.pravatar.cc/150?img=24" },
      { personName: "Yara", imageUrl: "https://i.pravatar.cc/150?img=25" },
    ],
    amountPaid: 400,
  },
];

export { transactions };
