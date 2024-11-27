import React from 'react'
import styles from '../styles/footer.module.css'
const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.footer}>&copy; {new Date().getFullYear()} Nourhene Dhouibi. All Rights Reserved.</p>
       </div>
  )
}

export default Footer
