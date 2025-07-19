import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      className={`bg-gray-800/20 dark:bg-gray-900/30 backdrop-blur-xl border border-blue-500/20 dark:border-blue-400/20 rounded-xl p-6 shadow-xl shadow-blue-500/10 ${className}`}
      whileHover={hover ? { y: -8, scale: 1.02, rotateX: 5 } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};