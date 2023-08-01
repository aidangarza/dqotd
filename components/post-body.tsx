import markdownStyles from './markdown-styles.module.css'
import PostNavigation from './post-navigation'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-xl mx-auto space-y-12">
      <PostNavigation />
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <PostNavigation />
    </div>
  )
}

export default PostBody
