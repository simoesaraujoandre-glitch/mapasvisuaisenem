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

/**
 * Redirects the user to the checkout URL.
 *
 * IMPORTANT: We intentionally wait a short moment before navigating away.
 * Tracking pixels (like Utmify's Meta Pixel integration) fire an
 * "InitiateCheckout" event asynchronously when the checkout button is
 * clicked. If we navigate immediately, the browser can cancel that
 * pending network request before it finishes sending, so the event never
 * reaches Meta — even though it shows as "Habilitado" in Utmify. Giving it
 * ~350ms is enough for the event to be sent while still feeling instant
 * to the user.
 */
export function redirectToCheckout(baseUrl: string) {
  const finalUrl = getCheckoutUrlWithParams(baseUrl);
  window.setTimeout(() => {
    window.location.href = finalUrl;
  }, 350);
}
