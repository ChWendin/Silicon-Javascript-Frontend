import React from 'react'
import starFull from '../assets/Images/star-full.svg'
import starEmpty from '../assets/Images/star-empty.svg'

const StarRating = ({starRating}) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
        <img
          key={index}
          src={index < starRating ? starFull : starEmpty} 
          alt="Star icon"
          />
        ));
    
    
      return (
          <div>{stars}</div>
    )
  }
  
  export default StarRating
        