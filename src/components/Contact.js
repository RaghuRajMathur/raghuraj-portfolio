'use client';

import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Scroll animations
  const headerAnimation = useScrollAnimation({ threshold: 0.3 });
  const formAnimation = useScrollAnimation({ threshold: 0.4 });
  const infoAnimation = useScrollAnimation({ threshold: 0.5 });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={`${styles.sectionHeader} scroll-fade-up ${headerAnimation.isVisible ? 'visible' : ''}`} ref={headerAnimation.elementRef}>
          <div className={styles.badge}>
            <span>Get In Touch</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Let's Work <span className={`${styles.gradientText} pulse-text`}>Together</span>
          </h2>
          <p className={styles.sectionDescription}>
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a conversation about frontend development and technology.
          </p>
        </div>

        <div className={styles.contactContent}>
          <div className={`${styles.contactForm} scroll-fade-left ${formAnimation.isVisible ? 'visible' : ''}`} ref={formAnimation.elementRef}>
            <div className={styles.formContainer}>
              <h3>Send me a message</h3>
              <p>Fill out the form below and I'll get back to you as soon as possible.</p>
              
              {submitStatus === 'success' && (
                <div className={styles.successMessage}>
                  <span className={styles.successIcon}>✓</span>
                  <span>Thank you for your message! I'll get back to you soon.</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What's this about?"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project or opportunity..."
                    disabled={isSubmitting}
                  />
                </div>
                
                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className={styles.spinner}></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className={`${styles.contactInfo} scroll-fade-right ${infoAnimation.isVisible ? 'visible' : ''}`} ref={infoAnimation.elementRef}>
            <div className={styles.infoCard}>
              <h3>Contact Information</h3>
              <p>Feel free to reach out through any of these channels:</p>
              
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <span>📧</span>
                  </div>
                  <div className={styles.infoContent}>
                    <h4>Email</h4>
                    <p>raghuu715@gmail.com</p>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <span>📍</span>
                  </div>
                  <div className={styles.infoContent}>
                    <h4>Location</h4>
                    <p>North Delhi, Delhi, India</p>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <span>💼</span>
                  </div>
                  <div className={styles.infoContent}>
                    <h4>Availability</h4>
                    <p>Open for opportunities</p>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <span>⏰</span>
                  </div>
                  <div className={styles.infoContent}>
                    <h4>Response Time</h4>
                    <p>Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.socialCard}>
              <h3>Connect With Me</h3>
              <p>Let's connect on social media and stay in touch:</p>
              
              <div className={styles.socialLinks}>
                <a 
                  href="https://www.linkedin.com/in/raghuraj-mathur-b9417518a/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.socialLink}
                >
                  <span className={styles.socialIcon}>💼</span>
                  <div className={styles.socialContent}>
                    <span className={styles.socialName}>LinkedIn</span>
                    <span className={styles.socialHandle}>Connect professionally</span>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/RaghuRajMathur" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.socialLink}
                >
                  <span className={styles.socialIcon}>🐱</span>
                  <div className={styles.socialContent}>
                    <span className={styles.socialName}>GitHub</span>
                    <span className={styles.socialHandle}>View my repositories</span>
                  </div>
                </a>
                
                <a 
                  href="mailto:raghuu715@gmail.com" 
                  className={styles.socialLink}
                >
                  <span className={styles.socialIcon}>📧</span>
                  <div className={styles.socialContent}>
                    <span className={styles.socialName}>Email</span>
                    <span className={styles.socialHandle}>Direct contact</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
