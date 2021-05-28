import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders App', () => {
    render(<App />);
    screen.getByRole('button', { name: 'undo' });

  });
});
