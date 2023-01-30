import React from "react";

import type { GuessType } from "../../types";

function Guess({ guess }: { guess: GuessType }) {
  return (
    <>
      {guess.check
        ? guess.check?.map((entry, index) => (
            <span
              key={`${guess.id}_${entry.letter}`}
              className={`cell ${entry.status}`}
            >
              {entry.letter}
            </span>
          ))
        : guess.text.split("").map((entry, index) => (
            <span key={`${guess.id}_${index}`} className={`cell`}>
              {entry}
            </span>
          ))}
    </>
  );
}

export default Guess;
