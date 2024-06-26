import classNames from 'classnames/bind'
import { format, parseISO, getDay } from 'date-fns'

import styles from './Heading.module.scss'
import Section from '@shared/Section'

const cx = classNames.bind(styles)

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const Heading = ({ date }: { date: string }) => {
  const weddingDate = parseISO(date)

  const title = format(weddingDate, 'yy.MM.dd')
  const waddingDate = days[getDay(weddingDate)]

  return (
    <Section className={cx('container')}>
      <div className={cx('txt-date')}>{title}</div>
      <div className={cx('txt-day')}>{waddingDate}</div>
    </Section>
  )
}

export default Heading
