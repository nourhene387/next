import React from 'react'
import styles from '../styles/home.module.css'

function Home() {
  return (
    <div className={styles.home}>
       <h1 className={styles.heroTitle}>Hi, I'm Nourhene Dhouibi</h1>
       <img 
        src='https://formation-libre.fr/wp-content/uploads/2021/05/Developpeur-web-1024x701.jpg' 
        alt='Developer Image' 
        className={styles.image} />
          <p className={styles.heroDescription}>Web Developer | Designer </p>
          <a href="/projects" className={styles.ctaButton}>See My Work</a>
    </div>
  )
}

export default Home
