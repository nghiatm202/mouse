import StarIcon from '@mui/icons-material/Star'
import { Rating } from '@mui/material'
import React from 'react'

const StarRating = ({ sx, value, size }) => {
  return (
    <Rating
      sx={sx}
      name='half-rating'
      value={value}
      size={size || 'small'}
      readOnly={true}
      precision={0.5}
      emptyIcon={<StarIcon style={{ color: '#d5d5d5' }} fontSize='inherit' />}
    />
  )
}

export default StarRating
