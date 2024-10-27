import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import LogoBanner from '../Components/LogoBanner'
import AppFeatures from '../Components/AppFeatures'
import Howdoesitwork from '../Components/Howdoesitwork'
import MakeYourMoney from '../Components/MakeYourMoney'
import Faq from '../Components/Faq'
import Reviews from '../Components/Reviews'

const Home = () => {
  return (
    <>
    < section className='main1'>
        <Header />
        <Hero />
    </section>
    <div className="container">
        <LogoBanner /> 
        <AppFeatures /> 
    </div>
    <Howdoesitwork />
    <MakeYourMoney />
    <Reviews />
    <Faq />
    </>
  )
}


export default Home