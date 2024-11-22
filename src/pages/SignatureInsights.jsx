import {
  SignatureInsightsInfo,
  PowerfulSignTips,
} from "../data/SignatureInsightsInfo";
import { Vortex } from "../components/ui/Vortex";

const SignatureInsights = () => {
  return (
    <div className="w-[100%] mx-auto rounded-md h-full overflow-hidden bg-transparent">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full bg-transparent"
      >
        <div className="flex flex-col items-center justify-center bg-transparent">
          <div className="flex flex-col items-center justify-center bg-transparent">
            <h1 className="section-header my-6">SIGNATURE ANALYSIS</h1>

            <div className="border-2 rounded-md border-slate-500 w-[95%] flex flex-col py-[1rem] px-[1.2rem]">
              {SignatureInsightsInfo.map((item, index) => {
                return (
                  <div className="my-3" key={index}>
                    <div className="text-2xl text-slate-50">
                      {item.description}
                    </div>
                    <div className="text-base">
                      {item.interpretations.map((interpretation, i) => (
                        <div className=" text-[#888888]" key={i}>
                          &#8227; {interpretation}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mt-10 bg-transparent">
            <h1 className="section-header my-6">
              TIPS FOR A POWERFUL SIGNATURE:
            </h1>
            <div className="border-2 rounded-md border-slate-500 w-[95%] flex flex-col py-[1rem] px-[1.2rem]">
              {PowerfulSignTips.map((item, index) => {
                return (
                  <div className="my-3" key={index}>
                    <div className="text-2xl text-slate-50">{item.tip}</div>
                    <div className="text-base text-slate-300">
                      {item.qualities.map((quality, i) => (
                        <div className=" text-[#888888]" key={i}>
                          &#8227; {quality}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Vortex>
    </div>
  );
};

export default SignatureInsights;
