import {
  CalculateDestiny,
  formatDigitsWithPlus,
} from "../utils/CalculateDestiny";

describe("CalculateDestiny Utility Function", () => {
  it("should correctly calculate the digits and allSums for a valid date", () => {
    const dob = "12/03/1990";
    const result = CalculateDestiny(dob);

    expect(result.digits).toEqual([1, 2, 0, 3, 1, 9, 9, 0]);
    expect(result.allSums).toEqual([25, 7]);
  });

  it("should handle dates with single-digit sums", () => {
    const dob = "05/10/2023";
    const result = CalculateDestiny(dob);

    expect(result.digits).toEqual([0, 5, 1, 0, 2, 0, 2, 3]);
    expect(result.allSums).toEqual([13, 4]);
  });
});

describe("formatDigitsWithPlus Utility Function", () => {
  it("should format an array of digits with plus signs and equals symbol", () => {
    const digits = [1, 2, 3, 4];
    const formattedString = formatDigitsWithPlus(digits);

    expect(formattedString).toBe("1 + 2 + 3 + 4 = ");
  });

  it('should return an empty string followed by "=" for an empty array', () => {
    const digits = [];
    const formattedString = formatDigitsWithPlus(digits);

    expect(formattedString).toBe(" = ");
  });

  it("should handle a single-digit array correctly", () => {
    const digits = [7];
    const formattedString = formatDigitsWithPlus(digits);

    expect(formattedString).toBe("7 = ");
  });
});
