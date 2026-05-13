import React from "react";
import { FaProjectDiagram, FaCalendarCheck, FaUserCheck, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Card from "../UI/Card";
import "./Projects.css";

const Projects = () => {
    const projects = [
        {
            title: "Weekoff Management System",
            description: "SP-awarded production system serving 2,000+ Kanyakumari District police officers.",
            icon: <FaCalendarCheck />,
            features: [
                "Web app (Next.js, Express.js) deployed via CI/CD on Netlify and Render, handling 2,000+ daily requests.",
                "Play Store mobile app (React Native), built by a 3-member team.",
                "Implemented JWT authentication for secure, stateless session management.",
                "Real-time status updates and dashboards for officers and inspectors."
            ],
            githubLink: "https://github.com/HARISUNDARDINESHM/REST-reactnative-with-auth",
            liveLink: "https://rest.kkipolice.site/"
        },
        {
            title: "Monthly Kanaku",
            description: "A collaborative, mobile-first expense management web application to help individuals and groups track their finances.",
            icon: <FaProjectDiagram />,
            features: [
                "Intuitive dashboard with real-time balance, income, and expenses.",
                "Collaborative group tracking using unique invite codes.",
                "Detailed transaction logging with custom categories and icons.",
                "Advanced reporting with PDF and Excel export options.",
                "Built with React, Vite, Firebase, and Netlify."
            ],
            liveLink: "https://monthlykanaku.netlify.app/"
        },
        {
            title: "Attendance Management System",
            description: "Java Spring Boot and MySQL application with JWT authentication to digitize and streamline attendance tracking.",
            icon: <FaUserCheck />,
            features: [
                "Streamlined attendance tracking system for educational institutions.",
                "Built with Java Spring Boot and MySQL.",
                "Secured with JWT authentication.",
                "Automated reporting and analytics."
            ],
            githubLink: "https://github.com/HARISUNDARDINESHM/attendance-system"
        },
        {
            title: "MediConnect",
            description: "Full stack platform for medicine orders, doctor consultations, lab tests, and video call consultations.",
            icon: <FaUserCheck />, // Reusing icon
            features: [
                "Available as web and mobile apps with JWT-secured authentication.",
                "E-commerce platform for medicines and lab test booking.",
                "Video call consultations with doctors.",
                "Built with Next.js, Express.js, React Native, and MySQL."
            ],
            githubLink: "https://github.com/HARISUNDARDINESHM/mediConnect-web"
        },
        {
            title: "NEARSERVICE",
            description: "Local Service Finder Application - An application to find and book nearby service providers.",
            icon: <FaProjectDiagram />,
            features: [
                "Customers can raise service requests",
                "Providers manage and respond to requests",
                "Efficient service booking system",
                "Built with React, Express, and MySQL"
            ],
            githubLink: "https://github.com/HARISUNDARDINESHM/nearService"
        },
        {
            title: "ourAI",
            description: "Smart Assessment System - AI-based MCQ generator that creates topic-specific questions to test and improve student knowledge.",
            icon: <FaProjectDiagram />, // Reusing icon
            features: [
                "Topic Summarization: Detailed definitions and complexity analysis",
                "Real-time Scoring: Instant results for quizzes",
                "One-Click Download: Export study guides to .docx format",
                "AI Interviewer: Practice technical questions with an AI mentor",
                "Built with React, Node.js, Express, Gemini AI, and MongoDB"
            ],
            githubLinks: [
                { label: "Frontend", url: "https://github.com/HARISUNDARDINESHM/ourAI-Frontend" },
                { label: "Backend", url: "https://github.com/HARISUNDARDINESHM/ourAI-Backend" }
            ]
        }
    ];

    return (
        <section className="section" id="projects">
            <h2 className="section-title"><FaProjectDiagram style={{ marginRight: '10px' }} /> Projects</h2>
            <div className="projects-container container">
                {projects.map((project, index) => (
                    <Card key={index} delay={index * 0.2} className="project-card">
                        <div className="project-header">
                            <div className="project-icon">{project.icon}</div>
                            <h3>{project.title}</h3>
                        </div>
                        <p className="project-desc">{project.description}</p>
                        <ul className="project-features">
                            {project.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                             ))}
                        </ul>
                        <div className="project-links">
                            {project.githubLink && (
                                <a href={project.githubLink} target="_blank" rel="noreferrer" className="github-btn">
                                    <FaGithub /> View Code
                                </a>
                            )}
                            {project.liveLink && (
                                <a href={project.liveLink} target="_blank" rel="noreferrer" className="github-btn" style={{ background: 'var(--primary-color)', color: '#fff' }}>
                                    <FaExternalLinkAlt /> Live Demo
                                </a>
                            )}
                            {project.githubLinks && project.githubLinks.map((link, idx) => (
                                <a key={idx} href={link.url} target="_blank" rel="noreferrer" className="github-btn">
                                    <FaGithub /> {link.label}
                                </a>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Projects;
