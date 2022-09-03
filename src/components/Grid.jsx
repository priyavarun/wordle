import React from "react";
import Row from "./Row";

export default function Grid({ guesses, currentGuess = "", turn }) {
  let currentGuessArray = Array(5).fill("");
  currentGuessArray = currentGuessArray.map((_, i) => currentGuess[i]);

  const formattedCurrentGuess = currentGuessArray.map((letter) => ({
    key: letter,
    color: "",
  }));

  return (
    <>
      {guesses.map((guess, index) => {
        if (index === turn) {
          return <Row guess={formattedCurrentGuess} key={index} />;
        }
        return <Row guess={guess} key={index} />;
      })}
    </>
  );
}
