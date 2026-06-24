import React from "react";
import { FaGraduationCap, FaUniversity, FaSchool } from "react-icons/fa";
import Card from "../UI/Card";
import Tilt from "react-parallax-tilt";
import "./Education.css";

const Education = () => {
    const educationData = [
        {
            title: "B.Tech Information Technology",
            institution: "University College of Engineering Nagercoil, Kanyakumari District",
            period: "2022–2026",
            icon: <FaUniversity />,
            details: [
                "CGPA: 8.57",
                "Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems",
                "Participated in technical workshops and coding competitions"
            ]
        },
        {
            title: "Higher Secondary Certificate (HSC)",
            institution: "Central Higher Secondary School, Kayalpatnam, Tuticorin District",
            period: "2021-2022",
            icon: <FaSchool />,
            details: [
                "Percentage: 86%",
                "Focus on Mathematics and Computer Science",
                "Developed foundational programming skills"
            ]
        },
        {
            title: "Secondary School Leaving Certificate (SSLC)",
            institution: "Central Higher Secondary School, Kayalpatnam, Tuticorin District",
            period: "2019-2020",
            icon: <FaGraduationCap />, // Reusing icon or finding similar
            details: [
                "Percentage: 88.4%",
                "Strong academic performance",
                "Early interest in technology and computing"
            ]
        }
    ];

    return (
        <section className="section" id="education">
            <h2 className="section-title"><FaGraduationCap style={{ marginRight: '10px' }} /> Education</h2>
            <div className="education-container container">
                {educationData.map((edu, index) => (
                    <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={2000} className="glass-card-3d">
                        <Card delay={index * 0.2} className="edu-card inner-3d-element" style={{ background: 'transparent', boxShadow: 'none', border: 'none' }}>
                            <div className="edu-icon-wrapper">
                                {edu.icon}
                            </div>
                            <div className="edu-content">
                                <h3>{edu.title}</h3>
                                <p className="institution"><b>{edu.institution}</b> ({edu.period})</p>
                                <ul className="edu-details">
                                    {edu.details.map((detail, idx) => (
                                        <li key={idx}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    </Tilt>
                ))}
            </div>
        </section>
    );
};

export default Education;
