import { useContext, useEffect, useState } from "react";
import { UserDetailContext } from "../context/UserDetailContext";
import ComboMulankDestiny from "../data/ComboMulankDestiny";
import { SparklesCore } from "../components/ui/Sparkles";

const MulankDestinyCombo = () => {
  const { mulank, destiny } = useContext(UserDetailContext);
  const [combo, setCombo] = useState({ luck: "", remark: "" });

  useEffect(() => {
    const match = ComboMulankDestiny.find(
      (entry) => entry.mulank == mulank && entry.destiny == destiny
    );

    if (match) {
      setCombo({ luck: match.luck, remark: match.remark });
    } else {
      setCombo({ luck: "No match found", remark: "No remark available" });
    }
  }, [mulank, destiny]);

  return (
    <div className="h-[30rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="md:text-7xl text-xl lg:text-3xl font-bold text-center text-white relative z-20">
        <span>{combo.luck} Luck</span> <span>in {combo.remark}</span>
      </div>
      <div className="w-[40rem] h-40 relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
};

export default MulankDestinyCombo;
