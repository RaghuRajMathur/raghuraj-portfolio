import nodemailer from 'nodemailer';

// ✅ CORRECT - Use createTransport (not createTransporter)
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Email sending function
export const sendMail = async (emailData) => {
  const { sender, recipient, subject, message } = emailData;
  
  try {
    // Verify connection first
    await transporter.verify();
    
    // Send email
    const result = await transporter.sendMail({
      from: sender,
      to: recipient,
      subject: subject,
      html: message,
      text: message,
    });
    
    console.log('Email sent successfully:', result.messageId);
    return result;
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
};
