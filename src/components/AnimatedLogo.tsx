
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AnimatedLogoProps {
  className?: string;
  compact?: boolean;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ className = '', compact = false }) => {
  const letters = 'IA Explorer'.split('');
  const logoRef = useRef<HTMLDivElement>(null);

  // Animation variants pour les lettres
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    }),
    hover: (i: number) => ({
      y: -5,
      color: i === 0 ? '#0066ff' : i === 1 ? '#0066ff' : '#333333', // IA en bleu, reste en noir
      transition: {
        duration: 0.2,
        ease: "easeInOut",
        delay: i * 0.05,
      },
    }),
  };

  // Animation pour l'ensemble du logo
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
    hover: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <motion.div
      className={`flex items-center gap-1 font-bold ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      ref={logoRef}
      role="img"
      aria-label="IA Explorer Logo"
    >
      {letters.map((letter, i) => (
        <motion.span 
          key={`logo-letter-${i}`}
          custom={i}
          variants={letterVariants}
          className={`inline-block ${i < 2 ? 'text-primary' : 'dark:text-foreground'} ${
            letter === ' ' ? 'ml-1 mr-1' : ''
          } ${compact && i > 2 ? 'hidden md:inline' : ''}`}
          style={{ 
            fontSize: i < 2 ? '1.25em' : '1em',
            fontWeight: i < 2 ? '800' : '700'
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedLogo;
