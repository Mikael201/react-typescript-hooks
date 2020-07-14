import React from 'react'
import Note from '../types/Note'
const ShowNotes = (props:any) => {
    const displayNotes = () => 
        props.allNotes.map((note: Note) => (
                <ul key = {note.id}>
                    Note {note.id}:
                    <li>{note.title}</li>
                    <li>{note.body}</li>
                    <li>{note.writer}</li>
                </ul>
            )
        )

    
    return(
        <>
            Notes: {displayNotes()}
        </>
    )
}

export default ShowNotes