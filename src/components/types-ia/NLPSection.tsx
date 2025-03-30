
import React from 'react';
import { MessageSquare } from 'lucide-react';
import IASection from './IASection';

const NLPSection = () => {
  const detailsCard = (
    <>
      <h4 className="text-lg font-semibold mb-4">Tâches principales du NLP</h4>
      <div className="space-y-3">
        <div className="p-3 rounded-lg bg-secondary/30 flex items-start">
          <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">1</span>
          <div>
            <h5 className="font-medium">Analyse grammaticale</h5>
            <p className="text-sm text-muted-foreground">Tokenisation, analyse syntaxique, étiquetage grammatical</p>
          </div>
        </div>
        <div className="p-3 rounded-lg bg-secondary/30 flex items-start">
          <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">2</span>
          <div>
            <h5 className="font-medium">Compréhension sémantique</h5>
            <p className="text-sm text-muted-foreground">Extraction d'entités, analyse de sentiment, résolution de références</p>
          </div>
        </div>
        <div className="p-3 rounded-lg bg-secondary/30 flex items-start">
          <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">3</span>
          <div>
            <h5 className="font-medium">Génération de texte</h5>
            <p className="text-sm text-muted-foreground">Traduction, résumé, dialogue, création de contenu</p>
          </div>
        </div>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        L'avènement des transformers et de l'attention a révolutionné le NLP, permettant 
        une meilleure capture des dépendances à longue distance dans le texte.
      </p>
    </>
  );

  return (
    <IASection
      icon={<MessageSquare size={32} className="text-primary" />}
      title="Traitement du Langage Naturel (NLP)"
      description="Le NLP est un domaine de l'IA qui vise à permettre aux machines de comprendre, 
      interpréter et générer du langage humain de manière utile et significative."
      benefits={[
        "Couvre la compréhension et la génération de texte dans plusieurs langues",
        "Applications : traduction automatique, analyse de sentiment, chatbots",
        "Technologies: word embeddings, transformers, BERT, T5"
      ]}
      isReversed={true}
      detailsCard={detailsCard}
      delay={3}
    />
  );
};

export default NLPSection;
