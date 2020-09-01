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

const Quiz = (props: { levelArray: any; rightAnswer: AnswerType; setResultValue: (arg0: number) => void; setAswering: (arg0: boolean) => void;}) => {
  const { levelArray, rightAnswer } = props;

  const [insructionDisplay, setInsructionDisplay] = useState('block');
  const [infoDisplay, setInfoDisplay] = useState('none');
  const [errorCount, setErrorCount] = useState(0);
  const [isVariantChoosen, setIsVariantChoosen] = useState(false);
  const [choosenVariant, setChoosenVariant] = useState(levelArray[0]);
  const [points, setPoints] = useState(0);

  const countOfVariants: number = 6;
  const audioProgress: string = '0%';
  const timebarProgressColor = `linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) ${audioProgress}, rgb(115, 115, 115) ${audioProgress}, rgb(115, 115, 115) 100%)`;
  const rightAnswerId: number = rightAnswer.id;

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
    const currentVariantId = event.target.getAttribute('id');

    if (Number(currentVariantId) !== rightAnswerId) {
      console.log('there', currentVariantId, rightAnswerId);
      setIsVariantChoosen(true);
      event.target?.classList.add('error');
      setChoosenVariant(levelArray[currentVariantId - 1]);
      setErrorCount(errorCount + 1);
    } else {
      console.log('here', currentVariantId, rightAnswerId);
      setIsVariantChoosen(true);
      event.target?.classList.add('success');
      setPoints((countOfVariants - errorCount) - 1);
      setChoosenVariant(levelArray[currentVariantId - 1]);
      props.setAswering(true);
      props.setResultValue(points);
    }
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
    </div>
  );
};

export default Quiz;
