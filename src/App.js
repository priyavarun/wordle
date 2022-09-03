import { useEffect, useState } from "react";
import "./App.css";
import Wordle from "./components/Wordle";

function App() {
  const [solution, setSolution] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/solutions")
      .then((res) => res.json())
      .then((data) => {
        const sol = data[Math.floor(Math.random() * data.length)].word;
        console.log("sol", sol);
        setSolution(sol);
      }
      );
  }, [setSolution]);

  return (
    <>
      <Wordle solution={solution} />
    </>
  );
}

export default App;
