import { configureStore } from '@reduxjs/toolkit'
import userFind from './features/userFind'
export const store = configureStore({
  reducer: {
    userFind
  },
})