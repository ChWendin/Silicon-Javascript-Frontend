import React from 'react'
import starFull from '../assets/Images/star-full.svg'
import starEmpty from '../assets/Images/star-empty.svg'
import personGirl from '../assets/Images/person-girl.svg'
import personBoy from '../assets/Images/person-boy.svg'
import iconQuotes from '../assets/Images/icon-quotes.svg'

const Reviews = () => {
  return (
    <section className="section5-container">
<div className="section5">
    
    <div className="review-headline">
        <h1>Clients are <br />Loving Our App</h1>
    </div>
    
<div className="review-card">
    <div className="review-img">
        <div className="quotes-div">
            <img className="quotes" src={iconQuotes} alt="quotes icon" />
        </div>

        <div className="stars">
           <img src={starFull }alt="Star icon" /> 
           <img src={starFull }alt="Star icon" /> 
           <img src={starFull }alt="Star icon" /> 
           <img src={starFull }alt="Star icon" /> 
           <img src={starEmpty} alt="Star icon" /> 
        </div>
    </div>


    <div className="review-text">
        <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
    </div>

    <div className="review-person">
        <img src={personGirl} alt="image of Fannie" />
        
        <div className="title-name">
            <p id="name">Fannie Summers</p>
            <p id="title">Designer</p>
        </div>
    </div>
</div>







    
<div className="review-card">

    <div className="review-img">
        <div className="quotes-div">
            <img className="quotes" src={iconQuotes} alt="quotes icon" />
        </div>
        
        <div className="stars">
            <img src={starFull} alt="Star icon" /> 
            <img src={starFull} alt="Star icon" /> 
            <img src={starFull} alt="Star icon" /> 
            <img src={starFull} alt="Star icon" /> 
            <img src={starFull} alt="Star icon" /> 
         </div>
    </div>

    
    <div className="review-text">
        <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
    </div>
    
    <div className="review-person">
        <img src={personBoy} alt="image of Albert" />

        <div className="title-name">
            <p id="name">Albert Flores</p>
            <p id="title">Developer</p>
        </div>
        
    </div>
    
    </div>
</div>

</section>
  )
}

export default Reviews