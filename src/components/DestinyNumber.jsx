import { useContext, useEffect } from "react";
import { UserDetailContext } from "../context/UserDetailContext";
import {
  CalculateDestiny,
  formatDigitsWithPlus,
} from "../utils/CalculateDestiny";
import { CalculateMulank } from "../utils/CalculateMulank";

const DestinyNumber = () => {
  const { date, addMulank, addDestiny } = useContext(UserDetailContext);

  const destinyCalculation = date ? CalculateDestiny(date) : null;
  const mulankCalculation = date ? CalculateMulank(date) : null;

  useEffect(() => {
    if (mulankCalculation) {
      const mulankValue =
        mulankCalculation.allSums[0] >= 10
          ? mulankCalculation.allSums[1]
          : mulankCalculation.allSums[0];
      addMulank(mulankValue);
    }

    if (destinyCalculation) {
      const destinyValue =
        destinyCalculation.allSums[0] >= 10
          ? destinyCalculation.allSums[1]
          : destinyCalculation.allSums[0];
      addDestiny(destinyValue);
    }
  }, [mulankCalculation, destinyCalculation]);

  return (
    <div className="flex flex-col items-center">
      <div className="my-[5rem] flex flex-col items-center">
        <h1 className="section-header">MULANK NUMBER</h1>

        {mulankCalculation && (
          <div className="border-2 rounded-md border-slate-500 w-fit flex flex-col items-center justify-center py-[1rem] px-[4rem] mt-5 gap-2 md:px-[6rem]">
            <div className="font-semibold text-xl">D.O.B - {date}</div>
            <div>
              {formatDigitsWithPlus(mulankCalculation.digits)}{" "}
              {mulankCalculation.allSums[0]}
            </div>

            {mulankCalculation.allSums[0] >= 10 ? (
              <div className="flex flex-col gap-2">
                <div>
                  {formatDigitsWithPlus(mulankCalculation.reducedDigits)}{" "}
                  {mulankCalculation.allSums[1]}
                </div>
                <div>
                  {" "}
                  <span className="text-4xl">
                    {" "}
                    {mulankCalculation.allSums[1]}
                  </span>{" "}
                  is your MULANK
                </div>
              </div>
            ) : (
              <div>
                <span className="text-4xl">
                  {mulankCalculation.allSums[0]}{" "}
                </span>
                is your MULANK
              </div>
            )}
          </div>
        )}
      </div>

      <div className="my-[5rem] flex flex-col items-center">
        <h1 className="section-header text-center">DESTINY / BHAGYANK NUMBER</h1>

        {destinyCalculation && (
          <div className="border-2 rounded-md border-slate-500 w-fit flex flex-col items-center justify-center py-[1rem] md:px-[6rem] px-[3.5rem] mt-5 gap-2">
            <div className="font-semibold text-xl">D.O.B - {date}</div>
            <div>
              {formatDigitsWithPlus(destinyCalculation.digits)}{" "}
              {destinyCalculation.allSums[0]}
            </div>

            {destinyCalculation.allSums.map((sum, index) => (
              <div key={index}>
                {index > 0 && (
                  <div>
                    {formatDigitsWithPlus(
                      destinyCalculation.allSums[index - 1]
                        .toString()
                        .split("")
                        .map(Number)
                    )}
                    {sum}
                  </div>
                )}
              </div>
            ))}

            <div>
              <span className="text-4xl">
                {destinyCalculation.allSums.at(-1)}
              </span>{" "}
              is your Destiny
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DestinyNumber;
