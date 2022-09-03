import React from "react";

export default function Row({ guess }) {
  const Cell = (val) => {
    return <div className="filled">{val.key}</div>;
  };

  if (guess) {
    return (
      <div className="row">
        {guess.map((val, index) => (
          <div className={`cell ${val.color}`} key={index}>
            {Cell(val)}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="row">
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
    </div>
  );
}
