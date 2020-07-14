import React from 'react'

const MakeNote = (props: any) => {
    return(
        <>
            <input type="text" placeholder="title" name = "title" value = {props.title} onChange = {props.handleInputChange}></input> <br/>
            <input type="text" placeholder="body" name = "body" value = {props.body} onChange = {props.handleInputChange}></input> <br/>
            <input type="text" placeholder="writer" name = "writer" value = {props.writer} onChange = {props.handleInputChange}></input> <br/>
            <button onClick={props.addNewNote}>add</button>
        </>
    )
}

export default MakeNote