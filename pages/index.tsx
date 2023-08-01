import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getLatestQuote } from '../lib/api'
import Head from 'next/head'
import Quote from '../interfaces/quote'
import { useMemo } from 'react'
import PostBody from '../components/post-body'

type Props = {
  latestQuote: Quote
}

export default function Index({ latestQuote }: Props) {
  const today = useMemo(() => new Date().toLocaleDateString(), [])

  return (
    <>
      <Layout>
        <Head>
          <title>{`Disney Quote of the Day | ${today}`}</title>
        </Head>
        <Container>
          <Intro />
          {latestQuote && <PostBody content={latestQuote.content} />}
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const latestQuote = getLatestQuote(['content'])

  return {
    props: { latestQuote },
  }
}
