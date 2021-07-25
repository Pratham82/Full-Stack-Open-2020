export const Button = ({ styles, message, handleClick }) => {
  return (
    <button className="counterButton" style={styles} onClick={handleClick}>
      <b>{message}</b>
    </button>
  )
}
