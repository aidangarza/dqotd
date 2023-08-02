import Link from 'next/link'
import { SITE_NAME } from '../lib/constants'
import DateFormatter from './date-formatter'

type Props = {
  date: string
}

const Header = ({ date }: Props) => {
  return (
    <div className="my-8 space-y-3">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
        <Link href="/" className="hover:underline">
          {SITE_NAME}
        </Link>
        .
      </h2>
      <h1 className="text-sm text-center">
        Posted on <DateFormatter dateString={date} />
      </h1>
    </div>
  )
}

export default Header
