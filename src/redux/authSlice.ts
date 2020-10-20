import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthorizationState } from 'redux/types'
import { AuthState } from '@aws-amplify/ui-components'

const initialState: AuthorizationState = {
  auth: {},
  user: {},
}
export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    addAuth: (state, { payload }: PayloadAction<AuthState>) => {
      state.auth = payload
    },
    addUser: (state, { payload }: PayloadAction<{}>) => {
      state.user = payload
    },
    signOut: (state, { payload }: PayloadAction<{}>) => {
      state.user = payload
    },
  },
})
