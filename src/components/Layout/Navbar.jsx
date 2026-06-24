import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home",        to: "home" },
        { name: "About",       to: "about" },
        { name: "Skills",      to: "skills" },
        { name: "Projects",    to: "projects" },
        { name: "Internships", to: "internships" },
        { name: "Education",   to: "education" },
        { name: "Contact",     to: "contact" },
    ];

    return (
        <>
            {/* Floating Menu Icon — always visible */}
            <button
                className={`nav-menu-btn ${isOpen ? "open" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Full-screen slide-in nav panel */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="nav-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Slide-in panel */}
                        <motion.nav
                            className="nav-panel"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <div className="nav-panel-logo">
                                MHSD<span className="dot">.</span>
                            </div>

                            <ul className="nav-panel-menu">
                                {navLinks.map((link, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.07 }}
                                    >
                                        <Link
                                            to={link.to}
                                            smooth={true}
                                            duration={500}
                                            spy={true}
                                            offset={-80}
                                            activeClass="active"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <span className="nav-link-num">0{index + 1}</span>
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
