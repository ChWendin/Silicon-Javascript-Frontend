import React from 'react'
import chevronRight from '../assets/Images/bx-chevrons-right.svg'
import homeIcon from '../assets/Images/bx-home-alt.svg'

const Breadcrumb = () => {
    return (
        <nav className="breadcrumb">
             <div className='breadDiv'>
             <img src={homeIcon} alt='Home icon' />  <a href="/">Homepage</a> 
             </div>
             <img src={chevronRight} alt='arrow right' /> <a href="/contact">Contact</a>
        </nav>
    );
};


export default Breadcrumb