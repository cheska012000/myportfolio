/* src/App.test.js */

/**
 * File name: App.test.js
 * Student's Name: Cheska L. Mendoza
 * Student ID: 301352449
 * Date: 05/24/24
 */

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
