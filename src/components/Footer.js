'use client';

import styles from '../styles/Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Get in touch</h2>
          <p className={styles.description}>
            Let's collaborate on your next project or discuss cybersecurity opportunities.
          </p>

          <div className={styles.socials}>
            <a 
              href="https://linkedin.com/in/raghurajmathur" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <img src="/icons/linkedin.svg" alt="LinkedIn" className={styles.socialIcon} />
            </a>
            <a 
              href="https://github.com/RaghuRajMathur" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <img src="/icons/github.png" alt="GitHub" className={styles.socialIcon} />
            </a>
            <a 
              href="mailto:raghurajmathur@example.com"
              className={styles.socialLink}
            >
              <img src="/icons/gmail.svg" alt="Email" className={styles.socialIcon} />
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {currentYear} RaghuRaj Mathur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
