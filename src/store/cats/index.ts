import { createSlice } from '@reduxjs/toolkit'

import { fetchCats } from './actions'
import { ICatsInitialState } from './types'

export const initialState: ICatsInitialState = {
  data: null,
  error: null,
  loading: false,
}

const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCats.pending, state => {
      state.loading = true
      state.error = null
    })

    builder.addCase(fetchCats.fulfilled, (state, { payload }) => {
      state.loading = false
      state.error = null

      if (state.data?.[payload.categoryId]) {
        state.data = {
          ...state.data,
          ...{ [payload.categoryId]: [...state.data?.[payload.categoryId], ...payload.data] },
        }
      } else {
        state.data = { ...state.data, [payload.categoryId]: payload.data }
      }
    })

    builder.addCase(fetchCats.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload as null
    })
  },
})

const catReducer = catsSlice.reducer

export default catReducer
