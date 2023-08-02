type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <div className="container mx-auto px-5 flex-col flex items-center min-h-screen">
      {children}
    </div>
  )
}

export default Container
