import React, { Dispatch, SetStateAction } from "react";
import type { GuessResultType } from "../../types";

function GuessResults({
  results,
  setResults,
}: {
  results: GuessResultType[];
  setResults: Dispatch<SetStateAction<GuessResultType[]>>;
}) {
  return (
    <div className="guess-results">
      {results.map((result) => (
        <p key={result.id} className="guess">
          {result.guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
