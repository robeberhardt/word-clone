import React, { FormEvent, useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput";
import GameOverBanner from "../GameOverBanner";

import type { GuessType, GameStatus } from "../../types";
import { checkGuess } from "../../game-helpers";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [status, setStatus] = React.useState<GameStatus>("in progress");
  const [guess, setGuess] = React.useState("");
  const [results, setResults] = useState<GuessType[]>([]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (guess.length < 5) {
      window.alert("your guess must be exactly 5 letters long.");
    } else {
      const checkResult = checkGuess(guess, answer);
      console.log("check: ", checkResult);
      const nextResults = [
        ...results,
        { id: crypto.randomUUID(), text: guess, check: checkResult },
      ];
      setResults(nextResults);
      // check for game over
      if (guess === answer) {
        setStatus("happy");
      } else if (
        results.length === NUM_OF_GUESSES_ALLOWED - 1 &&
        guess !== answer
      ) {
        setStatus("sad");
      } else {
        setGuess("");
      }
    }
  }

  return (
    <>
      <GuessResults results={results} setResults={setResults} />
      {status === "in progress" ? (
        <GuessInput
          guess={guess}
          setGuess={setGuess}
          handleSubmit={handleSubmit}
        />
      ) : status === "happy" || status === "sad" ? (
        <GameOverBanner
          status={status}
          answer={answer}
          guessCount={results.length}
        />
      ) : null}
    </>
  );
}

export default Game;
