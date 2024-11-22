import CenterTriangle from "../assets/CenterTriangle.png";
import Stars from "../assets/Stars.png";
import Moon from "../assets/Moon.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative h-[43rem] flex items-center justify-center">
      <div className="absolute w-[23rem] opacity-35 flex items-center justify-center md:w-[30rem]">
        <img
          src={CenterTriangle}
          alt="Triangle"
          className="absolute object-cover bg-transparent"
        />
        <img
          src={Stars}
          alt="Stars"
          className="absolute  object-cover  bg-transparent animate-rotate-right"
        />
        <img
          src={Moon}
          alt="Moon"
          className="absolute  object-cover  bg-transparent animate-rotate-left"
        />
      </div>

      <div className="absolute w-[75%] text-center flex flex-col items-center justify-center bg-transparent">
        <h1 className="text-[1.6rem] font-semibold bg-transparent mb-[1%] md:text-5xl">
          The Secret Language of Numbers!
        </h1>

        <Link to="/dateinput">
          <button className="btn-border bg-transparent mt-1">
            <span className="btn-animation" />
            <span className="btn-content">Reveal</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
