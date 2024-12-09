import { Loader2Icon } from "lucide-react";

interface ActivityBoxProps {
  title: string;
  value: number;
  textColor?: string;
  loading?: boolean;
}

export const ActivityBox = ({
  title,
  value,
  textColor,
  loading,
}: ActivityBoxProps) => {
  return (
    <div className="bg-white lg:p-4 p-2 border border-black/10 shadow-sm rounded-xl ">
      {loading ? (
        <div className="flex justify-center items-center">
          <Loader2Icon className="animate-spin" />
        </div>
      ) : (
        <div className="flex flex-col justify-between h-full">
          <p className=" text-sm">{title}</p>
          <p className={` font-semibold ${textColor}`}>{value}</p>
        </div>
      )}
    </div>
  );
};
