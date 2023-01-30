export type StatusType = "incorrect" | "misplaced" | "correct";

export type CheckType = {
  letter: string;
  status: StatusType;
};

export type GuessType = {
  id: string;
  text: string;
  check?: CheckType[] | null;
};

export type GameStatus = "in progress" | "happy" | "sad";
