import React from 'react';
import renderWithRouter from './renderWithRouter';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from './App';

test('deve renderizar o componenete App', () => {
  renderWithRouter(<App />);
  const home = screen.getByText(/você está na página início/i);
  expect(home).toBeInTheDocument();
});

test('deve renderizar o componenete sobre ', () => { 
  const { history } = renderWithRouter(<App />);
  const linkSobre = screen.getByText(/Sobre/i);
  userEvent.click(linkSobre);
  const pathname = history.location.pathname;
  expect(pathname).toBe('/about');

  const aboutAllELement = screen.getByText(/Você está na página Sobre/);
  expect(aboutAllELement).toBeInTheDocument();
})