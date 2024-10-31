import React, { useState, useEffect} from 'react'
import FaqCard from './FaqCard'

const GetFaq = () => {
    const [faqCards, setFaqCards ] = useState([])
    
    

    const fetchData = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq')
        const data =await res.json()
        setFaqCards(data)
    }

    useEffect(() => {
        fetchData()
    }, [])
 
 
 
 return (
<div className="card-faq-container">
    {
    faqCards.map((card, index) => (<FaqCard  key={card.id} style={{
        borderRadius: index === 0 ? '7px 7px 0 0' : index === faqCards.length - 1 ? '0 0 7px 7px' : '0'
      }} card={card} />)) 
    }
</div>
  )
}

export default GetFaq
    
