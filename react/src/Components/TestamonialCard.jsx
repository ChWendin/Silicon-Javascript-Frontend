import React from 'react'
import iconQuotes from '../assets/Images/icon-quotes.svg'
import starFull from '../assets/Images/star-full.svg'
import starEmpty from '../assets/Images/star-empty.svg'
import StarRating from './StarRating'

const TestamonialCard = ({card}) => {
  return (
    <div className="review-card">
            <div className="review-img">
                <div className="quotes-div">
                    <img className="quotes" src={iconQuotes} alt="quotes icon" />
                </div>

                <div className="stars">
              <StarRating starRating={card.starRating} />
                </div>
            </div>


            <div className="review-text">
                <p>{card.comment}</p>
            </div>

            <div className="review-person">
                <img src={card.avatarUrl} alt="user avatar" />
                
                <div className="title-name">
                    <p id="name">{card.author}</p>
                    <p id="title">{card.jobRole}</p>
                </div>
            </div>
        </div>

        
  )
}

export default TestamonialCard