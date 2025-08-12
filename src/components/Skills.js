'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import styles from '../styles/Skills.module.css';

const skillsData = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Building modern, responsive user interfaces with cutting-edge technologies and best practices.',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'JavaScript', level: 88 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'Responsive Design', level: 92 }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Creating robust server-side applications and APIs with modern frameworks and databases.',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Python', level: 80 },
      { name: 'Django', level: 70 },
      { name: 'Java', level: 85 },
      { name: 'Spring Boot', level: 75 },
      { name: 'MySQL', level: 78 }
    ]
  },
  {
    id: 'tools',
    title: 'Development Tools',
    description: 'Proficient with modern development tools and workflows for efficient project delivery.',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Vercel', level: 80 },
      { name: 'Command Line', level: 75 },
      { name: 'Package Managers', level: 82 },
      { name: 'DevTools', level: 85 }
    ]
  }
];

export default function Skills() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);

  const currentSkillSet = skillsData[currentSkillIndex];

  // Use useCallback to memoize the function and prevent recreation
  const handleNextSkill = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skillsData.length);
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning]);

  // Auto-advance skills every 8 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleNextSkill();
    }, 8000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [handleNextSkill]);

  const handlePrevSkill = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSkillIndex((prev) => (prev - 1 + skillsData.length) % skillsData.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handleDotClick = (index) => {
    if (isTransitioning || index === currentSkillIndex) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSkillIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.badge}>
            <span>Technical Expertise</span>
          </div>
          <h2 className={styles.sectionTitle}>
            My <span className={`${styles.gradientText} pulse-text`}>Skills</span> & Technologies
          </h2>
          <p className={styles.sectionDescription}>
            A comprehensive overview of my technical abilities and the tools I use to bring 
            ideas to life through clean, efficient code.
          </p>
        </div>

        <div className={styles.skillsContainer}>
          <div className={`${styles.skillsDisplay} ${isTransitioning ? styles.transitioning : ''}`}>
            <div className={styles.skillsContent}>
              <div className={styles.skillsText}>
                <h3 className={styles.skillsTitle}>{currentSkillSet.title}</h3>
                <p className={styles.skillsDescription}>{currentSkillSet.description}</p>
                
                <div className={styles.skillsList}>
                  {currentSkillSet.skills.map((skill, index) => (
                    <div key={index} className={styles.skillItem}>
                      <div className={styles.skillHeader}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <span className={styles.skillLevel}>{skill.level}%</span>
                      </div>
                      <div className={styles.skillBar}>
                        <div 
                          className={styles.skillProgress} 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.skillsControls}>
              <button 
                className={styles.navBtn} 
                onClick={handlePrevSkill}
                disabled={isTransitioning}
              >
                ←
              </button>
              
              <div className={styles.skillsDots}>
                {skillsData.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.dot} ${index === currentSkillIndex ? styles.activeDot : ''}`}
                    onClick={() => handleDotClick(index)}
                    disabled={isTransitioning}
                  />
                ))}
              </div>
              
              <button 
                className={styles.navBtn} 
                onClick={handleNextSkill}
                disabled={isTransitioning}
              >
                →
              </button>
            </div>

            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill}
                style={{ width: `${((currentSkillIndex + 1) / skillsData.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
