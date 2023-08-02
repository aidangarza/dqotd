import markdownStyles from './markdown-styles.module.css'
import PostNavigation from './post-navigation'

type Props = {
  slug: number
  content: string
  latestSlug: number
}

const QuoteBody = ({ slug, content, latestSlug }: Props) => {
  return (
    <div className="max-w-xl mx-auto lg:space-y-12 flex-grow flex flex-col justify-center mb-6 lg:mb-12">
      <PostNavigation currentSlug={slug} latestSlug={latestSlug} />
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <PostNavigation currentSlug={slug} latestSlug={latestSlug} />
    </div>
  )
}

export default QuoteBody
