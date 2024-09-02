import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Assuming i18n is properly set up

test('renders home link', () => {
  render(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );
  const homeLink = screen.getByText(/Home/i); // "Home" in the current language
  expect(homeLink).toBeInTheDocument();
});
