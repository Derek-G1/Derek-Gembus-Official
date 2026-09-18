/**
 * POST JSON to the cPanel PHP mail endpoint (DanimalClown-style).
 * Endpoint: /api/contact.php → { ok: true } | { ok: false, error, reason }
 */

const CONTACT_ENDPOINT =
  process.env.REACT_APP_CONTACT_ENDPOINT || '/api/contact.php';

const ERROR_BY_REASON = {
  validation: 'Please review the required fields and try again.',
  spam: 'Your request could not be sent. Please try again or email directly.',
  rate: 'Too many attempts in a short time. Please wait a few minutes and try again.',
  origin: 'This request could not be verified. Please submit the form from the website.',
  abuse: 'This request could not be processed right now. Please wait a bit and try again.',
  'throttled-send':
    'This email address has reached the current send limit. Please wait a while and try again.',
  config: 'The form is temporarily unavailable. Please email directly.',
  send: 'Your request could not be sent right now. Please email directly.',
};

export function getContactFormErrorMessage(error) {
  const reason = error && typeof error === 'object' ? error.reason : '';
  if (reason && ERROR_BY_REASON[reason]) return ERROR_BY_REASON[reason];
  if (error instanceof Error && error.message) return error.message;
  return 'Your request could not be sent. Please try again or email directly.';
}

/**
 * @param {Record<string, unknown>} payload
 * @returns {Promise<{ ok: true }>}
 */
export async function submitContactForm(payload) {
  const response = await fetch(CONTACT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => null);
  if (!response.ok || !data?.ok) {
    const err = new Error(
      data?.error || 'Your request could not be sent. Please try again or email directly.'
    );
    err.reason = data?.reason || '';
    throw err;
  }

  return data;
}

/**
 * Build a JSON payload from an HTML form, adding form metadata.
 * @param {HTMLFormElement} formEl
 * @param {{ formType: string, formRenderedAt?: number|string, extra?: Record<string, unknown> }} options
 */
export function formElementToPayload(formEl, { formType, formRenderedAt, extra = {} }) {
  const entries = Object.fromEntries(new FormData(formEl).entries());
  return {
    ...entries,
    ...extra,
    form_type: formType,
    formRenderedAt:
      formRenderedAt != null ? String(formRenderedAt) : String(Date.now()),
  };
}
