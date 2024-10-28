import React from 'react'

import Map from '../assets/Images/map.svg'
import bxlFacebook from '../assets/Images/bxl-facebook-square.svg'
import bxlTwitter from '../assets/Images/bxl-twitter.svg'
import bxlInstagram from '../assets/Images/bxl-instagram-alt.svg'
import bxlYoutube from '../assets/Images/bxl-youtube.svg'
import bxMap from '../assets/Images/bx-map.svg'
import bxPhoneCall from '../assets/Images/bx-phone-call.svg'
import bxTimeFive from '../assets/Images/bx-time-five.svg'

const ContactMap = () => {
  return (
    <section>
        <div className="container">
                <div className="map-wrapper">
                    
                        <img className="map" src={Map} alt="map of the location" />
                    
                    <div className="flex-wrapper">
                        <div className="contact-info">
                            <h4>Medical Center 1</h4>
                        <span><img src={bxMap} /> 2464 Royal Ln. Mesa,New Jersey 45463</span> 
                        <span><img src={bxPhoneCall} /> (406) 544-0123</span> 
                        <div className="contactinfo-wrapper">
                                <img src={bxTimeFive} /> 
                                <div className="contact-flex">
                                    <span><p>Mon – Fri:</p> 9:00 am – 22:00 am</span> 
                                    <span><p>Sat – Sun:</p> 9:00 am – 20:00 am</span> 
                                </div>
        
                        </div>
                        </div>
                        <div className="contact-info">
                            <h4>Medical Center 2</h4>
                            <span><img src={bxMap} /> 2464 Royal Ln. Mesa,New Jersey 45463</span> 
                        <span><img src={bxPhoneCall} /> (406) 544-0123</span> 
                        <div className="contactinfo-wrapper">
                                <img src={bxTimeFive} /> 
                                <div className="contact-flex">
                                    <span><p>Mon – Fri:</p> 9:00 am – 22:00 am</span> 
                                    <span><p>Sat – Sun:</p> 9:00 am – 20:00 am</span> 
                                </div>
                        </div>
                        <div className="sm-icons">
                            <div className="sm-icon"><img src={bxlFacebook} alt="facebook icon" /></div>
                            <div className="sm-icon"><img src={bxlTwitter} alt="Twitter icon" /></div>
                            <div className="sm-icon"><img src={bxlInstagram} alt="Instagram Icon" /></div>
                            <div className="sm-icon"><img src={bxlYoutube} alt="youtube icon" /></div>
                        </div>

                    </div>
                    
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactMap