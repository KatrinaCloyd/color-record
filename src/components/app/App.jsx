/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';

const useRecord = () => {
  const [current, setCurrent] = useState(0);
  const [colorHistory, addToHistory] = useState(['#FF0000']);

  useEffect(() => {
  }, [current]);

  const undo = () => {
    setCurrent((prev) => prev - 1);
  };

  const redo = () => {
    setCurrent((prev) => prev + 1);
  };

  const record = (clr) => {
    // console.log(clr);
    // console.log('current index', current);
    setCurrent((prev) => prev + 1);
    // console.log('index now', current);
    //this just adds it to the end, we need to add it in at the index given.. 
    // const newHst = colorHistory.splice(current, 0, clr);
    // addToHistory(newHst);
    // console.log('current history array', colorHistory);
  };

  return { current, undo, redo, record, colorHistory };
};

function App() {

  const { current, undo, redo, record, colorHistory } = useRecord();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div>
        <button onClick={undo} style={{ margin: '10px' }} disabled={current <= 1}>undo</button>
        <button onClick={redo} style={{ margin: '10px' }} disabled={current >= colorHistory.length - 1 || colorHistory.length <= 1}>redo</button>
      </div>
      <label /> Choose A Color:
      <input type="color" style={{ margin: '10px' }} value={colorHistory[current]} onChange={(e) => record(e.target.value)} />
      <div style={{ backgroundColor: colorHistory[current], width: '10rem', height: '10rem', margin: '10px' }}></div>
    </div>
  );
}

export default App;