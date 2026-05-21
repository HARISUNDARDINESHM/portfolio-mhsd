import React from "react";
import { FaCertificate, FaUser, FaRunning, FaLanguage, FaCheckCircle, FaStar, FaGamepad, FaRocket } from "react-icons/fa";
import Card from "../UI/Card";
import Tilt from "react-parallax-tilt";
import "./About.css";

const About = () => {
    const certificates = [
        "NPTEL - Programming in Java",
        "NPTEL - Operating System Fundamentals",
        "Naan Mudhalvan - OpenCV Course",
        "NOVITECH - Full stack web development course (1 month)",
        "postulate infotech - Full stack web development intern (15 days)",
        "AgileTribers - Full stack web development intern (1 month)"
    ];

    const strengths = [
        "Leadership",
        "Hard Working",
        "Quick Learning",
        "Dedication",
        "Punctuality"
    ];

    const hobbies = [
        { name: "Solving coding challenges", icon: <FaCodeIcon /> },
        { name: "Exploring new technologies", icon: <FaRocket /> },
        { name: "Playing cricket", icon: <FaGamepad /> }
    ];

    const achievements = [
        "SP Award – KK Police Weekoff System (2,000+ officers using that app)",
        "200+ LeetCode problems solved",
        "Class Representative – 3rd & 4th Year"
    ];

    const languages = [
        "Tamil",
        "English"
    ];


    return (
        <section className="section" id="about">
            <h2 className="section-title"><FaUser style={{ marginRight: '10px' }} /> About Me</h2>
            <div className="about-container container">

                {/* About Content Grid */}
                <div className="about-grid">
                    {/* Strengths */}
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={2000} className="glass-card-3d">
                        <Card className="about-card inner-3d-element" delay={0.2} style={{ background: 'transparent', boxShadow: 'none', border: 'none' }}>
                            <h3><FaStar /> Personal Strengths</h3>
                            <div className="tag-cloud">
                                {strengths.map((strength, index) => (
                                    <span className="tag" key={index}>{strength}</span>
                                ))}
                            </div>
                        </Card>
                    </Tilt>

                    {/* Hobbies */}
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={2000} className="glass-card-3d">
                        <Card className="about-card inner-3d-element" delay={0.3} style={{ background: 'transparent', boxShadow: 'none', border: 'none' }}>
                            <h3><FaRunning /> Hobbies</h3>
                            <div className="tag-cloud">
                                {hobbies.map((hobby, index) => (
                                    <span className="tag" key={index}>
                                        {hobby.icon} {hobby.name}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    </Tilt>

                    {/* Achievements */}
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={2000} className="glass-card-3d">
                        <Card className="about-card inner-3d-element" delay={0.4} style={{ background: 'transparent', boxShadow: 'none', border: 'none' }}>
                            <h3><FaCertificate /> Achievements</h3>
                            <ul style={{ textAlign: "left", paddingLeft: "20px", marginTop: "15px", lineHeight: "1.6" }}>
                                {achievements.map((achievement, index) => (
                                    <li key={index} style={{ marginBottom: "8px" }}>{achievement}</li>
                                ))}
                            </ul>
                        </Card>
                    </Tilt>

                    {/* Languages */}
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={2000} className="glass-card-3d">
                        <Card className="about-card inner-3d-element" delay={0.5} style={{ background: 'transparent', boxShadow: 'none', border: 'none' }}>
                            <h3><FaLanguage /> Languages</h3>
                            <div className="tag-cloud">
                                {languages.map((language, index) => (
                                    <span className="tag" key={index}>{language}</span>
                                ))}
                            </div>
                        </Card>
                    </Tilt>

                </div>
            </div>
        </section>
    );
};

// Helper for icon
const FaCodeIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.8 6.4-8.5 10-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117.3 256l90.3-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.5-5.1 13.1 0 17.6l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm329 13.1l144.1-135.1c5.1-4.5 5.1-13.1 0-17.6L494.1 112.2c-4.9-4.6-12.5-4.4-17 .5l-43.5 46.4c-4.6 4.9-4.3 12.7.8 17.2L522.7 256l-90.3 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .5z"></path>
    </svg>
);

export default About;
