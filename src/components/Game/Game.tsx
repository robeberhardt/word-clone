import React, { FormEvent, useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput";

import type { GuessType } from "../../types";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [results, setResults] = useState<GuessType[]>([]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (guess.length < 5) {
      window.alert("your guess must be exactly 5 letters long.");
    } else {
      const nextResults = [
        ...results,
        { id: crypto.randomUUID(), text: guess },
      ];
      setResults(nextResults);
      setGuess("");
    }
  }

  return (
    <>
      <GuessResults results={results} setResults={setResults} />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default Game;
