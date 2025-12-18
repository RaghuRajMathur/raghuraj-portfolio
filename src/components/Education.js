'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Education.module.css';

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const education = [
    {
      logo: '/logo/jims-logo.png',
      institution: 'Jagannath International Management School (GGSIPU)',
      degree: "Bachelor of Computer Applications (BCA) - CGPA: 8.17/10",
      period: '2022 - 2025',
      location: 'Delhi, India',
      website: 'https://www.jimsvasantkunj.com/',
      coursework: 'Operating Systems, Computer Networks, Database Management Systems, System Administration'
    }
  ];

  return (
    <section id="education" ref={sectionRef} className={styles.education}>
      <div className="container">
        <p className="section-title">Academic Background</p>
        <h2 className="section-heading">Education</h2>

        <div className={styles.educationList}>
          {education.map((edu, index) => (
            <div
              key={index}
              className={`${styles.educationItem} ${isVisible ? styles.visible : ''}`}
              style={{
                transitionDelay: `${index * 0.2}s`
              }}
            >
              <div className={styles.logoContainer}>
                <img
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  className={styles.logo}
                />
              </div>

              <div className={styles.content}>
                <div className={styles.header}>
                  <div className={styles.mainInfo}>
                    <div className={styles.titleRow}>
                      <h3 className={styles.institution}>{edu.institution}</h3>
                      <a
                        href={edu.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkButton}
                        aria-label={`Visit ${edu.institution} website`}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      </a>
                    </div>
                    <p className={styles.degree}>{edu.degree}</p>
                    {edu.coursework && (
                      <p className={styles.coursework}>
                        <strong>Relevant Coursework:</strong> {edu.coursework}
                      </p>
                    )}
                  </div>
                  <span className={styles.period}>{edu.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
