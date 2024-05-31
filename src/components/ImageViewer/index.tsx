import styles from './ImageViewer.module.scss'
import classNames from 'classnames/bind'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import './swiper.css'
import Dimmed from '../shared/Dimmed'
import generateImageUrl from '@/utils/generateImageUrl'

const cx = classNames.bind(styles)

const ImageViewer = ({
  images,
  open = false,
  selectedIdx,
  onClose,
}: {
  images: string[]
  open: boolean
  selectedIdx: number
  onClose: () => void
}) => {
  if (!open) return null

  return (
    <Dimmed>
      <CloseButton onClose={onClose} className={cx('icon-close')} />
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop
        initialSlide={selectedIdx}
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx} className={cx('wrap-image')}>
            <picture>
              <source
                srcSet={generateImageUrl({
                  filename: image,
                  format: 'webp',
                })}
                type="image/webp"
              />
              <img
                src={generateImageUrl({
                  filename: image,
                  format: 'jpg',
                })}
                alt="사진첩 이미지"
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </Dimmed>
  )
}

const CloseButton = ({
  onClose,
  className,
}: {
  onClose: () => void
  className: string
}) => {
  return (
    <svg
      onClick={onClose}
      version="1.1"
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="info" />
      <g id="icons">
        <path
          d="M14.8,12l3.6-3.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L12,9.2L8.4,5.6c-0.8-0.8-2-0.8-2.8,0   c-0.8,0.8-0.8,2,0,2.8L9.2,12l-3.6,3.6c-0.8,0.8-0.8,2,0,2.8C6,18.8,6.5,19,7,19s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6   C16,18.8,16.5,19,17,19s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.8,12z"
          id="exit"
        />
      </g>
    </svg>
  )
}

export default ImageViewer
