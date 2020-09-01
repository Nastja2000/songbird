/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import style from './question.module.scss';

type AnswerType = {
  id: number,
  name: string,
  latinName: string,
  description: string,
  image: string,
  audio: string
};

const audioProgress = '0%';

const timebarProgressColor = `linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) ${audioProgress}, rgb(115, 115, 115) ${audioProgress}, rgb(115, 115, 115) 100%)`;

const Question = (props: { answer: AnswerType; isAnswered: boolean }) => {
  const { answer, isAnswered } = props;
  const imageSrc = isAnswered ? `${answer.image}` : '/images/otherImages/question.jpg';
  const name = isAnswered ? `${answer.name}` : '*****';
  return (
    <div className={`${style.questionField} random-animal jumbotron rounded`}>
      <img className={`${style.animalImage} animal-image`} src={imageSrc} alt="animal img" />
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <h3>{name}</h3>
        </li>
        <li className="list-group-item">
          <div className="audio-player">
            <audio src={answer.audio} hidden />
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
  );
};

export default Question;
