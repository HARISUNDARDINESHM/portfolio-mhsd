import React from 'react';
import { motion } from 'framer-motion';
import './Card.css';

const Card = ({ children, className = '', delay = 0 }) => {
    return (
        <motion.div
            className={`card ${className}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
            {children}
        </motion.div>
    );
};

export default Card;
