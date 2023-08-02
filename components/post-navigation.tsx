import { PATH_QUOTES } from '../lib/constants'

type Props = {
  currentSlug: number
  latestSlug: number
}

function getRandomSlug(currentSlug: number, latestSlug: number) {
  const randomSlug = Math.ceil(Math.random() * latestSlug)

  if (randomSlug === currentSlug) {
    return getRandomSlug(currentSlug, latestSlug)
  }

  return randomSlug
}

const LinkButton = ({ slug, children }) => {
  return (
    <a
      href={`${PATH_QUOTES}/${slug}`}
      className="relative inline-flex items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
    >
      {children}
    </a>
  )
}

const PostNavigation = ({ currentSlug, latestSlug }: Props) => {
  const randomSlug = getRandomSlug(currentSlug, latestSlug)

  return (
    <div className="flex justify-around text-md text-gray-400">
      <LinkButton slug={1}>&#9198;</LinkButton>
      <LinkButton slug={currentSlug - 1 || 1}>&#9194;</LinkButton>
      <LinkButton slug={randomSlug}>random</LinkButton>
      <LinkButton
        slug={currentSlug + 1 < latestSlug ? currentSlug + 1 : latestSlug}
      >
        &#9193;
      </LinkButton>
      <LinkButton slug={latestSlug}>&#9197;</LinkButton>
    </div>
  )
}

export default PostNavigation
