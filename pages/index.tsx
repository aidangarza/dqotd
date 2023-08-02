import Container from '../components/container'
import Layout from '../components/layout'
import { getLatestQuote } from '../lib/api'
import Head from 'next/head'
import Quote from '../interfaces/quote'
import QuoteBody from '../components/quote-body'
import { SITE_NAME } from '../lib/constants'
import Header from '../components/header'
import formatDate from '../lib/formatDate'

type Props = {
  latestQuote: Quote
}

export default function Index({ latestQuote }: Props) {
  const todayIso = new Date().toISOString()

  return (
    <Layout>
      <Head>
        <title>{`${SITE_NAME} | ${formatDate(todayIso)}`}</title>
      </Head>
      <Container fullScreen>
        <Header date={todayIso} />
        {latestQuote && (
          <QuoteBody
            slug={latestQuote.slug}
            content={latestQuote.content}
            latestSlug={latestQuote.slug}
          />
        )}
      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const latestQuote = getLatestQuote(['slug', 'content'])

  return {
    props: { latestQuote },
  }
}
