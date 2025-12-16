'use client';

import { useState } from 'react';
import styles from '../styles/ContactForm.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  // Validation functions
  const validateName = (name) => {
    if (!name.trim()) {
      return 'Name is required';
    }
    if (name.trim().length < 2) {
      return 'Name must be at least 2 characters';
    }
    if (name.length > 100) {
      return 'Name must be less than 100 characters';
    }
    if (!/^[a-zA-Z\s'-]+$/.test(name)) {
      return 'Name can only contain letters, spaces, hyphens, and apostrophes';
    }
    return '';
  };

  const validateEmail = (email) => {
    if (!email.trim()) {
      return 'Email is required';
    }
    if (email.length > 100) {
      return 'Email must be less than 100 characters';
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const validateSubject = (subject) => {
    if (!subject.trim()) {
      return 'Subject is required';
    }
    if (subject.trim().length < 3) {
      return 'Subject must be at least 3 characters';
    }
    if (subject.length > 200) {
      return 'Subject must be less than 200 characters';
    }
    return '';
  };

  const validateMessage = (message) => {
    if (!message.trim()) {
      return 'Message is required';
    }
    if (message.trim().length < 10) {
      return 'Message must be at least 10 characters';
    }
    if (message.length > 2000) {
      return 'Message must be less than 2000 characters';
    }
    return '';
  };

  // Handle input change with validation
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate on change if field was touched
    if (touched[name]) {
      let error = '';
      switch (name) {
        case 'name':
          error = validateName(value);
          break;
        case 'email':
          error = validateEmail(value);
          break;
        case 'subject':
          error = validateSubject(value);
          break;
        case 'message':
          error = validateMessage(value);
          break;
        default:
          break;
      }
      setErrors({
        ...errors,
        [name]: error,
      });
    }
  };

  // Handle blur to mark field as touched
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });

    // Validate on blur
    let error = '';
    switch (name) {
      case 'name':
        error = validateName(value);
        break;
      case 'email':
        error = validateEmail(value);
        break;
      case 'subject':
        error = validateSubject(value);
        break;
      case 'message':
        error = validateMessage(value);
        break;
      default:
        break;
    }
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  // Validate entire form
  const validateForm = () => {
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      subject: validateSubject(formData.subject),
      message: validateMessage(formData.message),
    };

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    // Return true if no errors
    return !Object.values(newErrors).some((error) => error !== '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      setSubmitStatus('validation-error');
      setTimeout(() => setSubmitStatus(''), 5000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      console.log('Submitting form data:', formData);

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorData = await response.json();
        
        if (response.status === 429) {
          throw new Error('Too many requests. Please try again later.');
        }
        
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Response data:', result);

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setErrors({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setTouched({
        name: false,
        email: false,
        subject: false,
        message: false,
      });

      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }

    // Clear status after 5 seconds
    setTimeout(() => {
      setSubmitStatus('');
    }, 5000);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Let's Work{' '}
            <span className={`${styles.gradientText} pulse-text`}>Together</span>
          </h2>
          <p className={styles.sectionDescription}>
            I'm always open to discussing new opportunities and interesting projects.
          </p>
        </div>

        <div className={styles.contactContent}>
          {/* Contact Form */}
          <div className={styles.contactForm}>
            <div className={styles.formContainer}>
              <h3>Send me a message</h3>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className={styles.successMessage}>
                  <span className={styles.successIcon}>✓</span>
                  <span>
                    Thank you! Your message has been sent successfully. I'll get back to you soon.
                  </span>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className={styles.errorMessage}>
                  <span className={styles.errorIcon}>✕</span>
                  <span>
                    Sorry, there was an error sending your message. Please try again or contact me directly.
                  </span>
                </div>
              )}

              {/* Validation Error Message */}
              {submitStatus === 'validation-error' && (
                <div className={styles.errorMessage}>
                  <span className={styles.errorIcon}>⚠</span>
                  <span>
                    Please fix the errors in the form before submitting.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                {/* Name and Email Row */}
                <div className={styles.formRow}>
                  {/* Name Field */}
                  <div className={styles.inputGroup}>
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="Your name"
                      disabled={isSubmitting}
                      className={`${styles.formInput} ${
                        errors.name && touched.name ? styles.inputError : ''
                      }`}
                      maxLength={100}
                    />
                    {errors.name && touched.name && (
                      <span className={styles.fieldError}>{errors.name}</span>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className={styles.inputGroup}>
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="your.email@example.com"
                      disabled={isSubmitting}
                      className={`${styles.formInput} ${
                        errors.email && touched.email ? styles.inputError : ''
                      }`}
                      maxLength={100}
                    />
                    {errors.email && touched.email && (
                      <span className={styles.fieldError}>{errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div className={styles.inputGroup}>
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="What's this about?"
                    disabled={isSubmitting}
                    className={`${styles.formInput} ${
                      errors.subject && touched.subject ? styles.inputError : ''
                    }`}
                    maxLength={200}
                  />
                  {errors.subject && touched.subject && (
                    <span className={styles.fieldError}>{errors.subject}</span>
                  )}
                </div>

                {/* Message Field */}
                <div className={styles.inputGroup}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    rows="6"
                    placeholder="Tell me about your project..."
                    disabled={isSubmitting}
                    className={`${styles.formTextarea} ${
                      errors.message && touched.message ? styles.inputError : ''
                    }`}
                    maxLength={2000}
                  />
                  <div className={styles.characterCount}>
                    {formData.message.length} / 2000
                  </div>
                  {errors.message && touched.message && (
                    <span className={styles.fieldError}>{errors.message}</span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={isSubmitting}
                >
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

          {/* Contact Info & Social Links (Keep existing code) */}
          <div className={styles.contactInfo}>
            <div className={styles.socialCard}>
              <h3>Connect With Me</h3>
              <div className={styles.socialLinks}>
                <a
                  href="https://www.linkedin.com/in/raghuraj-mathur-b9417518a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <div className={styles.socialIcon}>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div className={styles.socialContent}>
                    <span className={styles.socialName}>LinkedIn</span>
                  </div>
                </a>

                <a
                  href="https://github.com/RaghuRajMathur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <div className={styles.socialIcon}>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div className={styles.socialContent}>
                    <span className={styles.socialName}>GitHub</span>
                  </div>
                </a>

                <a href="mailto:raghuu715@gmail.com" className={styles.socialLink}>
                  <div className={styles.socialIcon}>
                    <span>📧</span>
                  </div>
                  <div className={styles.socialContent}>
                    <span className={styles.socialName}>Email</span>
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
