import React from 'react'
import logoIpsum1 from '../assets/Images/logoipsum1.svg'
import logoIpsum2 from '../assets/Images/logoipsum2.svg'
import logoIpsum3 from '../assets/Images/logoipsum3.svg'
import logoIpsum4 from '../assets/Images/logoipsum4.svg'
import logoIpsum5 from '../assets/Images/logoipsum5.svg'
import logoIpsum6 from '../assets/Images/logoipsum6.svg'

const LogoBanner = () => {
  return (
    <div className="loggos">
        
                <div className="loggo-banner" id="loggo1">
                    <button className="loggo">
                        <img src={logoIpsum1} alt="Logga" />
                    </button>
                </div>
                <div className="loggo-banner" id="loggo2">
                    <button className="loggo">
                        <img src={logoIpsum2} alt="Logga" />
                    </button>
                </div>
                <div className="loggo-banner" id="loggo3">
                    <button className="loggo">
                        <img src={logoIpsum3} alt="Logga" />
                    </button>
                </div>
                <div className="loggo-banner" id="loggo4">
                    <button className="loggo">
                        <img src={logoIpsum4} alt="Logga" />
                    </button>
                </div>
                <div className="loggo-banner" id="loggo5">
                    <button className="loggo">
                        <img src={logoIpsum5} alt="Logga" />
                    </button>
                </div>
                <div className="loggo-banner" id="loggo6">
                    <button className="loggo">
                        <img src={logoIpsum6} alt="Logga" />
                    </button>
                </div>
            </div>
  )
}

export default LogoBanner