'use client';

import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from '../styles/Projects.module.css';

const projectsData = [
  {
    id: 'gym-management',
    title: 'Gym Management System',
    description: 'A comprehensive gym management system built with modern web technologies to handle memberships, trainers, and facility management with real-time analytics.',
    image: '/project1.png',
    tech: ['React', 'Node.js', 'MongoDB', 'CSS3', 'Express'],
    features: [
      'Member registration and management system',
      'Trainer scheduling and assignment',
      'Payment processing integration',
      'Real-time dashboard analytics',
      'Equipment maintenance tracking',
      'Mobile-responsive design'
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/RaghuRajMathur',
    category: 'Full Stack'
  },
  {
    id: 'pinbox-dashboard',
    title: 'Pinbox - Team Dashboard',
    description: 'An intuitive team management dashboard designed to streamline project coordination and enhance team collaboration with modern UI/UX principles.',
    image: '/project2.png',
    tech: ['Next.js', 'React', 'CSS Modules', 'JavaScript', 'Chart.js'],
    features: [
      'Team project management interface',
      'Task assignment and tracking system',
      'Real-time collaboration tools',
      'Performance analytics dashboard',
      'File sharing and documentation',
      'Notification and alert system'
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/RaghuRajMathur',
    category: 'Frontend'
  },
  {
    id: 'stock-analysis',
    title: 'Stock Data Analysis Platform',
    description: 'A comprehensive stock market analysis application developed during internship at Hackveda Limited, featuring advanced data processing and visualization.',
    image: '/project3.png',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Chart.js', 'REST API'],
    features: [
      'Real-time stock data processing',
      'Technical analysis algorithms implementation',
      'Interactive data visualization charts',
      'Portfolio performance tracking',
      'Risk assessment tools',
      'Market trend analysis'
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/RaghuRajMathur',
    category: 'Backend'
  }
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState('gym-management');
  const [filter, setFilter] = useState('all');

  // Scroll animations
  const headerAnimation = useScrollAnimation({ threshold: 0.3 });
  const projectsAnimation = useScrollAnimation({ threshold: 0.4 });

  const currentProject = projectsData.find(p => p.id === activeProject);
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category.toLowerCase() === filter);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={`${styles.sectionHeader} scroll-fade-up ${headerAnimation.isVisible ? 'visible' : ''}`} ref={headerAnimation.elementRef}>
          <div className={styles.badge}>
            <span>My Portfolio</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Featured <span className={`${styles.gradientText} pulse-text`}>Projects</span>
          </h2>
          <p className={styles.sectionDescription}>
            A showcase of my recent work and projects that demonstrate my skills 
            in frontend development, full-stack solutions, and problem-solving.
          </p>
        </div>

        <div className={`${styles.projectsContainer} scroll-fade-up ${projectsAnimation.isVisible ? 'visible' : ''}`} ref={projectsAnimation.elementRef}>
          {/* Project Filter */}
          <div className={styles.projectFilter}>
            <button 
              className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={`${styles.filterBtn} ${filter === 'frontend' ? styles.active : ''}`}
              onClick={() => setFilter('frontend')}
            >
              Frontend
            </button>
            <button 
              className={`${styles.filterBtn} ${filter === 'full stack' ? styles.active : ''}`}
              onClick={() => setFilter('full stack')}
            >
              Full Stack
            </button>
            <button 
              className={`${styles.filterBtn} ${filter === 'backend' ? styles.active : ''}`}
              onClick={() => setFilter('backend')}
            >
              Backend
            </button>
          </div>

          {/* Project Navigation */}
          <div className={styles.projectsNav}>
            {filteredProjects.map((project, index) => (
              <button
                key={project.id}
                className={`${styles.projectNavBtn} ${activeProject === project.id ? styles.active : ''}`}
                onClick={() => setActiveProject(project.id)}
              >
                <span className={styles.projectNumber}>{String(index + 1).padStart(2, '0')}</span>
                <div className={styles.projectNavContent}>
                  <span className={styles.projectNavTitle}>{project.title}</span>
                  <span className={styles.projectNavCategory}>{project.category}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Project Display */}
          <div className={styles.projectDisplay}>
            <div className={styles.projectContent}>
              <div className={styles.projectVisual}>
                <div className={styles.projectImageContainer}>
                  <div className={styles.projectImagePlaceholder}>
                    <span>Project Screenshot</span>
                    <p>{currentProject.title}</p>
                  </div>
                  <div className={styles.projectOverlay}>
                    <div className={styles.projectTech}>
                      {currentProject.tech.map((tech, index) => (
                        <span key={index} className={styles.techBadge}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.projectInfo}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectTitle}>{currentProject.title}</h3>
                  <span className={styles.projectCategory}>{currentProject.category}</span>
                </div>
                <p className={styles.projectDescription}>{currentProject.description}</p>
                
                <div className={styles.projectFeatures}>
                  <h4>Key Features & Achievements:</h4>
                  <ul>
                    {currentProject.features.map((feature, index) => (
                      <li key={index}>
                        <span className={styles.checkIcon}>✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.projectActions}>
                  {currentProject.liveUrl ? (
                    <a href={currentProject.liveUrl} className={styles.primaryBtn} target="_blank" rel="noopener noreferrer">
                      View Live Demo
                    </a>
                  ) : (
                    <span className={styles.comingSoon}>Live Demo Coming Soon</span>
                  )}
                  <a href={currentProject.githubUrl} className={styles.secondaryBtn} target="_blank" rel="noopener noreferrer">
                    View Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
