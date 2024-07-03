import { FC } from "react";

interface AttackingChancesProps {
  chances: number;
}

const AttackingChancesCard: FC<AttackingChancesProps> = ({ chances }) => {
  return (
    <>
      <div className="flex flex-row w-full justify-center mt-5 text-2xl text-red-400 gap-4">
        <p>Attacking chances : </p>
        <h1 className="font-bold mb-4 relative z-50">
          {chances}
        </h1>
      </div>
    </>
  );
};

export default AttackingChancesCard;
