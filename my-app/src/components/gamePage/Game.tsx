/* eslint-disable max-len */
import React, { useState } from 'react';
import Header from './gameComponents/headerBlock/Header';
import Question from './gameComponents/questionBlock/Question';
import Quiz from './gameComponents/quizBlock/Quiz';
import { randomInt, shuffleArray } from '../../helpers';

import animalData from '../../db';

const Game = (props: { updateScreenData: (arg0: 'start' | 'game' | 'final') => void; setResult: (arg0: number) => void; }) => {
  const [score, setScore] = useState(0);
  const [arrayIndex, setArrayIndex] = useState(0);
  const [levelArray, setLevelArray] = useState(shuffleArray(animalData[arrayIndex]));
  const [isAnswered, setIsAnswered] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState(levelArray[randomInt(0, 5)]);

  const setResultValue = (value: number) => {
    console.log(value);

    const countedCurrentScore = (6 - value) - 1;
    setScore(score + countedCurrentScore);
  };

  const setAnswering = (value: boolean) => {
    setIsAnswered(value);
    props.setResult(score);
  };

  const setLevelNumber = (value: number) => {
    setArrayIndex(value);
    const currentLevelArray = shuffleArray(animalData[value]);
    setLevelArray(currentLevelArray);
    setCurrentAnswer(currentLevelArray[randomInt(0, 5)]);
  };

  const setScreen = (value: 'start' | 'game' | 'final') => {
    props.updateScreenData(value);
  };

  return (
    <>
      <Header score={score} topicNumber={arrayIndex} />
      <Question answer={currentAnswer} isAnswered={isAnswered} />
      <Quiz levelArray={levelArray} levelNumber={arrayIndex} rightAnswer={currentAnswer} setResultValue={setResultValue} setAnswering={setAnswering} setLevelNumber={setLevelNumber} setScreen={setScreen} />
    </>
  );
};

export default Game;
