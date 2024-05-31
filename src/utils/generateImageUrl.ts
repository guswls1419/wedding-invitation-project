const generateImageUrl = ({
  filename,
  format,
  option = 'q_auto,c_fill',
}: {
  filename: string
  format: 'jpg' | 'webp'
  option?: string
}) => {
  return `https://res.cloudinary.com/douycpxno/image/upload/${option}/v1717169099/${format}/${filename}.${format}`
}

export default generateImageUrl
