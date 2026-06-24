import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaChevronDown, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { Link } from "react-scroll";
import Button from "../UI/Button";
import "./Hero.css";

const Hero = ({ startUnmuted = false }) => {
    const [isMuted, setIsMuted] = useState(!startUnmuted); // unmuted if user clicked loading screen
    const [userWantsSound, setUserWantsSound] = useState(true);
    const videoRef = useRef(null);

    const toggleMute = () => {
        if (videoRef.current) {
            const nextMuted = !videoRef.current.muted;
            videoRef.current.muted = nextMuted;
            setIsMuted(nextMuted);
            setUserWantsSound(!nextMuted); // Track if user explicitly turned sound ON
        }
    };

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (startUnmuted) {
            // User clicked loading screen → real gesture → play unmuted immediately
            video.muted = false;
            setIsMuted(false);
            setUserWantsSound(true);
            video.play().catch(e => console.error("Hero video play failed:", e));
            return; // no need to add interaction listeners
        }

        // No user gesture yet — start muted, unmute on first interaction
        video.muted = true;
        setIsMuted(true);
        setUserWantsSound(true);
        video.play().catch(e => console.error("Hero video play failed:", e));

        const enableAudio = (event) => {
            if (event.target.closest('.audio-toggle-btn')) {
                cleanup();
                return;
            }
            if (video && video.muted) {
                video.muted = false;
                setIsMuted(false);
            }
            cleanup();
        };

        const cleanup = () => {
            window.removeEventListener("click",      enableAudio);
            window.removeEventListener("touchstart", enableAudio);
            window.removeEventListener("keydown",    enableAudio);
        };

        window.addEventListener("click",      enableAudio);
        window.addEventListener("touchstart", enableAudio);
        window.addEventListener("keydown",    enableAudio);

        return cleanup;
    }, [startUnmuted]);

    useEffect(() => {
        const handleScroll = () => {
            if (videoRef.current) {
                if (window.scrollY > 300) {
                    // Mute sound when scrolled away
                    videoRef.current.muted = true;
                    setIsMuted(true);
                } else {
                    // Restore sound if user previously unmuted and scrolled back to top
                    if (userWantsSound) {
                        videoRef.current.muted = false;
                        setIsMuted(false);
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [userWantsSound]);

    return (
        <section className="hero" id="home">
            {/* Background Video */}
            <div className="hero-video-container">
                <video
                    ref={videoRef}
                    className="hero-bg-video"
                    src="/hari/hari-dev.mp4"
                    poster="/hari/hari-dev.jpeg"
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                />
                <div className="hero-video-overlay" />
            </div>

            <div className="hero-container container">
                <motion.div
                    className="hero-left-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, ease: "easeOut" }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Hello, I'm <br />
                        <span className="highlight">Hari Sundar Dinesh M</span>
                    </motion.h1>

                    <motion.div
                        className="social-icons"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <a href="https://www.linkedin.com/in/hari-sundar-dinesh-m-00515725a" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="https://github.com/HARISUNDARDINESHM" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
                        <a href="mailto:sundarharidinesh@gmail.com" aria-label="Email"><FaEnvelope /></a>
                        <a href="https://wa.me/919894853160" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Audio Toggle Control */}
            <button 
                className="audio-toggle-btn" 
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute sound" : "Mute sound"}
            >
                {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>

            {/* Scroll Down Indicator */}
            <Link to="about" smooth={true} duration={500} offset={-80} className="scroll-indicator">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="scroll-icon"
                >
                    <span className="scroll-text">Scroll Down</span>
                    <FaChevronDown />
                </motion.div>
            </Link>
        </section>
    );
};

export default Hero;

