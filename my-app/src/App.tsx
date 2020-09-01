import React, { useState, useEffect } from 'react';

import Start from './components/startPage/Start';
import Game from './components/gamePage/Game';
import Final from './components/finalPage/Final';

function App() {
  const [screen, setScreen] = useState('start');
  const [finalPoints, setFinalPoints] = useState(0);

  const updateScreenData = (value: 'start' | 'game' | 'final') => {
    setScreen(value);
  };

  const setResultValue = (value: number) => {
    setFinalPoints(value);
  };

  return (
    <>
      {screen === 'start' && <Start updateScreenData={updateScreenData} />}
      {screen === 'game' && <Game updateScreenData={updateScreenData} setResult={setResultValue} />}
      {screen === 'final' && <Final updateScreenData={updateScreenData} points={finalPoints} />}
    </>
  );
}

export default App;
