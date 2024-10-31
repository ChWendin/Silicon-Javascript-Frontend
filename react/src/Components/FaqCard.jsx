import React, {useState} from 'react'

const FaqCard = ({card}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleVisibility = () => {
      setIsOpen(prev => !prev);
    };
  
    return (
    <div className="card-faq">
        <div className='faqTitle'>
        <span>{card.title}</span>
        <button className={`sub-knapp ${isOpen ? 'sub-knapp-active' : ''}`} onClick={toggleVisibility} >
            <i className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
        </button>
        </div>
        <p style={{display: isOpen ? 'block' : 'none'}}>
            {card.content}
        </p>
        
    </div>
  )
}

export default FaqCard
            
