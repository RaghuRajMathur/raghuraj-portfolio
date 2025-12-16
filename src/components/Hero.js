'use client';

import { useEffect, useState } from 'react';
import { ReactTyped } from 'react-typed';
import styles from '../styles/Hero.module.css';
import AnimatedHighlight from './AnimatedHighlight';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          {/* Left Side - Text */}
          <div className={styles.textSide}>
            <h1 className={styles.title}>
              {mounted ? (
                <ReactTyped
                  strings={["Hi, I'm <span class='highlight-name'>Raghuraj</span>"]}
                  typeSpeed={50}
                  showCursor={false}
                  onComplete={() => setTypingComplete(true)}
                  contentType="html"
                />
              ) : (
                "Hi, I'm Raghuraj 👋"
              )}
            </h1>

            <p className={`${styles.description} ${typingComplete ? styles.blurFadeIn : ''}`}>
              BCA graduate from Delhi, India with hands-on experience in{' '}
              <AnimatedHighlight color="green" delay={1.5}>
                technical troubleshooting
              </AnimatedHighlight>
              , system administration, and{' '}
              <AnimatedHighlight color="blue" delay={2}>
                full-stack development
              </AnimatedHighlight>
              . Proficient in Windows/Linux environments and collaborative development tools.
            </p>
          </div>

          {/* Right Side - Photo */}
          <div className={`${styles.photoSide} ${mounted ? styles.fadeIn : ''}`}>
            <div className={styles.profilePhoto}>
              <img
                src="/profile.png"
                alt="Raghuraj Mathur"
                className={styles.profileImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
