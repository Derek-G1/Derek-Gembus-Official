import '@testing-library/jest-dom';

jest.mock('lucide-react');

jest.mock('@emailjs/browser', () => ({
  __esModule: true,
  default: {
    send: jest.fn(),
    sendForm: jest.fn(),
  },
}));