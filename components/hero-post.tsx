import Avatar from './avatar'
import DateFormatter from './date-formatter'
import Link from 'next/link'
import type Author from '../interfaces/author'
import PostNavigation from './post-navigation'

type Props = {
  quote: string
}

const HeroPost = ({
  quote,
}: Props) => {
  return (
    <section className="flex flex-col align-center max-w-md space-y-12">
      <PostNavigation />
      <p className="text-lg leading-relaxed">{quote}</p>
      <PostNavigation />
    </section>
  )
}

export default HeroPost
