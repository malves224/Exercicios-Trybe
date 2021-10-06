// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

import App from './App';
it('alterando o valor dos campos e testando o valor guardado', () => {
  render(<App />);
  const inputNome = screen.getByTestId('input-nome');
  expect(inputNome).toHaveValue('');
  userEvent.type(inputNome, 'Estudante da Trybe');
  expect(inputNome).toHaveValue('Estudante da Trybe');

  const inputEmail = screen.getByTestId('input-email');
  expect(inputEmail).toHaveValue('');
  userEvent.type(inputEmail, 'estudante@trybe.com');
  expect(inputEmail).toHaveValue('estudante@trybe.com');
});