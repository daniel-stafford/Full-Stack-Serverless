import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import {
  createNewNote,
  fetchNotes,
  markCompleted,
  removeNote,
} from 'redux/notesSlice'
import { RootState } from 'redux/types'
import { Note } from 'API'

export function Notes() {
  console.log('note is')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNotes())
  }, [dispatch])

  function handleCreate() {
    dispatch(createNewNote())
  }

  function handleDelete(id: string | null) {
    id && dispatch(removeNote({ id }))
  }

  function handleUpdate(note: Note | null) {
    note && dispatch(markCompleted({ note }))
  }

  const notesState = useSelector((state: RootState) => state.notes)
  const { isLoading } = notesState
  const notesData = notesState.data

  function renderNotes() {
    if (isLoading) return <div>Loading...</div>
    if (notesData.length === 0) return <div>Add a note!</div>
    return notesData.map((n) => (
      <div key={uuidv4()}>
        {n.name}
        {console.log('n.completed', n.completed)}
        {n.completed && 'is completed'}
        <button onClick={() => handleDelete(n.id)}>Delete</button>
        <button onClick={() => handleUpdate(n)}>Mark Completed</button>
      </div>
    ))
  }

  return (
    <div>
      <button onClick={handleCreate}>Generate a random lorem ipsum note</button>
      {renderNotes()}
    </div>
  )
}
