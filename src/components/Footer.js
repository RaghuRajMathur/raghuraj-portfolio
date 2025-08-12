'use client';

import styles from '../styles/Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.logoSection}>
              <h3 className={styles.footerLogo}>RaghuRaj Mathur</h3>
              <p className={styles.logoDescription}>
                A BCA Graduate and aspiring frontend developer creating modern, responsive, 
                and user-focused web applications with cutting-edge technologies.
              </p>
              <div className={styles.socialLinks}>
                <a 
                  href="https://www.linkedin.com/in/raghuraj-mathur-b9417518a/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/RaghuRajMathur" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  GitHub
                </a>
                <a 
                  href="mailto:raghuu715@gmail.com"
                  className={styles.socialLink}
                >
                  Email
                </a>
              </div>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h3>Contact Info</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Email:</span>
                <span>raghuu715@gmail.com</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Location:</span>
                <span>North Delhi, Delhi, India</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Status:</span>
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <p>&copy; {currentYear} RaghuRaj Mathur. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
