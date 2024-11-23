import SignCircle from "../assets/SignCircle.png";
import { useContext, useState } from "react";
import { UserDetailContext } from "../context/UserDetailContext";
import { useNavigate } from "react-router-dom";

const DateInput = () => {
  const { date, addDate } = useContext(UserDetailContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!date) {
      alert("Please enter date.");
    }
    navigate("/main");
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      <img
        className="h-[23rem] absolute object-cover animate-rotate-right opacity-[0.5]"
        src={SignCircle}
        alt="SignCircle"
      />

      <div className="z-10 flex flex-col items-center justify-center bg-transparent gap-4">
        <div className="w-fit bg-transparent ">
          <label
            htmlFor="dobdate"
            className="block text-center text-gray-400 text-sm font-bold mb-2 bg-transparent"
          >
            Select your Date of Birth
          </label>
          <input
            id="dobdate"
            className="input-text bg-white text-black cursor-pointer"
            type="date"
            onChange={(e) => addDate(e.target.value)}
          />
        </div>

        <button
          id="trackClickButton"
          onClick={() => {
            handleSubmit();
          }}
          className="shimmer text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default DateInput;
