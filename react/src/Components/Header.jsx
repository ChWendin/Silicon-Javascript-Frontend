import React, {useState, useEffect} from 'react'
import mainLogga from '../assets/Images/main-logga.svg'
import { NavLink, Link } from 'react-router-dom';

function Header() {
  // Kolla localStorage för att sätta initialt värde på `isDarkMode`
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('isDarkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  const handleToggleChange = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('isDarkMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  useEffect(() => {
    // Uppdatera dark mode-klassen på <html>-elementet
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
    
    return (
      <header>
        <div className="container">
          <div className="main-logga">
            <Link id="LoggaNav" to="/">
              <img src={mainLogga} />
            </Link>
            <span>Silicon</span>
          </div>
  
          <nav className="main-menu">
            <NavLink className="main-menu-link" to="/">Features</NavLink>
            <NavLink className="main-menu-link" to="/Contact">Contact</NavLink>
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
  
          <Link id="signin" to="/" className="btn-primary">
            <i className="fa-thin fa-user-large"></i>
            <span>Sign in / up</span>
          </Link>
  
          <button className="mobile-menu">
            <i className="fa-regular fa-bars"></i>
          </button>
        </div>
      </header>
    );
  }

export default Header