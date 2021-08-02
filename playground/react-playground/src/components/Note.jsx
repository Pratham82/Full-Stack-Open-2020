const Note = ({ note }) => {
  const { content, date, important, id } = note
  return (
    <p>
      {content} {important ? '❗' : ''}{' '}
    </p>
  )
}
export default Note
