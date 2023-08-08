import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import QuoteBody from '../../components/quote-body'
import Header from '../../components/header'
import Layout from '../../components/layout'
import { getQuoteBySlug, getAllQuotes, getLatestQuote } from '../../lib/api'
import Head from 'next/head'
import { SITE_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import type QuoteType from '../../interfaces/quote'
import formatDate from '../../lib/formatDate'
import DateFormatter from '../../components/date-formatter'
import Promotion from '../../components/promotion'

type Props = {
  post: QuoteType
  latestSlug: number
  preview?: boolean
}

export default function Post({ post, latestSlug, preview }: Props) {
  const router = useRouter()
  const title = `${SITE_NAME} | ${formatDate(post.releaseDate)}`
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container fullScreen>
        {router.isFallback ? (
          <Header title="Loading…" />
        ) : (
          <>
            <Head>
              <title>{title}</title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <Header
              title={
                <>
                  Posted on <DateFormatter dateString={post.releaseDate} />
                </>
              }
            />
            <QuoteBody
              slug={post.slug}
              content={post.content}
              latestSlug={latestSlug}
            />
            <Promotion />
          </>
        )}
      </Container>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const latestQuote = getLatestQuote(['slug'])
  const post = getQuoteBySlug(+params.slug, [
    'slug',
    'releaseDate',
    'speaker',
    'content',
    'ogImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
      latestSlug: latestQuote.slug,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every hour
    revalidate: 60 * 60,
  }
}

export async function getStaticPaths() {
  const posts = getAllQuotes(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: `${post.slug}`,
        },
      }
    }),
    // We'll pre-render only these paths at build time.
    // { fallback: 'blocking' } will server-render pages
    // on-demand if the path doesn't exist.
    fallback: 'blocking',
  }
}
