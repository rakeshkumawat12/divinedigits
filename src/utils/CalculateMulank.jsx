export const CalculateMulank = (dob) => {
  const day = dob.split("/")[0];

  const digits = day.split("").map(Number);

  const sumDigits = (arr) => arr.reduce((acc, num) => acc + num, 0);

  let sum = sumDigits(digits);

  let allSums = [sum];

  const reducedDigits = sum.toString().split("").map(Number);

  while (sum >= 10) {
    const sumDigitsArr = sum.toString().split("").map(Number);
    sum = sumDigits(sumDigitsArr);
    allSums.push(sum);
  }

  return {
    digits,
    allSums,
    reducedDigits,
  };
};
