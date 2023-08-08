import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <main className="min-h-screen bg-accent-1 dark:bg-accent-7 text-accent-7 dark:text-accent-1">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
