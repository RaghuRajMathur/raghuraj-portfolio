'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '../styles/AnimatedHighlight.module.css';

export default function AnimatedHighlight({ children, color = 'yellow', delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <span 
      ref={elementRef}
      className={`${styles.highlight} ${styles[color]} ${isVisible ? styles.animate : ''}`}
      style={{ '--delay': `${delay}s` }}
    >
      {children}
      <svg className={styles.highlightSvg} viewBox="0 0 300 20" preserveAspectRatio="none">
        <path
          d="M2,10 Q50,5 100,12 T200,8 T300,10"
          className={styles.highlightPath}
        />
      </svg>
    </span>
  );
}
