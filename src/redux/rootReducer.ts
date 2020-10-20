import { counterSlice } from 'redux/counterSlice'
import { notesSlice } from 'redux/notesSlice'
import { cryptoSlice } from 'redux/cryptoSlice'
import { todoSlice } from 'redux/todoSlice'

export const rootReducer = {
  counter: counterSlice.reducer,
  todo: todoSlice.reducer,
  notes: notesSlice.reducer,
  crypto: cryptoSlice.reducer,
}
