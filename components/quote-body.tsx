import markdownStyles from './markdown-styles.module.css'
import QuoteNavigation from './quote-navigation'
import { PATH_QUOTES, SITE_SHORTURL } from '../lib/constants'

type Props = {
  slug: number
  content: string
  latestSlug: number
}

const QuoteBody = ({ slug, content, latestSlug }: Props) => {
  const quoteUrl = `${SITE_SHORTURL}${PATH_QUOTES}/${slug}`
  const imageUrl = `${SITE_SHORTURL}/api/og-image/${slug}`

  return (
    <article className="max-w-xl mx-auto md:space-y-6 flex-grow flex flex-col justify-center mb-6 md:mb-12">
      <QuoteNavigation currentSlug={slug} latestSlug={latestSlug} />
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <QuoteNavigation currentSlug={slug} latestSlug={latestSlug} />
      <div className="text-center text-gray-400 mt-6">
        Permanent link to this quote:{' '}
        <a className="underline" href={quoteUrl}>
          {quoteUrl}
        </a>
      </div>
      <div className="text-center text-gray-400 mt-3">
        Image URL (for hotlinking/embedding):{' '}
        <a className="underline" href={quoteUrl}>
          {quoteUrl}
        </a>
      </div>
    </article>
  )
}

export default QuoteBody
