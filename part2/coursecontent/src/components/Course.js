const Course = ({ course }) => {
  const { name, parts } = course
  const total = parts.reduce((acc, val) => acc + val.exercises, 0)

  const Header = ({ name }) => <h1>{name}</h1>
  const Content = ({ parts }) => (
    <>
      {parts.map((part) => (
        <Part name={part.name} exercises={part.exercises} key={part.id} />
      ))}
    </>
  )

  const Part = ({ name, exercises }) => (
    <p>
      <b>Name:</b> {name}
      <br />
      <b>Exercises:</b> {exercises}
    </p>
  )
  const Total = () => (
    <>
      <p>
        <b> total of {total} exercise</b>
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

export default Course
