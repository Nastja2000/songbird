import React from 'react';

const Game = (props: { updateScreenData: (arg0: 'start' | 'game' | 'final') => void; setResult: (arg0: number) => void; }) => (
  <div>
    <p>game</p>
    <button
      type="button"
      onClick={() => {
        props.updateScreenData('final');
        props.setResult(15);
      }}
    >
      Change screen
    </button>
  </div>
);

export default Game;
