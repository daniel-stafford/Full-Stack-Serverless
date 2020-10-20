import { Note } from 'API'
import { AuthState } from '@aws-amplify/ui-components'

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

export type CoinsState = {
  data: object
  hasErrors: object
  isLoading: boolean
}

export type AuthorizationState = {
  auth: AuthState | object
  user: object
}

export type RootState = {
  counter: CounterState
  todo: TodoState
  notes: NotesState
  crypto: CoinsState
  auth: AuthorizationState
}
