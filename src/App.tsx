import React, { useState } from 'react';
import MakeNote from './components/MakeNote'
import ShowNotes from './components/ShowNotes'
import Note from './types/Note'
const App: React.FC = () => {
  const [allNotes, setAllNotes] = useState<object[]>([])
  const [title, setTitle] = useState<string>('')
  const [body, setBody] = useState<string>('')
  const [writer, setWriter] = useState<string>('')
  const [counter, setCounter] = useState<number>(1)
  const handleInputChange = (e: any): void => {
    if(e.target.name === 'title'){
      setTitle(e.target.value)
    } else if(e.target.name === 'body'){
      setBody(e.target.value)
    } else {
      setWriter(e.target.value)
    }
  }
  const addNewNote = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if(typeof title === 'string' && typeof body === 'string' && typeof writer === 'string'){
      setCounter(counterValue => counterValue + 1)
      const noteToBeAdded: Note = {
        id: counter,
        title: title,
        body: body,
        writer: writer
      }
      setAllNotes(allNotes.concat(noteToBeAdded))
    } else {
      throw({
        message: 'Input data is wrong type',
        correctTypes: 'string, string, string',
        errorCode: '001'
      })
    }
  }
  return(
    <>
      <MakeNote
          handleInputChange = {handleInputChange}
          title = {title}
          body = {body}
          writer = {writer}
          addNewNote = {addNewNote}
      />
      <ShowNotes
        allNotes = {allNotes}
      />
    </>
  )
}

export default App;
