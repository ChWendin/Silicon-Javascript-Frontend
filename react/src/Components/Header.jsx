import React, {useState, useEffect} from 'react'
import mainLogga from '../assets/Images/main-logga.svg'

function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    const handleToggleChange = () => {
      setIsDarkMode(!isDarkMode);
    };
    useEffect(() => {
      // Lägg till eller ta bort klassen 'dark-mode' på <html>-elementet
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [isDarkMode]); // Körs varje gång `isDarkMode` uppdateras  
    
    return (
      <header>
        <div className="container">
          <div className="main-logga">
            <a id="LoggaNav" href="/index.html">
              <img src={mainLogga} />
            </a>
            <span>Silicon</span>
          </div>
  
          <nav className="main-menu">
            <a className="main-menu-link" href="index.html">Features</a>
            <a className="main-menu-link" href="contact.html">Contact</a>
          </nav>
  
          <div id="darkmode-toggle-switch" className="btn-toggle-switch">
            <span className="label">Dark mode</span>
            <label htmlFor="darkmode-switch" className="toggle-switch">
              <input 
                id="darkmode-switch" 
                type="checkbox" 
                checked={isDarkMode} 
                onChange={handleToggleChange} 
              />
              <span className="slider round"></span>
            </label>
          </div>
  
          <a id="signin" href="*" className="btn-primary">
            <i className="fa-thin fa-user-large"></i>
            <span>Sign in / up</span>
          </a>
  
          <button className="mobile-menu">
            <i className="fa-regular fa-bars"></i>
          </button>
        </div>
      </header>
    );
  }

export default Header