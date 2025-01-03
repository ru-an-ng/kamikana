import { create } from "zustand";

interface scoreStore {
  score: number;
  multiplier: number;
  turns: number;
  discard: number;
  bossHp: number;
  setBossHp: (bossHp: number) => void;
  setScore: (score: number) => void;
  setMultiplier: (multiplier: number) => void;
  setTurns: (turns: number) => void;
  addTurns: (turns: number) => void;
  setDiscard: (discard: number) => void;
  addDiscard: (discard: number) => void;
  setAnnouncement: (announcement: string) => void;
  announcement: string;
  missionID: number;
  setMissionID: (missionID: number) => void;
  progress: number;
  setProgress: (progress: number) => void;
  yen: number;
  setYen: (yen: number) => void;
  warning: string;
  setWarning: (warning: string) => void;
  reroll: number;
  setReroll: (reroll: number) => void;
  leaderboard: any[];
  setLeaderboard: (leaderboard: any[]) => void;
  isEndlessMode: boolean;
  endlessTarget: number;
  setIsEndlessMode: (isEndlessMode: boolean) => void;
  setEndlessTarget: (endlessTarget: number) => void;
  incrementEndlessTarget: () => void;
  multiplierBonus: number;
  setMultiplierBonus: (multiplierBonus: number) => void;
}

export const useScoreStore = create<scoreStore>((set) => ({
  score: 0,
  multiplier: 0,
  turns: 4,
  discard: 4,
  bossHp: 33900,
  setBossHp: (bossHp) => set({ bossHp }),
  yen: 0,
  reroll: 0,
  announcement: "",
  missionID: 1,
  progress: 0,
  warning: "",
  multiplierBonus: 0,
  setMultiplierBonus: (multiplierBonus) => set({ multiplierBonus }),
  leaderboard: [],
  setLeaderboard: (leaderboard) => set({ leaderboard }),
  setReroll: (reroll) => set({ reroll }),
  setWarning: (warning) => set({ warning }),
  setYen: (yen) => set({ yen }),
  setScore: (score) => set({ score }),
  setMultiplier: (multiplier) => set({ multiplier }),
  setTurns: (turns) => set({ turns }),
  addTurns: (turns) => set((state) => ({ turns: state.turns + turns })),
  setDiscard: (discard) => set({ discard }),
  addDiscard: (discard) =>
    set((state) => ({ discard: state.discard + discard })),
  setAnnouncement: (announcement) => set({ announcement }),
  setMissionID: (missionID) => set({ missionID }),
  setProgress: (progress) => set({ progress }),
  isEndlessMode: false,
  endlessTarget: 1,
  setIsEndlessMode: (isEndlessMode) => set({ isEndlessMode }),
  setEndlessTarget: (endlessTarget) => set({ endlessTarget }),
  incrementEndlessTarget: () =>
    set((state) => {
      return { endlessTarget: state.endlessTarget + 15000 };
    }),
}));
