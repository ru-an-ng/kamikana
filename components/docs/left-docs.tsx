"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const LeftDocs = () => {
  const pathname = usePathname();

  return (
    <div className="border-r border-black/20 w-64 p-4 flex flex-col gap-3 items-start">
      <Link
        href={"/menu/docs"}
        className={`pl-0.5 ${
          pathname === "/menu/docs" ? "font-semibold" : "text-neutral-500"
        }`}
      >
        1. Introduction
      </Link>
      <Link
        href={"/menu/docs/rules"}
        className={`${
          pathname === "/menu/docs/rules" ? "font-semibold" : "text-neutral-500"
        }`}
      >
        2. Rules
      </Link>
      <Link
        href={"/menu/docs/hands"}
        className={`${
          pathname === "/menu/docs/hands" ? "font-semibold" : "text-neutral-500"
        }`}
      >
        3. Hands
      </Link>
      <Link
        href={"/menu/docs/shop"}
        className={`${
          pathname === "/menu/docs/shop" ? "font-semibold" : "text-neutral-500"
        }`}
      >
        4. Shop
      </Link>
    </div>
  );
};