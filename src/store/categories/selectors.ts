import { RootState } from 'types'

const getCategories = (state: RootState) => state.categories

export const CategoriesSelectors = {
  getCategories,
}
