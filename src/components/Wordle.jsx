import React, { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import Modal from "./Modal";

export default function Wordle({ solution }) {
  const { handleKeyUp, currentGuess, guesses, isCorrect, turn, usedKeys } =
    useWordle(solution);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    if (isCorrect) {
      console.log("Yayyy. You WON");

      window.removeEventListener("keyup", handleKeyUp);

      setTimeout(() => setShowModal(true), 2000);
      return;
    }

    if (turn > 5) {
      console.log("All tries done");

      setTimeout(() => setShowModal(true), 2000);

      window.removeEventListener("keyup", handleKeyUp);
      return;
    }

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp, isCorrect, turn]);

  return (
    <div className="wordle-container">
      <div>
        <h1 className="header">Wordle App</h1>
        <Grid
          guesses={guesses}
          currentGuess={currentGuess}
          isCorrect={isCorrect}
          turn={turn}
        />
        <Keypad usedKeys={usedKeys} />
        {showModal && (
          <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
        )}
      </div>
    </div>
  );
}
