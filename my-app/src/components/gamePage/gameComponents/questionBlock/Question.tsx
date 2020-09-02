/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';

import 'react-h5-audio-player/src/styles.scss';
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

  const [playIconSrc, setPlayIconSrc] = useState('/images/otherImages/play-button.svg');
  const [playIconAlt, setPlayIconAlt] = useState('play');

  const imageSrc = isAnswered ? `${answer.image}` : '/images/otherImages/question.jpg';
  const name = isAnswered ? `${answer.name}` : '*****';

  if (isAnswered) {
    const audio = document.querySelector('.question')?.querySelector('audio');
      audio?.pause();
  }

  return (
    <div className={`${style.questionField} random-animal jumbotron rounded`}>
      <img className={`${style.animalImage} animal-image`} src={imageSrc} alt="animal img" />
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <h3>{name}</h3>
        </li>
        <li className="list-group-item">
          <div className="audio-player question">
            <AudioPlayer
              className="audio"
              src={answer.audio}
              showJumpControls={false}
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Question;
