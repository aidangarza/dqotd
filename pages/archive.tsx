import Container from '../components/container'
import Layout from '../components/layout'
import { getActiveQuotes } from '../lib/api'
import Head from 'next/head'
import Quote from '../interfaces/quote'
import { PATH_QUOTE, SITE_NAME } from '../lib/constants'
import Header from '../components/header'
import Link from 'next/link'
import DateFormatter from '../components/date-formatter'

type Props = {
  allQuotes?: Quote[]
}

export default function Index({ allQuotes = [] }: Props) {
  return (
    <Layout>
      <Head>
        <title>{`${SITE_NAME} | Archive`}</title>
      </Head>
      <Container fullScreen>
        <Header title="Archive" />
        <ul className="leading-loose">
          {allQuotes.map((quote) => (
            <li>
              <Link href={PATH_QUOTE(quote.slug)} className="hover:underline">
                <b>
                  <DateFormatter dateString={quote.releaseDate} />:{' '}
                </b>
                <span className="text-gray-400">{quote.excerpt}...</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allQuotes = getActiveQuotes(['slug', 'excerpt', 'releaseDate'])

  return {
    props: {
      allQuotes,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every hour
    revalidate: 60 * 60,
  }
}
