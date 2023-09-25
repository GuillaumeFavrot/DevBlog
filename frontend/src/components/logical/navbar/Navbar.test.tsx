import React from 'react';
import { fireEvent } from '@testing-library/react';
import Navbar from './index';
import App from '../../../app/App';
import { renderWithProviders } from '../../../tests/test-utils';
import '@testing-library/jest-dom'

describe('Navbar component', () => {
  it('should render the navbar with all buttons and dropdown', () => {
    const navbar = renderWithProviders(<Navbar />);
    expect(navbar.getByText('Devblog')).toBeInTheDocument();
    expect(navbar.getByText('Articles')).toBeInTheDocument();
    expect(navbar.getByText('Websites')).toBeInTheDocument();
    expect(navbar.getByText('Admin area')).toBeInTheDocument();
    expect(navbar.getByLabelText('language_dropdown')).toBeInTheDocument();
    expect(navbar.getByLabelText('light_mode')).toBeInTheDocument();
    expect(navbar.getByLabelText('dark_mode')).toBeInTheDocument();
  });

  it('should switch language when language dropdown is changed', () => {
    const { getByLabelText } = renderWithProviders(<Navbar />);
    const languageDropdown = getByLabelText('language_dropdown') as HTMLSelectElement;
    fireEvent.change(languageDropdown, { target: { value: 'fr' } });
    expect(languageDropdown.value).toBe('fr');
    fireEvent.change(languageDropdown, { target: { value: 'en' } });
    expect(languageDropdown.value).toBe('en');
  });

  it('should switch between light and dark mode when mode button is clicked', () => {
    const navbar = renderWithProviders(<Navbar />);
    const lightModeButton = navbar.getByLabelText('light_mode');
    fireEvent.click(lightModeButton);
    expect(navbar.getAllByLabelText('light_mode')[0]).toBeInTheDocument();
    const darkModeButton = navbar.getByLabelText('dark_mode');
    fireEvent.click(darkModeButton);
    expect(navbar.getAllByLabelText('dark_mode')[0]).toBeInTheDocument();
  });

  it('should switch page when a button is clicked', () => {
    const navbar = renderWithProviders(<Navbar />);
    const app = renderWithProviders(<App />);
    const articlePageButton = navbar.getAllByLabelText('article-page-button')[0];
    const websitePageButton = navbar.getAllByLabelText('article-page-button')[0];
    const homePageButton = navbar.getAllByLabelText('article-page-button')[0];
    fireEvent.click(articlePageButton);
    expect(app.getByLabelText('article-list')).toBeInTheDocument();
    fireEvent.click(websitePageButton);
    expect(app.getAllByText('Websites')[0]).toBeInTheDocument();
    fireEvent.click(homePageButton);
    expect(app.getAllByText('Home')[0]).toBeInTheDocument();
  });
});