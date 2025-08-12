'use client';

import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const skills = ['React Applications', 'Next.js Websites', 'Responsive UIs', 'Interactive Dashboards'];
  
  // Scroll animations
  const titleAnimation = useScrollAnimation({ threshold: 0.3 });
  const descriptionAnimation = useScrollAnimation({ threshold: 0.5 });
  const actionsAnimation = useScrollAnimation({ threshold: 0.8 });
  const visualAnimation = useScrollAnimation({ threshold: 0.4 });
  
  useEffect(() => {
    const currentSkill = skills[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentSkill.substring(0, typedText.length + 1));
        if (typedText === currentSkill) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypedText(currentSkill.substring(0, typedText.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % skills.length);
        }
      }
    }, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timeout);
  }, [typedText, currentIndex, isDeleting, skills]);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={`${styles.badge} scroll-fade-up ${titleAnimation.isVisible ? 'visible' : ''}`} ref={titleAnimation.elementRef}>
              <span>Available for Frontend Opportunities</span>
            </div>
            
            <h1 className={`${styles.heroTitle} scroll-fade-up ${titleAnimation.isVisible ? 'visible' : ''}`}>
              Hi, I'm RaghuRaj Mathur
              <span className={`${styles.gradientText} pulse-text`}>
                <br />I Build {typedText}
                <span className={styles.cursor}>|</span>
              </span>
            </h1>
            
            <p className={`${styles.heroDescription} scroll-fade-up stagger-2 ${descriptionAnimation.isVisible ? 'visible' : ''}`} ref={descriptionAnimation.elementRef}>
              I'm a tech-driven problem solver passionate about building responsive, user-focused applications. 
              Skilled in HTML, CSS, JavaScript, React, Next.js, and Node.js, I create clean, intuitive interfaces 
              and optimize workflows for performance.
            </p>
            
            <div className={`${styles.heroActions} scroll-fade-up stagger-4 ${actionsAnimation.isVisible ? 'visible' : ''}`} ref={actionsAnimation.elementRef}>
              <a href="#projects" className={styles.primaryBtn}>
                View My Projects
              </a>
              <a href="/resume.pdf" className={styles.secondaryBtn} download>
                Download Resume
              </a>
            </div>
          </div>
          
          <div className={`${styles.heroVisual} scroll-fade-right ${visualAnimation.isVisible ? 'visible' : ''}`} ref={visualAnimation.elementRef}>
            <div className={styles.profileContainer}>
              <div className={styles.profileImage}>
                <div className={styles.profilePlaceholder}>
                  <span>Your Photo Here</span>
                </div>
              </div>
              <div className={styles.techStack}>
                <div className={styles.techItem}>React</div>
                <div className={styles.techItem}>Next.js</div>
                <div className={styles.techItem}>JavaScript</div>
                <div className={styles.techItem}>CSS</div>
                <div className={styles.techItem}>Node.js</div>
                <div className={styles.techItem}>Python</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
