
import React from 'react';
import { motion } from 'framer-motion';
import { AIApplication } from './ApplicationsData';

interface ApplicationSelectorProps {
  applications: AIApplication[];
  selectedTab: string;
  onSelectTab: (id: string) => void;
}

const ApplicationSelector: React.FC<ApplicationSelectorProps> = ({ 
  applications, 
  selectedTab, 
  onSelectTab 
}) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {applications.map((app) => (
        <motion.button
          key={app.id}
          onClick={() => onSelectTab(app.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
            selectedTab === app.id 
            ? "bg-primary text-white border-primary" 
            : "bg-secondary/30 border-muted-foreground/20 hover:bg-secondary"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {app.icon}
          <span>{app.name}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default ApplicationSelector;
