import React from 'react'
import bluePhone from '../assets/Images/blue-phone.svg'
import blueArrow from '../assets/Images/blue-arrow.svg'
import greenIcon from '../assets/Images/green-icon.svg'
import greenArrow from '../assets/Images/green-arrow.svg'

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

    <div className="card-faq-container">
   
        <div className="card-faq" id="card-faq1">
        <span>Is any of my personal information
            stored in the App?</span>
        <button className="sub-knapp" id="sub-knapp-active">
            <i className="fa-solid fa-chevron-up"></i>
        </button>
        <button className="sub-knapp" id="sub-knapp-inactive2">
            <i className="fa-solid fa-chevron-down"></i>
        </button>
    </div>

    <div className="card-faq" id="card-faq-text">
        <p>Nunc duis id aenean gravida tincidunt eu, tempor
            ullamcorper. Viverra aliquam arcu, viverra et,
            cursus. Aliquet pretium cursus adipiscing gravida
            et consequat lobortis arcu velit. Nibh pharetra
            fermentum duis accumsan lectus non. Massa
            cursus molestie lorem scelerisque pellentesque.
            Nisi, enim, arcu purus gravida adipiscing euismod
            montes, duis egestas. Vehicula eu etiam quam
            tristique tincidunt suspendisse ut consequat.</p>

        <p>Ornare senectus fusce dignissim ut. Integer
            consequat in eu tortor, faucibus et lacinia
            posuere. Turpis sit viverra lorem suspendisse
            lacus aliquam auctor vulputate. Quis egestas
            aliquam nunc purus lacus, elit leo elit facilisi.
            Dignissim amet adipiscing massa integer.</p>
        
    </div>

        
        <div className="card-faq">
            <span>What formats can I download my
                    transaction history in?</span>
            <button className="sub-knapp">
                <i className="fa-solid fa-chevron-down"></i>
            </button>
        </div>

        
       
           <div className="card-faq-active">
                <div className="tablet-flex">
                   <span>Can I schedule future transfers?</span>
                   <button className="sub-knapp" id="sub-knapp-inactive">
                    <i className="fa-solid fa-chevron-down"></i>
                   </button>
                   <button className="sub-knapp" id="sub-knapp-active2">
                    <i className="fa-solid fa-chevron-up"></i>
                    </button>
                </div>
                <p className="tablet-text">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>

            </div> 
                

      

        <div className="card-faq">
            <span>When can I use Banking App
                services?</span>
            <button className="sub-knapp">
                <i className="fa-solid fa-chevron-down"></i>
            </button>
        </div>

        <div className="card-faq">
            <span>Can I create my own password that is
                easy for me to remember?</span>
            <button className="sub-knapp">
                <i className="fa-solid fa-chevron-down"></i>
            </button>
        </div>

        <div className="card-faq" id="card-faq-bot">
            <span>What happens if I forget or lose my
                password?</span>
            <button className="sub-knapp">
                <i className="fa-solid fa-chevron-down"></i>
            </button>
        </div>

    </div>
    
    
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


    

