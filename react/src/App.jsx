
import '../src/assets/CSS/main.css'
import AppFeatures from './Components/AppFeatures'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Hero from './Components/Hero'
import LogoBanner from './Components/LogoBanner'


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

    <Footer />
    </>
  )
}

export default App
