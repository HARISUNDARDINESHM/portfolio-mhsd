import React from "react";
import { FaAddressBook, FaPhone, FaEnvelope, FaMapMarkerAlt, FaShareAlt, FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import Card from "../UI/Card";
import "./Contact.css";

const Contact = () => {
    return (
        <section className="section" id="contact">
            <h2 className="section-title"><FaAddressBook style={{ marginRight: '10px' }} /> Contact Me</h2>
            <div className="contact-container container">
                <Card className="contact-card" delay={0.1}>
                    <div className="contact-icon-big">
                        <FaEnvelope />
                    </div>
                    <h3>Get In Touch</h3>
                    <div className="contact-info">
                        <div className="contact-row">
                            <FaPhone /> <span>+91 98948 53160</span>
                        </div>
                        <div className="contact-row">
                            <FaEnvelope /> <a href="mailto:sundarharidinesh@gmail.com">sundarharidinesh@gmail.com</a>
                        </div>
                        <div className="contact-row">
                            <FaMapMarkerAlt /> <span>80A Mutharamman Kovil Street, Kayalpatnam- 6282044</span>
                        </div>
                    </div>
                </Card>

                <Card className="contact-card" delay={0.3}>
                    <div className="contact-icon-big">
                        <FaShareAlt />
                    </div>
                    <h3>Connect With Me</h3>
                    <div className="contact-info">
                        <div className="contact-row">
                            <FaLinkedin /> <a href="https://www.linkedin.com/in/hari-sundar-dinesh-m-00515725a" target="_blank" rel="noreferrer">LinkedIn Profile</a>
                        </div>
                        <div className="contact-row">
                            <FaGithub /> <a href="https://github.com/HARISUNDARDINESHM" target="_blank" rel="noreferrer">GitHub Profile</a>
                        </div>
                        <div className="contact-row">
                            <FaFileAlt /> <a href="https://drive.google.com/drive/folders/1TwCJuAkaOD8EaPzrAlQgMwS7E0LN91z7" target="_blank" rel="noreferrer">View My Resume</a>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default Contact;
