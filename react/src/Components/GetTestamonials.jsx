import React, { useState, useEffect } from 'react'
import TestamonialCard from './TestamonialCard'


const GetTestamonials = () => {
    const [testamonialCard, setTestamonialCard ] = useState([])
    
    

    const fetchData = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
        const data =await res.json()
        setTestamonialCard(data)
    }

    useEffect(() => {
        fetchData()
    }, [])
  
    return (
    <div className="review-cards">
        {
            testamonialCard.map((card) => (<TestamonialCard key={card.id} card={card} />))
        }
    </div>
  )
}

export default GetTestamonials







            