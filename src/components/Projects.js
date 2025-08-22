"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Projects.module.css";

const projectsData = [
  {
    id: "macroforge",
    title: "MacroForge – Professional Macro Calculator",
    description:
      "I built MacroForge to solve a real problem I experienced - finding accurate nutrition guidance without expensive apps. This Next.js web app calculates personalized macro targets, creates custom workout plans, and generates downloadable reports. The focus was on making complex nutritional science simple and accessible.",
    image: "/macroforge.png",
    tech: [
      "Next.js 14",
      "React",
      "JavaScript",
      "CSS3",
      "Recharts",
      "PDF Generation",
    ],
    features: [
      "Clean, responsive interface built with Next.js",
      "PDF reports users can save and share",
      "Interactive charts that make data easy to understand",
      "Works perfectly on mobile - tested on my own phone daily",
    ],
    liveUrl: "https://macro-forge-calculator.vercel.app/",
    githubUrl: "https://github.com/RaghuRajMathur/MacroForge-calculator",
    category: "Full Stack",
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    description:
      "My portfolio needed to represent who I am as a developer - someone who cares about clean code, great design, and user experience. Built with Next.js and modern web standards, it showcases my projects with smooth animations and responsive design that works beautifully everywhere.",
    image: "/portfolio.png",
    tech: [
      "Next.js",
      "React",
      "CSS Modules",
      "JavaScript",
      "Scroll Animations",
    ],
    features: [
      "Mobile-first design that looks great on any device",
      "Smooth scroll animations that feel natural, not gimmicky",
      "Fast loading with optimized images and performance",
      "Clean, professional design that lets my work shine",
      "SEO optimized so people can actually find it",
      "Contact form that works - messages come straight to me",
    ],
    liveUrl: "https://raghurajmathur-portfolio.vercel.app/",
    githubUrl: "https://github.com/RaghuRajMathur/raghuraj-portfolio",
    category: "Frontend",
    impact:
      "Professional showcase that effectively represents my skills and personality",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState("macroforge");
  const [filter] = useState("all");

  const currentProject = projectsData.find((p) => p.id === activeProject);
  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter(
          (project) => project.category.toLowerCase() === filter
        );

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.badge}>
            <span>My Portfolio</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Featured{" "}
            <span className={`${styles.gradientText} pulse-text`}>
              Projects
            </span>
          </h2>
          <p className={styles.sectionDescription}>
            A showcase of my recent projects that demonstrate my skills in
            frontend development, problem-solving, and creating impactful
            digital solutions.
          </p>
        </div>

        <div className={styles.projectsContainer}>
          {/* Project Navigation */}
          <div className={styles.projectsNav}>
            {filteredProjects.map((project, index) => (
              <button
                key={project.id}
                className={`${styles.projectNavBtn} ${
                  activeProject === project.id ? styles.active : ""
                }`}
                onClick={() => setActiveProject(project.id)}
              >
                <span className={styles.projectNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className={styles.projectNavContent}>
                  <span className={styles.projectNavTitle}>
                    {project.title}
                  </span>
                  <span className={styles.projectNavCategory}>
                    {project.category}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Project Display */}
          <div className={styles.projectDisplay}>
            <div className={styles.projectContent}>
              <div className={styles.projectInfo}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectTitle}>
                    {currentProject.title}
                  </h3>
                  <span className={styles.projectCategory}>
                    {currentProject.category}
                  </span>
                </div>
                <p className={styles.projectDescription}>
                  {currentProject.description}
                </p>
                <div className={styles.projectFeatures}>
                  <h4>Key Features :</h4>
                  <ul>
                    {currentProject.features.map((feature, index) => (
                      <li key={index}>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.projectActions}>
                  {currentProject.liveUrl ? (
                    <a
                      href={currentProject.liveUrl}
                      className={styles.primaryBtn}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live Demo
                    </a>
                  ) : (
                    <span className={styles.comingSoon}>Live Demo</span>
                  )}
                  <a
                    href={currentProject.githubUrl}
                    className={styles.secondaryBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Source Code
                  </a>
                </div>
              </div>

              <div className={styles.projectVisual}>
                <div className={styles.projectImageContainer}>
                  {/* ✅ FIXED: Display image for any project that has an image */}
                  {currentProject.image ? (
                    <Image
                      src={currentProject.image}
                      alt={`${currentProject.title} Screenshot`}
                      fill
                      style={{ objectFit: "cover" }}
                      className={styles.projectImage}
                    />
                  ) : (
                    <div className={styles.projectImagePlaceholder}>
                      <span>Project Screenshot</span>
                      <p>{currentProject.title}</p>
                    </div>
                  )}
                </div>

                {/* Technologies section below the image */}
                <div className={styles.projectTechSection}>
                  <h4 className={styles.techTitle}>Technologies Used:</h4>
                  <div className={styles.projectTech}>
                    {currentProject.tech.map((tech, index) => (
                      <span key={index} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
