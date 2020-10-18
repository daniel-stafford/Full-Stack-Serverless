import { counterSlice } from 'redux/counterSlice'
import { notesSlice } from 'redux/notesSlice'
import { todoSlice } from 'redux/todoSlice'

export const rootReducer = {
  counter: counterSlice.reducer,
  todo: todoSlice.reducer,
  notes: notesSlice.reducer,
}
