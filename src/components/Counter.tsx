import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterSlice } from 'redux/counterSlice'
import { RootState } from 'redux/types'

export function Counter() {
  const dispatch = useDispatch()
  const { counter } = useSelector((state: RootState) => state)
  function handleAdd() {
    dispatch(counterSlice.actions.increment())
  }

  function handleSubtract() {
    dispatch(counterSlice.actions.decrement())
  }

  return (
    <>
      <h2>Counter</h2>
      <button onClick={handleAdd}>Add One</button>
      <button onClick={handleSubtract}>Subtract One</button>
      {counter}
    </>
  )
}
