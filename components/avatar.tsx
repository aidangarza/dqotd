type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center justify-end">
      <div className="text-xl mr-4">- {name}</div>
      <img src={picture} className="w-12 h-12 rounded-full" alt={name} />
    </div>
  )
}

export default Avatar
