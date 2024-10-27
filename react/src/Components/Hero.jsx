import React from 'react'
import googlePlay from '../assets/Images/googleplay.svg'
import mobiles from '../assets/Images/mobiles.svg'
import mobilesStor from '../assets/Images/mobiles-stor.svg'

const Hero = () => {
  return (
    <main id="gradiant" className="container">
            <div id="headline" className="headline">
                    <h1>Manage All Your</h1>
                    <h1> Money in One App</h1>
            </div>
            
            
            <div id="imgs" className="imgs">

                
                    <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
                
                
                    <div id="app-google">
                        <button className="btn">
                            <a><i className="fa-brands fa-apple"></i></a>
                            <div className="apple">
                                <p className="size1">Download on the</p>
                                <p className="size2">App Store</p>
                            </div>    
                        </button>

                        <button className="btn">
                            <a><img className="btn-store" src={googlePlay} alt="googleplay-light" /></a>
                            <div className="google">
                                <p className="size1">GET IT ON</p>
                                <p className="size2">Google Play</p>
                            </div>
                        </button>
                    </div>
                
                
                <div className="knapp">
                    <button className="knapp2">
                        <i className="fa-solid fa-chevron-down"></i>
                      
                    </button>
                    <p>Discover more</p>
                </div>   
            </div> 
            

                <div id="bild-mobiles" className="bild-mobiles">
                    <img src={mobiles} alt="mobiler" />
                </div>
                <div id="bild-mobiles2" className="bild-mobiles2">
                    <img src={mobilesStor} alt="mobiler" />
                </div>
        
        
        </main>
  )
}

export default Hero