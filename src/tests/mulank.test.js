import { CalculateMulank } from "../utils/CalculateMulank";

describe("CalculateMulank Utility Function", () => {
  it("should correctly calculate the digits, allSums, and reducedDigits for a valid date", () => {
    const dob = "12/03/1990";
    const result = CalculateMulank(dob);

    expect(result.digits).toEqual([1, 2]);
    expect(result.allSums).toEqual([3]);
    expect(result.reducedDigits).toEqual([3]);
  });

  it("should handle a date with multiple reductions", () => {
    const dob = "29/05/2000";
    const result = CalculateMulank(dob);

    expect(result.digits).toEqual([2, 9]);
    expect(result.allSums).toEqual([11, 2]);
    expect(result.reducedDigits).toEqual([1, 1]);
  });

  it("should handle single-digit days correctly", () => {
    const dob = "5/10/1985";
    const result = CalculateMulank(dob);

    expect(result.digits).toEqual([5]);
    expect(result.allSums).toEqual([5]);
    expect(result.reducedDigits).toEqual([5]);
  });
});
