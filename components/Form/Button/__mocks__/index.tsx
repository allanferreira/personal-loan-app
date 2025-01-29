export default function Button({
  text,
}: {
  text: string
  onClick: () => void
}) {
  return <div>{text}</div>
}
