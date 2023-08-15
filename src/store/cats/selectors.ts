import { RootState } from 'types'

const getCats = (state: RootState) => state.cats

export const CatsSelectors = {
  getCats,
}
