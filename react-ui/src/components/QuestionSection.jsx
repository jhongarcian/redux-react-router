import React, { useEffect, useState } from "react";

const QuestionSection = ({ data, question, action, answerAction, stateClick }) => {
  const REGEX = /\/breeds\/([^/]+)\//;


  const handleClick = (e) => {
    const target = e.target
    const { dog } = e.target.dataset;
    const targetDog = dog.match(REGEX)[1];
    if(!stateClick) return
    if (targetDog.match(question)) {
      target.className = "correct"
      console.log("true");
      answerAction();
      action()
      return
    }
    target.className = 'incorrect'
    action();
  };
  // Prop called action coming from the parent
  // Handle click locally

  const dogQuestion =
    data &&
    data.length > 0 &&
    data.map((item) => {
      return (
        <div key={item} onClick={handleClick}>
          <img data-dog={item} src={item} alt="dog image" />
        </div>
      );
    });

  return (
    <>
      {data && data.length > 0 && <div className="question">
        <span>Which of these images is: </span>
        <span>{question}</span>
      </div>}
      <div className="question-container">{dogQuestion}</div>

    </>
  );
};

export default QuestionSection;
