import markdownStyles from './markdown-styles.module.css'
import PostNavigation from './post-navigation'

type Props = {
  slug: number
  content: string
  latestSlug: number
}

const QuoteBody = ({ slug, content, latestSlug }: Props) => {
  return (
    <article className="max-w-xl mx-auto md:space-y-6 flex-grow flex flex-col justify-center mb-6 md:mb-12">
      <PostNavigation currentSlug={slug} latestSlug={latestSlug} />
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <PostNavigation currentSlug={slug} latestSlug={latestSlug} />
    </article>
  )
}

export default QuoteBody
