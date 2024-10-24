
import '../src/assets/CSS/main.css'
import AppFeatures from './Components/AppFeatures'
import Faq from './Components/Faq'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Howdoesitwork from './Components/Howdoesitwork'
import LogoBanner from './Components/LogoBanner'
import MakeYourMoney from './Components/MakeYourMoney'
import Reviews from './Components/Reviews'


function App() {
 

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

    <Footer />
    </>
  )
}

export default App
