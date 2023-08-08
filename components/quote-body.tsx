import markdownStyles from './markdown-styles.module.css'
import QuoteNavigation from './quote-navigation'
import { PATH_QUOTE, SITE_SHORTURL } from '../lib/constants'
import Speaker from '../interfaces/speaker'
import Avatar from './avatar'

type Props = {
  slug: number
  content: string
  speaker: Speaker
  latestSlug: number
}

const QuoteBody = ({ slug, content, speaker, latestSlug }: Props) => {
  const quoteUrl = `${SITE_SHORTURL}${PATH_QUOTE(slug)}`

  return (
    <article className="max-w-xl mx-auto space-y-1 md:space-y-6 flex-grow flex flex-col justify-center mb-6 md:mb-12">
      <QuoteNavigation currentSlug={slug} latestSlug={latestSlug} />
      <div className="bg-gray-200 dark:bg-gray-600 px-2 pb-2 md:px-6 md:pb-6 rounded-xl">
        <div
          className={markdownStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <Avatar {...speaker} />
      </div>
      <QuoteNavigation currentSlug={slug} latestSlug={latestSlug} />
      <div className="text-center text-gray-400 mt-6 space-y-3">
        <div>
          Permanent link to this quote:{' '}
          <a className="underline" href={quoteUrl}>
            {quoteUrl}
          </a>
        </div>
      </div>
    </article>
  )
}

export default QuoteBody
