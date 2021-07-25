import React from 'react'
const bornYear = (age) => new Date().getFullYear() - age

export const Hello = ({ name, age }) => (
  <div>
    <p>
      Hello {name}, you are {age} years old
    </p>
    <p>So you were probably born in {bornYear(age)}</p>
  </div>
)
