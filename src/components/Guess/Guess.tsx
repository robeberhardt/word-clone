import React from "react";

import type { GuessType } from "../../types";

function Guess({ guess }: { guess: GuessType }) {
  return (
    <>
      {guess.text.split("").map((char, index) => (
        <span key={`${guess.id}_${index}`} className="cell">
          {char}
        </span>
      ))}
    </>
  );
}

export default Guess;
