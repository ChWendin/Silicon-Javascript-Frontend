import React from 'react'

import bxEnvelope from '../assets/Images/bx-envelope.svg'
import addGroup from '../assets/Images/add-group.svg'

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
    
    
                <div className="consultation-card">
                    <h2>Get Online Consultation</h2>
                    <div className="forms">
                        <form>
                            <label for="full name">Full Name</label>
                            <input type="text" id="full name" name="full name" placeholder="Enter your full name" required />
                        </form>
                        <form>
                            <label for="email">Email adress</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" required />
                        </form>
                        <form>
                            <label for="specialist">Specialist</label>
                            <input type="text" id="specialist" name="specialist" placeholder="choose a specialist" />
                        </form>
                    </div>
                    <button className="btn-appointment">Make an appointment</button>
                </div>
            </div>
        </main>
  )
}

export default ContactMain