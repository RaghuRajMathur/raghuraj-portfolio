'use client';

import { useState, useEffect } from 'react';
import SkillsSphere3D from './SkillsSphere3D';
import styles from '../styles/SkillsSphereSection.module.css';

export default function SkillsSphereSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className={styles.sphereSection}>
      <div className={styles.container}>
        <div className={styles.sphereWrapper}>
          {mounted && <SkillsSphere3D />}
        </div>
      </div>
    </section>
  );
}
