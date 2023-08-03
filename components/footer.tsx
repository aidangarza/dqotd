import Container from './container'
import { EXAMPLE_PATH, ROUTE_ARCHIVE } from '../lib/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Built with <span style={{ color: '#ff8800' }}>&hearts;</span> by{' '}
            <a
              href="https://www.f80.dev"
              className="hover:underline"
              target="_blank"
            >
              <span style={{ color: '#ff8800' }}>#F80</span>
              .dev
            </a>
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <Link
              href={ROUTE_ARCHIVE}
              className="mx-3 font-bold hover:underline"
            >
              View Archive
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
