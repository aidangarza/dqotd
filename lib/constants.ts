// Site
export const SITE_NAME = 'Disney Quote of the Day'
export const SITE_SHORTNAME = 'DQotD'
export const SITE_DOMAIN = 'www.disneyquoteoftheday.com'
export const SITE_URL = 'https://' + SITE_DOMAIN
export const SITE_SHORTURL = 'https://dqotd.me'

// Routing
export const PATH_HOME = '/'
export const PATH_QUOTE = (slug: number) => `/quotes/${slug}`
export const PATH_QUOTE_IMAGE = (slug: number) => `/quotes/${slug}.svg`
export const PATH_ARCHIVE = '/archive'

// Social
export const HOME_OG_IMAGE_PATH =
  '/assets/images/Walt_Disney_1946_cropped_512x512.png'

// Analytics
export const GA4_KEY = process.env.NEXT_PUBLIC_GA4_KEY ?? ''
