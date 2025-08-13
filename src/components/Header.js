'use client';

import { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span>RaghuRaj Mathur</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className={styles.navigation}>
          <a href="#home" className={styles.navLink}>Home</a>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#skills" className={styles.navLink}>Skills</a>
          <a href="#projects" className={styles.navLink}>Projects</a>
          <a href="#experience" className={styles.navLink}>Experience</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </nav>
        
        {/* Desktop Resume Button */}
        <div className={styles.headerActions}>
          <a href="/resume.pdf" className={styles.resumeBtn} download>
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuBtn}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* Mobile Navigation */}
        <nav className={`${styles.mobileNavigation} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
          <a href="#home" className={styles.mobileNavLink} onClick={closeMobileMenu}>Home</a>
          <a href="#about" className={styles.mobileNavLink} onClick={closeMobileMenu}>About</a>
          <a href="#skills" className={styles.mobileNavLink} onClick={closeMobileMenu}>Skills</a>
          <a href="#projects" className={styles.mobileNavLink} onClick={closeMobileMenu}>Projects</a>
          <a href="#experience" className={styles.mobileNavLink} onClick={closeMobileMenu}>Experience</a>
          <a href="#contact" className={styles.mobileNavLink} onClick={closeMobileMenu}>Contact</a>
          <a href="/resume.pdf" className={styles.mobileResumeBtn} download onClick={closeMobileMenu}>
            Download Resume
          </a>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className={styles.mobileMenuOverlay} onClick={closeMobileMenu}></div>
        )}
      </div>
    </header>
  );
}
