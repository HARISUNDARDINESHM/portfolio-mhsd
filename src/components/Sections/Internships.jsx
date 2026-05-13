import React from "react";
import { FaBriefcase, FaLaptop, FaCode, FaServer } from "react-icons/fa";
import Card from "../UI/Card";
import "./Internships.css";

const Internships = () => {
    const internships = [
        {
            company: "AGILETRIBERS, Nagercoil",
            role: "Fullstack Developer Intern",
            period: "September 2025 - April 2026",
            icon: <FaLaptop />,
            details: [
                "Long-Term Technical Impact: Completed an intensive 8-month internship, contributing to the end-to-end development of scalable web and mobile applications within an Agile environment.",
                "Full-Stack Development: Engineered robust solutions using React.js, Node.js, and MySQL, ensuring seamless integration between complex frontend interfaces and backend systems.",
                "High-Impact Project: Played a key role in developing a Leave Management System utilized by over 2,000 personnel, focusing on streamlining administrative workflows and improving system reliability.",
                "AI & Innovation: Implemented advanced AI-driven features using the Gemini API and RAG (Retrieval-Augmented Generation) to enhance data retrieval and user interaction.",
                "DevOps & Deployment: Managed the continuous integration and deployment (CI/CD) of applications across platforms including Netlify, Vercel, and Render.",
                "Professional Recognition: Delivered high-quality code and MVP accelerators, contributing to projects that received formal appreciation for technical excellence and community impact."
            ]
        },
        {
            company: "AGILETRIBERS, Nagercoil",
            role: "Full Stack Web Development",
            period: "27 June 2025 - 26 July 2025",
            icon: <FaLaptop />,
            details: [
                "Developed the REST Weekoff Management System for the KK Police Department",
                "Applied PHP and MySQL in real-time project development",
                "Gained experience in full-stack development"
            ]
        },
        {
            company: "POSTULATE INFOTECH PVT Ltd, Tuticorin",
            role: "Full Stack Web Development",
            period: "03 Feb 2025 - 17 Feb 2025",
            icon: <FaCode />,
            details: [
                "Learned HTML, CSS, JavaScript, and PHP for full stack development",
                "Built small applications and practiced CRUD operations",
                "Gained foundational web development skills"
            ]
        },
        {
            company: "CUBENSQUARE",
            role: "Linux and Containers",
            period: "29 April 2024 - 07 June 2024",
            icon: <FaServer />,
            details: [
                "Gained skills in Linux system administration and Docker containers",
                "Deployed and managed applications in virtualized environments",
                "Hands-on experience with modern deployment methodologies"
            ]
        }
    ];

    return (
        <section className="section" id="internships">
            <h2 className="section-title"><FaBriefcase style={{ marginRight: '10px' }} /> Internships</h2>
            <div className="internships-container container">
                {internships.map((internship, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-dot"></div>
                        <Card className="internship-card" delay={index * 0.2}>
                            <div className="card-icon-small">
                                {internship.icon}
                            </div>
                            <h3>{internship.company}</h3>
                            <p className="role-period">
                                <span className="role">{internship.role}</span>
                                <span className="period">{internship.period}</span>
                            </p>
                            <ul className="internship-details">
                                {internship.details.map((detail, idx) => (
                                    <li key={idx}>{detail}</li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Internships;
