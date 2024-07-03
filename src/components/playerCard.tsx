import { FC } from "react";
import { Meteors } from "./ui/meteors";
import AttackingChancesCard from "./AttackingChancesTag";

interface PlayerCardProps {
  score: number;
  player: number;
}

const PlayerCard: FC<PlayerCardProps> = ({ score, player }) => {
  return (
    <div>
      <h1 className="flex justify-center text-6xl mb-7 font-black">
        Player - {player}
      </h1>
      <div className="w-full relative h-[300px] items-center">
        <div className="absolute inset-0 h-64 w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl text-center" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-8 h-full overflow-hidden rounded-2xl flex flex-col w-[500px] justify-center text-center">
          <h1 className="font-bold text-[200px] text-white text-center">
            {score}
          </h1>
          <Meteors number={20} />
        </div>
      </div>
      <AttackingChancesCard chances={3} />
    </div>
  );
};

export default PlayerCard;
