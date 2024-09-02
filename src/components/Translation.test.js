import React from 'react';
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n'; // Adjust the path if necessary
import App from '../App';

describe('Translation Functionality', () => {
  test('renders translated text in English', () => {
    i18n.changeLanguage('en');
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  test('renders translated text in Spanish', () => {
    i18n.changeLanguage('es');
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    );
    expect(screen.getByText('Hogar')).toBeInTheDocument();
  });
});
