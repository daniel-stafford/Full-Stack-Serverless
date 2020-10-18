import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { removeNote } from 'redux/notesSlice'

const initialState = {
  isLoading: false,
  hasErrors: {},
  data: {},
}

export const fetchTodo = createAsyncThunk('todo/fetch', async () => {
  const randomNum = Math.floor(Math.random() * 10) + 1
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${randomNum}`
  )
  const randomTodo = await response.json()
  return randomTodo
})

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodo.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchTodo.rejected, (state, action) => {
      state.isLoading = false
      state.hasErrors = action.error
    })
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      state.data = action.payload
      state.isLoading = false
    })

    builder.addCase(removeNote.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(removeNote.rejected, (state, action) => {
      state.isLoading = false
      state.hasErrors = action.error
    })
    builder.addCase(removeNote.fulfilled, (state, action) => {
      state.isLoading = false
    })
  },
})
