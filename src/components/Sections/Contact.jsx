import React, { useRef, useState, useEffect } from "react";
import { FaAddressBook, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFileAlt, FaVolumeMute, FaVolumeUp, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
    const thankyouVideoRef  = useRef(null);
    const isMutedRef        = useRef(false);   // start unmuted initially
    const [isThankYouMuted, setIsThankYouMuted] = useState(false); // start unmuted initially

    const toggleThankYouMute = () => {
        const video = thankyouVideoRef.current;
        if (!video) return;
        const next = !isMutedRef.current;
        isMutedRef.current  = next;
        video.muted         = next;
        setIsThankYouMuted(next);
    };

    useEffect(() => {
        const video = thankyouVideoRef.current;
        if (!video) return;

        // Set initial mute state directly on DOM (avoid React prop fight)
        video.muted = isMutedRef.current;

        // IntersectionObserver fires ONCE on enter/leave — no scroll spam
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.muted = isMutedRef.current;
                    if (video.paused) {
                        video.play().catch(e =>
                            console.log("Contact video play blocked:", e)
                        );
                    }
                } else {
                    video.pause();
                }
            },
            { threshold: 0.1 }   // trigger when 10% of section is visible
        );

        observer.observe(video);
        return () => observer.disconnect();
    }, []);   // runs once — no dependency on mute state

    return (
        <section className="section" id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background Video — muted controlled via ref, NOT React prop */}
            <div className="thankyou-video-container">
                <video
                    ref={thankyouVideoRef}
                    className="thankyou-bg-video"
                    src="/hari-thankyou.mp4"
                    loop
                    muted={isThankYouMuted}
                    preload="auto"
                    playsInline
                />
                <div className="thankyou-video-overlay" />
            </div>

            {/* Title and Bar Wrapper at the Bottom */}
            <div className="contact-content-wrapper">
                <h2 className="contact-title-small">
                    <FaAddressBook style={{ marginRight: '8px' }} /> Contact Me
                </h2>

                {/* Minimal Horizontal Contact Bar */}
                <div className="contact-minimal-bar">
                    <div className="contact-item">
                        <FaEnvelope className="contact-icon" />
                        <div>
                            <span className="contact-label">Email</span>
                            <a href="mailto:sundarharidinesh@gmail.com" className="contact-value">sundarharidinesh@gmail.com</a>
                        </div>
                    </div>
                    
                    <div className="contact-item">
                        <FaPhone className="contact-icon" />
                        <div>
                            <span className="contact-label">Phone</span>
                            <a href="tel:+919894853160" className="contact-value">+91 98948 53160</a>
                        </div>
                    </div>
                    
                    <div className="contact-item">
                        <FaMapMarkerAlt className="contact-icon" />
                        <div>
                            <span className="contact-label">Location</span>
                            <span className="contact-value">Kayalpatnam, India</span>
                        </div>
                    </div>
                    
                    <div className="contact-item">
                        <FaFileAlt className="contact-icon" />
                        <div>
                            <span className="contact-label">Resume</span>
                            <a href="https://drive.google.com/drive/folders/1TwCJuAkaOD8EaPzrAlQgMwS7E0LN91z7" target="_blank" rel="noreferrer" className="contact-value">View Resume</a>
                        </div>
                    </div>

                    {/* Audio Toggle Control next to Resume */}
                    <div className="contact-item contact-audio-item">
                        <button 
                            className="thankyou-audio-toggle-inline" 
                            onClick={toggleThankYouMute}
                            aria-label={isThankYouMuted ? "Unmute thank you video" : "Mute thank you video"}
                        >
                            {isThankYouMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                        </button>
                    </div>
                </div>

                {/* Social Icons + Copyright */}
                <div className="contact-footer-row">
                    <div className="contact-social-icons">
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
                    <p className="contact-copyright">
                        &copy; 2026 Hari Sundar Dinesh M. All Rights Reserved.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
