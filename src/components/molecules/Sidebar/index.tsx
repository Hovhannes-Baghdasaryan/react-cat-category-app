import type { FC } from 'react'

import { Categories } from 'components'

import styles from './Sidebar.module.scss'
import { T_SidebarProps } from './types'

const Sidebar: FC<T_SidebarProps> = ({ setCategoryId }) => (
  <aside className={styles.wrapper}>
    <h3 className={styles.wrapper__title}>Categories</h3>
    <Categories setCategoryId={setCategoryId} />
  </aside>
)

export default Sidebar
