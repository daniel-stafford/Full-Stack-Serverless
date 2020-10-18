import { Note } from 'API'

export type TodoState = {
  isLoading: boolean
  hasErrors: object
  data: {
    userId?: number
    title?: string
    completed?: boolean
  }
}

export type CounterState = number

export type NotesState = {
  data: Array<Note>
  hasErrors: object
  isLoading: boolean
}

export type RootState = {
  counter: CounterState
  todo: TodoState
  notes: NotesState
}
