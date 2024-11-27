import Link from 'next/link'; // or 'react-router-dom' for routing
import { useState } from 'react';
import styles from '../styles/Navbar.module.css'; 

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home'); // Example: Default active link is "home"

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li>
          <Link href="/" passHref>
            <a 
              className={`${styles.navbarLink} ${activeLink === 'home' ? styles.active : ''}`}
              onClick={() => handleLinkClick('home')}
            >
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            <a 
              className={`${styles.navbarLink} ${activeLink === 'about' ? styles.active : ''}`}
              onClick={() => handleLinkClick('about')}
            >
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href="/Projects" passHref>
            <a
              className={`${styles.navbarLink} ${activeLink === 'projects' ? styles.active : ''}`}
              onClick={() => handleLinkClick('projects')}
            >
              Projects
            </a>
          </Link>
        </li>
        <li>
          <Link href="/Contact" passHref>
            <a 
              className={`${styles.navbarLink} ${activeLink === 'Contact' ? styles.active : ''}`}
              onClick={() => handleLinkClick('Contact')}
            >
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
