/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useEffect } from 'react';

type AnswerType = {
  id: number,
  name: string,
  latinName: string,
  description: string,
  image: string,
  audio: string
};

const Quiz = (props: {
  levelArray: any;
  levelNumber: number;
  rightAnswer: AnswerType;
  setResultValue: (arg0: number) => void;
  setAnswering: (arg0: boolean) => void;
  setLevelNumber: (arg0: number) => void;
  setScreen: (arg0: 'start' | 'game' | 'final') => void;
}) => {
  const {
    levelArray, rightAnswer, levelNumber
  } = props;

  const [insructionDisplay, setInsructionDisplay] = useState('block');
  const [infoDisplay, setInfoDisplay] = useState('none');
  const [isVariantChoosen, setIsVariantChoosen] = useState(false);
  const [choosenVariant, setChoosenVariant] = useState(levelArray[0]);
  const [isAnswered, setIsAnswered] = useState(false);

  const audioProgress: string = '0%';
  const timebarProgressColor = `linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) ${audioProgress}, rgb(115, 115, 115) ${audioProgress}, rgb(115, 115, 115) 100%)`;
  const rightAnswerId: number = rightAnswer.id;

  useEffect(() => {
    if (isAnswered) {
      document.querySelector('.btn')?.classList.add('btn-next');
    }
  }, [isAnswered]);

  const levelButtonHandler = (number: number, isRightAnswered: boolean) => {
    if (isRightAnswered) {
      if (number < 5) {
        props.setLevelNumber(levelNumber + 1);
        setIsAnswered(false);
        props.setAnswering(false);

        document.querySelector('.btn')?.classList.remove('btn-next');
        document.querySelector('.success')?.classList.remove('success');

        const errorListArray = Array.from(document.querySelectorAll('.error'));
        errorListArray.forEach((elem) => elem?.classList.remove('error'));

        document.querySelector('.game-instruction')?.classList.add('d-block');
        document.querySelector('.animal-description')?.classList.add('d-none');
        document.querySelector('.card-body')?.classList.add('d-none');
      } else {
        props.setLevelNumber(0);
        props.setScreen('final');
      }
    } else console.log('continue to find right answer');
  };

  useEffect(() => {
    const gameInstruction = document.querySelector('.game-instruction');
    const animalDescription = document.querySelector('.animal-description');
    const animalInfo = document.querySelector('.card-body');

    if (gameInstruction !== null && animalDescription !== null && animalInfo !== null) {
      if (isVariantChoosen) {
        setInsructionDisplay('none');
        setInfoDisplay('flex');
        setInfoDisplay('flex');
      } else {
        setInsructionDisplay('block');
        setInfoDisplay('none');
        setInfoDisplay('none');
      }
    }
  }, [isVariantChoosen]);

  function listTopicsHandler(event: any) {
    let indexOfCurrentVariant;
    let varriantsArray;
    const currentVariantId = event.target.getAttribute('id');
    const variantsList = document.querySelector('.item-list');

    if (variantsList !== null) varriantsArray = Array.from(variantsList.querySelectorAll('.list-group-item'));
    if (varriantsArray !== null && varriantsArray !== undefined) indexOfCurrentVariant = varriantsArray.indexOf(event.target);

    document.querySelector('.game-instruction')?.classList.remove('d-block');
    document.querySelector('.animal-description')?.classList.remove('d-none');
    document.querySelector('.card-body')?.classList.remove('d-none');

    if (!isAnswered) {
      if (Number(currentVariantId) !== rightAnswerId) {
        event.target?.classList.add('error');

        setIsVariantChoosen(true);
        if (indexOfCurrentVariant !== undefined) setChoosenVariant(levelArray[indexOfCurrentVariant]);
        setIsAnswered(false);

        const audio = new Audio('/audio/otherAudio/error.mp3');
        audio.play();
      } else {
        event.target?.classList.add('success');

        setIsVariantChoosen(true);
        if (indexOfCurrentVariant !== undefined) setChoosenVariant(levelArray[indexOfCurrentVariant]);
        setIsAnswered(true);

        props.setAnswering(true);

        if (variantsList !== null) {
          const errorArray = Array.from(variantsList.querySelectorAll('.error'));

          props.setResultValue(errorArray.length);
        }

        const audio = new Audio('/audio/otherAudio/correct.mp3');
        audio.play();
      }
    } else if (indexOfCurrentVariant !== undefined) setChoosenVariant(levelArray[indexOfCurrentVariant]);
  }

  return (
    <div className="row mb2">
      <div className="col-md-6">
        <ul className="item-list list-group">
          <li className="list-group-item" id={levelArray[0].id} onClick={listTopicsHandler}>
            <span className="li-btn" />
            {levelArray[0].name}
          </li>
          <li className="list-group-item" id={levelArray[1].id} onClick={listTopicsHandler}>
            <span className="li-btn" />
            {levelArray[1].name}
          </li>
          <li className="list-group-item" id={levelArray[2].id} onClick={listTopicsHandler}>
            <span className="li-btn" />
            {levelArray[2].name}
          </li>
          <li className="list-group-item" id={levelArray[3].id} onClick={listTopicsHandler}>
            <span className="li-btn" />
            {levelArray[3].name}
          </li>
          <li className="list-group-item" id={levelArray[4].id} onClick={listTopicsHandler}>
            <span className="li-btn" />
            {levelArray[4].name}
          </li>
          <li className="list-group-item" id={levelArray[5].id} onClick={listTopicsHandler}>
            <span className="li-btn" />
            {levelArray[5].name}
          </li>
        </ul>
      </div>
      <div className="col-md-6">
        <div className="animal-info card">
          <p className="game-instruction" style={{ display: insructionDisplay }}>
            <span>Послушайте звук.</span>
            <span>Выберите из списка животное, которому он принадлежит.</span>
          </p>
          <div className="card-body" style={{ display: infoDisplay }}>
            <img src={choosenVariant.image} alt="animal" className="animal-image" />
            <ul className="list-group list-group-flush animal-info-list">
              <li className="list-group-item">
                <h4>{choosenVariant.name}</h4>
              </li>
              <li className="list-group-item">
                <span className="latin-name">{choosenVariant.latinName}</span>
              </li>
              <li className="list-group-item">
                <div className="audio-player">
                  <audio src={choosenVariant.audio} hidden />
                  <div className="controls">
                    <div className="play-button">
                      <img src="/images/otherImages/play-button.svg" alt="play" />
                    </div>
                    <div className="timebar-container" style={{ position: 'relative' }}>
                      <div className="timebar-line" style={{ background: `${timebarProgressColor}` }} />
                      <div className="timebar-circle" />
                      <div className="timebar-time">
                        <div className="time current" />
                        <div className="time max" />
                      </div>
                    </div>
                    <div className="volumebar">
                      <img src="/images/otherImages/speaker.svg" alt="volume icon" />
                      <div id="volume" />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <span className="animal-description" style={{ display: infoDisplay }}>{choosenVariant.description}</span>
        </div>
      </div>
      <button type="button" className="btn" onClick={() => levelButtonHandler(levelNumber, isAnswered)}>Следующий уровень</button>
    </div>
  );
};

export default Quiz;
