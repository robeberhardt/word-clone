import type { GameStatus } from "../../types";

function GameOverBanner({
  status,
  answer,
  guessCount,
}: {
  status: GameStatus;
  answer: string;
  guessCount: number;
}) {
  return (
    <div className={`${status} banner`}>
      {status === "happy" ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {guessCount} guess{guessCount > 1 && "es"}
          </strong>
          {guessCount > 2 ? "." : "!"}
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer.toUpperCase()}</strong>.
        </p>
      )}
    </div>
  );
}

export default GameOverBanner;
