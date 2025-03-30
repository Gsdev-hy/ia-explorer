
import React from 'react';
import { MessageSquare } from 'lucide-react';
import IASection from './IASection';

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
      <div className="mt-6 p-4 rounded-lg bg-secondary/40">
        <h5 className="font-medium mb-2">Avancées récentes</h5>
        <p className="text-sm text-muted-foreground">
          L'émergence de techniques comme RLHF (Reinforcement Learning from Human Feedback) 
          a considérablement amélioré l'alignement des LLM avec les attentes humaines, 
          réduisant les sorties problématiques et améliorant l'utilité des réponses.
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
