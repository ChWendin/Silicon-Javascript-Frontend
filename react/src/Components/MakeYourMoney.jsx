import React from 'react'
import checkCircle from '../assets/Images/bx-check-circle.svg'
import smallScreenTop from '../assets/Images/small-screen-top.svg'
import smallScreenBot from '../assets/Images/small-screen-bot.svg'
import creditCardIcon from '../assets/Images/credit-card-icon.svg'
import walletIcon from '../assets/Images/wallet-icon.svg'

const MakeYourMoney = () => {
  return (
    <section>
<div className="container2">
    
    
   <div className="section-grid">
        <div className="kort-1">
            <div className="kort-text">
                <h2>Make your money <br /> transfer simple and clear</h2>
                
                <div className="text-gap">
                    <div className="icon-text">
                        <img src={checkCircle} alt="ikon" />
                        <p>Banking transactions are free for you</p>
                    </div>
                    <div className="icon-text">
                        <img src={checkCircle} alt="ikon" />
                        <p>No monthly cash commission</p>
                    </div>
                    <div className="icon-text">
                        <img src={checkCircle} alt="ikon" />
                        <p>Manage payments and transactions online</p>
                    </div>
                </div>


                <a className="btn-2">
                    <span>Learn more</span>
                    <i className="fa-regular fa-arrow-right"></i>
                </a>
                    
            </div>
            
            <div className="kort-bild">
                <img src={smallScreenTop} alt="skärm" />
            </div>
                
        </div>
                
                

    <div className="kort-2">
        <div className="kort-bild2">
            <img src={smallScreenBot} alt="skärm" />
        </div>

        <div className="kort-text2">
            
            <h2>Receive payment from <br />international bank details</h2>
            
            <div className="ikon-text-wrapper">
                <div className="ikon-text">
                    <div className="ikonstyling">
                        <img src={creditCardIcon} alt="ikon" />
                    </div>

                    <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                </div>
                
                <div className="ikon-text">
                    <div className="ikonstyling">
                        <img src={walletIcon} alt="ikon" />
                    </div>

                    <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                    
                </div>

            </div>
            
                
            
                <a className="btn-2">
                    <span>Learn more</span>
                    <i className="fa-regular fa-arrow-right"></i>
                </a>
           
            </div>
        </div>
    </div> 
</div>
</section>
  )
}

export default MakeYourMoney