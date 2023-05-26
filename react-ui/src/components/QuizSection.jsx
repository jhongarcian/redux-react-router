import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectBreeds } from "../features/breedsSlice";
import QuestionSection from "./QuestionSection";

const QuizSection = () => {
  const [typeButton, setTypeButton] = useState("start");
  const [count, setCount] = useState(0);
  const [images, setImages] = useState([]);
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [isClickable, setIsClickeable] = useState(true);

  const listOfDogs = useSelector(selectBreeds);

  function fetchImagesForDogs() {
    const fetchImages = async (dogName) => {
      const url = `https://dog.ceo/api/breed/${dogName}/images/random`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Data", data.message);
        setImages((prevData) => [...prevData, data.message]);
      } catch (error) {
        console.error(error);
      }
    };
    const fourDogNames = getFourRandomDogs();

    for (let i = 0; i < fourDogNames.length; i++) {
      fetchImages(fourDogNames[i]);
    }

    questionLogic(fourDogNames);
  }

  function getFourRandomDogs() {
    if (listOfDogs.parentBreeds && listOfDogs.parentBreeds.length > 0) {
      const _parentBreeds = listOfDogs.parentBreeds;
      const _subBreeds = listOfDogs.subBreeds;
      const _listedDogs = [..._parentBreeds, ..._subBreeds];

      _listedDogs.sort((a, b) => 0.5 - Math.random());
      let fourDogs = [];
      for (let i = 0; i <= 3; i++) {
        const singleDog = getDogFromList(_listedDogs);
        fourDogs.push(singleDog);
      }
      return fourDogs;
    }
    return [];
  }

  function getDogFromList(list) {
    const _dog = list.pop();
    return _dog;
  }

  function questionLogic(fourDogNames) {
    const random = [...fourDogNames];
    const _question = random.pop();
    if (!_question.includes("/")) return setQuestion(_question);
    const clearQuestion = _question.replace("/", "-");
    setQuestion(clearQuestion);
  }

  const handleResults = (e) => {
    setIsClickeable(false);
    setCount((prevCount) => prevCount + 1);
  };

  const handleAnswer = () => {
    setCorrectAnswer((prevAnswer) => prevAnswer + 1);
  };

  const handleButtonType = () => {
    if (typeButton === "start" || (typeButton === "next" && count < 10)) {
      setTypeButton("next");
      setImages([]);
      fetchImagesForDogs();
      setIsClickeable(true);
      return;
    }
    if (count >= 10 && typeButton === "next") {
      setTypeButton("reset");
      setImages([]);
      setIsClickeable(true);
      return;
    }
    if (typeButton === "reset") {
      setCorrectAnswer(0);
      setCount(0);
      setTypeButton("next");
      fetchImagesForDogs();
      setIsClickeable(true);
      return;
    }
  };

  return (
    <div className="quiz-section">
      <h2>Select the correct Dog</h2>
      <div>
        Current attempts:
        <span>{count}</span>
      </div>
      <div>
        Correct Answers:
        <span>{correctAnswer}</span>
      </div>
      <QuestionSection
        data={images}
        question={question}
        action={handleResults}
        answerAction={handleAnswer}
        nextAction={handleButtonType}
        stateClick={isClickable}
      />
      <button
        className="btn"
        data-button={typeButton}
        onClick={handleButtonType}
      >
        {typeButton}
      </button>
    </div>
  );
};

export default QuizSection;
