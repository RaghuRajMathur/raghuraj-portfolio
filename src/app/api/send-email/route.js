import { NextResponse } from 'next/server';
import { sendMail } from '../../../lib/sendMail';

// Simple in-memory rate limiting (for basic protection without Redis)
const rateLimit = new Map();

function checkRateLimit(ip) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5;

  if (!rateLimit.has(ip)) {
    rateLimit.set(ip, []);
  }

  const requests = rateLimit.get(ip).filter(time => now - time < windowMs);
  
  if (requests.length >= maxRequests) {
    const oldestRequest = requests[0];
    const resetTime = oldestRequest + windowMs;
    return { 
      allowed: false, 
      remaining: 0,
      reset: resetTime,
      limit: maxRequests
    };
  }

  requests.push(now);
  rateLimit.set(ip, requests);

  return { 
    allowed: true, 
    remaining: maxRequests - requests.length,
    reset: now + windowMs,
    limit: maxRequests
  };
}

function getClientIp(request) {
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

function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  
  // Remove HTML tags and potentially dangerous characters
  return input
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/[<>'"]/g, '') // Remove dangerous characters
    .trim();
}

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

export async function POST(request) {
  console.log('🔄 Email API called');
  
  try {
    // Get client IP
    const clientIp = getClientIp(request);
    console.log('📍 Request from IP:', clientIp);

    // Check rate limit
    const rateLimitResult = checkRateLimit(clientIp);
    
    if (!rateLimitResult.allowed) {
      console.warn('⚠️ Rate limit exceeded for IP:', clientIp);
      return NextResponse.json(
        { 
          error: 'Too many requests. Please try again later.',
          resetAt: new Date(rateLimitResult.reset).toISOString(),
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': rateLimitResult.limit.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': rateLimitResult.reset.toString(),
            'Retry-After': Math.ceil((rateLimitResult.reset - Date.now()) / 1000).toString(),
          },
        }
      );
    }

    // Get form data from request
    const body = await request.json();
    const { name, email, subject, message } = body;
    
    console.log('📝 Data received:', { 
      name: name?.substring(0, 20), 
      email, 
      subject: subject?.substring(0, 30) 
    });

    // Validate required fields
    if (!name || !email || !subject || !message) {
      console.error('❌ Missing required fields');
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!validateEmail(email)) {
      console.error('❌ Invalid email format:', email);
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Length validation
    if (name.length > 100) {
      return NextResponse.json(
        { error: 'Name is too long (max 100 characters)' },
        { status: 400 }
      );
    }

    if (email.length > 100) {
      return NextResponse.json(
        { error: 'Email is too long (max 100 characters)' },
        { status: 400 }
      );
    }

    if (subject.length > 200) {
      return NextResponse.json(
        { error: 'Subject is too long (max 200 characters)' },
        { status: 400 }
      );
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { error: 'Message is too long (max 2000 characters)' },
        { status: 400 }
      );
    }

    // Check for spam patterns
    const spamPatterns = [
      /viagra/i,
      /cialis/i,
      /casino/i,
      /lottery/i,
      /\bcrypto\b.*\bmoney\b/i,
      /click.*here.*now/i,
    ];

    const fullText = `${name} ${email} ${subject} ${message}`.toLowerCase();
    const isSpam = spamPatterns.some(pattern => pattern.test(fullText));

    if (isSpam) {
      console.warn('⚠️ Potential spam detected from:', clientIp);
      return NextResponse.json(
        { error: 'Message appears to be spam' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      subject: sanitizeInput(subject),
      message: sanitizeInput(message),
    };

    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('❌ Missing environment variables');
      return NextResponse.json(
        { error: 'Email configuration error' },
        { status: 500 }
      );
    }

    // Define sender information
    const sender = {
      name: 'Portfolio Contact Form',
      address: process.env.EMAIL_USER
    };

    // Define recipient
    const recipient = [{
      name: 'RaghuRaj Mathur',
      address: 'raghuu715@gmail.com'
    }];

    // Create HTML email content with sanitized data
    const htmlMessage = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1e40af; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
          <p><strong>Name:</strong> ${sanitizedData.name}</p>
          <p><strong>Email:</strong> ${sanitizedData.email}</p>
          <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #3b82f6; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Message:</h3>
          <p style="line-height: 1.6; white-space: pre-wrap;">${sanitizedData.message}</p>
        </div>
        
        <div style="margin-top: 30px; padding: 15px; background-color: #eff6ff; border-radius: 6px;">
          <p style="margin: 0; color: #1d4ed8;">
            <strong>Reply to:</strong> <a href="mailto:${sanitizedData.email}" style="color: #1d4ed8;">${sanitizedData.email}</a>
          </p>
        </div>
        
        <hr style="margin: 30px 0;">
        
        <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px;">
          <p style="color: #6b7280; font-size: 12px; margin: 5px 0;">
            <strong>Request Info:</strong>
          </p>
          <p style="color: #6b7280; font-size: 12px; margin: 5px 0;">
            IP Address: ${clientIp}
          </p>
          <p style="color: #6b7280; font-size: 12px; margin: 5px 0;">
            Timestamp: ${new Date().toISOString()}
          </p>
        </div>
        
        <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
          Sent from RaghuRaj Mathur's Portfolio Contact Form
        </p>
      </div>
    `;

    console.log('📧 Starting email send process...');

    // Send the email
    const result = await sendMail({
      sender: sender,
      recipient: recipient,
      subject: `Portfolio Contact: ${sanitizedData.subject}`,
      message: htmlMessage
    });

    console.log('✅ Email sent successfully:', result.messageId);

    // Return success response with rate limit headers
    return NextResponse.json(
      { 
        success: true,
        message: 'Email sent successfully',
        messageId: result.messageId 
      },
      { 
        status: 200,
        headers: {
          'X-RateLimit-Limit': rateLimitResult.limit.toString(),
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
          'X-RateLimit-Reset': rateLimitResult.reset.toString(),
        },
      }
    );

  } catch (error) {
    console.error('💥 Email error:', error);
    
    // Don't expose internal error details to client
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again later.',
      },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
