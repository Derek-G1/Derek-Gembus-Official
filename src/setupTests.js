import '@testing-library/jest-dom';

jest.mock('lucide-react');

jest.mock('./utils/submitContactForm', () => ({
  submitContactForm: jest.fn(() => Promise.resolve({ ok: true })),
  formElementToPayload: jest.fn((formEl, { formType, formRenderedAt, extra = {} }) => ({
    form_type: formType,
    formRenderedAt: String(formRenderedAt ?? Date.now()),
    ...extra,
  })),
  getContactFormErrorMessage: jest.fn(() => 'error'),
}));
