import { useState, type FC } from 'react'

import { useResponsive } from 'hooks'
import { Cats, Sidebar } from 'components'

import styles from './Home.module.scss'

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
