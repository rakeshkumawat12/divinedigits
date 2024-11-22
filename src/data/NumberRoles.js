const NumberRoles = [
  {
    number: 1,
    role: "King",
    relationships: {
      friends: [1, 2, 3, 5, 6, 9],
      enemies: [8],
      neutrals: [4, 7],
    },
  },
  {
    number: 2,
    role: "Queen",
    relationships: {
      friends: [1, 2, 3, 5],
      enemies: [8, 4, 9],
      neutrals: [7, 6],
    },
  },
  {
    number: 3,
    role: "Prime Minister",
    relationships: {
      friends: [1, 2, 3, 5, 7],
      enemies: [6],
      neutrals: [4, 8, 9],
    },
  },
  {
    number: 4,
    role: "Rebel",
    relationships: {
      friends: [1, 5, 7, 6, 4, 8],
      enemies: [2, 9, 4, 8],
      neutrals: [3],
    },
  },
  {
    number: 5,
    role: "Prince",
    relationships: {
      friends: [1, 2, 3, 5, 6],
      enemies: [2],
      neutrals: [4, 7, 8, 9],
    },
  },
  {
    number: 6,
    role: "Teacher (Devil)",
    relationships: {
      friends: [1, 4, 5, 6, 7],
      enemies: [3],
      neutrals: [2, 8, 9],
    },
  },
  {
    number: 7,
    role: "Saint",
    relationships: {
      friends: [1, 3, 5, 4, 6],
      enemies: [1],
      neutrals: [8, 2, 7, 9],
    },
  },
  {
    number: 8,
    role: "Judge",
    relationships: {
      friends: [5, 3, 6, 7, 4, 8, 7],
      enemies: [1, 2, 4, 8],
      neutrals: [9],
    },
  },
  {
    number: 9,
    role: "Commander",
    relationships: {
      friends: [1, 3, 5],
      enemies: [4, 2],
      neutrals: [9, 7, 6, 8],
    },
  },
];

export default NumberRoles;
