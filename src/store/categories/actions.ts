import { createAsyncThunk } from '@reduxjs/toolkit'

import { axiosInstance } from 'libraries'

export const fetchCategories = createAsyncThunk('categories/get-category', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get('/categories')

    return data
  } catch (error: any) {
    return rejectWithValue(error.response.data)
  }
})
