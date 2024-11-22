import { useContext } from "react";
import { UserDetailContext } from "../context/UserDetailContext";
import PersonalityTraitsData from "../data/PersonalityTraitsData";

import { AnimatedTooltip } from "../components/ui/AnimatedTooltip";

const PersonalityTraits = () => {
  const { date } = useContext(UserDetailContext);

  const day = parseInt(date.slice(0, 2));

  const personality = PersonalityTraitsData.find((personality) =>
    personality.bornOnDates.includes(day)
  );

  const samePersonalities = personality?.samePersonalities || [];

  return (
    <div>
      {personality && (
        <div className="flex flex-col items-center justify-center h-[34rem]">
          <h1 className="section-header text-center">PERSONALITY TRAITS</h1>
          <div className="border-2 rounded-md border-slate-500 w-fit flex flex-col py-[1rem] md:px-[5rem] px-[2rem] mt-5 mx-3 md:mx-0">
            <div className="flex items-center justify-between">
              <div className="w-1/4 font-semibold text-3xl">{day}</div>
              <div className="w-3/4 flex flex-col gap-2">
                {personality.traits.map((trait, index) => {
                  return (
                    <div key={index} className="flex gap-1">
                      <span>&#8227;</span>
                      <span>{trait}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <h3 className="mt-6">
              <span className="text-xl font-medium">Remedy:-</span>{" "}
              {personality.remedy}
            </h3>
          </div>

          <div className="flex mt-9 section-header text-center">
            YOUR PERSONALITY TRAITS ALIGN WITH
          </div>

          <div className="flex flex-row items-center justify-center mt-4 w-full">
            <AnimatedTooltip
              items={samePersonalities.map((person) => ({
                id: person.personName,
                name: person.personName,
                designation: person.accomplishment,
                image: person.imageURL,
              }))}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalityTraits;
