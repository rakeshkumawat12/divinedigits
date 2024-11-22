import { ShootingStars } from "../components/ui/ShootingStar";
import { StarsBackground } from "../components/ui/StarsBackground";
const PredictionDisclaimer = () => {
  return (
    <div className="h-[30rem] rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
      <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
        <span className="bg-transparent text-2xl font-medium m-5">
          These insights are based on your unique numerological profile. If
          something doesn't seem to fit right now, don't worry. Sometimes, it
          takes time for things to make sense. Trust your journey and stay
          positive!
        </span>
      </h2>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
};

export default PredictionDisclaimer;
