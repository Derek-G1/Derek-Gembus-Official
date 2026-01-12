// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// src/setupTests.js
import '@testing-library/jest-dom';

// Use the manual mock above for all tests
jest.mock('lucide-react');

// Optional (but smart): prevent EmailJS from doing anything in tests
jest.mock('@emailjs/browser', () => ({
  __esModule: true,
  default: {
    send: jest.fn(),
    sendForm: jest.fn(),
  },
}));