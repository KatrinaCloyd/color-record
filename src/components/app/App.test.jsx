import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

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
    const colorBox = screen.getByLabelText('clr-box');
    expect(colorBox).toHaveStyle({ 'background-color': '#ffffff' });



    fireEvent.change(colorInput, { target: { value: '#FF0000' } });
    expect(colorBox).toHaveStyle({ 'background-color': '#FF0000' });

    fireEvent.change(colorInput, { target: { value: '#0000FF' } });
    expect(colorBox).toHaveStyle({ 'background-color': '#0000FF' });

    fireEvent.change(colorInput, { target: { value: '#00FF00' } });
    expect(colorBox).toHaveStyle({ 'background-color': '#00FF00' });

    fireEvent.click(undo);
    expect(colorBox).toHaveStyle({ 'background-color': '#0000FF' });

    fireEvent.click(undo);
    expect(colorBox).toHaveStyle({ 'background-color': '#FF0000' });

    fireEvent.click(redo);
    expect(colorBox).toHaveStyle({ 'background-color': '#0000FF' });

    fireEvent.change(colorInput, { target: { value: '#FFFF00' } });
    expect(colorBox).toHaveStyle({ 'background-color': '#FFFF00' });

    fireEvent.click(undo);
    expect(colorBox).toHaveStyle({ 'background-color': '#0000FF' });

    fireEvent.click(undo);
    expect(colorBox).toHaveStyle({ 'background-color': '#FF0000' });

    fireEvent.click(redo);
    expect(colorBox).toHaveStyle({ 'background-color': '#0000FF' });

    fireEvent.click(redo);
    expect(colorBox).toHaveStyle({ 'background-color': '#FFFF00' });

    fireEvent.click(redo);
    expect(colorBox).toHaveStyle({ 'background-color': '#00FF00' });
  });
});
