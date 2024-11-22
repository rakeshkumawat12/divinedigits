import { useContext } from "react";
import AngelNumber from "../components/AngelNumber";
import DestinyNumber from "../components/DestinyNumber";
import LuckyNumbers from "../components/LuckyNumbers";
import MulankDestinyCombo from "../components/MulankDestinyCombo";
import Numeroscope from "../components/Numeroscope";
import PersonalityTraits from "../components/PersonalityTraits";
import RajyogInsights from "../components/RajyogInsights";
import SignatureAnalysis from "../components/SignatureAnalysis";
import { UserDetailContext } from "../context/UserDetailContext";
import PredictionDisclaimer from "../components/PredictionDisclaimer";

const Main = () => {
  const { date } = useContext(UserDetailContext);

  return (
    <>
      <div className="text-3xl font-bold text-center mt-8"> Welcome!</div>
      <p className="m-auto text-center mt-1">
        You were born on <span className="font-semibold">{date}</span>. Your
        journey through numbers begins here!
      </p>
      <DestinyNumber />
      <PersonalityTraits />
      <Numeroscope />
      <RajyogInsights />
      <LuckyNumbers />
      <MulankDestinyCombo />
      <AngelNumber />
      <SignatureAnalysis />
      <PredictionDisclaimer />
    </>
  );
};

export default Main;
