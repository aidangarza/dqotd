import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import QuoteBody from '../../components/quote-body'
import Header from '../../components/header'
import Layout from '../../components/layout'
import { getQuoteBySlug, getAllQuotes, getLatestQuote } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
import type QuoteType from '../../interfaces/quote'
import DateFormatter from '../../components/date-formatter'
import Promotion from '../../components/promotion'
import QuoteMeta from '../../components/quote-meta'

type Props = {
  post: QuoteType
  latestSlug: number
}

export default function Post({ post, latestSlug }: Props) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <Container fullScreen>
        {router.isFallback ? (
          <Header title="Loading…" />
        ) : (
          <>
            <QuoteMeta quote={post} />
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
              excerpt={post.excerpt}
              speaker={post.speaker}
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
    'content',
    'excerpt',
    'speaker',
    'releaseDate',
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
