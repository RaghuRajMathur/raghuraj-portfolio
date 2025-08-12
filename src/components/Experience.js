'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from '../styles/Experience.module.css';

const experienceData = [
  {
    id: 'hackveda',
    company: 'Hackveda Limited',
    position: 'Software Development Intern',
    duration: 'June 2023 - August 2023',
    location: 'Remote',
    type: 'Internship',
    description: 'Developed a comprehensive stock data analysis application using Java and Spring Boot framework, implementing advanced data processing algorithms and creating interactive visualizations for financial market analysis.',
    achievements: [
      'Built stock data analysis platform with real-time processing capabilities',
      'Implemented technical analysis algorithms for market trend prediction',
      'Created interactive data visualization charts using Chart.js',
      'Developed RESTful APIs for data retrieval and processing',
      'Optimized database queries resulting in 40% performance improvement',
      'Collaborated with senior developers on code reviews and best practices'
    ],
    technologies: ['Java', 'Spring Boot', 'MySQL', 'Chart.js', 'REST API', 'Git']
  },
  {
    id: 'freelance',
    company: 'Freelance Projects',
    position: 'Frontend Developer',
    duration: '2022 - Present',
    location: 'Remote',
    type: 'Freelance',
    description: 'Working on various frontend development projects, creating responsive web applications and implementing modern UI/UX designs using React, Next.js, and other cutting-edge technologies.',
    achievements: [
      'Developed 10+ responsive web applications for different clients',
      'Implemented modern UI/UX designs with focus on user experience',
      'Created reusable component libraries for faster development',
      'Optimized website performance resulting in improved loading times',
      'Maintained 100% client satisfaction rate with timely project delivery',
      'Collaborated with designers and backend developers on complex projects'
    ],
    technologies: ['React', 'Next.js', 'JavaScript', 'CSS3', 'HTML5', 'Git']
  }
];

const educationData = [
  {
    id: 'college',
    institution: 'University/College Name',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science Engineering',
    duration: '2020 - 2024',
    location: 'Delhi, India',
    description: 'Comprehensive study of computer science fundamentals including data structures, algorithms, software engineering, and modern web technologies.',
    highlights: [
      'Relevant coursework in Data Structures and Algorithms',
      'Software Engineering and Database Management Systems',
      'Web Development and Frontend Technologies',
      'Object-Oriented Programming and Design Patterns',
      'Computer Networks and System Design',
      'Final year project on web application development'
    ]
  }
];

export default function Experience() {
  const headerAnimation = useScrollAnimation({ threshold: 0.3 });
  const experienceAnimation = useScrollAnimation({ threshold: 0.4 });
  const educationAnimation = useScrollAnimation({ threshold: 0.5 });

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <div className={`${styles.sectionHeader} scroll-fade-up ${headerAnimation.isVisible ? 'visible' : ''}`} ref={headerAnimation.elementRef}>
          <div className={styles.badge}>
            <span>Professional Journey</span>
          </div>
          <h2 className={styles.sectionTitle}>
            My <span className={`${styles.gradientText} pulse-text`}>Experience</span> & Education
          </h2>
          <p className={styles.sectionDescription}>
            A timeline of my professional experience, internships, and educational background 
            that have shaped my skills as a frontend developer.
          </p>
        </div>

        {/* Experience Section */}
        <div className={`${styles.experienceSection} scroll-fade-up ${experienceAnimation.isVisible ? 'visible' : ''}`} ref={experienceAnimation.elementRef}>
          <h3 className={styles.subSectionTitle}>Professional Experience</h3>
          <div className={styles.timeline}>
            {experienceData.map((exp, index) => (
              <div key={exp.id} className={`${styles.timelineItem} stagger-${index + 1}`}>
                <div className={styles.timelineMarker}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineLine}></div>
                </div>
                <div className={styles.experienceCard}>
                  <div className={styles.experienceHeader}>
                    <div className={styles.experienceMain}>
                      <h4 className={styles.position}>{exp.position}</h4>
                      <h5 className={styles.company}>{exp.company}</h5>
                    </div>
                    <div className={styles.experienceMeta}>
                      <span className={styles.duration}>{exp.duration}</span>
                      <span className={styles.location}>{exp.location}</span>
                      <span className={`${styles.type} ${styles[exp.type.toLowerCase()]}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <p className={styles.experienceDescription}>{exp.description}</p>
                  
                  <div className={styles.achievements}>
                    <h6>Key Achievements:</h6>
                    <ul>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>
                          <span className={styles.checkIcon}>✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={styles.technologies}>
                    <h6>Technologies Used:</h6>
                    <div className={styles.techTags}>
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className={styles.techTag}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className={`${styles.educationSection} scroll-fade-up ${educationAnimation.isVisible ? 'visible' : ''}`} ref={educationAnimation.elementRef}>
          <h3 className={styles.subSectionTitle}>Education</h3>
          <div className={styles.educationGrid}>
            {educationData.map((edu, index) => (
              <div key={edu.id} className={`${styles.educationCard} stagger-${index + 1}`}>
                <div className={styles.educationHeader}>
                  <h4 className={styles.degree}>{edu.degree}</h4>
                  <span className={styles.duration}>{edu.duration}</span>
                </div>
                <h5 className={styles.institution}>{edu.institution}</h5>
                <p className={styles.field}>{edu.field}</p>
                <p className={styles.educationDescription}>{edu.description}</p>
                
                <div className={styles.highlights}>
                  <h6>Key Highlights:</h6>
                  <ul>
                    {edu.highlights.map((highlight, i) => (
                      <li key={i}>
                        <span className={styles.checkIcon}>✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
