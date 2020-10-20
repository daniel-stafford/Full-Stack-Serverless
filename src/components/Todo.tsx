import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodo } from 'redux/todoSlice'
import { RootState } from 'redux/types'

export function Todo() {
  const dispatch = useDispatch()
  const { todo } = useSelector((state: RootState) => state)

  function handleGetTodo() {
    dispatch(fetchTodo())
  }

  return (
    <React.Fragment>
      <h2>Fetch a todo (Boring API call)</h2>
      <button style={{ width: '400px' }} onClick={handleGetTodo}>
        Get random todo
      </button>
      <div>{todo?.data?.title}</div>
    </React.Fragment>
  )
}
