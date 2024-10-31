import React from 'react'
import bluePhone from '../assets/Images/blue-phone.svg'
import blueArrow from '../assets/Images/blue-arrow.svg'
import greenIcon from '../assets/Images/green-icon.svg'
import greenArrow from '../assets/Images/green-arrow.svg'

import GetFaq from './GetFaq'
import NewsletterForm from './NewsletterForm'

const Faq = () => {
  return (
    <section>
<div className="container-faq">
    <div className="headline-faq">
        <h2>Any questions? Check out the FAQs</h2>
        <span>Still have unanswered questions and need
            to get in touch?</span>
    </div>

   <GetFaq />
    
    
    <div className="kontaktkort-wrapper">
        <div className="kontaktkort-faq">
            <img className="kontakt-icon" src={bluePhone} alt="blue phone icon" />
            <p>Still have questions?</p>
            
            <div className="contact-link">
                <a className="kontakt1">Contact us </a>
                <img src={blueArrow} alt="Blue arrow" />
            </div>

        </div>
        
        <div className="kontaktkort-faq">
            <img className="kontakt-icon" src={greenIcon} alt="green chatting icon" />
            <p>Don't like phone calls?</p>
            
            <div className="contact-link">
                <a className="kontakt2" >Contact us </a>
                <img  src={greenArrow} alt="Green arrow" />
            </div>
        </div>
    </div>

    <div className="knapp-faq">
        <a className="btn-faq">
            <p>Contact us now </p>
        </a>
    </div>

    <NewsletterForm />

</div>   
</section>
  )
}

export default Faq


    

