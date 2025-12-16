'use client';

import styles from '../styles/Experience.module.css';

const experiences = [
  {
    id: 'paritybit',
    company: 'ParityBit Academy',
    position: 'Technical Intern',
    duration: 'July 2024 – August 2024',
    location: 'Remote',
    description: 'Focused on frontend design and UI enhancements using React.js, Next.js, HTML, CSS, and JavaScript. Successfully improved interface responsiveness and developed interactive web components.',
    technologies: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'JavaScript']
  },
  {
    id: 'hackveda',
    company: 'Hackveda Limited',
    position: 'Java Intern',
    duration: 'June 2023 – August 2023',
    location: 'Remote',
    description: 'Developed a comprehensive stock data analysis application using Java and Spring Boot framework, implementing advanced data processing algorithms and creating interactive visualizations for financial market analysis.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'JfreeChart', 'Git']
  }
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className="section-heading">Internship Experience</h2>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={exp.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div>
                  <h3 className={styles.position}>{exp.position}</h3>
                  <p className={styles.company}>{exp.company}</p>
                </div>
                <div className={styles.meta}>
                  <span className={styles.duration}>{exp.duration}</span>
                  <span className={styles.location}>{exp.location}</span>
                </div>
              </div>

              <p className={styles.description}>{exp.description}</p>

              <div className={styles.technologies}>
                {exp.technologies.map((tech) => (
                  <span key={tech} className={styles.tech}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
