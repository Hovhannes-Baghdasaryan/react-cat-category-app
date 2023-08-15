import { createAsyncThunk } from '@reduxjs/toolkit'

import { axiosInstance } from 'libraries'

import { T_FetchCats } from './types'

export const fetchCats = createAsyncThunk<any, T_FetchCats>(
  'cats/get-cats',
  async ({ page, categoryId }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get('/images/search', {
        params: { limit: 10, page, category_ids: categoryId ? categoryId : null },
      })

      return { data, categoryId }
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  }
)
