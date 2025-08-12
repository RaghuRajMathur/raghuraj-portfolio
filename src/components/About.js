'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from '../styles/About.module.css';

export default function About() {
  const headerAnimation = useScrollAnimation({ threshold: 0.3 });
  const contentAnimation = useScrollAnimation({ threshold: 0.4 });
  const statsAnimation = useScrollAnimation({ threshold: 0.5 });

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={`${styles.sectionHeader} scroll-fade-up ${headerAnimation.isVisible ? 'visible' : ''}`} ref={headerAnimation.elementRef}>
          <div className={styles.badge}>
            <span>Get To Know Me</span>
          </div>
          <h2 className={styles.sectionTitle}>
            About <span className={`${styles.gradientText} pulse-text`}>Me</span>
          </h2>
        </div>

        <div className={`${styles.aboutContent} scroll-fade-up ${contentAnimation.isVisible ? 'visible' : ''}`} ref={contentAnimation.elementRef}>
          <div className={styles.aboutText}>
            <h3>Frontend Developer & Problem Solver</h3>
            <p>
              I'm RaghuRaj Mathur, a passionate frontend developer from North Delhi, India. With a strong 
              foundation in modern web technologies, I specialize in creating responsive, user-centered 
              applications that solve real-world problems.
            </p>
            <p>
              My journey in web development started with a curiosity for how things work on the web. 
              Today, I'm proficient in React, Next.js, JavaScript, and various other technologies that 
              help me build exceptional digital experiences.
            </p>
            <p>
              I believe in writing clean, efficient code and staying updated with the latest industry 
              trends. My goal is to create applications that not only look great but also provide 
              seamless user experiences and optimal performance.
            </p>
            
            <div className={styles.personalInfo}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Location:</span>
                <span>North Delhi, Delhi, India</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Email:</span>
                <span>raghuu715@gmail.com</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Status:</span>
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>

          <div className={styles.aboutVisual}>
            <div className={styles.skillHighlights}>
              <div className={styles.highlight}>
                <h4>Frontend Focus</h4>
                <p>Specialized in React, Next.js, and modern JavaScript frameworks</p>
              </div>
              <div className={styles.highlight}>
                <h4>Responsive Design</h4>
                <p>Creating seamless experiences across all devices and screen sizes</p>
              </div>
              <div className={styles.highlight}>
                <h4>Performance Optimization</h4>
                <p>Building fast, efficient applications with optimal user experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.aboutStats} scroll-fade-up ${statsAnimation.isVisible ? 'visible' : ''}`} ref={statsAnimation.elementRef}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>10+</div>
            <div className={styles.statLabel}>Projects Completed</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>2+</div>
            <div className={styles.statLabel}>Years Experience</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>6+</div>
            <div className={styles.statLabel}>Technologies Mastered</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
