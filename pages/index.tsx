import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'
import { useMemo } from 'react'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const today = useMemo(() => (new Date()).toLocaleDateString(), []);

  const heroPost = allPosts[0]

  return (
    <>
      <Layout>
        <Head>
          <title>{`Disney Quote of the Day | ${today}`}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              quote={heroPost.excerpt}
            />
          )}
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
