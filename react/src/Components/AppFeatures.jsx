import React from 'react'
import mobilVisa from '../assets/Images/mobil-med-visa.svg'
import payments from '../assets/Images/payments.svg.svg'
import security from '../assets/Images/security.svg.svg'
import statistics from '../assets/Images/statistics.svg.svg'
import support from '../assets/Images/support.svg.svg'
import cashback from '../assets/Images/cashback.svg.svg'
import happy from '../assets/Images/happy.svg.svg'

const AppFeatures = () => {
  return (
    <div className="grid">     
        <div className="section1">
            <div className="mobil2">
                <img src={mobilVisa} alt="Mobil" />
            </div>
        </div>

        <div className="section2"> 
            <div className="div2">
                <h1>App Features</h1>
                <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Proin volutpat mollis egestas.
                    Nam luctus facilisis ultrices. Pellentesque
                    volutpat ligula est. Mattis fermentum, at nec
                    lacus.</p>
            </div>

            
            
            
            <div className="cards">
                <div className="card1">
                    <div className="flex1">
                        <button className="ikon1">
                            <img src={payments} alt="payments" />
                        </button>
                        
                    </div>
                    <div className="flex2">
                        <h3>Easy Payments</h3>
                        <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>

                    </div>
                </div>
                
                   
                <div className="card2">
                    <div className="flex1">
                        <button className="ikon1">
                            <img src={security} alt="security" />
                        </button>
                        
                    </div>
                    <div className="flex2">
                        <h3>Data Security</h3>
                        <p>Augue pulvinar justo, fermentum
                            fames aliquam accumsan vestibulum
                            non.</p>

                    </div>
                </div>

                <div className="card3">
                    <div className="flex1">
                        <button className="ikon1">
                            <img src={statistics} alt="statistics" />
                        </button>
                        
                    </div>
                    <div className="flex2">
                        <h3>Cost Statistics</h3>
                        <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                    </div>
                </div>

                <div className="card4">
                    <div className="flex1">
                        <button className="ikon1">
                            <img src={support} alt="support" />
                        </button>
                        
                    </div>
                    <div className="flex2">
                        <h3>Support 24/7</h3>
                        <p>A elementum, imperdiet enim, pretium
                            etiam facilisi in aenean quam mauris.</p>
                </div>
                </div>

                <div className="card5">
                    <div className="flex1">
                        <button className="ikon1">
                            <img src={cashback} alt="cashback" />
                        </button>
                        
                    </div>
                    <div className="flex2">
                        <h3>Regular Cashback</h3>
                        <p>Sit facilisis dolor arcu, fermentum
                            vestibulum arcu elementum imperdiet
                            eleifend.</p>
                </div>
                </div>

                <div className="card6">
                    <div className="flex1">
                        <button className="ikon1">
                            <img src={happy} alt="happy" />
                        </button>
                        
                    </div>
                    <div className="flex2">
                        <h3>Top Standards</h3>
                        <p>Faucibus cursus maecenas lorem
                            cursus nibh. Sociis sit risus id. Sit
                            facilisis dolor arcu.</p>
                </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default AppFeatures