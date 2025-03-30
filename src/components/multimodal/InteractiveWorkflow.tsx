
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Image, 
  Music, 
  Video,
  ArrowRight,
  Brain,
  RefreshCw
} from 'lucide-react';

/**
 * Composant illustrant le workflow de création multimodale avec interaction
 */
const InteractiveWorkflow = () => {
  const [step, setStep] = useState(0);
  const [animate, setAnimate] = useState(true);

  const steps = [
    {
      title: "Prompt textuel",
      description: "L'utilisateur fournit une description textuelle détaillée",
      icon: <FileText className="h-8 w-8 text-primary" />,
      color: "bg-primary/10"
    },
    {
      title: "Traitement IA",
      description: "Les modèles transforment le texte en représentations vectorielles",
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      color: "bg-purple-500/10"
    },
    {
      title: "Génération d'image",
      description: "Création visuelle basée sur l'interprétation du prompt",
      icon: <Image className="h-8 w-8 text-blue-500" />,
      color: "bg-blue-500/10"
    },
    {
      title: "Génération audio",
      description: "Production de sons ou musique correspondant au contexte",
      icon: <Music className="h-8 w-8 text-green-500" />,
      color: "bg-green-500/10"
    },
    {
      title: "Génération vidéo",
      description: "Animation ou séquence vidéo intégrant les éléments précédents",
      icon: <Video className="h-8 w-8 text-amber-500" />,
      color: "bg-amber-500/10"
    }
  ];

  const nextStep = () => {
    setAnimate(false);
    setTimeout(() => {
      setStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
      setAnimate(true);
    }, 300);
  };

  const resetDemo = () => {
    setAnimate(false);
    setTimeout(() => {
      setStep(0);
      setAnimate(true);
    }, 300);
  };

  return (
    <div className="glass-card p-6 rounded-xl">
      <h3 className="heading-sm mb-4">Workflow de création multimodale</h3>
      
      <div className="relative">
        <div className="flex justify-between mb-4">
          {steps.map((_, index) => (
            <div 
              key={index}
              className={`w-[12%] h-1 rounded-full transition-colors duration-300 ${index <= step ? 'bg-primary' : 'bg-muted'}`}
            />
          ))}
        </div>
        
        <motion.div 
          className={`p-5 rounded-lg ${steps[step].color} mb-4`}
          animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
              {steps[step].icon}
            </div>
            <div>
              <h4 className="font-medium text-lg">{steps[step].title}</h4>
              <p className="text-muted-foreground">{steps[step].description}</p>
            </div>
          </div>
        </motion.div>
        
        <div className="space-y-2 mt-6">
          {steps.map((s, idx) => (
            <div 
              key={idx} 
              className={`flex items-center gap-3 p-2 rounded-md transition-colors cursor-pointer ${
                step === idx ? 'bg-secondary/30' : 'hover:bg-secondary/20'
              }`}
              onClick={() => {
                setAnimate(false);
                setTimeout(() => {
                  setStep(idx);
                  setAnimate(true);
                }, 300);
              }}
            >
              <div className={`p-1.5 rounded-full ${step === idx ? steps[idx].color : 'bg-secondary/20'}`}>
                {React.cloneElement(s.icon, { className: "h-4 w-4" })}
              </div>
              <span className={`text-sm ${step === idx ? 'font-medium' : 'text-muted-foreground'}`}>
                {s.title}
              </span>
              {step === idx && (
                <div className="ml-auto w-2 h-2 rounded-full bg-primary animate-pulse" />
              )}
            </div>
          ))}
        </div>
        
        <div className="flex justify-between mt-6">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={resetDemo}
            className="flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            <span>Réinitialiser</span>
          </Button>
          <Button 
            onClick={nextStep}
            size="sm"
            className="flex items-center gap-2"
          >
            <span>Étape suivante</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveWorkflow;
