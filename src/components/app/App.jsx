/* eslint-disable indent */
/* eslint-disable max-len */
import React from 'react';
import { useRecord } from '../../hooks/useRecord';
import ClrBox from '../display/ClrBox';
import Controls from '../display/controls';

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
      <Controls undo={undo} current={current} redo={redo} colorHistory={colorHistory} record={record} />
      <ClrBox current={current} colorHistory={colorHistory} />
    </div>
  );
}

export default App;
