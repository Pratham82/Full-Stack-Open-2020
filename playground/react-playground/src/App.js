import './App.css'
import React, { useState } from 'react'
import { Hello } from './components/Hello.jsx'
import { Display } from './components/Display.jsx'
import { Button } from './components/Button.jsx'

const History = ({ clicks }) =>
  clicks.length === 0 ? (
    <div>The app is used by pressing the buttons</div>
  ) : (
    <div>Button press history: {clicks.join(' ')}</div>
  )

function App() {
  const [counter, setCounter] = useState(0)
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAllClicks] = useState([])
  const name = 'Peter'
  const age = 10

  // setTimeout(() => setCounter(counter + 1), 1000)

  // Global State modifier
  const increaseCounter = () => setCounter(counter + 1)
  const decreaseCounter = () => counter > 0 && setCounter(counter + -1)
  const resetCounter = () => setCounter(0)

  // In practice { ...clicks } creates a new object that has copies of all of the properties of the clicks object.
  // When we specify a particular property - e.g. right in { ...clicks, right: 1 }, the value of the right property in the new object will be 1.

  // { ...clicks, right: clicks.right + 1 }
  // creates a copy of the clicks object where the value of the right property is increased by one.

  // Setting left and right clicks
  const handleRightClick = () => {
    // setClicks({ ...clicks, right: (clicks.right += 1) })
    setRight(right + 1)
    setAllClicks(allClicks.concat('R'))
  }

  const handleLeftClick = () => {
    // setClicks({ ...clicks, left: (clicks.left += 1) })
    setLeft(left + 1)
    setAllClicks(allClicks.concat('L'))
  }

  const handleResetClick = () => {
    setAllClicks([])
    setLeft(0)
    setRight(0)
  }

  // const helloHandler = (who) => {
  //   const hello = () => console.log(`Hello ${who}`)
  //   return hello
  // }

  // helloHandler modified
  const helloHandler2 = (who) => () => console.log(`Hello ${who} 👋`)

  // const setValueToCounter = (value) => () => {
  //   setCounter(value)
  // }

  const setValueToCounter2 = (val) => () => setCounter(val)

  return (
    <div className="App">
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Display counter={counter} />
      <Button
        styles={{ backgroundColor: 'rgb(84, 206, 84)' }}
        message="Increase  ++"
        handleClick={increaseCounter}
      />
      <Button
        styles={{ backgroundColor: 'red' }}
        message="Decrease  --"
        handleClick={decreaseCounter}
      />
      <Button
        styles={{ backgroundColor: 'rgb(20, 150, 223)' }}
        message="Reset ♻️♻️"
        handleClick={resetCounter}
      />
      <br />
      <Button
        message="Set to 1000"
        styles={{ color: 'black' }}
        handleClick={setValueToCounter2(1000)}
      />
      <Button
        message="Set to 100"
        styles={{ color: 'black' }}
        handleClick={setValueToCounter2(100)}
      />
      <Button
        message="Plus 1"
        styles={{ color: 'black' }}
        handleClick={setValueToCounter2(counter + 1)}
      />
      <br />
      <div>
        {left}
        <button
          className="counterButton"
          style={{ color: 'black' }}
          onClick={handleLeftClick}
        >
          left
        </button>
        <button
          className="counterButton"
          style={{ color: 'black' }}
          onClick={handleRightClick}
        >
          right
        </button>
        {right}
      </div>
      <br />
      <History clicks={allClicks} />
      <button
        className="counterButton"
        style={{ color: 'black' }}
        onClick={handleResetClick}
      >
        Reset Click History
      </button>
      <br />
      <button
        className="counterButton"
        style={{ color: 'black' }}
        onClick={helloHandler2('Joe')}
      >
        Hello
      </button>
    </div>
  )
}

export default App
