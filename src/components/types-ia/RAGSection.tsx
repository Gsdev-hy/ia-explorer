
import React from 'react';
import { Code } from 'lucide-react';
import IASection from './IASection';

const RAGSection = () => {
  const detailsCard = (
    <>
      <h4 className="text-lg font-semibold mb-4">Architecture RAG</h4>
      <div className="mb-6 p-5 rounded-lg bg-secondary/40">
        <ol className="space-y-3 ml-4 list-decimal">
          <li>
            <span className="font-medium">Indexation des connaissances :</span>{" "}
            <span className="text-muted-foreground">Les documents sont transformés en vecteurs et stockés dans une base vectorielle</span>
          </li>
          <li>
            <span className="font-medium">Recherche sémantique :</span>{" "}
            <span className="text-muted-foreground">Lors d'une requête, le système identifie les informations pertinentes</span>
          </li>
          <li>
            <span className="font-medium">Augmentation :</span>{" "}
            <span className="text-muted-foreground">Le LLM reçoit à la fois la requête et les informations pertinentes</span>
          </li>
          <li>
            <span className="font-medium">Génération :</span>{" "}
            <span className="text-muted-foreground">Le LLM génère une réponse fondée sur les connaissances fournies</span>
          </li>
        </ol>
      </div>
      <p className="text-sm text-muted-foreground">
        Cette approche combine les forces des bases de connaissances structurées avec la 
        fluidité des modèles de langage, permettant des réponses à la fois précises et naturelles.
      </p>
    </>
  );

  return (
    <IASection
      icon={<Code size={32} className="text-primary" />}
      title="Retrieval-Augmented Generation (RAG)"
      description="Le RAG est une approche qui améliore les LLM en les connectant à des sources d'information externes, 
      leur permettant de fournir des réponses basées sur des données actuelles et vérifiables."
      benefits={[
        "Réduit les hallucinations en ancrant les réponses dans des sources fiables",
        "Permet d'accéder à des informations récentes non incluses dans l'entraînement",
        "Applications : assistants documentaires, systèmes de support client, recherche avancée"
      ]}
      isReversed={true}
      detailsCard={detailsCard}
      delay={1}
    />
  );
};

export default RAGSection;
