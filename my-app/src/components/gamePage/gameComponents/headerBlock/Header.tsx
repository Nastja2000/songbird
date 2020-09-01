/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';

import style from './header.module.scss';

const Header = (props: {score: number; topicNumber: number}) => {
  const { score, topicNumber } = props;
  const currentScore = `Score: ${score}`;
  const topicsList = document.querySelector('.topic-list');
  const topics = document.querySelectorAll(`.${style.topic}`);
  const topicsArray = Array.from(topics);

  useEffect(() => {
    if (topicsList !== null) {
      const currentActiveTopic = topicsList.querySelector(`.${style.active}`);
      if (currentActiveTopic) currentActiveTopic?.classList.remove(style.active);

      topicsArray[topicNumber]?.classList.add(style.active);
    }
  }, [topicNumber]);

  return (
    <div className={`${style.header} d-flex`}>
      <div className={`${style.topPanel} d-flex`}>
        <h1 className={style.logo}>
          <span className={style.logo_white}>Song</span>
          <span className={style.logo_green}>Animal</span>
        </h1>
        <h5 className={style.score}>{ currentScore }</h5>
      </div>
      <ul className={`${style.topic__bar} topic-list`}>
        <li className={`${style.topic} ${style.active} topic-list-item`}>
          <a className={`${style.link}`} href="#">Европа</a>
        </li>
        <li className={`${style.topic}`}>
          <a className={`${style.link}`} href="#">Северная Америка</a>
        </li>
        <li className={`${style.topic}`}>
          <a className={`${style.link}`} href="#">Южная Америка</a>
        </li>
        <li className={`${style.topic}`}>
          <a className={`${style.link}`} href="#">Австралия</a>
        </li>
        <li className={`${style.topic}`}>
          <a className={`${style.link}`} href="#">Африка</a>
        </li>
        <li className={`${style.topic}`}>
          <a className={`${style.link}`} href="#" aria-disabled>Антарктида</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
