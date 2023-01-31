import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";

function GuessInput({
  guess,
  setGuess,
  handleSubmit,
}: {
  guess: string;
  setGuess: Dispatch<SetStateAction<string>>;
  handleSubmit: (event: FormEvent) => void;
}) {
  function handleChange(event: ChangeEvent) {
    const { value } = event.target as HTMLInputElement;
    const nextGuess = value.length > 5 ? value.slice(0, 5) : value;
    setGuess(nextGuess.toUpperCase());
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          onChange={handleChange}
          required
          minLength={5}
          maxLength={5}
        ></input>
      </fieldset>
    </form>
  );
}

export default GuessInput;
