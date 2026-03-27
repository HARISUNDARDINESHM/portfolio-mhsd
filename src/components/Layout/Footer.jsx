import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content container">
                <div className="footer-logo">MHSD</div>
                <div className="footer-social">
                    <a href="https://www.linkedin.com/in/hari-sundar-dinesh-m-00515725a" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                    <a href="https://github.com/HARISUNDARDINESHM" target="_blank" rel="noreferrer"><FaGithub /></a>
                    <a href="mailto:sundarharidinesh@gmail.com"><FaEnvelope /></a>
                    <a href="https://wa.me/919894853160" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
                </div>
                <div className="copyright">
                    &copy; 2026 Hari Sundar Dinesh M. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
