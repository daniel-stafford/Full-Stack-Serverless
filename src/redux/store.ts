import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { rootReducer } from 'redux/rootReducer'

export const store = configureStore({ reducer: rootReducer })

//allows correct toolkit types from dispatch
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
