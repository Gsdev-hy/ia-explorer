
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface IASectionProps {
  icon: ReactNode;
  title: string;
  description: string;
  benefits: string[];
  isReversed?: boolean;
  detailsCard: ReactNode;
  delay?: number;
}

const IASection: React.FC<IASectionProps> = ({ 
  icon, 
  title, 
  description, 
  benefits, 
  isReversed = false,
  detailsCard,
  delay = 0
}) => {
  const animationClass = isReversed 
    ? "order-1 lg:order-2 animate-slide-right" 
    : "animate-slide-left";
  
  const detailsAnimationClass = isReversed 
    ? "order-2 lg:order-1 glass-card p-6 rounded-2xl animate-slide-left" 
    : "glass-card p-6 rounded-2xl animate-slide-right";
    
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <motion.div 
        className={animationClass}
        initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay * 0.1 }}
        viewport={{ once: true }}
      >
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10">
          {icon}
        </div>
        <h3 className="heading-lg mb-4">{title}</h3>
        <p className="mb-6 text-muted-foreground">
          {description}
        </p>
        <div className="bg-secondary/10 p-5 rounded-xl mb-6">
          <h4 className="font-medium text-base mb-3">Principaux avantages</h4>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">+</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
      
      <motion.div 
        className={detailsAnimationClass}
        initial={{ opacity: 0, x: isReversed ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: (delay + 0.2) * 0.1 }}
        viewport={{ once: true }}
      >
        {detailsCard}
      </motion.div>
    </div>
  );
};

export default IASection;
