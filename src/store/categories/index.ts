import { createSlice } from '@reduxjs/toolkit'

import { fetchCategories } from './actions'
import { CategoriesInitialState } from './types'

export const initialState: CategoriesInitialState = {
  data: null,
  error: null,
  loading: false,
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCategories.pending, state => {
      state.loading = true
      state.error = null
    })

    builder.addCase(fetchCategories.fulfilled, (state, { payload }) => {
      state.loading = false
      state.error = null
      state.data = payload
    })

    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload as null
    })
  },
})

const categoriesReducer = categoriesSlice.reducer

export default categoriesReducer
