import Home from '../src/Pages/Home'
import Contact from '../src/Pages/Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import '../src/assets/CSS/main.css'
import Footer from './Components/Footer'
import DarkModeProvider from './contexts/DarkModeContext'





function App() {
 

  return (
    <DarkModeProvider> 
      <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes> 
        
          <Footer />
      </BrowserRouter>
    </DarkModeProvider>  
  )
}
      


      
    

export default App
