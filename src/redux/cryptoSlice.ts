import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API } from 'aws-amplify'
import { mapKeys } from 'lodash'

type fetchCoinsProps = {
  limit: number
}

const initialState = {
  isLoading: false,
  hasErrors: {},
  data: {},
}

export const fetchCoins = createAsyncThunk(
  'crypto/fetch',
  async ({ limit }: fetchCoinsProps) => {
    const response = await API.get('coinapi', `/coins?limit=${limit}`, {})
    return mapKeys(response.coins, 'nameid')
  }
)

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoins.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchCoins.rejected, (state, action) => {
      state.isLoading = false
      state.hasErrors = action.error
    })
    builder.addCase(fetchCoins.fulfilled, (state, action) => {
      console.log('action.payload', action.payload)
      state.data = action.payload
      state.isLoading = false
    })
  },
})
