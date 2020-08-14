import React from 'react';

const Start = (props: { updateScreenData: (arg0: 'start' | 'game' | 'final') => void; }) => (
  <div>
    <h1>Добро пожаловать в Songbird!</h1>
    <p>В данной игре тебе предстоит по звукам угадывать животных с разных континентов. Желаю хорошо провести время!</p>
    <button
      type="button"
      onClick={() => {
        props.updateScreenData('game');
      }}
    >
      Начать игру
    </button>
  </div>
);

export default Start;
