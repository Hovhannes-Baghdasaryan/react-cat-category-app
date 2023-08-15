import { IRequestState } from 'store/types'

type T_Category = {
  id: number
  name: string
}

export interface CategoriesInitialState extends IRequestState {
  data: T_Category[] | null
}
