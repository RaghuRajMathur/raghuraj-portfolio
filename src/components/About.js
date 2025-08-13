'use client';

import styles from '../styles/About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.badge}>
            <span>Get To Know Me</span>
          </div>
          <h2 className={styles.sectionTitle}>
            About <span className={`${styles.gradientText} pulse-text`}>Me</span>
          </h2>
        </div>

        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h3>Aspiring Frontend Developer & Tech Enthusiast</h3>
            <p>
              I&apos;m RaghuRaj Mathur, an aspiring frontend developer and final-year BCA student from North Delhi, India. 
              With strong technical skills in HTML, CSS, JavaScript, React, Next.js, and Node.js, I&apos;m passionate about 
              creating responsive, user-focused web applications that solve real-world problems.
            </p>
            <p>
              My journey combines academic excellence with practical experience. I&apos;ve completed internships at 
              ParityBit Academy and Hackveda Limited, where I gained hands-on experience in frontend development 
              and stock data analysis. I&apos;m also proficient in programming languages like Java, Python, and Django.
            </p>
            <p>
              Beyond coding, I demonstrate strong leadership skills as Director of the Placement Cell, managing 
              a team of 26 members and coordinating events like Cynet Day 2025. I believe in continuous learning 
              and leveraging modern technologies to create innovative solutions.
            </p>
            
            <div className={styles.personalInfo}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Location:</span>
                <span>North Delhi, India</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Email:</span>
                <span>raghuu715@gmail.com</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Education:</span>
                <span>BCA Graduated (CGPA: 8.2)</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Status:</span>
                <span>Available for frontend opportunities</span>
              </div>
            </div>
          </div>

          <div className={styles.aboutVisual}>
            <div className={styles.skillHighlights}>
              <div className={styles.highlight}>
                <h4>Technical Skills</h4>
                <p>Proficient in HTML, CSS, JavaScript, React, Next.js, Node.js, Java, Python, and Django</p>
              </div>
              <div className={styles.highlight}>
                <h4>Leadership Excellence</h4>
                <p>Director of Placement Cell managing 26 members with proven team coordination abilities</p>
              </div>
              <div className={styles.highlight}>
                <h4>Academic Achievement</h4>
                <p>Maintaining CGPA of 8.2 in BCA program with strong foundation in computer applications</p>
              </div>
              <div className={styles.highlight}>
                <h4>Practical Experience</h4>
                <p>Completed multiple internships and built real-world projects with measurable impact</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
