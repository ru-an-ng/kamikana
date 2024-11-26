import { useKanaStore } from "@/stores/useKanaStore";
import { motion } from "framer-motion";
import { useState } from "react";

interface CardProps {
  card: any;
}

export const Card = ({ card }: CardProps) => {
  const { selectedCard } = useKanaStore();
  const [onHover, setOnHover] = useState(false);

  const isSelected = selectedCard.some(
    (selected) => selected.romaji === card.romaji
  );

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      className={`flex relative duration-300 border border-black/10 hover:scale-110 hover:shadow-2xl hover:shadow-blue-600 hover:z-50 hover:-mt-5 w-40 h-56 p-2  ${
        isSelected ? "bg-blue-600 -mt-10" : "bg-white"
      }  rounded-[10px]  `}
    >
      {onHover && (
        <p className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white py-2 w-full text-center  rounded-[10px]  border border-neutral-300">
          {card.romaji}
        </p>
      )}

      <div className="flex justify-between w-full">
        <p
          className={`${card?.suit === "あ" && "bg-red-600"} ${
            card?.suit === "う" && "bg-blue-600"
          } ${card?.suit === "お" && "bg-green-600"} ${
            card?.suit === "い" && "bg-yellow-600"
          } ${
            card?.suit === "え" && "bg-purple-600"
          }  border border-black/20 text-white h-8 w-8 rounded-lg flex items-center justify-center`}
        >
          {card?.suit}
        </p>

        <p className="font-mono absolute bottom-2.5 left-1/2 -translate-x-1/2 ">
          {card?.rank}
        </p>
      </div>
      <p className="absolute top-1/2 text-4xl -translate-x-1/2 left-1/2 -translate-y-1/2">
        {card?.japanese}
      </p>
    </motion.div>
  );
};
