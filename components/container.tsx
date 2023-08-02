type Props = {
  children?: React.ReactNode
  fullScreen?: boolean
}

const Container = ({ children, fullScreen = false }: Props) => {
  return (
    <div
      className={`container mx-auto px-5 flex-col flex items-center ${
        fullScreen ? 'min-h-screen' : ''
      }`}
    >
      {children}
    </div>
  )
}

export default Container
