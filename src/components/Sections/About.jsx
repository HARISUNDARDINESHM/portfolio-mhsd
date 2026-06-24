import React from "react";
import { FaCertificate, FaUser, FaRunning, FaLanguage, FaCheckCircle, FaStar, FaGamepad, FaRocket } from "react-icons/fa";
import Card from "../UI/Card";
import Tilt from "react-parallax-tilt";
import Button from "../UI/Button";
import { Link } from "react-scroll";
import { ProfileCanvas } from "../3D/ProfileModel";
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

                {/* Profile Introduction Card next to the video */}
                <div className="about-intro-wrapper">
                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} transitionSpeed={2000} className="about-intro-tilt">
                        <div className="about-intro-card">
                            <div className="about-avatar-wrapper">
                                <img src="/hari/hari-dev.jpeg" alt="Hari profile" className="about-avatar" />
                                <div className="avatar-glow"></div>
                            </div>
                            <div className="about-intro-content">
                                <span className="about-badge">⚡ Professional Profile</span>
                                <h3>Aspiring Full Stack Developer</h3>
                                <p>
                                    Aspiring Full Stack Developer with hands-on experience building production-grade systems. Contributed to a system recognized by the Kanyakumari SP, now serving 2,000+ police officers. Proficient in React.js, Express.js, MySQL, and JWT-based auth. Passionate about scalable, impactful software.
                                </p>
                                <div className="about-actions">
                                    <Button variant="primary" onClick={() => window.open('https://drive.google.com/drive/folders/1TwCJuAkaOD8EaPzrAlQgMwS7E0LN91z7', '_blank')}>
                                        Download CV
                                    </Button>
                                    <Link to="contact" smooth={true} duration={500} offset={-80}>
                                        <Button variant="secondary">Get In Touch</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Tilt>
                </div>


                {/* About Dashboard Layout: 3D model on the left, other info on the right */}
                <div className="about-dashboard">
                    {/* Left Column: Interactive 3D Profile Model with Pinterest-style decorative rings */}
                    <div className="dashboard-left">
                        <div className="profile-canvas-wrapper">
                            <div className="profile-decor-ring ring-1"></div>
                            <div className="profile-decor-ring ring-2"></div>
                            <ProfileCanvas />
                        </div>
                    </div>

                    {/* Right Column: Outline Cards (Strengths, Achievements, Hobbies, Languages) */}
                    <div className="dashboard-right">
                        <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} transitionSpeed={2000} className="glass-card-3d card-purple float-slow">
                            <Card className="about-card inner-3d-element" delay={0.2} style={{ background: 'transparent', boxShadow: 'none', border: 'none' }}>
                                <h3><FaStar /> Personal Strengths</h3>
                                <div className="tag-cloud">
                                    {strengths.map((strength, index) => (
                                        <span className="tag" key={index}>{strength}</span>
                                    ))}
                                </div>
                            </Card>
                        </Tilt>

                        <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} transitionSpeed={2000} className="glass-card-3d card-gold float-fast">
                            <Card className="about-card inner-3d-element" delay={0.3} style={{ background: 'transparent', boxShadow: 'none', border: 'none' }}>
                                <h3><FaCertificate /> Achievements</h3>
                                <ul className="achievement-list">
                                    {achievements.map((achievement, index) => (
                                        <li key={index} className="achievement-item">
                                            <FaCheckCircle className="achieve-check" />
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </Tilt>

                        <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} transitionSpeed={2000} className="glass-card-3d card-pink float-delay">
                            <Card className="about-card inner-3d-element" delay={0.4} style={{ background: 'transparent', boxShadow: 'none', border: 'none' }}>
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

                        <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} transitionSpeed={2000} className="glass-card-3d card-cyan float-medium">
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
