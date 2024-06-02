import classNames from 'classnames/bind'
import styles from './App.module.scss'

import Video from '@components/section/Video'
import Heading from '@components/section/Heading'
import ImageGallery from '@components/section/ImageGallery'
import Intro from '@components/section/Intro'
import Invitation from '@components/section/Invitation'
import Calendar from './components/section/Calendar'
import Map from './components/section/Map'
import Contact from './components/section/Contact'
import Share from './components/section/Share'
import AttendCountModal from './components/AttendCountModal'
import useWedding from './hooks/useWedding'

const cx = classNames.bind(styles)

function App() {
  const { wedding } = useWedding()

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
      <Map location={location} />
      <Contact groom={groom} bride={bride} />
      <Share groomName={groom.name} brideName={bride.name} date={date} />
      <AttendCountModal wedding={wedding} />
    </div>
  )
}

export default App
