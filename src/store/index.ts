import { configureStore } from '@reduxjs/toolkit'
import countReducer from './count'

export const store = configureStore({
  reducer: {
    countReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch