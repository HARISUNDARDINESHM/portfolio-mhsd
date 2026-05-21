import React from 'react';
import { motion } from 'framer-motion';
import './Card.css';

const Card = ({ children, className = '', delay = 0 }) => {
    return (
        <div className={`card ${className}`}>
            {children}
        </div>
    );
};

export default Card;
