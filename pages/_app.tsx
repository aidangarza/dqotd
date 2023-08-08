import { AppProps } from 'next/app'
import Script from 'next/script'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { GA4_KEY } from '../lib/constants'
import * as gtag from '../lib/gtag'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {GA4_KEY ? (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA4_KEY}`}
          />
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_KEY}');
          `,
            }}
          />
        </>
      ) : null}

      <Component {...pageProps} />
    </>
  )
}
