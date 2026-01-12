/**
 * Lightweight SEO helper without extra dependencies.
 * Sets document title and updates/creates meta tags for description and Open Graph.
 */
export function setPageMeta({ title, description, canonicalPath } = {}) {
  try {
    // 1. Set Title
    if (title) {
      document.title = title;
      // Also update Open Graph Title if it exists
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', title);
    }

    // 2. Set Description
    if (description) {
      // Standard meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);

      // Open Graph Description
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', description);
    }

    // 3. Set Canonical Link
    if (canonicalPath) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      const origin = window.location?.origin || '';
      link.setAttribute('href', `${origin}${canonicalPath}`);
    }
  } catch (e) {
    // No-op: avoid breaking render in restrictive environments.
  }
}