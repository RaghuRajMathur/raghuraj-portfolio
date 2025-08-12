Based on your portfolio project, here's a professional README.md file:

# RaghuRaj Mathur - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, showcasing my frontend development skills and professional experience. Features interactive animations, contact form functionality, and optimized performance.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [API Routes](#api-routes)
- [Deployment](#deployment)
- [Contact](#contact)

## Overview

This portfolio website serves as a comprehensive showcase of my technical abilities, professional experience, and completed projects. Built with modern web technologies, it demonstrates proficiency in frontend development, responsive design, and full-stack integration.

**Live Website:** [https://raghurajmathur-portfolio.vercel.app/](https://raghurajmathur-portfolio.vercel.app/)

## Features

### Core Functionality
- **Responsive Design**: Mobile-first approach ensuring optimal viewing across all devices
- **Interactive Animations**: Smooth scroll animations and particle background effects
- **Dynamic Content**: Real-time typing animation and interactive project showcase
- **Contact Form**: Functional email integration with Nodemailer and Gmail SMTP
- **Performance Optimized**: Next.js Image optimization and modern build techniques

### Sections
- **Hero Section**: Introduction with animated typing effect and professional summary
- **About**: Detailed background, education, and professional experience
- **Skills**: Interactive skills showcase with proficiency levels
- **Projects**: Featured project gallery with live demos and source code links
- **Experience**: Professional internships and leadership roles
- **Contact**: Functional contact form with social media links

## Technologies Used

### Frontend
- **Next.js 14**: React framework with App Router
- **React 18**: Component-based UI development
- **CSS Modules**: Scoped styling with custom properties
- **TypeScript**: Type-safe development (partial implementation)

### Backend & Integration
- **Nodemailer**: Email functionality for contact form
- **Gmail SMTP**: Email service integration
- **API Routes**: Next.js serverless API endpoints

### Development Tools
- **ESLint**: Code linting and quality assurance
- **Git**: Version control
- **Vercel**: Deployment platform

### Libraries & Packages
- **@tsparticles/react**: Interactive particle background
- **@tsparticles/slim**: Optimized particle effects

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn package manager
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/RaghuRajMathur/raghuraj-portfolio.git
cd raghuraj-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

4. Configure environment variables (see [Environment Variables](#environment-variables))

5. Run the development server
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors automatically
```

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── send-email/
│   │       └── route.js        # Email API endpoint
│   ├── globals.css             # Global styles
│   ├── layout.js               # Root layout component
│   └── page.js                 # Main page component
├── components/
│   ├── About.js                # About section component
│   ├── Contact.js              # Contact form component
│   ├── Experience.js           # Experience section component
│   ├── Footer.js               # Footer component
│   ├── Header.js               # Navigation header component
│   ├── Hero.js                 # Hero section component
│   ├── ParticlesBackground.js  # Particle effects component
│   ├── Projects.js             # Projects showcase component
│   └── Skills.js               # Skills section component
├── hooks/
│   └── useScrollAnimation.js   # Custom scroll animation hook
├── lib/
│   └── sendMail.js             # Email utility functions
└── styles/
    ├── About.module.css        # About section styles
    ├── Contact.module.css      # Contact form styles
    ├── Experience.module.css   # Experience section styles
    ├── Footer.module.css       # Footer styles
    ├── Header.module.css       # Header styles
    ├── Hero.module.css         # Hero section styles
    ├── Projects.module.css     # Projects section styles
    └── Skills.module.css       # Skills section styles
public/
├── macroforge.png              # MacroForge project screenshot
├── portfolio.png               # Portfolio project screenshot
└── resume.pdf                  # Resume file for download
```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Gmail SMTP Configuration
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-google-app-password
```

### Setting up Gmail App Password:

1. Enable 2-Step Verification on your Google Account
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Select "Mail" and "Other (Custom name)"
4. Enter "Portfolio Contact Form" as the name
5. Copy the 16-character password (no spaces)
6. Use this password as EMAIL_PASS

## API Routes

### POST /api/send-email

Handles contact form submissions and sends emails via Gmail SMTP.

**Request Body:**
```json
{
  "name": "string",
  "email": "string", 
  "subject": "string",
  "message": "string"
}
```

**Response:**
```json
{
  "message": "Email sent successfully",
  "messageId": "string"
}
```

**Error Response:**
```json
{
  "error": "Error message",
  "details": "Detailed error information"
}
```

## Deployment

### Vercel Deployment

1. Push your code to a Git repository
2. Connect your repository to [Vercel](https://vercel.com)
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on push to main branch

### Environment Variables in Production

Set the following environment variables in your deployment platform:

- `EMAIL_USER`: Your Gmail address
- `EMAIL_PASS`: Your Google App Password

### Build Commands

```bash
# Build command
npm run build

# Start command  
npm start

# Development command
npm run dev
```

## Performance Optimizations

- **Next.js Image Component**: Automatic image optimization and lazy loading
- **CSS Modules**: Scoped styles preventing conflicts
- **Particle Background**: Optimized with tsparticles-slim for better performance
- **API Routes**: Serverless functions for efficient email handling
- **Static Generation**: Pre-rendered pages for faster loading

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a personal portfolio project. However, if you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**RaghuRaj Mathur**
- Email: raghuu715@gmail.com
- LinkedIn: [linkedin.com/in/raghuraj-mathur-b9417518a](https://www.linkedin.com/in/raghuraj-mathur-b9417518a/)
- GitHub: [github.com/RaghuRajMathur](https://github.com/RaghuRajMathur)
- Portfolio: [https://raghurajmathur-portfolio.vercel.app/](https://raghurajmathur-portfolio.vercel.app/)

***

**Education:** BCA Graduate (CGPA: 8.2)  
**Location:** North Delhi, India  
**Status:** Available for frontend development opportunities