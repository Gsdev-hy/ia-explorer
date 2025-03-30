
import React from 'react';
import { MessageSquare, Cpu, Braces, Sparkles } from 'lucide-react';
import IASection from './IASection';
import { motion } from 'framer-motion';

const LLMSection = () => {
  const detailsCard = (
    <>
      <h4 className="text-lg font-semibold mb-4">Fonctionnement technique</h4>
      <p className="mb-4">
        Les LLM utilisent des architectures basées sur les transformers avec des mécanismes d'attention 
        pour traiter le texte. Ils sont entraînés en deux phases :
      </p>
      <ol className="space-y-3 ml-6 list-decimal text-muted-foreground">
        <li>
          <span className="font-medium text-foreground">Pré-entraînement :</span> Le modèle apprend 
          les structures du langage sur d'énormes corpus de texte.
        </li>
        <li>
          <span className="font-medium text-foreground">Fine-tuning :</span> Le modèle est affiné 
          sur des tâches spécifiques avec des données annotées.
        </li>
      </ol>
      
      <div className="mt-8 p-5 rounded-xl bg-secondary/30 border">
        <h5 className="font-medium mb-3 flex items-center gap-2">
          <Cpu className="h-4 w-4 text-primary" /> Architecture des LLM
        </h5>
        <div className="mb-4 aspect-[4/3] bg-secondary/20 rounded-lg p-3 flex items-center justify-center">
          <svg viewBox="0 0 500 300" className="w-full h-full">
            {/* Input Text */}
            <rect x="50" y="50" width="400" height="30" rx="5" fill="rgb(var(--primary))" fillOpacity="0.1" stroke="rgb(var(--primary))" strokeWidth="1" />
            <text x="250" y="70" textAnchor="middle" fill="currentColor" fontSize="14">Texte d'entrée</text>
            
            {/* Embedding */}
            <rect x="50" y="100" width="400" height="30" rx="5" fill="rgb(var(--primary))" fillOpacity="0.2" stroke="rgb(var(--primary))" strokeWidth="1" />
            <text x="250" y="120" textAnchor="middle" fill="currentColor" fontSize="14">Embedding</text>
            
            {/* Attention blocks */}
            <rect x="50" y="150" width="400" height="80" rx="5" fill="rgb(var(--primary))" fillOpacity="0.3" stroke="rgb(var(--primary))" strokeWidth="1" />
            <text x="250" y="180" textAnchor="middle" fill="currentColor" fontSize="14">Couches d'attention</text>
            <text x="250" y="200" textAnchor="middle" fill="currentColor" fontSize="12">(Plusieurs blocs empilés)</text>
            
            {/* Output Text */}
            <rect x="50" y="250" width="400" height="30" rx="5" fill="rgb(var(--primary))" fillOpacity="0.2" stroke="rgb(var(--primary))" strokeWidth="1" />
            <text x="250" y="270" textAnchor="middle" fill="currentColor" fontSize="14">Génération de texte</text>
            
            {/* Connecting lines */}
            <line x1="250" y1="80" x2="250" y2="100" stroke="rgb(var(--primary))" strokeWidth="2" />
            <line x1="250" y1="130" x2="250" y2="150" stroke="rgb(var(--primary))" strokeWidth="2" />
            <line x1="250" y1="230" x2="250" y2="250" stroke="rgb(var(--primary))" strokeWidth="2" />
          </svg>
        </div>
      </div>
      
      <div className="mt-6 p-4 rounded-lg bg-secondary/40">
        <h5 className="font-medium mb-2 flex items-center gap-2">
          <Braces className="h-4 w-4 text-primary" /> Exemples d'usage
        </h5>
        <div className="space-y-2">
          <div className="p-2 border border-border rounded-lg bg-secondary/20">
            <p className="text-sm font-medium">Génération de contenu</p>
            <p className="text-xs text-muted-foreground">Création d'articles, résumés, traductions, storytelling</p>
          </div>
          <div className="p-2 border border-border rounded-lg bg-secondary/20">
            <p className="text-sm font-medium">Assistants conversationnels</p>
            <p className="text-xs text-muted-foreground">Chatbots, service client, assistants personnels</p>
          </div>
          <div className="p-2 border border-border rounded-lg bg-secondary/20">
            <p className="text-sm font-medium">Analyse et compréhension</p>
            <p className="text-xs text-muted-foreground">Extraction d'informations, sentiment, classification</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 rounded-lg bg-secondary/40">
        <h5 className="font-medium mb-2 flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" /> Avancées récentes
        </h5>
        <p className="text-sm text-muted-foreground">
          L'émergence de techniques comme RLHF (Reinforcement Learning from Human Feedback) 
          a considérablement amélioré l'alignement des LLM avec les attentes humaines, 
          réduisant les sorties problématiques et améliorant l'utilité des réponses.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Les modèles les plus récents démontrent des capacités émergentes : raisonnement complexe, résolution de problèmes et même une forme de "théorie de l'esprit".
        </p>
      </div>
    </>
  );

  return (
    <IASection
      icon={<MessageSquare size={32} className="text-primary" />}
      title="Modèles de Langage (LLM)"
      description="Les Large Language Models (LLM) sont des modèles d'IA entraînés sur d'immenses corpus de texte 
      pour comprendre et générer du langage humain de manière cohérente et contextuelle."
      benefits={[
        "Capable de générer du texte, traduire, résumer et répondre à des questions",
        "Utilisés dans les chatbots, assistants virtuels et outils de création de contenu",
        "Exemples : GPT-4, Claude, LLaMA, Mistral"
      ]}
      detailsCard={detailsCard}
      delay={0}
    />
  );
};

export default LLMSection;
