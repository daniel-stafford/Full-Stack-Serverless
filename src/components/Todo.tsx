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
    <>
      <h2>Todo!</h2>
      <button onClick={handleGetTodo}>Get random todo</button>
      {todo?.data?.title}
    </>
  )
}
