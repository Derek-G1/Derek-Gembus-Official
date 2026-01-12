import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio header', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /derek gembus/i })).toBeInTheDocument();
  expect(screen.getByText(/software developer/i)).toBeInTheDocument();
});