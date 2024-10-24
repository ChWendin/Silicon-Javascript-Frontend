import React from 'react'
import screen from '../assets/Images/screen.svg'
import mobil from '../assets/Images/mobil.svg'
import showcaseScreens from '../assets/Images/app-showcase-screens.svg'
import screenStor from '../assets/Images/screen-stor.svg'
import frameStor from '../assets/Images/frame-stor.svg'
import showcaseScreens1 from '../assets/Images/app-showcase-screens1.svg'
import iphoneScreen1 from '../assets/Images/iPhone 12 Pro-screen1.svg'
import iphonePro from '../assets/Images/iPhone 12 Pro.svg'
import iphoneScreen2 from '../assets/Images/iPhone 12 Pro-screen2.svg'

const Howdoesitwork = () => {
  return (
    
    <section className="main2">
            <div className="container">
                
            <div className="headline2">
                <h2>How Does It Work?</h2>
            </div> 
            
            <div className="mobil">
                <img className="frame" src={screen} alt="skärm" />
                <img className="screen" src={mobil} alt="mobil" />
            </div>

            <div className="mobil3">
                    <img className="screen2" src={showcaseScreens} alt="skärm" />

                    <div className="layer">
                        <img className="frame-screen" src={screenStor} alt="skärm" />
                        <img className="frame2" src={frameStor} alt="mobil" />
                    </div>
                    <img className="screen3" src={showcaseScreens1} alt="skärm" />
            </div>
        
            <div className="mobil4">
                    <img className="screen4" src={iphoneScreen1} alt="skärm" />
                    <img className="frame3" src={iphonePro} alt="mobil" />
                    <img className="screen5" src={iphoneScreen2} alt="skärm" />
            </div>

                    
            <div className="text-box">
                    <div className="headline3">
                        <h2>Transfers to people from
                            your contact list</h2>
                    </div>
                    <div className="headline4">
                        <h2>Step 3. Transfers to people from your contact list</h2>
                    </div>
                    <div className="headline5">
                        <h4>Latest transaction history</h4>
                    </div>

            
                <div className="lorem">
                        <p className="loremtext">Proin volutpat mollis egestas. Nam luctus facilisis
                            ultrices. Pellentesque volutpat ligula est. Mattis
                            fermentum, at nec lacus.</p> 
                        <p className="loremtext2">Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p>  
                </div>
            </div> 
            

        </div>
</section>
                    
            
            

  )
}

export default Howdoesitwork