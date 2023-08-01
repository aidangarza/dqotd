import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getLatestQuote } from '../lib/api'
import Head from 'next/head'
import Quote from '../interfaces/quote'
import { useMemo } from 'react'
import PostBody from '../components/post-body'
import { SITE_NAME } from '../lib/constants'
import Header from '../components/header'

type Props = {
  latestQuote: Quote
}

export default function Index({ latestQuote }: Props) {
  const today = useMemo(() => new Date().toLocaleDateString(), [])

  return (
    <>
      <Layout>
        <Head>
          <title>{`${SITE_NAME} | ${today}`}</title>
        </Head>
        <Container>
          <Header />
          {latestQuote && <PostBody content={latestQuote.content} />}
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const latestQuote = getLatestQuote(['slug', 'content'])

  return {
    props: { latestQuote },
  }
}
