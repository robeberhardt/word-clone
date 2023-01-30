import { CheckType, StatusType } from "./types";

export function checkGuess(guess: string, answer: string): CheckType[] | null {
  if (!guess) {
    return null;
  }

  const guessChars = guess.toUpperCase().split("");
  const answerChars = answer.split("");

  return guessChars.map((guessChar, index) => {
    const answerChar = answerChars[index];

    let status: StatusType;
    if (guessChar === answerChar) {
      status = "correct";
    } else if (answerChars.includes(guessChar)) {
      status = "misplaced";
    } else {
      status = "incorrect";
    }
    return {
      letter: guessChar,
      status,
    };
  });
}
