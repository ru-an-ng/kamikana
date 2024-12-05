"use client";

import { SubscriptionButton } from "../subscription-button";
import { SupportBox } from "./support-box";
import { usePathname } from "next/navigation";
import { usePlayerStore } from "@/stores/usePlayerStore";

export const Support = () => {
  const pathname = usePathname();

  const { isSubscribed } = usePlayerStore();

  return (
    <>
      {!isSubscribed && (
        <div
          className={`text-black p-4 w-full z-20 bg-[#efcb68] bg-opacity-40 border border-black/15 shadow-sm rounded-xl`}
        >
          <div className="space-y-4">
            <SubscriptionButton />

            <div className="flex flex-col font-medium text-[0.9rem] gap-4">
              <SupportBox text="Support this project." />
              <SupportBox text="Gain early access to Stage 2 when it is ready." />
              <SupportBox text="Unblock Endless Mode." />
              <SupportBox text="Bypass level 10." />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
