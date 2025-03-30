
import React from 'react';
import { BrainCircuit } from 'lucide-react';
import IASection from './IASection';

const AGISection = () => {
  const detailsCard = (
    <>
      <h4 className="text-lg font-semibold mb-4">Approches vers l'AGI</h4>
      <div className="space-y-3">
        <div className="p-3 rounded-lg bg-secondary/40">
          <h5 className="font-medium">Scaling Laws</h5>
          <p className="text-sm text-muted-foreground">
            Théorie selon laquelle augmenter la taille des modèles, des données et de la puissance 
            de calcul conduirait progressivement à des capacités de plus en plus générales.
          </p>
        </div>
        <div className="p-3 rounded-lg bg-secondary/40">
          <h5 className="font-medium">Approches neurosymboliques</h5>
          <p className="text-sm text-muted-foreground">
            Combinaison de réseaux neuronaux avec des systèmes symboliques pour allier l'apprentissage 
            statistique à la logique formelle.
          </p>
        </div>
        <div className="p-3 rounded-lg bg-secondary/40">
          <h5 className="font-medium">Architecture cognitive</h5>
          <p className="text-sm text-muted-foreground">
            Création de systèmes inspirés par la structure et le fonctionnement du cerveau humain, 
            intégrant perception, mémoire, attention et raisonnement.
          </p>
        </div>
      </div>
      <div className="mt-4 p-3 rounded-lg bg-secondary/20 border border-secondary">
        <p className="text-sm text-muted-foreground italic">
          "Le chemin vers l'AGI soulève des questions fondamentales sur la conscience, 
          la sécurité et l'alignement avec les valeurs humaines. Son développement nécessite 
          une approche multidisciplinaire et prudente."
        </p>
      </div>
    </>
  );

  return (
    <IASection
      icon={<BrainCircuit size={32} className="text-primary" />}
      title="Intelligence Artificielle Générale (AGI)"
      description="L'AGI fait référence à une intelligence artificielle hypothétique qui pourrait comprendre, 
      apprendre et appliquer des connaissances à travers un large éventail de tâches, à un niveau égal ou supérieur à celui d'un humain."
      benefits={[
        "Capacité d'apprendre et de raisonner à travers différents domaines",
        "Transfert de connaissances entre différentes tâches",
        "N'existe pas encore mais représente un objectif à long terme de la recherche"
      ]}
      detailsCard={detailsCard}
      delay={4}
    />
  );
};

export default AGISection;
