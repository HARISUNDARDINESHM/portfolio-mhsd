import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-kicker">
                    <span>Hari Sundar Dinesh M</span>
                    <span>Portfolio</span>
                </div>

                <h2 className="footer-logo">MHSD</h2>

                <div className="footer-bottom">
                    <div className="footer-social">
                        <a href="https://www.linkedin.com/in/hari-sundar-dinesh-m-00515725a" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/HARISUNDARDINESHM" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href="mailto:sundarharidinesh@gmail.com" aria-label="Email">
                            <FaEnvelope />
                        </a>
                        <a href="https://wa.me/919894853160" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                            <FaWhatsapp />
                        </a>
                    </div>

                    <p className="copyright">
                        &copy; 2026 Hari Sundar Dinesh M. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
