# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js and React, featuring a cybersecurity-themed dark mode design. This project showcases my technical skills and projects while demonstrating practical knowledge of full-stack development, Docker containerization, and cloud deployment.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![Next.js](https://img.shields.io/badge/Next.js-16.0-black) ![Docker](https://img.shields.io/badge/Docker-Enabled-blue) ![AWS](https://img.shields.io/badge/AWS-EC2-orange)

## Live Demo

- **You can hire me if you like my work:** [https://raghuraj-portfolio.vercel.app](https://raghuraj-portfolio.vercel.app)

---

## About This Project

I created this portfolio website as part of my learning journey in web development and cloud technologies. The main goal was to build something practical while learning modern deployment practices like containerization and cloud hosting.

The website includes sections for my projects, skills, work experience, and a working contact form that sends emails directly to my inbox. I wanted to make it look professional while keeping a cybersecurity theme since that's what I'm interested in.

Building this taught me a lot about React components, managing state, handling forms, and especially the deployment side of things which was completely new to me. Getting Docker to work properly took some time but it was worth it.

---

## Features

- **Responsive Design** - Works on all devices from mobile to desktop
- **Dark Mode UI** - Cybersecurity-themed interface with smooth animations
- **Working Contact Form** - Sends emails using Nodemailer and Gmail SMTP
- **Security Headers** - Implemented CSP, HSTS, and XSS protection
- **Docker Ready** - Fully containerized for easy deployment
- **Cloud Deployed** - Running on AWS EC2 with Ubuntu

---

## Tech Stack

**Frontend:**
- Next.js 16.0
- React.js
- CSS Modules
- JavaScript

**Backend:**
- Node.js
- Nodemailer (Email functionality)
- Gmail SMTP Server

**DevOps & Deployment:**
- Docker & Docker Hub
- AWS EC2 (t2.micro, Ubuntu)
- Vercel (Alternative deployment)
- Git & GitHub

---

## Project Structure

```
raghuraj-portfolio/
├── .next/                          # Next.js build output (auto-generated)
├── node_modules/                   # Project dependencies (auto-generated)
├── public/                         # Static assets
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── send-email/
│   │   │       └── route.js        # API endpoint for contact form
│   │   ├── components/
│   │   │   ├── AnimatedHighlight.js    # Text highlight animation component
│   │   │   ├── BottomNav.js            # Bottom navigation bar
│   │   │   ├── Certificates.js         # Certifications display section
│   │   │   ├── ContactForm.js          # Contact form with email integration
│   │   │   ├── Education.js            # Education section
│   │   │   ├── Experience.js           # Work experience timeline
│   │   │   ├── FloatingIcons.js        # Floating icon animations
│   │   │   ├── Footer.js               # Footer component
│   │   │   ├── Hero.js                 # Landing page hero section
│   │   │   ├── Projects.js             # Projects showcase
│   │   │   ├── Skills.js               # Technical skills display
│   │   │   ├── SkillsSphere3D.js       # 3D skills sphere visualization
│   │   │   ├── SkillsSphereSection.js  # Skills sphere section wrapper
│   │   │   └── ThemeToggle.js          # Dark/Light mode toggle
│   │   ├── globals.css             # Global styles
│   │   ├── layout.js               # Root layout component
│   │   └── page.js                 # Main home page
│   ├── hooks/
│   │   └── useScrollAnimation.js   # Scroll animation hook
│   └── lib/
│       ├── logger.js               # Logging utility
│       ├── rateLimit.js            # Rate limiting for API
│       ├── sanitize.js             # Input sanitization
│       └── sendMail.js             # Email sending utility
├── styles/                         # CSS Module styles (separate)
├── .dockerignore                   # Files to ignore in Docker build
├── .env.local                      # Local environment variables
├── .eslintrc.json                  # ESLint configuration
├── .gitignore                      # Git ignore rules
├── Dockerfile                      # Docker configuration
├── jsconfig.json                   # JavaScript configuration
├── middleware.js                   # Next.js middleware
├── next.config.mjs                 # Next.js configuration
├── package-lock.json               # Dependency lock file
├── package.json                    # Project dependencies and scripts
├── postcss.config.mjs              # PostCSS configuration
├── README.md                       # Project documentation
└── vercel.json                     # Vercel deployment config
```

### Key Directories Explained

**`/src/app`** - Main application directory following Next.js App Router structure
- **`/api`** - Backend API routes for server-side logic
  - **`/send-email`** - Contact form email endpoint
- **`/components`** - Reusable React components for UI sections

**`/src/hooks`** - Custom React hooks for reusable logic
- **`useScrollAnimation.js`** - Custom scroll animation hook

**`/src/lib`** - Utility functions and helpers
- **`logger.js`** - Logging functionality
- **`rateLimit.js`** - API rate limiting protection
- **`sanitize.js`** - Input sanitization for security
- **`sendMail.js`** - Nodemailer email configuration

**`/public`** - Static assets (images, favicon, etc.) accessible from browser

**Root Configuration Files:**
- **`Dockerfile`** - Docker container setup
- **`next.config.mjs`** - Next.js settings and security headers
- **`.env.local`** - Environment variables (email credentials - not in Git)
- **`package.json`** - Project dependencies and npm scripts
- **`middleware.js`** - Next.js middleware for request handling
- **`vercel.json`** - Vercel deployment configuration

### Important Files

- **`.env.local`** - Contains sensitive email credentials (never commit to Git)
- **`route.js`** - API endpoint handling contact form submissions
- **`sendMail.js`** - Nodemailer configuration for Gmail SMTP
- **`next.config.mjs`** - Security headers (CSP, HSTS, XSS protection)
- **`rateLimit.js`** - Protects API from spam/abuse
- **`sanitize.js`** - Cleans user input to prevent injection attacks

---

## Running with Docker (Easiest Way)

If you just want to run this project without setting up the development environment, Docker is the quickest option.

### Prerequisites

Make sure you have Docker installed on your system:
- **Windows/Mac:** [Download Docker Desktop](https://www.docker.com/products/docker-desktop)
- **Linux:** Install Docker Engine from your package manager

### Step 1: Pull the Docker Image

Open your terminal and run:

```
docker pull raghurajmathur/raghuraj-portfolio:latest
```

This downloads the pre-built image from Docker Hub (about 1.25GB).

### Step 2: Run the Container

```
docker run -d -p 3000:3000 --name portfolio raghurajmathur/raghuraj-portfolio:latest
```

**What this does:**
- `-d` runs it in the background
- `-p 3000:3000` maps port 3000 from container to your machine
- `--name portfolio` gives it a friendly name
- The last part is the image name

### Step 3: Open in Browser

Once it starts (takes about 10-15 seconds), open your browser and go to:

```
http://localhost:3000
```

You should see the portfolio website running!

### Managing the Container

**To stop the container:**
```
docker stop portfolio
```

**To start it again:**
```
docker start portfolio
```

**To remove the container:**
```
docker rm portfolio
```

**To view logs (if something goes wrong):**
```
docker logs portfolio
```

---

##  Running Locally (For Development)

If you want to modify the code or contribute, here's how to set it up on your machine.

### Prerequisites

- Node.js 18 or higher ([Download here](https://nodejs.org/))
- npm (comes with Node.js)
- Git

### Step 1: Clone the Repository

```
git clone https://github.com/RaghuRajMathur/raghuraj-portfolio.git
cd raghuraj-portfolio
```

### Step 2: Install Dependencies

```
npm install
```

This will download all the required packages (might take a few minutes).

### Step 3: Set Up Environment Variables

Create a file named `.env.local` in the root directory:

```
touch .env.local  # On Windows use: type nul > .env.local
```

Add your email credentials:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```

**Important:** For Gmail, you need an App Password, not your regular password.
- Go to [Google Account App Passwords](https://myaccount.google.com/apppasswords)
- Create a new app password for "Mail"
- Use that 16-character code

### Step 4: Run Development Server

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The page will automatically reload when you make changes to the code.

### Step 5: Build for Production

To create an optimized production build:

```
npm run build
npm start
```

---

## Security Features

I implemented several security measures to make this production-ready:

- **Content Security Policy (CSP)** - Prevents XSS attacks by controlling what resources can load
- **HTTP Strict Transport Security (HSTS)** - Forces HTTPS connections
- **X-Frame-Options** - Prevents clickjacking attacks
- **X-Content-Type-Options** - Stops MIME type sniffing
- **Referrer Policy** - Controls referrer information sent with requests
- **Environment Variables** - Email credentials stored securely, not in code

---

##  Deployment

### Docker Deployment (What I Used)

The project is containerized and deployed on AWS EC2:

1. Built the Docker image locally
2. Pushed to Docker Hub
3. Pulled on EC2 Ubuntu instance
4. Configured security groups (SSH on port 22, HTTP on port 80)
5. Set up environment variables on the server
6. Ran the container with proper port mapping

### Vercel Deployment (Alternative)

I also deployed on Vercel for comparison:

```
npm install -g vercel
vercel
```

Just follow the prompts and it deploys automatically.

---

##  Issues I Faced & Fixed

While building this, I ran into several problems. Here's what happened and how I fixed them:

### 1. CSS Not Loading in Production
**Problem:** Styles worked in development but disappeared in production build.  
**Solution:** Had to fix the `next.config.mjs` file - removed `output: 'standalone'` and `swcMinify` options that were causing conflicts.

### 2. Email Functionality Not Working
**Problem:** Contact form wasn't sending emails.  
**Solution:** Realized I needed to use Gmail App Passwords instead of regular password, and had to properly set up environment variables in Docker.

### 3. Docker Container Not Starting
**Problem:** Container would start but website wasn't accessible.  
**Solution:** Had to set `HOSTNAME="0.0.0.0"` environment variable so the app listens on all network interfaces, not just localhost.

### 4. Security Headers Breaking Features
**Problem:** Content Security Policy was too strict and blocking necessary resources.  
**Solution:** Had to carefully configure CSP to allow required scripts and styles while maintaining security.

---

##  What I Learned

This project taught me way more than I expected:

- How to structure a proper React/Next.js application
- Managing state and props between components
- Working with APIs and handling forms
- Docker containerization from scratch
- AWS EC2 setup and security group configuration
- Linux server management (Ubuntu)
- Security headers and why they matter
- CI/CD concepts using Docker Hub
- Debugging production issues (very different from development!)
- Environment variable management
- SSH and remote server access

The deployment part was the hardest but also the most rewarding. Getting everything working on a real server felt like a big achievement.

---

##  Future Improvements

Things I want to add or improve:

- [ ] Add a blog section
- [ ] Implement proper HTTPS with SSL certificate
- [ ] Add Google Analytics for tracking visitors
- [ ] Create an admin panel to update content without code changes
- [ ] Add dark/light mode toggle
- [ ] Improve accessibility (ARIA labels, keyboard navigation)
- [ ] Add more animations and transitions
- [ ] Set up automated testing
- [ ] Add a projects filter/search feature
- [ ] Optimize images for faster loading

---

##  Contributing

If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request. I'm still learning so any feedback is appreciated!

---

##  License

This project is open source .

---

##  Contact

Feel free to reach out if you have questions or want to connect:

- **Email:** raghuu715@gmail.com
- **LinkedIn:** [Raghuraj Mathur](https://www.linkedin.com/in/raghuraj-mathur-b9417518a/)
- **GitHub:** [@RaghuRajMathur](https://github.com/RaghuRajMathur)
- **TryHackMe:** [raghuu715](https://tryhackme.com/p/raghuu715)

---

##  Acknowledgments

- Thanks to all the online tutorials and documentation that helped me build this
- Special thanks to the Next.js and React communities for their helpful resources
- Stack Overflow for helping me debug countless issues
- My college project guide for the support and feedback

---

**If you found this project helpful or interesting, please consider giving it a star!**

---

*Built by Raghuraj Mathur | Last Updated: December 2024*
