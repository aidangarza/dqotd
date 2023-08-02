import markdownStyles from './markdown-styles.module.css'
import PostNavigation from './post-navigation'
import { PATH_QUOTES } from '../lib/constants'

type Props = {
  slug: number
  content: string
  latestSlug: number
}

const QuoteBody = ({ slug, content, latestSlug }: Props) => {
  const quoteUrl = `${PATH_QUOTES}/${slug}`

  return (
    <article className="max-w-xl mx-auto md:space-y-6 flex-grow flex flex-col justify-center mb-6 md:mb-12">
      <PostNavigation currentSlug={slug} latestSlug={latestSlug} />
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <PostNavigation currentSlug={slug} latestSlug={latestSlug} />
      <div className="text-center text-gray-400">
        Permanent link to this quote:{' '}
        <a className="underline" href={quoteUrl}>
          {quoteUrl}
        </a>
      </div>
    </article>
  )
}

export default QuoteBody
