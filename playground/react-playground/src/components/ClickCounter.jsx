import { useState } from 'react'
import History from './History'
const ClickCounter = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAllClicks] = useState([])

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
  return (
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
      <br />
      <History clicks={allClicks} />
      <button
        className="counterButton"
        style={{ color: 'black' }}
        onClick={handleResetClick}
      >
        Reset Click History
      </button>
    </div>
  )
}

export default ClickCounter
