
import Navbar from '../components/Navbar'
import Footer from '../Components/Footer'
import styles from '../styles/home.module.css'
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.home}>
       <h1 className={styles.heroTitle}>Hi, I'm Nourhene Dhouibi</h1>
       <img 
        src='https://formation-libre.fr/wp-content/uploads/2021/05/Developpeur-web-1024x701.jpg' 
        alt='Developer Image' 
        className={styles.image} />
          <p className={styles.heroDescription}>Web Developer | Designer </p>
          <a href="/projects" className={styles.ctaButton}>See My Work</a>
    </div>
      <Footer />
    </div>
  )
}