import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import styles from './App.module.scss'

import FullScreenMessage from '@shared/FullScreenMessage'
import { Wedding } from './models/wedding'
import Video from '@components/section/Video'
import Heading from '@components/section/Heading'
import ImageGallery from '@components/section/ImageGallery'
import Intro from '@components/section/Intro'
import Invitation from '@components/section/Invitation'
import Calendar from './components/section/Calendar'

const cx = classNames.bind(styles)

function App() {
  const [wedding, setWedding] = useState<Wedding | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch('http://localhost:8888/wedding')
      .then((res) => {
        if (res.ok === false) {
          throw new Error('정보를 불러오지 못했습니다.')
        }
        return res.json()
      })
      .then((data) => {
        setWedding(data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <FullScreenMessage type="loading" />
  }

  if (error) {
    return <FullScreenMessage type="error" />
  }

  if (wedding === null) {
    return null
  }

  const {
    date,
    galleryImages,
    groom,
    bride,
    location,
    message: { intro, invitation },
  } = wedding

  return (
    <div className={cx('container')}>
      <Heading date={date} />
      <Video />
      <Intro
        groomName={groom.name}
        brideName={bride.name}
        locationName={location.name}
        date={date}
        message={intro}
      />
      <Invitation message={invitation} />
      <ImageGallery images={galleryImages} />
      <Calendar date={date} />
    </div>
  )
}

export default App
