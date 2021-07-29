import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients',
  ]
  const startingCounter = anecdotes.map((_) => 0)
  const [selected, setSelected] = useState(0)
  const [counter, setCounter] = useState(startingCounter)
  const handleNext = () => {
    // setSelected(Math.random(0, anecdotes.length))
    const random = Math.round(Math.random() * (anecdotes.length - 1) - 0 + 0)
    setSelected(random)
  }

  const handleVote = () => {
    var copy = [...counter]
    copy[selected] += 1
    setCounter(copy)
  }

  const mostVotedAnecdote = () => {
    let copy = [...counter]
    let mostVoted = copy.sort()[counter.length - 1]
    return anecdotes[counter.indexOf(mostVoted)]
  }

  return (
    <div className="p-2">
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <br />
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNext}>next anecdote</button>
      <br />
      <h2>Anecdote with the most votes</h2>
      <p>{mostVotedAnecdote()}</p>
    </div>
  )
}

export default App
