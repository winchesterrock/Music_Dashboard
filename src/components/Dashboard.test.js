import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from '../Pages/Dashboard';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n'; // Ensure this path is correct

describe('Dashboard Component', () => {
  test('renders Dashboard component', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Dashboard />
      </I18nextProvider>
    );
    const dashboardElement = screen.getByTestId('dashboard');
    expect(dashboardElement).toBeInTheDocument();
  });

  test('has proper scrolling behavior when sidebar is open', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Dashboard />
      </I18nextProvider>
    );
    const hamburgerIcon = screen.getByLabelText('hamburger');
    fireEvent.click(hamburgerIcon);
    expect(document.body).toHaveClass('no-scroll');
  });


  test('applies background filters correctly', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Dashboard />
      </I18nextProvider>
    );
    const blurBackgroundElement = screen.getByTestId('blur-background');
    expect(blurBackgroundElement).toHaveClass('blur-background');
  });
});
