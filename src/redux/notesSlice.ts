import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import API, { GraphQLResult } from '@aws-amplify/api'
import { listNotes } from 'graphql/queries'
import { ListNotesQuery, Note } from 'API'
import { NotesState } from 'redux/types'
import { createNote, deleteNote, updateNote } from 'graphql/mutations'
import { v4 as uuidv4 } from 'uuid'
import faker from 'faker'

type RemoveNoteProps = {
  id: string
}

type UpdateNoteProps = {
  note: Note
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
      name: faker.lorem.sentence(5),
      id: uuidv4(),
    }
    //* optimistic response
    thunkAPI.dispatch(notesSlice.actions.add(note))
    API.graphql({ query: createNote, variables: { input: note } })
  }
)

export const markCompleted = createAsyncThunk(
  'notes/update',
  async ({ note }: UpdateNoteProps, thunkAPI) => {
    let newNote = {
      completed: true,
      id: note.id,
    }
    const { id } = newNote
    id && thunkAPI.dispatch(notesSlice.actions.markCompleted({ id }))
    await API.graphql({
      query: updateNote,
      variables: { input: newNote },
    })
  }
)

export const removeNote = createAsyncThunk(
  'notes/remove',
  async ({ id }: RemoveNoteProps, thunkAPI) => {
    thunkAPI.dispatch(notesSlice.actions.remove({ id }))
    const response: any = await API.graphql({
      query: deleteNote,
      variables: { input: { id } },
    })
    console.log(response)
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
    markCompleted: (state, { payload }: PayloadAction<{ id: string }>) => {
      const index = state.data.findIndex((note) => note.id === payload.id)
      if (index !== -1) {
        state.data[index].completed = true
      }
    },
    remove: (state, action: PayloadAction<{ id: string }>) => {
      return {
        ...state,
        data: state.data.filter((n) => n.id !== action.payload.id),
      }
    },
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

    builder.addCase(markCompleted.rejected, (state, action) => {
      state.isLoading = false
      state.hasErrors = action.error
    })
  },
})
