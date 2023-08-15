import { IRequestState } from 'store/types'

export type T_FetchCats = {
  page: number
  categoryId: number | undefined
}

export type T_Cats = {
  id: string
  url: string
  width: number
  height: number
}

type T_CatsState = {
  [categoryId: number]: T_Cats[]
}

export interface ICatsInitialState extends IRequestState {
  data: T_CatsState | null
}
