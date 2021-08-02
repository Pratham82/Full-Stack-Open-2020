const History = ({ clicks }) =>
  clicks.length === 0 ? (
    <div>The app is used by pressing the buttons</div>
  ) : (
    <div>Button press history: {clicks.join(' ')}</div>
  )

export default History
