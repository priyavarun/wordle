import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([
    ...Array(6).fill(Array(5).fill({ key: "", color: "" })),
  ]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  // [{key: "a", color: "yellow"}]
  const formatGuess = () => {
    console.log("In format guess", currentGuess);
    const solutionArray = [...solution];
    let formattedGuess = [...currentGuess];

    // Set all the letters to grey by default
    formattedGuess = formattedGuess.map((letter) => ({
      key: letter,
      color: "grey",
    }));

    // Check for green color
    formattedGuess.forEach((letterObj, index) => {
      if (letterObj.key === solutionArray[index]) {
        formattedGuess[index].color = "green";
        solutionArray[index] = null;
      }
    });

    // Set the remaining to yellow if it exists
    formattedGuess.forEach((letterObj, index) => {
      if (
        solutionArray.indexOf(letterObj.key) !== -1 &&
        letterObj.color !== "green"
      ) {
        letterObj.color = "yellow";
      }
    });

    addNewGuess(formattedGuess);
  };

  // Add the guess to the guesses state and update the state of correct if its right.
  const addNewGuess = (guess) => {
    setGuesses((prevGuesses) => {
      const newGuesses = [...prevGuesses];
      newGuesses[turn] = guess;

      return newGuesses;
    });

    setHistory((prevHistory) => {
      const newHistory = [...prevHistory, currentGuess];

      return newHistory;
    });

    setTurn((prevTurn) => prevTurn + 1);

    if (currentGuess === solution) {
      setIsCorrect(true);
    }

    setCurrentGuess("");
  };

  // Update the keup event and update current guess and if the enter key is pressed add to the guesses state.
  const handleKeyUp = ({ key }) => {
    if (isCorrect) {
      return;
    }
    if (key === "Enter") {
      if (turn > 5) {
        console.log("All tries done");
        return;
      }

      if (history.includes(currentGuess)) {
        console.log("Already tried this word");
        return;
      }

      if (currentGuess.length < 5) {
        console.log("Not enough letters.");
        return;
      }

      formatGuess();
    }

    if (key === "Backspace") {
      setCurrentGuess((prevGuess) => prevGuess.slice(0, -1));
    }

    if (/^[a-zA-Z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prevGuess) => prevGuess + key);
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyUp };
};

export default useWordle;
