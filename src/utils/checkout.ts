/**
 * Appends current URL search parameters (like utm_source, utm_campaign, etc.)
 * to the destination checkout URL so that tracking parameters are preserved.
 */
export function getCheckoutUrlWithParams(baseUrl: string): string {
  try {
    if (typeof window === 'undefined' || !window.location.search) {
      return baseUrl;
    }

    const currentParams = new URLSearchParams(window.location.search);
    const targetUrl = new URL(baseUrl);

    currentParams.forEach((value, key) => {
      if (!targetUrl.searchParams.has(key)) {
        targetUrl.searchParams.set(key, value);
      }
    });

    return targetUrl.toString();
  } catch {
    return baseUrl;
  }
}

export function redirectToCheckout(baseUrl: string) {
  const finalUrl = getCheckoutUrlWithParams(baseUrl);
  window.location.href = finalUrl;
}
