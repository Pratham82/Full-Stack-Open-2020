import React from 'react'
const App = () => {
  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  }
  const { name, parts } = course
  const Header = ({ course }) => <h1>{name}</h1>
  const Content = ({ parts }) => (
    <>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </>
  )

  const Part = ({ name, exercises }) => (
    <p>
      <b>Name:</b> {name}
      <br />
      <b>Exercises:</b> {exercises}
    </p>
  )
  const Total = ({ parts }) => (
    <>
      <p>
        Total exercises = {parts.reduce((acc, part) => part.exercises + acc, 0)}
      </p>
    </>
  )
  return (
    <div>
      <Header course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
