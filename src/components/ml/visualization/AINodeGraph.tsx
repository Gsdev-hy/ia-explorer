
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, MessageSquare, EyeIcon, Bot, BarChart3 } from 'lucide-react';

interface AINodeProps {
  icon: React.ReactNode;
  title: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  onHover: () => void;
}

const AINode: React.FC<AINodeProps> = ({ icon, title, x, y, color, delay, onHover }) => {
  return (
    <motion.div 
      className="absolute cursor-pointer"
      style={{ left: x, top: y }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: delay * 0.2, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      onMouseEnter={onHover}
    >
      <div className={`flex items-center justify-center w-12 h-12 rounded-full ${color} shadow-lg`}>
        {icon}
      </div>
      <div className="absolute top-14 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-medium">
        {title}
      </div>
    </motion.div>
  );
};

interface AINodeGraphProps {
  onNodeSelect: (nodeType: string) => void;
}

const AINodeGraph: React.FC<AINodeGraphProps> = ({ onNodeSelect }) => {
  const nodes = [
    { type: "LLM", icon: <MessageSquare className="text-white" />, title: "LLM", x: "20%", y: "40%", color: "bg-primary", delay: 0 },
    { type: "CNN", icon: <EyeIcon className="text-white" />, title: "CNN", x: "40%", y: "20%", color: "bg-blue-500", delay: 1 },
    { type: "RL", icon: <Bot className="text-white" />, title: "RL", x: "60%", y: "40%", color: "bg-orange-500", delay: 2 },
    { type: "XAI", icon: <BarChart3 className="text-white" />, title: "XAI", x: "40%", y: "60%", color: "bg-green-500", delay: 3 },
    { type: "AGI", icon: <Brain className="text-white" />, title: "AGI", x: "80%", y: "40%", color: "bg-purple-600", delay: 4 }
  ];

  return (
    <>
      {nodes.map((node) => (
        <AINode
          key={node.type}
          icon={node.icon}
          title={node.title}
          x={node.x}
          y={node.y}
          color={node.color}
          delay={node.delay}
          onHover={() => onNodeSelect(node.type)}
        />
      ))}
      
      {/* Lignes de connexion */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        <motion.line 
          x1="20%" y1="40%" x2="40%" y2="20%" 
          stroke="var(--border)" strokeWidth="1" 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ delay: 1, duration: 1 }}
        />
        <motion.line 
          x1="40%" y1="20%" x2="60%" y2="40%" 
          stroke="var(--border)" strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ delay: 1.2, duration: 1 }}
        />
        <motion.line 
          x1="60%" y1="40%" x2="40%" y2="60%" 
          stroke="var(--border)" strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ delay: 1.4, duration: 1 }}
        />
        <motion.line 
          x1="40%" y1="60%" x2="20%" y2="40%" 
          stroke="var(--border)" strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ delay: 1.6, duration: 1 }}
        />
        <motion.line 
          x1="60%" y1="40%" x2="80%" y2="40%" 
          stroke="var(--border)" strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ delay: 1.8, duration: 1 }}
        />
      </svg>
    </>
  );
};

export default AINodeGraph;
