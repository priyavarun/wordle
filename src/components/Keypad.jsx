import React, { useEffect, useState } from "react";

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/letters")
      .then((res) => res.json())
      .then((data) => {
        setLetters(data);
      });
  }, []);

  return (
    <div className="keypad-container">
      <div>
        {letters.map((item) => {
          const letterVal = usedKeys[item.key] || "";
          return (
            <div key={item.key} className={`key-cell ${letterVal}`}>{item.key}</div>
          );
        })}
      </div>
    </div>
  );
}
