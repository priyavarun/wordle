import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";

export default function Wordle({ solution }) {
  const { handleKeyUp, currentGuess, guesses, isCorrect, turn } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  return (
    <div className="wordle-container">
      <div>
        <h1>Wordle App</h1>
        {isCorrect && (
          <h1>
            Yayy you WON in {turn} {turn > 1 ? "tries" : "try"} :) :) :)
          </h1>
        )}
        <Grid
          guesses={guesses}
          currentGuess={currentGuess}
          isCorrect={isCorrect}
          turn={turn}
        />
      </div>
    </div>
  );
}
