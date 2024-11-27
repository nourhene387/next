import { useState } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import styles from '../styles/contact.module.css'; // Importing the custom CSS

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Implement form submission logic
    alert('Message sent! (Note: This is a demo form)')
    console.log(formData)
  }

  return (
    <div>
      <Navbar />
      <div className={`container mx-auto px-4 py-8 ${styles.contactContainer}`}>
        <h1 className={`${styles.contactHeading}`}>Contact Me</h1>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className={`${styles.label}`}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`${styles.inputField}`}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className={`${styles.label}`}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`${styles.inputField}`}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className={`${styles.label}`}>Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className={`${styles.textareaField}`}
            />
          </div>
          <button 
            type="submit" 
            className={`${styles.submitButton}`}
          >
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </div>
  )
}
