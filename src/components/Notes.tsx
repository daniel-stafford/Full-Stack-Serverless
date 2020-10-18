import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { createNewNote, fetchNotes, removeNote } from 'redux/notesSlice'
import { RootState } from 'redux/types'

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
    if (id) dispatch(removeNote({ id }))
  }

  const notes = useSelector((state: RootState) => state.notes.data)

  console.log('notes from useSelector', notes.length)

  function renderNotes() {
    if (notes.length === 0) return <div>Loading...j</div>
    return notes.map((n) => (
      <div key={uuidv4()}>
        {n.id}
        <button onClick={() => handleDelete(n.id)}>Delete</button>
      </div>
    ))
  }

  return (
    <div>
      <button onClick={handleCreate}>Make another note</button>
      {renderNotes()}
    </div>
  )
}
