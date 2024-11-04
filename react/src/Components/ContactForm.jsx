import React, { useState } from 'react'







const ContactForm = () => {

    const [formData, setFormData] = useState ({ fullName: '', email: '', specialist: '' })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData ({...formData, [name]: value})

        if (value.trim() === '') {
            setErrors(prevErrors => ({...prevErrors, [name]: `This field is required`}))
        } else {
            setErrors(prevErrors => ({...prevErrors, [name]: ''})) 
        }
    }
    
    const handleOk = () => {
       setSubmitted(false) 
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        const newErrors = {}
        Object.keys(formData).forEach(field => {
            if (formData[field].trim() === '') {
                newErrors[field] = `This field is required`
            }
        })

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }
    
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
    
        if (res.ok) {
            setSubmitted(true)
            setFormData({ fullName: '', email: '', specialist: '' })
        } 
    }
    
    if (submitted) {
        return (
            <div className="submitConfirmation">
                <h1>Thank you for your request!</h1>
                <p>We will get back to you as soon as possible.</p>
                <button className="btn-appointment" onClick={handleOk}>OK</button>
            </div>
        )
    }
    
  return (
    <div className="consultation-card">
        <h2>Get Online Consultation</h2>
        <form className="forms" noValidate onSubmit={handleSubmit}>
            <div>
                <label htmlFor="fullName">Full Name</label>
                <input type="text" value={formData.fullName} onChange={handleChange} id="fullName" name="fullName"  required />
                <span>{errors.fullName && errors.fullName}</span>
            </div>
            <div>
                <label htmlFor="email">Email adress</label>
                <input type="email" value={formData.email} onChange={handleChange} id="email" name="email"  required />
                <span>{errors.email && errors.email}</span>
            </div>
            <div>
                <label htmlFor="specialist">Specialist</label>
                <input type="text" value={formData.specialist} onChange={handleChange} id="specialist" name="specialist" required />
                <span>{errors.specialist && errors.specialist}</span>
            </div>
        <button type="submit">Make an appointment</button>
        </form>
    </div>
  )
}

export default ContactForm