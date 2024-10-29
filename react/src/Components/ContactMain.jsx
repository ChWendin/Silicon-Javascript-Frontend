import React from 'react'

import bxEnvelope from '../assets/Images/bx-envelope.svg'
import addGroup from '../assets/Images/add-group.svg'
import ContactForm from './ContactForm'

const ContactMain = () => {
  return (
    <main className="container">
            <div className="main-wrapper">
                <span>placeholder - Contact</span>
                <h1>Contact us</h1>
                <div className="contact-wrapper">
                    
                    <div className="contact-card">
                        <div className="card-img">
                            <img src={bxEnvelope} alt="envelope icon" />
                        </div>
                        <div className="card-info">
                            <h4>Email us</h4>
                            <span>Please feel free to drop us a line. We will<br /> respond as soon as possible.</span>
                            <a href="*">Send a message<i className="fa-regular fa-arrow-right"></i></a>
                        </div>
        
        
                    </div>
                    <div className="contact-card">
                        <div className="card-img">
                            <img src={addGroup} alt="add group icon" />
                        </div>
                        <div className="card-info">
                            <h4>Careers</h4>
                            <span>Sit ac ipsum leo lorem magna nunc mattis<br /> maecenas non vestibulum.</span>
                            <a href="*">Send an application <i className="fa-regular fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
    
                <ContactForm />
               
            </div>
        </main>
  )
}

export default ContactMain