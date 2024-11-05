import React, {useState, useEffect} from 'react'
import mainLogga from '../assets/Images/main-logga.svg'
import { NavLink, Link } from 'react-router-dom';

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('isDarkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleChange = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('isDarkMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };


  useEffect(() => {
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
          
          <button className="mobile-menu" onClick={toggleMenu}>
            <i className="fa-regular fa-bars"></i>
          </button>


        </div>

        
      {isMenuOpen && (
        <div className="mobile-menu-dropdown">
          <NavLink className="dropdown-link" to="/" onClick={toggleMenu}>Features</NavLink>
          <NavLink className="dropdown-link" to="/Contact" onClick={toggleMenu}>Contact</NavLink>
        </div>
      )}
    

      </header>
    );
  }

export default Header