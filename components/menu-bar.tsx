import { MenuLink } from "./menu-link";

export const MenuBar = () => {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 ml-12 flex flex-col gap-6 text-5xl font-bold">
      <MenuLink href="/play" text="Play" />
      <MenuLink href="/play" text="Leaderboard" />
      <MenuLink href="/play" text="Socials" />
    </div>
  );
};
