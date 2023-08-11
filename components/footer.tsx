import Container from './container'
import { PATH_HOME, PATH_ARCHIVE, PATH_LICENSE } from '../lib/constants'
import Link from 'next/link'

const LINKS = [
  {
    href: PATH_HOME,
    label: 'Home',
  },
  {
    href: PATH_ARCHIVE,
    label: 'Archive',
  },
]

const Footer = () => {
  return (
    <footer className="bg-neutral-100 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Built with <span className="text-f80">&hearts;</span> by{' '}
            <a
              href="https://www.f80.dev"
              className="hover:underline"
              target="_blank"
            >
              <span className="text-f80">#F80</span>
              .dev
            </a>
          </h3>
          <div className="flex flex-col justify-center items-center space-y-1.5 lg:pl-4 lg:w-1/2">
            {LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="mx-3 font-bold hover:underline"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <p className="text-center text-neutral-500 text-sm">
            This work is licensed under a{' '}
            <a
              href="https://creativecommons.org/licenses/by-nc/2.5/"
              target="_blank"
              className="underline"
            >
              Creative Commons Attribution-NonCommercial 2.5 License
            </a>
            .
          </p>
          <p className="text-center text-neutral-500 text-sm">
            This means you're free to copy and share these images (but not to
            sell them).{' '}
            <Link href={PATH_LICENSE} className="underline">
              More details.
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
