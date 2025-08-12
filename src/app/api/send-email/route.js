import { NextResponse } from 'next/server';
import { sendMail } from '../../../lib/sendMail';

export async function POST(request) {
  console.log('🔄 Email API called');
  
  try {
    // Get form data from request
    const { name, email, subject, message } = await request.json();
    console.log('📝 Data received:', { name, email, subject });

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('❌ Missing environment variables');
      return NextResponse.json(
        { error: 'Email configuration missing' },
        { status: 500 }
      );
    }

    // Define sender information
    const sender = {
      name: 'Portfolio Contact Form',
      address: process.env.EMAIL_USER
    };

    // Define recipient (your email where you'll receive messages)
    const recipient = [{
      name: 'RaghuRaj Mathur',
      address: 'raghuu715@gmail.com'
    }];

    // Create HTML email content
    const htmlMessage = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1e40af; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #3b82f6; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Message:</h3>
          <p style="line-height: 1.6;">${message}</p>
        </div>
        
        <div style="margin-top: 30px; padding: 15px; background-color: #eff6ff; border-radius: 6px;">
          <p style="margin: 0; color: #1d4ed8;">
            <strong>Reply to:</strong> <a href="mailto:${email}" style="color: #1d4ed8;">${email}</a>
          </p>
        </div>
        
        <hr style="margin: 30px 0;">
        <p style="color: #6b7280; font-size: 12px;">
          Sent from RaghuRaj Mathur's Portfolio Contact Form
        </p>
      </div>
    `;

    // Send the email
    const result = await sendMail({
      sender: sender,
      recipient: recipient,
      subject: `Portfolio Contact: ${subject}`,
      message: htmlMessage
    });

    // Return success response
    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        messageId: result.messageId 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('💥 Email error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error.message 
      },
      { status: 500 }
    );
  }
}
