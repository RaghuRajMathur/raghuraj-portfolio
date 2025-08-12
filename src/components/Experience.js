'use client';

import styles from '../styles/Experience.module.css';

const experienceData = [
  {
    id: 'hackveda',
    company: 'Hackveda Limited',
    position: 'Java Intern',
    duration: 'June 2023 – August 2023',
    location: 'Remote',
    type: 'Internship',
    description: 'Developed a comprehensive stock data analysis application using Java and Spring Boot framework, implementing advanced data processing algorithms and creating interactive visualizations for financial market analysis.',
    achievements: [
      'Built stock data analysis platform with real-time processing capabilities',
      'Implemented technical analysis algorithms for market trend prediction',
      'Created interactive data visualization charts using JfreeChart',
      'Developed RESTful APIs for efficient data retrieval and processing',
      'Optimized database queries resulting in 40% performance improvement',
      'Collaborated with senior developers on code reviews and best practices'
    ],
    technologies: ['Java', 'Spring Boot', 'MySQL', 'JfreeChart', 'Git']
  },
  {
    id: 'paritybit',
    company: 'ParityBit Academy',
    position: 'Technical Intern',
    duration: 'July 2024 – August 2024',
    location: 'Remote',
    type: 'Internship',
    description: 'Focused on frontend design and UI enhancements using React.js, Next.js, HTML, CSS, and JavaScript. Successfully improved interface responsiveness and developed interactive web components.',
    achievements: [
      'Improved interface responsiveness by 20% through optimized code and layout adjustments',
      'Developed interactive web components that enhanced user engagement',
      'Applied modern frontend design principles to create user-friendly interfaces',
      'Collaborated with development team on UI enhancement projects',
      'Gained hands-on experience with responsive design techniques',
      'Contributed to improving overall user experience across web applications'
    ],
    technologies: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'JavaScript', 'Frontend Design', 'Responsive Design']
  }
];

const leadershipData = [
  {
    id: 'placement-director',
    company: 'JIMS Vasant Kunj',
    position: 'Director, Placement Cell',
    duration: 'September 2024 – July 2025',
    location: 'New Delhi, India',
    type: 'Leadership',
    description: 'Leading a team of 26 members to enhance student placement opportunities, coordinate recruitment drives, and expand industry partnerships while managing overall placement strategy.',
    achievements: [
      'Successfully managing a team of 26 members across different functions',
      'Increased student placements by 25% compared to previous year',
      'Expanded recruiter network with new hiring partners',
      'Coordinated placement drives and interview processes with multiple companies',
      'Organized skill development workshops and placement preparation sessions',
      'Managed team workflow and delegated responsibilities effectively'
    ],
    technologies: ['Team Management', 'Event Coordination', 'Strategic Planning', 'Communication', 'Leadership', 'Project Management']
  },
  {
    id: 'event-coordinator',
    company: 'ENIGMA IT Club, JIMS Vasant Kunj',
    position: 'Event Coordinator',
    duration: 'Cynet Day 2025',
    location: 'New Delhi, India',
    type: 'Volunteer',
    description: 'Organized and coordinated GenAI poster-making event as part of Cynet Day 2025, managing logistics, team collaboration, and ensuring successful event execution.',
    achievements: [
      'Successfully organized GenAI poster-making competition with high participation',
      'Coordinated with team members for seamless event execution',
      'Managed participant registration and event logistics efficiently',
      'Ensured smooth conduct of technical competition',
      'Facilitated knowledge sharing on Generative AI topics',
      'Received positive feedback from participants and faculty members'
    ],
    technologies: ['Event Management', 'Team Coordination', 'Logistics Planning', 'Communication', 'GenAI Knowledge', 'Public Speaking']
  }
];

const educationData = [
  {
    id: 'bca',
    institution: 'Jagannath International Management School (JIMS)',
    degree: 'Bachelor of Computer Applications (BCA)',
    field: 'Computer Applications',
    duration: '2022 – 2025',
    location: 'Vasant Kunj, New Delhi, India',
    cgpa: '8.2',
    description: 'Comprehensive study of computer applications including programming, web development, database management, and software engineering principles with focus on practical implementation.',
    highlights: [
      'Achieved CGPA of 8.2 demonstrating consistent academic excellence',
      'Relevant coursework in Web Development, Programming, and Database Management',
      'Data Structures, Algorithms, and Object-Oriented Programming',
      'Software Engineering principles and System Design',
      'Participated in Smart India Hackathon 2022 & 2023',
      'Currently serving as Director, Placement Cell (Sep 2024 – Jul 2025)'
    ]
  }
];

const certificationData = [
  {
    id: 'jpmorgan',
    title: 'Software Engineering Job Simulation',
    issuer: 'JPMorgan Chase & Co.',
    platform: 'Forage',
    date: '2024',
    description: 'Completed comprehensive software engineering simulation covering industry best practices, technical challenges, and real-world software development scenarios.'
  },
  {
    id: 'walmart',
    title: 'Advanced Software Engineering Job Simulation',
    issuer: 'Walmart USA',
    platform: 'Forage',
    date: '2024',
    description: 'Advanced simulation focusing on large-scale software engineering practices, system design, and enterprise-level development methodologies.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.badge}>
            <span>Professional Journey</span>
          </div>
          <h2 className={styles.sectionTitle}>
            My <span className={`${styles.gradientText} pulse-text`}>Experience</span> & Education
          </h2>
          <p className={styles.sectionDescription}>
            A comprehensive overview of my professional internships, leadership roles, educational background, 
            and certifications that demonstrate my growth as a frontend developer.
          </p>
        </div>

        {/* Professional Experience Section */}
        <div className={styles.experienceSection}>
          <h3 className={styles.subSectionTitle}>Professional Experience</h3>
          <div className={styles.timeline}>
            {experienceData.map((exp, index) => (
              <div key={exp.id} className={styles.timelineItem}>
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

        {/* Leadership & Volunteer Experience Section */}
        <div className={styles.experienceSection}>
          <h3 className={styles.subSectionTitle}>Leadership & Volunteer Experience</h3>
          <div className={styles.timeline}>
            {leadershipData.map((exp, index) => (
              <div key={exp.id} className={styles.timelineItem}>
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
                    <h6>Skills & Competencies:</h6>
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
        <div className={styles.educationSection}>
          <h3 className={styles.subSectionTitle}>Education</h3>
          <div className={styles.educationGrid}>
            {educationData.map((edu, index) => (
              <div key={edu.id} className={styles.educationCard}>
                <div className={styles.educationHeader}>
                  <h4 className={styles.degree}>{edu.degree}</h4>
                  <span className={styles.duration}>{edu.duration}</span>
                </div>
                <h5 className={styles.institution}>{edu.institution}</h5>
                <p className={styles.field}>{edu.field}</p>
                <div className={styles.cgpaContainer}>
                  <span className={styles.cgpaLabel}>CGPA:</span>
                  <span className={styles.cgpaValue}>{edu.cgpa}</span>
                </div>
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
