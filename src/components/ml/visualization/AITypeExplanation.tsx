
import React from 'react';
import { motion } from 'framer-motion';

interface AITypeExplanationProps {
  selectedType: string;
}

const AITypeExplanation: React.FC<AITypeExplanationProps> = ({ selectedType }) => {
  const explanations: Record<string, { type: string; description: string }> = {
    "LLM": {
      type: "Modèles de Langage (LLM)",
      description: "Ces modèles traitent et génèrent du texte en se basant sur d'énormes corpus de données textuelles. Ils excellent dans la compréhension contextuelle et peuvent générer du contenu cohérent, traduire des langues, résumer des textes et répondre à des questions."
    },
    "CNN": {
      type: "Réseaux de Neurones Convolutifs (CNN)",
      description: "Spécialisés dans le traitement d'images, les CNN utilisent des filtres qui scannent les données visuelles pour identifier des motifs. Ils sont essentiels pour la reconnaissance d'objets, la classification d'images et même l'analyse médicale."
    },
    "RL": {
      type: "Apprentissage par Renforcement (RL)",
      description: "Ces systèmes apprennent par essai-erreur via un système de récompenses. Particulièrement efficaces pour les jeux, la robotique et les systèmes de contrôle, ils développent des stratégies optimales sans supervision directe."
    },
    "XAI": {
      type: "IA Explicable (XAI)",
      description: "L'IA explicable vise à rendre compréhensibles les décisions des systèmes complexes. Ces approches permettent aux humains de comprendre pourquoi une IA a pris une décision particulière, essentiel dans les domaines comme la médecine ou la finance."
    },
    "AGI": {
      type: "Intelligence Artificielle Générale (AGI)",
      description: "L'AGI représente des systèmes capables de comprendre, d'apprendre et d'appliquer des connaissances à travers différents domaines au niveau humain ou supérieur. Elle reste un objectif théorique poursuivi par la recherche."
    }
  };

  return (
    <motion.div 
      className="p-6 mb-8 border rounded-xl bg-secondary/5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      key={selectedType}
    >
      <h3 className="text-xl font-semibold mb-2">{explanations[selectedType]?.type}</h3>
      <p className="text-muted-foreground">{explanations[selectedType]?.description}</p>
    </motion.div>
  );
};

export default AITypeExplanation;
