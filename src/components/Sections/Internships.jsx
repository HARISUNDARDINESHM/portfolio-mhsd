import React, { useRef, useState, useEffect } from "react";
import { FaBriefcase, FaLaptop, FaCode, FaServer, FaChevronUp, FaChevronRight } from "react-icons/fa";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";
import Card from "../UI/Card";
import "./Internships.css";

const Internships = () => {
    const sectionRef = useRef(null);
    const [frame, setFrame] = useState(1);
    const [selectedInternship, setSelectedInternship] = useState(null);

    // Scroll tracking for frame animation
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Map 0 -> 0.85 progress to 1 -> 40 frames
        // Keeping it at frame 40 from 0.85 to 1.0 to show the details on the white screen
        const animProgress = Math.min(1, latest / 0.85);
        const frameIndex = Math.min(40, Math.max(1, Math.floor(animProgress * 39) + 1));
        setFrame(frameIndex);
    });

    // Preload frame images for smooth rendering
    useEffect(() => {
        for (let i = 1; i <= 40; i++) {
            const img = new Image();
            img.src = `/intern-frames/ezgif-frame-${String(i).padStart(3, '0')}.png`;
        }
    }, []);

    const internships = [
        {
            company: "AGILETRIBERS, Nagercoil",
            role: "Fullstack Developer Intern",
            period: "September 2025 - April 2026",
            icon: <FaLaptop />,
            shortDesc: "Completed an intensive 8-month internship, contributing to the end-to-end development of scalable web and mobile applications within an Agile environment.",
            details: [
                "Long-Term Technical Impact: Completed an intensive 8-month internship, contributing to the end-to-end development of scalable web and mobile applications within an Agile environment.",
                "Full-Stack Development: Engineered robust solutions using React.js, Node.js, and MySQL, ensuring seamless integration between complex frontend interfaces and backend systems.",
                "High-Impact Project: Played a key role in developing a Leave Management System utilized by over 2,000 personnel, focusing on streamlining administrative workflows and improving system reliability.",
                "AI & Innovation: Implemented advanced AI-driven features using the Gemini API and RAG (Retrieval-Augmented Generation) to enhance data retrieval and user interaction.",
                "DevOps & Deployment: Managed the continuous integration and deployment (CI/CD) of applications across platforms including Netlify, Vercel, and Render.",
                "Professional Recognition: Delivered high-quality code and MVP accelerators, contributing to projects that received formal appreciation for technical excellence and community impact."
            ]
        },
        {
            company: "AGILETRIBERS, Nagercoil",
            role: "Full Stack Web Development",
            period: "27 June 2025 - 26 July 2025",
            icon: <FaLaptop />,
            shortDesc: "Developed the REST Weekoff Management System for the KK Police Department, utilizing PHP and MySQL in real-time project development.",
            details: [
                "Developed the REST Weekoff Management System for the KK Police Department",
                "Applied PHP and MySQL in real-time project development",
                "Gained experience in full-stack development"
            ]
        },
        {
            company: "POSTULATE INFOTECH PVT Ltd, Tuticorin",
            role: "Full Stack Web Development",
            period: "03 Feb 2025 - 17 Feb 2025",
            icon: <FaCode />,
            shortDesc: "Learned HTML, CSS, JavaScript, and PHP, built small applications, and practiced CRUD operations in full-stack development.",
            details: [
                "Learned HTML, CSS, JavaScript, and PHP for full stack development",
                "Built small applications and practiced CRUD operations",
                "Gained foundational web development skills"
            ]
        },
        {
            company: "CUBENSQUARE",
            role: "Linux and Containers",
            period: "29 April 2024 - 07 June 2024",
            icon: <FaServer />,
            shortDesc: "Gained skills in Linux system administration and Docker containers, deploying and managing applications in virtualized environments.",
            details: [
                "Gained skills in Linux system administration and Docker containers",
                "Deployed and managed applications in virtualized environments",
                "Hands-on experience with modern deployment methodologies"
            ]
        }
    ];

    const currentFramePath = `/intern-frames/ezgif-frame-${String(frame).padStart(3, '0')}.png`;

    return (
        <div ref={sectionRef} className="internships-scroll-section" id="internships">
            <div className={`internships-sticky-container ${frame === 40 ? 'white-bg-active' : ''}`}>
                {/* Scroll-Bound Background Image Frame */}
                <img 
                    src={currentFramePath} 
                    alt="Animation Background" 
                    className="intern-frame-bg" 
                />
                <div className="intern-frame-overlay" />

                {/* Main Content Area (Fades in at frame 40/White Screen) */}
                <div className="internships-content">
                    <AnimatePresence>
                        {frame === 40 && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 30 }}
                                transition={{ duration: 0.6 }}
                                className="internships-wrapper"
                            >
                                <h2 className="section-title">
                                    <FaBriefcase style={{ marginRight: '10px' }} /> Internships
                                </h2>

                                <AnimatePresence mode="wait">
                                    {selectedInternship === null ? (
                                        // Show 4 Short Cards Grid
                                        <motion.div 
                                            key="grid"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.4 }}
                                            className="internships-grid"
                                        >
                                            {internships.map((internship, index) => (
                                                <div 
                                                    className="internship-short-card-wrapper" 
                                                    key={index}
                                                    onClick={() => setSelectedInternship(index)}
                                                >
                                                    <Card className="internship-short-card" style={{ background: 'transparent', boxShadow: 'none', border: 'none' }}>
                                                        <div className="short-card-header">
                                                            <div className="short-card-icon">{internship.icon}</div>
                                                            <div>
                                                                <h3>{internship.company}</h3>
                                                                <p className="short-card-role">{internship.role}</p>
                                                            </div>
                                                        </div>
                                                        <p className="short-desc">{internship.shortDesc}</p>
                                                        <button className="see-details-btn">
                                                            See Details <FaChevronRight style={{ fontSize: '0.8rem' }} />
                                                        </button>
                                                    </Card>
                                                </div>
                                            ))}
                                        </motion.div>
                                    ) : (
                                        // Show Single Expanded Card (Hides the other 3)
                                        <motion.div 
                                            key="details"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.4 }}
                                            className="internship-detail-view"
                                        >
                                            <Card className="internship-large-card" style={{ background: 'transparent', boxShadow: 'none', border: 'none' }}>
                                                <div className="large-card-header">
                                                    <div className="large-card-icon">
                                                        {internships[selectedInternship].icon}
                                                    </div>
                                                    <div>
                                                        <h3>{internships[selectedInternship].company}</h3>
                                                        <p className="role-period">
                                                            <span className="role">{internships[selectedInternship].role}</span>
                                                            <span className="period">{internships[selectedInternship].period}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                
                                                <ul className="internship-details-list">
                                                    {internships[selectedInternship].details.map((detail, idx) => (
                                                        <li key={idx}>{detail}</li>
                                                    ))}
                                                </ul>
                                                
                                                <button 
                                                    className="show-less-btn" 
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setSelectedInternship(null);
                                                    }}
                                                >
                                                    <FaChevronUp /> Show Less
                                                </button>
                                            </Card>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Internships;
