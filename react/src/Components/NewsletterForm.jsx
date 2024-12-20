import React, {useState} from 'react'
import bellIcon from '../assets/Images/bell-icon.svg'


const NewsletterForm = () => {
    const [formData, setFormData] = useState({ email: '' })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData ({...formData, [name]: value})
        
        let error = '';
        if (value.trim() === '') {
            error = 'This field is required';
        } else {
            if (name === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    error = 'Please enter a valid email address';
                }
            }
        } 
        setErrors(prevErrors => ({...prevErrors, [name]: error})) 
        
      
        
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
    
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
    
        if (res.ok) {
            setSubmitted(true)
            setFormData({ email: '' })
        } 
    }
    
    if (submitted) {
        return (
            <div className="newsConfirmation">
                <h1>You are now registered for our newsletter!</h1>
                
                <button className="btn-appointment" onClick={handleOk}>OK</button>
            </div>
        )
    }
 
 
 
    return (
    <div className="sub-container">
    <div className="sub-flex">
        <img src={bellIcon} alt="bell icon" />
        <div className="sub-headline">
            <p>Subscribe to our newsletter</p> 
            <p className="hidden">to stay informed about latest updates</p> 
                

        </div>
    </div>
    

    <div >
        <form className="sub-form" noValidate onSubmit={handleSubmit}>
            <div className="subFormFlex">
                <div className="input-container">
                <i className="fa-regular fa-envelope input-icon" ></i>
                    <input className="form-input" type="email"  value={formData.email} onChange={handleChange} name="email" placeholder = 'Your email' />
                </div>
            <button type='submit' className="sub-btn">Subscribe</button>
            </div>
            <span>{errors.email && errors.email}</span>
        </form>
    </div> 
</div>
  )
}

export default NewsletterForm
