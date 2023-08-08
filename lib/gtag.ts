import { GA4_KEY } from './constants'

declare global {
  interface Window {
    gtag: (
      method: string,
      action: string,
      config: Record<string, string>
    ) => void
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (!GA4_KEY) return

  window.gtag('config', GA4_KEY, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (action: string, { category, label, value }) => {
  if (!GA4_KEY) return

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
