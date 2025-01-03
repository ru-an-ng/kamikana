import { usePlayerStore } from "@/stores/usePlayerStore";
import { useScoreStore } from "@/stores/useScoreStore";

export const PlayerHp = () => {
  const { turns, discard } = useScoreStore();
  const { info } = usePlayerStore();
  // maxTurns will be either the current turns or 4, whichever is higher
  const maxTurns = Math.max(turns, 4);
  const maxDiscard = Math.max(discard, 4);

  return (
    <div className="flex items-center gap-1">
      <div className="lg:text-lg flex items-center justify-center font-semibold bg-black/80 lg:w-8 lg:h-8 h-6 w-6 rounded-lg aspect-square">
        {info.level}
      </div>
      <div className="flex flex-col">
        <div
          className="gap-0.5 bg-black/80 rounded-full overflow-hidden w-fit backdrop-blur-xl p-0.5 grid"
          style={{ gridTemplateColumns: `repeat(${maxTurns}, 1fr)` }}
        >
          {Array.from({ length: maxTurns }).map((_, index) => (
            <div
              className={`lg:h-3 lg:w-8 h-2 w-6 rounded-full ${
                index < turns ? "bg-red-600" : "bg-white/10"
              }`}
              key={index}
            />
          ))}
        </div>
        <div
          className="gap-0.5 bg-black/80 rounded-full overflow-hidden w-fit backdrop-blur-xl px-0.5 pb-0.5 grid"
          style={{ gridTemplateColumns: `repeat(${maxDiscard}, 1fr)` }}
        >
          {Array.from({ length: maxDiscard }).map((_, index) => (
            <div
              className={`lg:w-8 lg:h-3 w-6 h-2 rounded-full ${
                index < discard ? "bg-blue-600" : "bg-white/10"
              }`}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
