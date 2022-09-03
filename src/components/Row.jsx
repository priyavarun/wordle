import React, { Fragment } from "react";

export default function Row({ guess }) {
  const Cell = (val) => {
    return (
      <>
        <div className={`cell ${val.color}`}>{val.key}</div>
      </>
    );
  };

  if (guess) {
    return <div className="row">{guess.map((val, index) => (<Fragment key={index}>{Cell(val)}</Fragment>))}</div>;
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
