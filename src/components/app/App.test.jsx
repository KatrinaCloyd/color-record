import React from 'react';
import { getByRole, render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import App from './App';

describe('App component', () => {
  it('renders App', () => {
    const app = render(<App />);
    expect(app).toMatchSnapshot();
    //on load
    const undo = screen.getByRole('button', { name: 'undo' });
    expect(undo).toHaveAttribute('disabled');
    const redo = screen.getByRole('button', { name: 'redo' });
    expect(redo).toHaveAttribute('disabled');
    const colorInput = screen.getByLabelText('Choose A Color:');
    expect(colorInput).toHaveValue('#ffffff');

    // fireEvent.input(colorInput, { target: { value: '#FF0000' } });

  });
});

// select #FF0000 
// Expect the square change to #FF0000
// select #0000FF 
// Expect the square change to #0000FF
// select #00FF00
// Expect the square change to #00FF00
// click undo
// Expect the square change to #0000FF
// press undo
// Expect the square change to #FF0000
// press redo
// Expect the square change to #0000FF
// select #FFFF00
// Expect the square change to #FFFF00
// press undo
// Expect the square change to #0000FF
// press undo
// Expect the square change to #FF0000
// press redo
// Expect the square change to #0000FF
// press redo
// Expect the square change to #FFFF00
// press redo
// Expect the square change to #00FF00
