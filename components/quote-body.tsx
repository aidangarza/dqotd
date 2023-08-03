import markdownStyles from './markdown-styles.module.css'
import QuoteNavigation from './quote-navigation'
import { PATH_QUOTE, SITE_SHORTURL } from '../lib/constants'

type Props = {
  slug: number
  content: string
  latestSlug: number
}

const QuoteBody = ({ slug, content, latestSlug }: Props) => {
  const quoteUrl = `${SITE_SHORTURL}${PATH_QUOTE(slug)}`
  const imageUrl = `${SITE_SHORTURL}/assets/quotes/${slug}.png`

  return (
    <article className="max-w-xl mx-auto md:space-y-6 flex-grow flex flex-col justify-center mb-6 md:mb-12">
      <QuoteNavigation currentSlug={slug} latestSlug={latestSlug} />
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <QuoteNavigation currentSlug={slug} latestSlug={latestSlug} />
      <div className="text-center text-gray-400 mt-6 space-y-3">
        <div>
          Permanent link to this quote:{' '}
          <a className="underline" href={quoteUrl}>
            {quoteUrl}
          </a>
        </div>
        <div>
          Image URL (for hotlinking/embedding):{' '}
          <a className="underline" href={quoteUrl}>
            {imageUrl}
          </a>
        </div>
      </div>
    </article>
  )
}

export default QuoteBody
