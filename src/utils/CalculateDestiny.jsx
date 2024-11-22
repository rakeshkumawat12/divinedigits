export const CalculateDestiny = (dob) => {
  const digits = dob.replace(/\D/g, "").split("").map(Number);

  const sumDigits = (arr) => arr.reduce((acc, num) => acc + num, 0);

  let allSums = [];
  let currentSum = sumDigits(digits);

  allSums.push(currentSum);

  while (currentSum >= 10) {
    currentSum = sumDigits(currentSum.toString().split("").map(Number));
    allSums.push(currentSum);
  }

  return { digits, allSums };
};

export const formatDigitsWithPlus = (digits) => digits.join(" + ") + " = ";



