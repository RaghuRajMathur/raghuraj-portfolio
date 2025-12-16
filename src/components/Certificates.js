'use client';

import styles from '../styles/Certificates.module.css';

const certificates = [
  {
    id: 'jpmorgan',
    title: 'Software Engineering Job Simulation',
    issuer: 'JPMorgan Chase & Co.',
    platform: 'Forage',
    date: '2024'
  },
  {
    id: 'walmart',
    title: 'Advanced Software Engineering Job Simulation',
    issuer: 'Walmart USA',
    platform: 'Forage',
    date: '2024'
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className={styles.certificates}>
      <div className={styles.container}>
        <p className="section-title">Achievements</p>
        <h2 className="section-heading">Certificates</h2>

        <div className={styles.grid}>
          {certificates.map((cert) => (
            <div key={cert.id} className={styles.card}>
              <div className={styles.icon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <h3 className={styles.title}>{cert.title}</h3>
              <p className={styles.issuer}>{cert.issuer}</p>
              <div className={styles.meta}>
                <span>{cert.platform}</span>
                <span>{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
