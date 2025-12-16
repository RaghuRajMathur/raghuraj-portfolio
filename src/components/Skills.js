'use client';

import Image from 'next/image';
import styles from '../styles/Skills.module.css';

const skillsData = {
  'Programming Languages': [
    { name: 'JavaScript', icon: '/icons/javascript.svg' },
    { name: 'Python', icon: '/icons/python.svg' },
    { name: 'Java', icon: '/icons/java.svg' },
    { name: 'C++', icon: '/icons/c++.svg' },
    { name: 'C', icon: '/icons/c.svg' }
  ],
  'Frontend': [
    { name: 'HTML5', icon: '/icons/html5.svg' },
    { name: 'CSS3', icon: '/icons/css3.svg' },
    { name: 'React', icon: '/icons/react.svg' },
    { name: 'Next.js', icon: '/icons/npm.svg' },
    { name: 'Tailwind CSS', icon: '/icons/tailwindcss.svg' },
    { name: 'Bootstrap', icon: '/icons/bootstrap.svg' },
    { name: 'Sass', icon: '/icons/sass.svg' },
  ],
  'Backend': [
    { name: 'Node.js', icon: '/icons/nodejs.svg' },
    { name: 'Express', icon: '/icons/express.svg' },
    { name: 'Django', icon: '/icons/django.svg' },
    { name: 'MySQL', icon: '/icons/mysql.svg' }
  ],
  'DevOps & Tools': [
    { name: 'Git', icon: '/icons/git.svg' },
    { name: 'GitHub', icon: '/icons/github.svg' },
    { name: 'Docker', icon: '/icons/docker.svg' },
    { name: 'AWS', icon: '/icons/amazon_s3.svg' },
    { name: 'Linux', icon: '/icons/linux.svg' },
    { name: 'VS Code', icon: '/icons/vscode.svg' }
  ],
  'Cybersecurity': [
    { name: 'Burp Suite', icon: '/icons/burpsuite.svg' },
    { name: 'Metasploit', icon: '/icons/metasploit.svg' },
    { name: 'Kali Linux', icon: '/icons/kalilinuxsvg.svg' },
    { name: 'Wireshark', icon: '/icons/wireshark.svg' },
    { name: 'Nmap', icon: '/icons/nmap.svg' }
  ]
};

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <p className="section-title">Technical Arsenal</p>
        <h2 className="section-heading">Skills</h2>

        <div className={styles.categoriesGrid}>
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className={styles.category}>
              <h3 className={styles.categoryTitle}>{category}</h3>
              <div className={styles.iconsGrid}>
                {skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className={styles.iconCard}
                    title={skill.name}
                  >
                    <div className={styles.iconWrapper}>
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={48}
                        height={48}
                        className={styles.icon}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
