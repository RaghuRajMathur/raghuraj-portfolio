'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Move skills array to useMemo to prevent recreation on every render
  const skills = useMemo(() => ['Responsive Websites', 'Interactive UIs'], []);
  
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
            <div className={styles.badge}>
              <span>Available for Frontend Opportunities</span>
            </div>
            
            <h1 className={styles.heroTitle}>
              Hi, I&apos;m RaghuRaj Mathur
              <br />
              <span className={styles.gradientText}>
                <span className={styles.staticText}>I Build </span>
                <span className={styles.typedText}>{typedText}</span>
                <span className={styles.cursor}>|</span>
              </span>
            </h1>
            
            <p className={styles.heroDescription}>
              I&apos;m a passionate BCA final-year student and aspiring frontend developer from North Delhi, India. 
              With expertise in HTML, CSS, JavaScript, React, Next.js, and backend technologies like Java and Python, 
              I create modern, responsive web applications that deliver exceptional user experiences.
            </p>
            
            <div className={styles.heroActions}>
              <a href="#projects" className={styles.primaryBtn}>
                View My Projects
              </a>
              <a href="/resume.pdf" className={styles.secondaryBtn} download>
                Download Resume
              </a>
            </div>
          </div>
          
          <div className={styles.heroVisual}>
            <div className={styles.profileContainer}>
              <div className={styles.profileImage}>
                <Image
                  src="/profile.jpg"
                  alt="RaghuRaj Mathur - Frontend Developer"
                  fill
                  style={{ 
                    objectFit: 'cover',
                    borderRadius: '50%'
                  }}
                  priority={true}
                />
              </div>
              <div className={styles.techStack}>
                <div className={styles.techItem}>HTML/CSS</div>
                <div className={styles.techItem}>JavaScript</div>
                <div className={styles.techItem}>React</div>
                <div className={styles.techItem}>Next.js</div>
                <div className={styles.techItem}>Node.js</div>
                <div className={styles.techItem}>Java</div>
                <div className={styles.techItem}>Python</div>
                <div className={styles.techItem}>Django</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
