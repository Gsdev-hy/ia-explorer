import React, { useState } from 'react';
import { Brain, MessageSquare, EyeIcon, Bot, BarChart3, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import AINodeGraph from './visualization/AINodeGraph';
import AITypeExplanation from './visualization/AITypeExplanation';
import AICapabilitiesChart from './visualization/AICapabilitiesChart';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

/**
 * Visualisation des différents types d'IA et leurs caractéristiques
 */
const AITypesVisualization: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>("LLM");
  
  const tooltips = {
    "modèles de langage": {
      title: "Modèles de Langage (LLM)",
      content: "Des IA entraînées sur d'énormes quantités de texte pour comprendre et générer du langage humain.",
      example: "💡 Comme un étudiant qui aurait lu toute la bibliothèque mondiale et peut maintenant écrire sur n'importe quel sujet."
    },
    "réseaux convolutifs": {
      title: "Réseaux de Neurones Convolutifs (CNN)",
      content: "Spécialisés dans l'analyse d'images, ils 'scannent' les images pour identifier des motifs et objets.",
      example: "💡 Comme avoir des yeux super-développés qui peuvent instantanément reconnaître n'importe quoi dans une image."
    },
    "apprentissage par renforcement": {
      title: "Apprentissage par Renforcement",
      content: "L'IA apprend en essayant différentes actions et en recevant des récompenses ou punitions.",
      example: "💡 Comme apprendre à jouer aux échecs en jouant des milliers de parties et en s'améliorant à chaque défaite."
    },
    "IA explicable": {
      title: "IA Explicable (XAI)",
      content: "Des techniques pour comprendre et expliquer pourquoi une IA a pris une décision particulière.",
      example: "💡 Comme avoir un détective qui peut expliquer le raisonnement derrière chaque déduction de Sherlock Holmes."
    }
  };

  const TooltipTerm: React.FC<{ term: string; children: React.ReactNode }> = ({ term, children }) => {
    const tooltip = tooltips[term as keyof typeof tooltips];
    if (!tooltip) return <>{children}</>;

    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="relative cursor-help border-b border-dotted border-primary/50 hover:border-primary transition-colors">
              {children}
              <HelpCircle className="inline w-3 h-3 ml-1 text-primary/60 hover:text-primary transition-colors" />
            </span>
          </TooltipTrigger>
          <TooltipContent className="max-w-sm p-4 bg-card border shadow-lg">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-primary">{tooltip.title}</h4>
              <p className="text-sm text-muted-foreground">{tooltip.content}</p>
              <div className="mt-2 p-2 bg-secondary/50 rounded text-xs">
                <span className="font-medium">{tooltip.example}</span>
              </div>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };

  // Animation variants for enhanced interactivity
  const cardVariants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.02, 
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const iconVariants = {
    initial: { rotate: 0, scale: 1 },
    hover: { 
      rotate: [0, -5, 5, 0], 
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const listItemVariants = {
    initial: { x: 0, backgroundColor: "transparent" },
    hover: { 
      x: 8,
      backgroundColor: "rgba(var(--primary), 0.05)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };
  
  return (
    <div className="w-full mt-8">
      <motion.div 
        className="relative w-full h-[450px] mb-12 border rounded-xl bg-gradient-to-b from-secondary/20 to-secondary/5 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500"
        whileHover={{ scale: 1.005 }}
      >
        <AINodeGraph onNodeSelect={setSelectedType} />
        <motion.div 
          className="absolute bottom-3 right-3 text-xs text-muted-foreground bg-background/70 px-2 py-1 rounded-md hover:bg-background/90 transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          Cliquez sur un nœud pour voir les détails
        </motion.div>
      </motion.div>
      
      <AITypeExplanation selectedType={selectedType} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <motion.div variants={cardVariants} whileHover="hover" initial="initial">
          <Card className="h-full hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/20">
            <CardContent className="p-6">
              <motion.h3 
                className="heading-sm mb-4 hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
              >
                Types d'IA et spécificités
              </motion.h3>
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary/30 transition-all duration-200"
                  variants={listItemVariants}
                  whileHover="hover"
                >
                  <motion.div 
                    className="p-2 rounded-full bg-primary/10 mt-1 hover:bg-primary/20 transition-colors"
                    variants={iconVariants}
                  >
                    <MessageSquare size={16} className="text-primary" />
                  </motion.div>
                  <div>
                    <p className="font-medium">
                      <TooltipTerm term="modèles de langage">
                        Modèles de Langage (LLM)
                      </TooltipTerm>
                    </p>
                    <p className="text-sm text-muted-foreground">Spécialisés dans le traitement et la génération de texte</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary/30 transition-all duration-200"
                  variants={listItemVariants}
                  whileHover="hover"
                >
                  <motion.div 
                    className="p-2 rounded-full bg-primary/10 mt-1 hover:bg-primary/20 transition-colors"
                    variants={iconVariants}
                  >
                    <EyeIcon size={16} className="text-primary" />
                  </motion.div>
                  <div>
                    <p className="font-medium">
                      <TooltipTerm term="réseaux convolutifs">
                        Réseaux Convolutifs (CNN)
                      </TooltipTerm>
                    </p>
                    <p className="text-sm text-muted-foreground">Spécialisés dans le traitement d'images et la vision par ordinateur</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary/30 transition-all duration-200"
                  variants={listItemVariants}
                  whileHover="hover"
                >
                  <motion.div 
                    className="p-2 rounded-full bg-primary/10 mt-1 hover:bg-primary/20 transition-colors"
                    variants={iconVariants}
                  >
                    <Bot size={16} className="text-primary" />
                  </motion.div>
                  <div>
                    <p className="font-medium">
                      <TooltipTerm term="apprentissage par renforcement">
                        Apprentissage par Renforcement (RL)
                      </TooltipTerm>
                    </p>
                    <p className="text-sm text-muted-foreground">Apprentissage par interaction avec un environnement</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary/30 transition-all duration-200"
                  variants={listItemVariants}
                  whileHover="hover"
                >
                  <motion.div 
                    className="p-2 rounded-full bg-primary/10 mt-1 hover:bg-primary/20 transition-colors"
                    variants={iconVariants}
                  >
                    <BarChart3 size={16} className="text-primary" />
                  </motion.div>
                  <div>
                    <p className="font-medium">
                      <TooltipTerm term="IA explicable">
                        IA Explicable (XAI)
                      </TooltipTerm>
                    </p>
                    <p className="text-sm text-muted-foreground">Techniques pour comprendre le fonctionnement des modèles complexes</p>
                  </div>
                </motion.li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div 
          className="lg:col-span-2"
          variants={cardVariants} 
          whileHover="hover" 
          initial="initial"
        >
          <Card className="h-full hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/20">
            <CardContent className="p-6">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.h3 
                      className="heading-sm mb-4 hover:text-primary transition-colors duration-300 cursor-help flex items-center gap-2"
                      whileHover={{ scale: 1.02 }}
                    >
                      Hiérarchie des systèmes d'IA
                      <HelpCircle className="w-4 h-4 text-primary/60 hover:text-primary transition-colors" />
                    </motion.h3>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Classification des systèmes d'IA par niveau de généralité et de complexité</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <div className="w-full relative">
                <div className="flex flex-col space-y-6">
                  <motion.div 
                    className="p-4 bg-secondary/10 rounded-lg border border-primary/10 hover:border-primary/20 hover:bg-secondary/20 transition-all duration-300"
                    whileHover={{ scale: 1.01, y: -2 }}
                  >
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <h4 className="font-medium cursor-help flex items-center gap-2">
                            Intelligence Artificielle Générale (AGI)
                            <HelpCircle className="w-3 h-3 text-primary/60" />
                          </h4>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-sm">
                          <div className="space-y-2">
                            <p className="font-semibold">AGI - Le Saint Graal de l'IA</p>
                            <p className="text-sm">Une IA qui pourrait faire tout ce qu'un humain peut faire intellectuellement.</p>
                            <div className="p-2 bg-secondary/50 rounded text-xs">
                              💡 Comme avoir un génie universel qui excelle dans tous les domaines
                            </div>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <p className="text-sm text-muted-foreground mt-1">
                      Systèmes capables de résoudre des problèmes nouveaux dans de multiples domaines, 
                      avec des capacités comparables ou supérieures à l'intelligence humaine.
                    </p>
                  </motion.div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div 
                      className="p-4 bg-secondary/5 rounded-lg border border-primary/5 hover:border-primary/10 hover:bg-secondary/10 transition-all duration-300"
                      whileHover={{ scale: 1.01, y: -2 }}
                    >
                      <h4 className="font-medium">IA spécialisée par domaine</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Systèmes experts conçus pour exceller dans des domaines spécifiques 
                        comme la médecine, la finance ou le droit.
                      </p>
                    </motion.div>
                    <motion.div 
                      className="p-4 bg-secondary/5 rounded-lg border border-primary/5 hover:border-primary/10 hover:bg-secondary/10 transition-all duration-300"
                      whileHover={{ scale: 1.01, y: -2 }}
                    >
                      <h4 className="font-medium">IA spécialisée par tâche</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Systèmes conçus pour exceller dans des tâches spécifiques comme la vision par ordinateur, 
                        le traitement du langage ou la planification.
                      </p>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="p-4 bg-secondary/5 rounded-lg border border-primary/5 hover:border-primary/10 hover:bg-secondary/10 transition-all duration-300"
                    whileHover={{ scale: 1.01, y: -2 }}
                  >
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <h4 className="font-medium cursor-help flex items-center gap-2">
                            Apprentissage automatique (Machine Learning)
                            <HelpCircle className="w-3 h-3 text-primary/60" />
                          </h4>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-sm">
                          <div className="space-y-2">
                            <p className="font-semibold">Machine Learning</p>
                            <p className="text-sm">Des algorithmes qui apprennent des motifs dans les données pour faire des prédictions.</p>
                            <div className="p-2 bg-secondary/50 rounded text-xs">
                              💡 Comme enseigner à un ordinateur à reconnaître des chats en lui montrant des milliers de photos
                            </div>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <p className="text-sm text-muted-foreground mt-1">
                      Algorithmes qui apprennent à partir de données et s'améliorent avec l'expérience
                      (apprentissage supervisé, non supervisé, par renforcement).
                    </p>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.h3 
                className="heading-sm mb-4 cursor-help flex items-center gap-2 hover:text-primary transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                Comparaison des capacités par type d'IA
                <HelpCircle className="w-4 h-4 text-primary/60 hover:text-primary transition-colors" />
              </motion.h3>
            </TooltipTrigger>
            <TooltipContent className="max-w-sm">
              <div className="space-y-2">
                <p className="font-semibold">Graphique Radar</p>
                <p className="text-sm">Chaque type d'IA a ses forces et faiblesses selon différents critères.</p>
                <div className="p-2 bg-secondary/50 rounded text-xs">
                  💡 Plus la zone colorée est grande, plus l'IA excelle dans ces domaines
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <motion.p 
          className="text-muted-foreground mb-4 hover:text-foreground transition-colors"
          whileHover={{ x: 4 }}
        >
          Ce graphique radar compare les performances relatives des différents types d'IA sur des dimensions clés comme
          le traitement du langage, la vision, le raisonnement et la capacité d'adaptation.
        </motion.p>
        
        <motion.div
          whileHover={{ scale: 1.01, y: -2 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <AICapabilitiesChart />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AITypesVisualization;
