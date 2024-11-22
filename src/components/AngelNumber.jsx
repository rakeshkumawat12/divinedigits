import AngelNumbers from "../data/AngelNumbers";
import iIcon from "../assets/iIcon.png";
import { useState } from "react";

const AngelNumber = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative flex">
        <h1 className="section-header mb-6 text-center flex">
          EXPLAIN ANGEL NUMBERS</h1>
          <img
            className="h-4"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            src={iIcon}
            alt="iIcon"
          />

        {showTooltip && (
          <div className="absolute top-9 left-9 bg-gray-800 text-white text-sm rounded-md py-1 px-2 shadow-md">
            Angel numbers are sequences of repeating digits that often appear in
            our lives. E.g: Clock Times, License plate numbers...
          </div>
        )}
      </div>

      <div className="w-fit bg-white rounded-sm shadow-lg border-2 m-3 md:m-0">
        {AngelNumbers.map((item, idx) => {
          return (
            <div
              className="flex items-center py-3 px-4 border-b-2 border-gray-300 hover:opacity-80 transition duration-300"
              key={idx}
            >
              <div className="text-lg md:text-xl w-2/5 font-medium text-white bg-transparent">
                {item.number}
              </div>
              <div className="text-md md:text-lg w-3/5 text-gray-300 bg-transparent">
                {item.info}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AngelNumber;
