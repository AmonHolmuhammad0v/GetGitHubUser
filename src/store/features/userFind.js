import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'





const initialState = {
  title: 'Find User ',
  user: null
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

  },
})


export const { addCount } = userSlice.actions

export default userSlice.reducer