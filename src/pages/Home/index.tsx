import { useState, type FC } from 'react'

import { Cats, Sidebar } from 'components'

import styles from './Home.module.scss'
import { useResponsive } from 'hooks'

const HomeContainer: FC = () => {
  const { isMobile } = useResponsive()

  const [page, setPage] = useState<number>(1)
  const [categoryId, setCategoryId] = useState(0)

  return (
    <section className={styles.wrapper}>
      {!isMobile ? <Sidebar setCategoryId={setCategoryId} /> : null}
      <Cats categoryId={categoryId} setCategoryId={setCategoryId} page={page} setPage={setPage} />
    </section>
  )
}

export default HomeContainer
