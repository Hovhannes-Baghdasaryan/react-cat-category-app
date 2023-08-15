import { useEffect, type FC } from 'react'

import { useResponsive } from 'hooks'
import { fetchCats } from 'store/cats/actions'
import { Categories, Skeleton } from 'components'
import { CatsSelectors } from 'store/cats/selectors'
import { useAppDispatch, useAppSelector } from 'libraries'

import { I_CatsProps } from './types'
import styles from './Cats.module.scss'

const Cats: FC<I_CatsProps> = ({ page, setPage, categoryId, setCategoryId }) => {
  const { isMobile } = useResponsive()

  const dispatch = useAppDispatch()

  const { data: catsData } = useAppSelector(CatsSelectors.getCats)

  useEffect(() => {
    dispatch(fetchCats({ page, categoryId }))
  }, [dispatch, page, categoryId])

  const onLoadMoreClickCallback = () => setPage(prev => prev + 1)

  const skeletonArray = Array.from({ length: 10 }, (_, i) => i + 1)

  const renderCats = catsData?.[categoryId] ? (
    catsData?.[categoryId].map(element => (
      <img key={element.id + element.url} src={element.url} width={100} height={100} />
    ))
  ) : (
    <>
      {skeletonArray.map(element => (
        <Skeleton key={element} className={styles.wrapper__inner__list__items__skeleton} />
      ))}
    </>
  )

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__inner}>
        <h2 className={styles.wrapper__inner__title}>Cats</h2>
        {isMobile ? <Categories className={styles.wrapper__inner__categories} setCategoryId={setCategoryId} /> : null}
        <div className={styles.wrapper__inner__list}>
          <div className={styles.wrapper__inner__list__items}>{renderCats}</div>
          <button onClick={onLoadMoreClickCallback} className={styles.wrapper__inner__list__load__more}>
            Load More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cats
