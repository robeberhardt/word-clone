import React, { ChangeEvent, FormEvent } from "react";

import styles from "./GuessInput.module.css";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (guess.length < 5) {
      window.alert("your guess must be exactly 5 letters long.");
    }
    console.log("Guess: ", guess);
    setGuess("");
  }

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
        ></input>
      </fieldset>
    </form>
  );
}

export default GuessInput;
