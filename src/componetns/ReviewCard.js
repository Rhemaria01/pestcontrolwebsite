import React from 'react'
import BlurLoad from './BlurLoad'
export const ReviewCard = ({review}) => {
  return (
    <div className='review-card'>
    <BlurLoad img={review.avatar} smallImg={review.avatarSmall} alt={`Avatar of ${review.name}`} style={`avatar`}/>
    <div className='review-description'>
        <p>{review.review}</p>
        <h4 className='bold'>{review.name}</h4>
    </div>
    </div>
  )
}
