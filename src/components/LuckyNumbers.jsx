import { useContext, React, useState } from "react";
import { UserDetailContext } from "../context/UserDetailContext";
import NumberRoles from "../data/NumberRoles.js";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../components/ui/CanvasRevealEffect.jsx";

const LuckyNumbers = () => {
  const { mulank, destiny } = useContext(UserDetailContext);

  const getRoleData = (number) =>
    NumberRoles.find((role) => role.number === number);

  const mulankData = getRoleData(mulank);
  const destinyData = getRoleData(destiny);

  if (!mulankData || !destinyData) {
    return <p>Role data not found for mulank or destiny number.</p>;
  }

  const combinedFriends = [
    ...new Set([
      ...mulankData.relationships.friends,
      ...destinyData.relationships.friends,
    ]),
  ];

  const combinedEnemies = [
    ...new Set([
      ...mulankData.relationships.enemies,
      ...destinyData.relationships.enemies,
    ]),
  ];

  const combinedNeutrals = [
    ...new Set([
      ...mulankData.relationships.neutrals,
      ...destinyData.relationships.neutrals,
    ]),
  ];

  const friendsNumbers = combinedFriends.filter(
    (number) =>
      !combinedEnemies.includes(number) && !combinedNeutrals.includes(number)
  );
  const enemyNumbers = combinedEnemies.filter(
    (number) =>
      !combinedFriends.includes(number) && !combinedNeutrals.includes(number)
  );
  const neutralNumbers = combinedNeutrals.filter(
    (number) =>
      !combinedEnemies.includes(number) && !combinedFriends.includes(number)
  );

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="section-header mt-20">LUCKYNUMBERS</h1>

      <div className="py-10 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card 
        title={
          friendsNumbers.length > 0
            ? friendsNumbers.join(", ")
            : "No Friend number"
        }
         icon="Friend">
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title={
            neutralNumbers.length > 0
              ? neutralNumbers.join(", ")
              : "No Neutral number"
          }
          icon="Neutral"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card
          title={
            enemyNumbers.length > 0
              ? enemyNumbers.join(", ")
              : "No enemy number"
          }
          icon="Enemy"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </div>
  );
};

export default LuckyNumbers;

const Card = ({ title, icon, children }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 text-center">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
