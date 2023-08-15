import { useEffect, type FC } from 'react'
import classNames from 'classnames'

import { useAppDispatch, useAppSelector } from 'libraries'
import { CategoriesSelectors } from 'store/categories/selectors'
import { fetchCategories } from 'store/categories/actions'

import styles from './Categories.module.scss'
import { I_CategoriesProps } from './types'

const Categories: FC<I_CategoriesProps> = ({ setCategoryId, className = '' }) => {
  const dispatch = useAppDispatch()

  const { data: categoriesData } = useAppSelector(CategoriesSelectors.getCategories)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  const onCategoryChangeCallback = (categoryId: number) => () => {
    setCategoryId(categoryId)
  }

  const renderCategories = categoriesData
    ? categoriesData.map(element => (
        <li className={styles.wrapper__item} key={element.id}>
          <button onClick={onCategoryChangeCallback(element.id)} className={styles.wrapper__item__button}>
            {element.name}
          </button>
        </li>
      ))
    : null

  return <ul className={classNames(styles.wrapper, { [className]: className })}>{renderCategories}</ul>
}

export default Categories
