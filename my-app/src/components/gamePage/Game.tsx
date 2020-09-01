import React, { useState, useEffect } from 'react';
import Header from './gameComponents/headerBlock/Header';
import Question from './gameComponents/questionBlock/Question';
import Quiz from './gameComponents/quizBlock/Quiz';

import animalData from '../../db';

const Game = (props: { updateScreenData: (arg0: 'start' | 'game' | 'final') => void; setResult: (arg0: number) => void; }) => {
  const [score, setScore] = useState(15);
  const [arrayIndex, setArrayIndex] = useState(0);
  const [levelArray, setLevelArray] = useState(animalData[arrayIndex]);
  const [isAnswered, setIsAnswered] = useState(false);

  const answer = animalData[0][0];

  const setResultValue = (value: number) => {
    setScore(value);
  };

  const setAswering = (value: boolean) => {
    setIsAnswered(value);
  };

  if (isAnswered) console.log('button active');

  const levelButtonHandler = (number: number, isRightAnswered: boolean) => {
    if (isRightAnswered) {
      if (number !== 6) {
        setArrayIndex(arrayIndex + 1);
        setLevelArray(animalData[arrayIndex + 1]);
      } else {
        props.updateScreenData('final');
        props.setResult(score);
      }
    } else console.log('continue to find right answer');
  };
  console.log(score);

  return (
    <>
      <Header score={score} topicNumber={arrayIndex} />
      <Question answer={answer} isAnswered={isAnswered} />
      <Quiz levelArray={levelArray} rightAnswer={answer} setResultValue={setResultValue} setAswering={setAswering} />
      <button type="button" className="btn" onClick={() => levelButtonHandler(arrayIndex + 1, isAnswered)}>Следующий уровень</button>
    </>
  );
};

export default Game;
