import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./LoadingScreen.css";

const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [ready, setReady]       = useState(false); // bar finished

    useEffect(() => {
        let start = null;
        const duration = 1800;

        const step = (timestamp) => {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;
            const pct = Math.min(100, Math.round((elapsed / duration) * 100));
            setProgress(pct);
            if (elapsed < duration) {
                requestAnimationFrame(step);
            } else {
                setReady(true);
            }
        };

        requestAnimationFrame(step);
    }, []);

    return (
        <motion.div
            className="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            {/* Animated background orbs */}
            <div className="loading-orb loading-orb-1" />
            <div className="loading-orb loading-orb-2" />
            <div className="loading-orb loading-orb-3" />

            <div className="loading-content">
                {/* Logo */}
                <motion.div
                    className="loading-logo"
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    MHSD<span className="loading-dot">.</span>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    className="loading-tagline"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    Fullstack Developer · AI Enthusiast
                </motion.p>

                {/* Progress bar */}
                <motion.div
                    className="loading-bar-wrapper"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <div className="loading-bar-track">
                        <div
                            className="loading-bar-fill"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <span className="loading-percent">{progress}%</span>
                </motion.div>

                {/* Enter button — appears after bar completes */}
                <AnimatePresence>
                    {ready && (
                        <motion.button
                            className="loading-enter-btn"
                            initial={{ opacity: 0, y: 16, scale: 0.92 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.45, ease: "easeOut" }}
                            onClick={() => onComplete(true)}
                        >
                            <span className="enter-btn-glow" />
                            Enter Portfolio
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"/>
                                <polyline points="12 5 19 12 12 19"/>
                            </svg>
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
