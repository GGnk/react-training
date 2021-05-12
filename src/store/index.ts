import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import moviesReducer from './reducers/movies'

const store = configureStore({
    reducer: moviesReducer,
    devTools: process.env.NODE_ENV !== 'production'
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
