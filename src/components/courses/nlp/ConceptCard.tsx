
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface ConceptCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  examples?: string[];
  color?: 'blue' | 'green' | 'purple' | 'orange';
  delay?: number;
}

const ConceptCard: React.FC<ConceptCardProps> = ({ 
  icon, 
  title, 
  description, 
  examples,
  color = 'blue',
  delay = 0
}) => {
  const colorClasses = {
    blue: "border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/30",
    green: "border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/30",
    purple: "border-purple-200 bg-purple-50/50 dark:border-purple-800 dark:bg-purple-950/30",
    orange: "border-orange-200 bg-orange-50/50 dark:border-orange-800 dark:bg-orange-950/30"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: true }}
    >
      <Card className={`h-full ${colorClasses[color]} hover:shadow-lg transition-all duration-300`}>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3 mb-2">
            <div className="text-primary">
              {icon}
            </div>
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
          {examples && examples.length > 0 && (
            <div className="space-y-1">
              <p className="text-xs font-medium text-primary">Exemples :</p>
              <ul className="text-xs text-muted-foreground space-y-1">
                {examples.map((example, index) => (
                  <li key={index}>• {example}</li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ConceptCard;
