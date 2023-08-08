import markdownStyles from './markdown-styles.module.css'
import QuoteNavigation from './quote-navigation'
import { PATH_QUOTE, PATH_QUOTE_IMAGE, SITE_SHORTURL } from '../lib/constants'
import Speaker from '../interfaces/speaker'
import Avatar from './avatar'
import QuoteImage from './quote-image'

type Props = {
  slug: number
  content: string
  excerpt: string
  speaker: Speaker
  latestSlug: number
}

const QuoteBody = ({ slug, content, excerpt, speaker, latestSlug }: Props) => {
  const quoteUrl = `${SITE_SHORTURL}${PATH_QUOTE(slug)}`
  const imageUrl = `${SITE_SHORTURL}${PATH_QUOTE_IMAGE(slug)}`

  return (
    <article className="w-full max-w-xl mx-auto space-y-1 md:space-y-6 flex-grow flex flex-col justify-center mb-6 md:mb-12">
      <QuoteNavigation currentSlug={slug} latestSlug={latestSlug} />

      <img
        src={PATH_QUOTE_IMAGE(slug)}
        className="w-full"
        alt={`Quote by ${speaker.name}`}
      />

      <div className="sr-only">
        <blockquote
          className={markdownStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <Avatar {...speaker} />
      </div>

      <QuoteNavigation currentSlug={slug} latestSlug={latestSlug} />

      <div className="text-center text-gray-400 mt-6 space-y-1">
        <div>
          Permanent link:{' '}
          <a className="underline" href={quoteUrl}>
            {quoteUrl}
          </a>
        </div>
        <div>
          Image URL:{' '}
          <a className="underline" href={imageUrl}>
            {imageUrl}
          </a>
        </div>
      </div>
    </article>
  )
}

export default QuoteBody
