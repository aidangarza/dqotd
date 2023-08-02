import { PATH_QUOTES } from '../lib/constants'
import Link from 'next/link'

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
    <Link
      role="button"
      as={`${PATH_QUOTES}/${slug}`}
      href={`${PATH_QUOTES}/[slug]`}
      className="relative inline-flex items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
    >
      {children}
    </Link>
  )
}

const QuoteNavigation = ({ currentSlug, latestSlug }: Props) => {
  const randomSlug = getRandomSlug(currentSlug, latestSlug)

  return (
    <nav className="flex justify-around text-md text-gray-400">
      <LinkButton slug={1}>&#9198;</LinkButton>
      <LinkButton slug={currentSlug - 1 || 1}>&#9194;</LinkButton>
      <LinkButton slug={randomSlug}>random</LinkButton>
      <LinkButton
        slug={currentSlug + 1 < latestSlug ? currentSlug + 1 : latestSlug}
      >
        &#9193;
      </LinkButton>
      <LinkButton slug={latestSlug}>&#9197;</LinkButton>
    </nav>
  )
}

export default QuoteNavigation
