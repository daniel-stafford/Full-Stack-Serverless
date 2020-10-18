import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import API, { GraphQLResult } from '@aws-amplify/api'
import { listNotes } from 'graphql/queries'
import { ListNotesQuery } from 'API'
import { NotesState } from 'redux/types'
import { createNote, deleteNote } from 'graphql/mutations'

type RemoveNoteProps = {
  id: string
}

export const fetchNotes = createAsyncThunk('notes/fetch', async () => {
  const notesData = (await API.graphql({ query: listNotes })) as GraphQLResult<
    ListNotesQuery
  >
  const notes = notesData.data?.listNotes?.items as any
  return notes
})

export const createNewNote = createAsyncThunk(
  'notes/create',
  //* underscore since no payload for now
  async (_, thunkAPI) => {
    const note = {
      name: 'this is my first note',
    }
    //* optimistic response
    thunkAPI.dispatch(notesSlice.actions.add(note))
    API.graphql({ query: createNote, variables: { input: note } })
  }
)

export const removeNote = createAsyncThunk(
  'notes/remove',
  async ({ id }: RemoveNoteProps, thunkAPI) => {
    const response: any = await API.graphql({
      query: deleteNote,
      variables: { input: { id } },
    })
    console.log(response)
    thunkAPI.dispatch(notesSlice.actions.remove({ id }))
    return response
  }
)

const initialState: NotesState = {
  isLoading: false,
  hasErrors: {},
  data: [],
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    add: (state, action) => {
      state.data.push(action.payload)
    },
    remove: (state, action: PayloadAction<{ id: string }>) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotes.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchNotes.rejected, (state, action) => {
      state.isLoading = false
      state.hasErrors = action.error
    })
    builder.addCase(fetchNotes.fulfilled, (state, action) => {
      state.data.push(...action.payload)
      state.isLoading = false
    })
  },
})
