'use client';

import { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span>RaghuRaj</span>
        </div>
        
        <nav className={styles.navigation}>
          <a href="#home" className={styles.navLink}>Home</a>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#skills" className={styles.navLink}>Skills</a>
          <a href="#projects" className={styles.navLink}>Projects</a>
          <a href="#experience" className={styles.navLink}>Experience</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </nav>
        
        <div className={styles.headerActions}>
          <a href="/resume.pdf" className={styles.resumeBtn} download>
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}
