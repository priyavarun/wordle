import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [solution, setSolution] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/solutions")
      .then((res) => res.json())
      .then((data) =>
        setSolution(data[Math.floor(Math.random() * data.length)].word)
      );
  }, [setSolution]);

  return (
    <>
      <h1>Wordle App</h1>
      {solution && <span>Solution is {solution}</span>}
    </>
  );
}

export default App;
