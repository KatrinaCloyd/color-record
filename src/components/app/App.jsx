/* eslint-disable indent */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';

const useRecord = () => {
  const [current, setCurrent] = useState(0);
  const [colorHistory, addToHistory] = useState(['#ffffff']);

  useEffect(() => {
    // console.log('current index - useEffect', current);
    // console.log('current history array - useEffect', colorHistory);
  }, [current]);

  const undo = () => {
    setCurrent((prev) => prev - 1);
  };

  const redo = () => {
    setCurrent((prev) => prev + 1);
  };

  const record = (clr) => {
    if (colorHistory.length === current + 1) {
      addToHistory((prev) => [...prev, clr]);
      setCurrent((prev) => prev + 1);
    }
    else {
      addToHistory((prevArr) =>
        // prevArr.splice(current + 1, 0, clr));
        [...prevArr.slice(0, current + 1), // ...before
          clr,
        ...prevArr.slice(current + 1)]); // ...after
      setCurrent((prev) => prev + 1);
    }
  };

  return { current, undo, redo, record, colorHistory };
};

function App() {

  const { current, undo, redo, record, colorHistory } = useRecord();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <div>
        <button
          aria-label={'undo'}
          onClick={undo}
          style={{ margin: '10px' }}
          disabled={current <= 0}
        >undo</button>
        <button
          aria-label={'redo'}
          onClick={redo}
          style={{ margin: '10px' }}
          disabled={current >= colorHistory.length - 1 || colorHistory.length <= 1}
        >redo</button>
      </div>
      <label> Choose A Color:
      <input
          aria-label={'color-input'}
          type="color"
          style={{ margin: '10px' }}
          value={colorHistory[current]}
          onChange={(e) => record(e.target.value)}
        />
      </label>
      <div
        aria-label={'clr-box'}
        style={{
          backgroundColor: colorHistory[current],
          width: '10rem',
          height: '10rem',
          margin: '10px'
        }}
      ></div>
    </div>
  );
}

export default App;
