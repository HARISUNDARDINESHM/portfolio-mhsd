import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

const Button = ({ children, onClick, variant = 'primary', className = '', icon }) => {
    return (
        <motion.button
            className={`btn ${variant === 'primary' ? 'hire-btn' : 'freelance-btn'} ${className}`}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {icon && <span className="btn-icon">{icon}</span>}
            {children}
        </motion.button>
    );
};

export default Button;
