import React from 'react'
import Header from '../Components/Header'
import ContactMain from '../Components/ContactMain'
import ContactMap from '../Components/ContactMap'

const Contact = () => {
  return (
    <> 
    <section className='main-section'>
        <Header />
        <ContactMain />
    </section>
    <ContactMap/>
    </>
  )
}

export default Contact
    