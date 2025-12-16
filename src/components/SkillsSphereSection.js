'use client';

import { useState, useEffect } from 'react';
import SkillsSphere3D from './SkillsSphere3D';
import styles from '../styles/SkillsSphereSection.module.css';

export default function SkillsSphereSection() {
  const [mounted, setMounted] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="skills-sphere" className={styles.skillsSphereWrapper}>
      <div className={styles.sphereContainer}>
        <div className={styles.leftColumn}>
          {mounted && <SkillsSphere3D onHover={setHoveredSkill} />}
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.displayBox}>
            {hoveredSkill ? (
              <div className={styles.skillInfo}>
                <div className={styles.skillLabel}>SELECTED SKILL</div>
                <h2 className={styles.skillName}>{hoveredSkill}</h2>
                <div className={styles.skillUnderline}></div>
              </div>
            ) : (
              <div className={styles.placeholderInfo}>
                <div className={styles.placeholderIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </div>
                <p className={styles.placeholderText}>Hover over a skill</p>
                <p className={styles.placeholderSubtext}>to see details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
