import React, { useState } from 'react'







const ContactForm = () => {

    const [formData, setFormData] = useState ({ fullName: '', email: '', specialist: '' })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    
    
        
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData ({...formData, [name]: value})

        let error = '';
        if (value.trim() === '') {
            error = 'This field is required';
        } else {
            if (name === 'fullName') {
                const nameRegex = /^[a-zA-Z\s]+$/;
                if (!nameRegex.test(value)) {
                    error = 'Only letters and spaces are allowed';
                }
            }
            if (name === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    error = 'Please enter a valid email address';
                }
            }
        }
        
        setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
    };
    
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
            <select id="specialist" value={formData.specialist} onChange={handleChange} name='specialist' required> 
                <option className='dropdown' value=""></option>
                <option className='dropdown' value="frontend">Frontend</option>
                <option className='dropdown' value="backend">Backend</option>
                <option className='dropdown' value="fullstack">Fullstack</option>
            </select>
            <span>{errors.specialist && errors.specialist}</span>
            </div>
            
        <button type="submit">Make an appointment</button>
        </form>
    </div>
  )
}

export default ContactForm
            
        