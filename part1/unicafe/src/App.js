import React, { useState } from 'react'
import './App.css'

const Button = ({ text, handler }) => <button onClick={handler}>{text}</button>

const Statistics = ({ text, val }) => (
  <tr>
    <td className="p-5">{text} </td>
    <td>
      {!isNaN(val) ? val : 0} {text === 'positive' && '%'}
    </td>
  </tr>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = React.useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const universalHandler = (feedback) => () => {
    setAll(all + 1)
    feedback === 'good'
      ? setGood(good + 1)
      : feedback === 'neutral'
      ? setNeutral(neutral + 1)
      : feedback === 'bad' && setBad(bad + 1)
    // switch (feedback) {
    //   case 'good':
    //     setGood(good + 1)
    //     break
    //   case 'neutral':
    //     setNeutral(neutral + 1)
    //     break
    //   case 'bad':
    //     setBad(bad + 1)
    //     break
    //   default:
    //     break
    // }
  }
  const average = (good * 1 + neutral * 0 + bad * -1) / all
  const positive = (good / all) * 100

  return (
    <div className="p-5">
      <h2>give feedback</h2>
      <Button handler={universalHandler('good')} text="good" />
      <Button handler={universalHandler('neutral')} text="neutral" />
      <Button handler={universalHandler('bad')} text="bad" />
      <h2>statistics</h2>
      <Statistics text="good" val={good} />
      <Statistics text="neutral" val={neutral} />
      <Statistics text="bad" val={bad} />
      <Statistics text="all" val={all} />
      <Statistics text="average" val={average} />
      <Statistics text="positive" val={positive} />
    </div>
  )
}

export default App
