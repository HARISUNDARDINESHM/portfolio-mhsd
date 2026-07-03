import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaChevronDown, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { Link } from "react-scroll";
import Button from "../UI/Button";
import "./Hero.css";

const NameAnimator = () => {
    const [animationStage, setAnimationStage] = useState(0); // 0: MHSD, 1: HSDM (shift), 2: expand
    const [step, setStep] = useState(0); // expansion step (0 to 13)

    // Stage 0 -> Stage 1: Shift M to the end after 1.2 seconds
    useEffect(() => {
        const timer1 = setTimeout(() => {
            setAnimationStage(1);
        }, 1200);
        return () => clearTimeout(timer1);
    }, []);

    // Stage 1 -> Stage 2: Start progressive letter insertion after layout slide animation completes (~2.2 seconds total)
    useEffect(() => {
        const timer2 = setTimeout(() => {
            setAnimationStage(2);
        }, 2200);
        return () => clearTimeout(timer2);
    }, []);

    // Stage 2: progressive step increment
    useEffect(() => {
        if (animationStage !== 2) return;
        const interval = setInterval(() => {
            setStep((prev) => {
                if (prev >= 13) {
                    clearInterval(interval);
                    return prev;
                }
                return prev + 1;
            });
        }, 120); // speed of typing expansion
        return () => clearInterval(interval);
    }, [animationStage]);

    // Stage 0: ordered M, H, S, D
    const stage0Items = [
        { id: 'M', char: 'M' },
        { id: 'H', char: 'H' },
        { id: 'S', char: 'S' },
        { id: 'D', char: 'D' }
    ];

    // Stage 1: ordered H, S, D, M (triggers layout shifting)
    const stage1Items = [
        { id: 'H', char: 'H' },
        { id: 'S', char: 'S' },
        { id: 'D', char: 'D' },
        { id: 'M', char: 'M' }
    ];

    // Helper to resolve the string dynamically at each step of expansion
    const getAnimatedName = (currentStep) => {
        const hLetters = ["", "a", "ar", "ari"];
        const sLetters = ["", "u", "un", "und", "unda", "undar"];
        const dLetters = ["", "i", "in", "ine", "ines", "inesh"];
        
        let hPart = "H" + hLetters[Math.min(currentStep, hLetters.length - 1)];
        let sPart = "S";
        let dPart = "D";
        
        let stepRemaining = currentStep - (hLetters.length - 1);
        if (stepRemaining > 0) {
            sPart = "S" + sLetters[Math.min(stepRemaining, sLetters.length - 1)];
            stepRemaining = stepRemaining - (sLetters.length - 1);
        }
        if (stepRemaining > 0) {
            dPart = "D" + dLetters[Math.min(stepRemaining, dLetters.length - 1)];
        }
        
        return `${hPart} ${sPart} ${dPart} M`;
    };

    if (animationStage < 2) {
        const currentItems = animationStage === 0 ? stage0Items : stage1Items;
        return (
            <span className="name-animator-layout" style={{ display: 'inline-flex', gap: '0.4rem' }}>
                {currentItems.map((item) => (
                    <motion.span
                        key={item.id}
                        layout
                        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                        style={{ display: 'inline-block' }}
                    >
                        {item.char}
                    </motion.span>
                ))}
            </span>
        );
    }

    // Stage 2: Typing expansion HSDM -> Hari Sundar Dinesh M
    return (
        <span className="name-animator-typing">
            {getAnimatedName(step)}
        </span>
    );
};

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
                        <span className="highlight">
                            <NameAnimator />
                        </span>
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

