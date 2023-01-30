import React, { Dispatch, SetStateAction } from "react";
import type { GuessType } from "../../types";
import { range } from "../../utils";
import Guess from "../Guess";

function GuessResults({
  results,
  setResults,
}: {
  results: GuessType[];
  setResults: Dispatch<SetStateAction<GuessType[]>>;
}) {
  return (
    <div className="guess-results">
      {range(0, 6).map((val) =>
        results[val] ? (
          <p key={results[val].id} className="guess">
            <Guess guess={results[val]} />
          </p>
        ) : (
          <p key={crypto.randomUUID()} className="guess">
            <Guess guess={{ id: crypto.randomUUID(), text: "     " }} />
          </p>
        )
      )}
    </div>
  );
}

export default GuessResults;

// {results.map((result) => (
//   <p key={result.id} className="guess">
//     <Guess guess={result} />
//   </p>
// ))}
