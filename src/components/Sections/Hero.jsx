import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaFileAlt } from "react-icons/fa";
import img1 from "../../assets/mhsd_image1.jpg";
import img2 from "../../assets/mhsd_image2.jpg";
import Button from "../UI/Button";
import Tilt from "react-parallax-tilt";
import "./Hero.css";

const Hero = () => {
    const [currentImg, setCurrentImg] = useState(0);
    const images = [img1, img2];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImg((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="hero section" id="home">
            <div className="hero-container container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="hero-subtitle">Welcome to my world</span>
                    <h1>Hello, I'm <br /><span className="highlight">Hari Sundar Dinesh M</span></h1>
                    <p>Aspiring Full Stack Developer with hands-on experience building production-grade systems. Contributed to a system recognized by the Kanyakumari SP, now serving 2,000+ police officers. Proficient in React.js, Express.js, MySQL, and JWT-based auth. Passionate about scalable, impactful software.</p>

                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/hari-sundar-dinesh-m-00515725a" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                        <a href="https://github.com/HARISUNDARDINESHM" target="_blank" rel="noreferrer"><FaGithub /></a>
                        <a href="mailto:sundarharidinesh@gmail.com"><FaEnvelope /></a>
                        <a href="https://wa.me/919894853160" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
                    </div>

                    <div className="action-buttons">
                        <Button variant="primary" onClick={() => window.open('https://drive.google.com/drive/folders/1TwCJuAkaOD8EaPzrAlQgMwS7E0LN91z7', '_blank')}>Download CV</Button>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={2000} className="glass-card-3d" style={{ borderRadius: "50%", padding: "10px", display: "inline-block" }}>
                        <div className="blob-bg inner-3d-element"></div>
                        <div className="img-wrapper-hex inner-3d-element">
                            <img src={images[currentImg]} alt="Hari profile" className="profile-img" />
                        </div>
                    </Tilt>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
