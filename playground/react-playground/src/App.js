import './App.css'
import React, { useState } from 'react'
import { Header } from './components/Header'
import { Hello } from './components/Hello.jsx'
import { guests, allNotes } from './components/data'
import NumberCounter from './components/NumberCounter'
import ClickCounter from './components/ClickCounter'
import Note from './components/Note'

function App() {
  const [notes, setNotes] = useState(allNotes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true)

  const showHandler = (e) => setShowAll(!showAll)

  const addNote = (e) => {
    e.preventDefault()
    // Making note obj
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random > 0.5,
      id: notes.length + 1,
    }

    // Adding new note to notes array
    setNotes(notes.concat(noteObject))

    // Resetting notes
    setNewNote('')
  }

  const onChangeHandler = (e) => setNewNote(e.target.value)

  return (
    <div className="App">
      <Header heading="Notes" />
      <button onClick={showHandler}>
        {showAll ? 'Show Important' : 'Show All'}
      </button>
      {/* {guests.map((guest, i) => (
        <Hello name={guest.name} age={guest.age} key={i} />
      ))}
      <NumberCounter />
      <ClickCounter /> */}
      {notesToShow.map((note, i) => {
        return <Note note={note} key={i} />
      })}
      <form onSubmit={addNote}>
        <input
          type="text"
          value={newNote}
          onChange={onChangeHandler}
          placeholder="Enter a note"
        />
        <button>Add Note</button>
      </form>
    </div>
  )
}

export default App
