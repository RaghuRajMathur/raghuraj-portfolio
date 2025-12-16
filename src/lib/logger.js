import DOMPurify from 'isomorphic-dompurify';

export function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  
  // Remove HTML tags and script content
  const cleaned = DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
  });
  
  return cleaned.trim();
}

export function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
