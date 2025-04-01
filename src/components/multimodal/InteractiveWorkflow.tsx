
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
  RefreshCw,
  Sparkles,
  Lightbulb,
  MessageSquare,
  RotateCw,
  Check,
  Play
} from 'lucide-react';

/**
 * Composant illustrant le workflow de création multimodale avec interaction
 */
const InteractiveWorkflow = () => {
  const [step, setStep] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplayTimeout, setAutoplayTimeout] = useState<NodeJS.Timeout | null>(null);

  const steps = [
    {
      title: "Prompt textuel",
      description: "L'utilisateur fournit une description textuelle détaillée",
      icon: <FileText className="h-8 w-8 text-primary" />,
      color: "bg-primary/10",
      details: "Le prompt peut inclure des instructions précises sur le style, le contenu, le ton et d'autres caractéristiques souhaitées pour les sorties générées."
    },
    {
      title: "Traitement IA",
      description: "Les modèles transforment le texte en représentations vectorielles",
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      color: "bg-purple-500/10",
      details: "Les réseaux de neurones profonds encodent le texte en vecteurs de haute dimension, capturant le sens sémantique et les relations conceptuelles."
    },
    {
      title: "Génération d'image",
      description: "Création visuelle basée sur l'interprétation du prompt",
      icon: <Image className="h-8 w-8 text-blue-500" />,
      color: "bg-blue-500/10",
      details: "Des modèles de diffusion comme DALL-E, Midjourney ou Stable Diffusion décodent les vecteurs en pixels, créant des images cohérentes avec la description."
    },
    {
      title: "Génération audio",
      description: "Production de sons ou musique correspondant au contexte",
      icon: <Music className="h-8 w-8 text-green-500" />,
      color: "bg-green-500/10",
      details: "Des modèles comme AudioLM ou MusicLM génèrent des sons, voix ou compositions musicales basés sur les mêmes vecteurs sémantiques."
    },
    {
      title: "Génération vidéo",
      description: "Animation ou séquence vidéo intégrant les éléments précédents",
      icon: <Video className="h-8 w-8 text-amber-500" />,
      color: "bg-amber-500/10",
      details: "Des modèles comme Sora ou Gen-2 animent les images statiques ou créent des séquences vidéo complètes à partir de la description textuelle."
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

  const toggleAutoplay = () => {
    if (isPlaying) {
      // Stop autoplay
      if (autoplayTimeout) {
        clearTimeout(autoplayTimeout);
        setAutoplayTimeout(null);
      }
      setIsPlaying(false);
    } else {
      // Start autoplay
      setIsPlaying(true);
      const timeout = setTimeout(() => {
        nextStep();
        // Create a recursive function for autoplay
        const playNextStep = () => {
          const newTimeout = setTimeout(() => {
            setStep((prev) => {
              const newStep = prev === steps.length - 1 ? 0 : prev + 1;
              // If we've completed the cycle, stop autoplay
              if (newStep === 0) {
                setIsPlaying(false);
                return 0;
              }
              const nextTimeout = setTimeout(playNextStep, 3000);
              setAutoplayTimeout(nextTimeout);
              return newStep;
            });
          }, 3000);
          setAutoplayTimeout(newTimeout);
        };
        playNextStep();
      }, 500);
      setAutoplayTimeout(timeout);
    }
  };

  // Example prompt for demonstration
  const samplePrompt = "Créer une scène de café parisien au coucher du soleil avec des personnes en terrasse, une musique d'accordéon douce en arrière-plan et une légère animation de passants.";

  // Simulated output examples for each step
  const outputExamples = [
    null, // No output for prompt step
    <div className="p-3 bg-purple-500/10 rounded-lg text-xs font-mono overflow-hidden text-muted-foreground">
      {/* Simulated vector representation */}
      [0.23, -0.45, 0.78, 0.12, ...] <span className="animate-pulse">|</span>
    </div>,
    <div className="aspect-video rounded-lg bg-blue-500/10 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full bg-gradient-to-br from-orange-100 via-orange-200 to-blue-300 opacity-80">
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-slate-800/40 to-transparent"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1/2 h-1/4 bg-slate-700/30 rounded-lg"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full bg-orange-400/50"></div>
        <div className="absolute bottom-1/5 left-1/3 w-8 h-12 bg-slate-900/40 rounded-sm"></div>
        <div className="absolute bottom-1/5 left-1/2 w-8 h-12 bg-slate-900/40 rounded-sm"></div>
      </div>
    </div>,
    <div className="rounded-lg bg-green-500/10 p-4 flex items-center justify-center">
      <div className="w-full space-y-2">
        <div className="flex items-center gap-2">
          <Music className="h-4 w-4 text-green-500" />
          <div className="h-2 bg-green-500/50 rounded-full w-full">
            <div className="h-2 bg-green-500 rounded-full animate-pulse" style={{width: '70%'}}></div>
          </div>
        </div>
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>1:24</span>
          <span>2:15</span>
        </div>
        <div className="flex justify-center gap-4">
          <button className="p-1 rounded-full bg-green-500/20">
            <RotateCw className="h-3 w-3" />
          </button>
          <button className="p-1 rounded-full bg-green-500/20">
            <Play className="h-3 w-3" />
          </button>
          <button className="p-1 rounded-full bg-green-500/20">
            <Music className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>,
    <div className="aspect-video rounded-lg bg-amber-500/10 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full bg-gradient-to-br from-orange-100 via-orange-200 to-blue-300 opacity-80">
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-slate-800/40 to-transparent"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1/2 h-1/4 bg-slate-700/30 rounded-lg animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full bg-orange-400/50 animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/5 left-1/3 w-8 h-12 bg-slate-900/40 rounded-sm animate-[bounce_3s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/5 left-1/2 w-8 h-12 bg-slate-900/40 rounded-sm animate-[bounce_3s_ease-in-out_infinite_0.5s]"></div>
      </div>
    </div>
  ];

  return (
    <div className="glass-card p-6 rounded-xl">
      <h3 className="heading-sm mb-6 flex items-center justify-between">
        <span>Workflow de création multimodale</span>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={toggleAutoplay}
            className="flex items-center gap-1 text-xs h-8"
          >
            {isPlaying ? (
              <>
                <Check className="h-3 w-3" />
                <span>Lecture en cours</span>
              </>
            ) : (
              <>
                <Play className="h-3 w-3" />
                <span>Démonstration</span>
              </>
            )}
          </Button>
        </div>
      </h3>
      
      <div className="p-4 border border-primary/20 rounded-lg mb-6 bg-primary/5">
        <div className="flex items-center gap-2 mb-2">
          <MessageSquare className="h-4 w-4 text-primary" />
          <h4 className="font-medium text-sm">Exemple de prompt multimodal</h4>
        </div>
        <p className="text-sm italic text-muted-foreground">{samplePrompt}</p>
      </div>
      
      <div className="relative">
        <div className="flex justify-between mb-4">
          {steps.map((_, index) => (
            <div 
              key={index}
              className={`w-[12%] h-1 rounded-full transition-colors duration-300 ${index <= step ? 'bg-primary' : 'bg-muted'}`}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <motion.div 
            className={`p-5 rounded-lg ${steps[step].color} mb-4`}
            animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                {steps[step].icon}
              </div>
              <div>
                <h4 className="font-medium text-lg">{steps[step].title}</h4>
                <p className="text-muted-foreground">{steps[step].description}</p>
              </div>
            </div>
            <div className="p-3 bg-secondary/20 rounded-lg">
              <p className="text-sm">{steps[step].details}</p>
            </div>
            
            {step > 0 && (
              <div className="mt-4 flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-primary" />
                <p className="text-xs text-muted-foreground">Ce processus utilise une architecture d'IA multimodale avec réseaux de neurones profonds.</p>
              </div>
            )}
          </motion.div>
          
          <motion.div
            className="glass-card p-4 rounded-2xl"
            animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h4 className="font-medium text-sm mb-3 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Sortie générée</span>
            </h4>
            
            {step === 0 ? (
              <div className="flex items-center justify-center h-40 border border-dashed border-primary/30 rounded-lg">
                <p className="text-sm text-muted-foreground">Les entrées textuelles sont converties en représentations que l'IA peut traiter</p>
              </div>
            ) : (
              <div className="flex items-center justify-center min-h-40">
                {outputExamples[step]}
              </div>
            )}
          </motion.div>
        </div>
        
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
