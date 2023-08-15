import type { FC } from 'react'
import classNames from 'classnames'

import { I_SkeletonProps } from './types'
import styles from './Skeleton.module.scss'

const Skeleton: FC<I_SkeletonProps> = ({ className = '' }) => (
  <div>
    <span className={classNames(styles.skeleton, { [className]: className })}></span>
  </div>
)

export default Skeleton
