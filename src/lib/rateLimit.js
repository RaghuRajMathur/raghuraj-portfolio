import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Initialize Redis (use environment variables)
const redis = Redis.fromEnv();

// Create rate limiter - 5 requests per 15 minutes per IP
export const contactFormLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(5, '15 m'),
  analytics: true,
  prefix: 'ratelimit:contact',
});

// Helper function to get client IP
export function getClientIp(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIp) {
    return realIp.trim();
  }
  
  return '127.0.0.1';
}
