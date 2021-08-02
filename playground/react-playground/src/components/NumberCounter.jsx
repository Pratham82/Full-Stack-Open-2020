import { Button } from './Button'
import { Display } from './Display'
import { useState } from 'react'

const NumberCounter = () => {
  const [counter, setCounter] = useState(0)
  // Global State modifier
  const increaseCounter = () => setCounter(counter + 1)
  const decreaseCounter = () => counter > 0 && setCounter(counter + -1)
  const resetCounter = () => setCounter(0)

  // const setValueToCounter = (value) => () => {
  //   setCounter(value)
  // }

  const setValueToCounter2 = (val) => () => setCounter(val)

  return (
    <div style={{ margin: '20px 0' }}>
      <Display counter={counter} />{' '}
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
      />{' '}
    </div>
  )
}

export default NumberCounter
