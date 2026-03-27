import React from "react";
import { FaProjectDiagram, FaCalendarCheck, FaUserCheck, FaGithub } from "react-icons/fa";
import Card from "../UI/Card";
import "./Projects.css";

const Projects = () => {
    const projects = [
        {
            title: "Weekoff Management System",
            description: "PHP-based REST web application developed for the Kanyakumari Police Department.",
            icon: <FaCalendarCheck />,
            features: [
                "Officers can request weekoffs through the system",
                "Inspectors can approve or decline requests",
                "Includes comprehensive dashboards and request tracking",
                "Real-time status updates for all users",
                "Built with Html, Css, Js, PHP, and MySQL"
            ],
            githubLink: "https://github.com/HARISUNDARDINESHM/REST-reactnative-with-auth"
        },
        {
            title: "Attendance Management System",
            description: "A software application to manage and track student attendance efficiently.",
            icon: <FaUserCheck />,
            features: [
                "Streamlined attendance tracking system",
                "Automated reporting and analytics",
                "User-friendly interface for educators",
                "Data export capabilities"
            ],
            githubLink: "https://github.com/HARISUNDARDINESHM/attendance-system"
        },
        {
            title: "MediConnect",
            description: "A Next.js, Express, and MySQL-based e-commerce platform for medicines, doctor consultations, lab tests, and video call consultations with doctors.",
            icon: <FaUserCheck />, // Reusing icon
            features: [
                "E-commerce platform for medicines",
                "Video call consultations with doctors",
                "Lab test booking integration",
                "Built with Next.js, Express, and MySQL"
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
