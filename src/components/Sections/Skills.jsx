import React from "react";
import { FaLaptopCode, FaGlobe, FaDatabase, FaMobileAlt, FaCode, FaServer } from "react-icons/fa";
import Card from "../UI/Card";
import "./Skills.css";

const Skills = () => {
    const skillsData = [
        {
            category: "Programming Languages",
            icon: <FaLaptopCode />,
            items: [
                { name: "C", level: 70 },
                { name: "Java", level: 75 },
                { name: "Python", level: 75 }
            ]
        },
        {
            category: "Frontend Technologies",
            icon: <FaGlobe />,
            items: [
                { name: "HTML/CSS/JS", level: 90 },
                { name: "React JS", level: 75 },
                { name: "Next.js", level: 70 }
            ]
        },
        {
            category: "Backend Technologies",
            icon: <FaServer />, // Using FaServer for backend
            items: [
                { name: "PHP", level: 65 },
                { name: "Express.js", level: 60 }
            ]
        },
        {
            category: "Databases",
            icon: <FaDatabase />,
            items: [
                { name: "MySQL", level: 80 },
                { name: "MongoDB", level: 50 }
            ]
        },
        {
            category: "Mobile Development",
            icon: <FaMobileAlt />,
            items: [
                { name: "React Native", level: 40 }
            ]
        }
    ];

    return (
        <section className="section" id="skills">
            <h2 className="section-title"><FaCode style={{ marginRight: '10px' }} /> Skills</h2>
            <div className="skills-container container">
                {skillsData.map((category, index) => (
                    <Card key={index} delay={index * 0.1} className="skill-card">
                        <div className="card-icon">
                            {category.icon}
                        </div>
                        <h3>{category.category}</h3>
                        <div className="skill-list">
                            {category.items.map((skill, idx) => (
                                <div className="skill-item" key={idx}>
                                    <div className="skill-info">
                                        <span>{skill.name}</span>
                                        <span>{skill.level}%</span>
                                    </div>
                                    <div className="skill-bar-bg">
                                        <div
                                            className="skill-bar-fill"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Skills;
