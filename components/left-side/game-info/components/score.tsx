import { Box } from "@/components/box";
import { ProgressBar } from "./progress-bar";
import { useKanaStore } from "@/stores/useKanaStore";
import { useScoreStore } from "@/stores/useScoreStore";

export const Score = () => {
  const { kanaMissions } = useKanaStore();
  const { missionID, isEndlessMode, endlessTarget } = useScoreStore();

  const target = isEndlessMode
    ? endlessTarget
    : kanaMissions.find((mission) => mission.id === missionID)?.target || 0;

  return (
    <Box className="space-y-1 p-2">
      <div className="text-neutral-500 text-[0.9rem] flex justify-center items-center pb-8 ">
        Score at least {target} points to clear this round.
      </div>
      <ProgressBar target={target} />
    </Box>
  );
};
