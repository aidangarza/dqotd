import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight">
        DQotD
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5">
        Disney Quote of the Day
      </h4>
    </section>
  )
}

export default Intro
