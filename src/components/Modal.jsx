import React from "react";

export default function Modal({ isCorrect, turn, solution }) {
  return (
    <div className="modal-conatiner">
      <div className="modal-content">
        {isCorrect && (
          <h1>
            Yayy you WON in {turn} {turn > 1 ? "tries" : "try"} :) :) :)
          </h1>
        )}
        {turn > 5 && !isCorrect && (
          <h1>Sorry, better luck next time! Solution is {solution} :)</h1>
        )}
      </div>
    </div>
  );
}
