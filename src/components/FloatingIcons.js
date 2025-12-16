'use client';

import { useEffect, useRef } from 'react';
import styles from '../styles/FloatingIcons.module.css';

const icons = [
  { name: 'React', icon: '/icons/react.svg', size: 40 },
  { name: 'JavaScript', icon: '/icons/javascript.svg', size: 36 },
  { name: 'Python', icon: '/icons/python.svg', size: 38 },
  { name: 'Docker', icon: '/icons/docker.svg', size: 35 },
  { name: 'Linux', icon: '/icons/linux.svg', size: 37 },
  { name: 'Git', icon: '/icons/git.svg', size: 34 }
];

export default function FloatingIcons() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const iconElements = containerRef.current.querySelectorAll(`.${styles.icon}`);
    
    iconElements.forEach((icon, index) => {
      const duration = 15 + index * 3;
      const delay = index * 2;
      const x = Math.random() * 300;
      const y = Math.random() * 400;

      icon.style.left = `${x}px`;
      icon.style.top = `${y}px`;
      icon.style.animationDuration = `${duration}s`;
      icon.style.animationDelay = `${delay}s`;
    });
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      {icons.map((item, index) => (
        <div key={index} className={styles.icon}>
          <img src={item.icon} alt={item.name} width={item.size} height={item.size} />
        </div>
      ))}
    </div>
  );
}
