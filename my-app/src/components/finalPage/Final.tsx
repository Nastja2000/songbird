/* eslint-disable react/destructuring-assignment */
import React from 'react';

const Final = (props: { updateScreenData: (arg0: 'start' | 'game' | 'final') => void; points: React.ReactNode; }) => {
  const { points } = props;
  return (
    <div className="final-page-wrapper">
      {points === 30 ? (
        <>
          <div className="congrats-confetti">
            <p className="congrats-text">
              {' '}
              Ура! Это победа! Поздравляю! Да ты можешь вести какую-нибудь программу о животных, так хорошо ты их знаешь.
              <br />
              P.S. Только не говори, что ты ещё и понимаешь, что они говорят.
              {' '}
            </p>
          </div>
        </>
      ) : (
        <>
          <p className="congrats-text">
            {' '}
            Вы набрали
            {' '}
            {points}
            {' '}
            из 30 возможных! Неплохой результат. Давайте попробуем ещё раз.
            {' '}
          </p>

          <button
            type="button"
            onClick={() => {
              props.updateScreenData('game');
            }}
            className="btn final-btn"
          >
            Играть снова
          </button>
        </>
      )}
    </div>
  );
};

export default Final;
