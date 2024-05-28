import React from 'react'

import styles from './Section.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

interface SectionProps {
  children: React.ReactNode
  className?: string
  title?: React.ReactNode
}

const Section = ({ className, children, title }: SectionProps) => {
  return (
    <section className={cx(['container', className])}>
      {title != null ? <div className={cx('txt-title')}>{title}</div> : null}
      {children}
    </section>
  )
}

export default Section
