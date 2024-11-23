import { useContext, useEffect } from "react";
import { UserDetailContext } from "../context/UserDetailContext";
import {
  getActionPlaneQualities,
  getHeartPlaneQualities,
  getMindPlaneQualities,
  getPracticalPlaneQualities,
  getVisionPlaneQualities,
  getWillPlaneQualities,
  insertIntoGrid,
} from "../utils/LoShu";
import { HoverEffect } from "../components/ui/CardHoverEffect";
import { BackgroundGradient } from "./ui/BackgroundGradient";

const Numeroscope = () => {
  const { date, mulank, destiny, addRajyog } = useContext(UserDetailContext);

  const displayGrid = insertIntoGrid(date, mulank, destiny);

  const isFirstDiagonalFull =
    displayGrid[0][0] !== null &&
    displayGrid[1][1] !== null &&
    displayGrid[2][2] !== null;

  const isSecondDiagonalFull =
    displayGrid[0][2] !== null &&
    displayGrid[1][1] !== null &&
    displayGrid[2][0] !== null;

  useEffect(() => {
    if (isFirstDiagonalFull) {
      addRajyog("Support from Family, Friends, Spouse, Children and Universe");
    } else if (isSecondDiagonalFull) {
      addRajyog("Property Real estate Agriculture Interior Architect");
    } else {
      addRajyog("No Rajyog is present in your numeroscope!");
    }
  }, [isFirstDiagonalFull, isSecondDiagonalFull, addRajyog]);

  const mindPlaneQualities = getMindPlaneQualities(displayGrid);
  const heartPlaneQualities = getHeartPlaneQualities(displayGrid);
  const practicalPlaneQualities = getPracticalPlaneQualities(displayGrid);
  const visionPlaneQualities = getVisionPlaneQualities(displayGrid);
  const willPlaneQualities = getWillPlaneQualities(displayGrid);
  const actionPlaneQualities = getActionPlaneQualities(displayGrid);

  const projects = [
    {
      title: "Mind Plane Qualities",
      description: mindPlaneQualities.map((item, idx) => (
        <div className="flex gap-1" key={idx}>
          {" "}
          <span>&#8227;</span><div>
          {item}
            </div> 
        </div>
      )),
    },
    {
      title: "Heart Plane Qualities",
      description: heartPlaneQualities.map((item, idx) => (
        <div className="flex gap-1" key={idx}>
          {" "}
          <span>&#8227;</span><div>
          {item}
            </div> 
        </div>
      )),
    },
    {
      title: "Practical Plane Qualities",
      description: practicalPlaneQualities.map((item, idx) => (
        <div className="flex gap-1" key={idx}>
          {" "}
          <span>&#8227;</span><div>
          {item}
            </div> 
        </div>
      )),
    },
    {
      title: "Vision Plane Qualities",
      description: visionPlaneQualities.map((item, idx) => (
        <div className="flex gap-1" key={idx}>
          {" "}
          <span>&#8227;</span><div>
          {item}
            </div> 
        </div>
      )),
    },
    {
      title: "Will Plane Qualities",
      description: willPlaneQualities.map((item, idx) => (
        <div className="flex gap-1" key={idx}>
          {" "}
          <span>&#8227;</span><div>
          {item}
            </div> 
        </div>
      )),
    },
    {
      title: "Action Plane Qualities",
      description: actionPlaneQualities.map((item, idx) => (
        <div className="flex gap-1" key={idx}>
          {" "}
          <span>&#8227;</span><div>
          {item}
            </div> 
        </div>
      )),
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center bg-transparent">
        <h1 className="section-header mt-6 mb-6 text-center">
          YOUR PERSONALIZED NUMEROLOGY READING
        </h1>
        <BackgroundGradient>
          {displayGrid.map((row, rowIndex) => (
            <div key={rowIndex} style={{ display: "flex" }}>
              {row.map((cell, colIndex) => (
                <div
                  key={colIndex}
                  className="border border-slate-400 p-3 w-20 h-20 flex items-center justify-center text-black bg-white text-3xl"
                >
                  {cell ?? ""}
                </div>
              ))}
            </div>
          ))}
        </BackgroundGradient>
      </div>

      <div className="flex flex-col items-center">
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </div>
    </div>
  );
};

export default Numeroscope;
