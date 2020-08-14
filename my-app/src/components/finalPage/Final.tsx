/* eslint-disable react/destructuring-assignment */
import React from 'react';

const Final = (props: { updateScreenData: (arg0: 'start' | 'game' | 'final') => void; points: React.ReactNode; }) => {
  const { points } = props;
  return (
    <div>
      {points === 30 ? (
        <>
          <p>
            {' '}
            Ура! Это победа! Поздравляю! Да ты можешь вести какую-нибудь программу о животных, так хорошо ты их знаешь.
            P.S. Только не говори, что ты ещё и понимаешь, что они говорят.
            {' '}
          </p>
        </>
      ) : (
        <>
          <p>
            {' '}
            Вы набрали
            {' '}
            {points}
            {' '}
            из 30 возможных! Неплохой результат. Давай попробуем ещё раз.
            {' '}
          </p>

          <button
            type="button"
            onClick={() => {
              props.updateScreenData('game');
            }}
          >
            Играть снова
          </button>
        </>
      )}
    </div>
  );
};

export default Final;
