import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

jest.mock('react-router-dom', () => {
  const React = require('react');

  const MemoryRouter = ({ children }) => React.createElement(React.Fragment, null, children);
  const Link = ({ children, to, ...props }) =>
    React.createElement(
      'a',
      {
        href: typeof to === 'string' ? to : to?.pathname ?? '',
        ...props,
      },
      children
    );

  return {
    __esModule: true,
    Link,
    MemoryRouter,
  };
}, { virtual: true });

beforeEach(() => {
  window.scrollTo = jest.fn();
});

test('renders the portfolio header', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByRole('heading', { name: /derek gembus/i })).toBeInTheDocument();
  expect(
    screen.getByText(/software developer, data engineer & web developer based in cleveland, ohio/i)
  ).toBeInTheDocument();
});
