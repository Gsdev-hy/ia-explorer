
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { FeatureGrid } from '@/components';
import { 
  Shield, AlertTriangle, Users, Scale, Sparkles, 
  BrainCircuit
} from 'lucide-react';

const EthicalPrinciplesSection: React.FC = () => {
  const ethicalPrinciples = [
    {
      title: "Transparence",
      description: "Les systèmes d'IA doivent être compréhensibles et leurs décisions explicables aux utilisateurs.",
      icon: <BrainCircuit size={24} />
    },
    {
      title: "Responsabilité",
      description: "Les développeurs et utilisateurs d'IA doivent assumer la responsabilité des actions et décisions de ces systèmes.",
      icon: <Shield size={24} />
    },
    {
      title: "Équité",
      description: "Les systèmes d'IA ne doivent pas perpétuer ou amplifier les préjugés et discriminations existants.",
      icon: <Scale size={24} />
    },
    {
      title: "Respect de la vie privée",
      description: "Les données personnelles doivent être protégées et utilisées de manière responsable.",
      icon: <Users size={24} />
    },
    {
      title: "Sécurité",
      description: "Les systèmes d'IA doivent être robustes, sécurisés et résistants aux attaques.",
      icon: <AlertTriangle size={24} />
    },
    {
      title: "Bénéfice sociétal",
      description: "L'IA doit être développée pour améliorer le bien-être humain et contribuer positivement à la société.",
      icon: <Sparkles size={24} />
    }
  ];

  return (
    <section className="section-container">
      <SectionHeading
        pretitle="Fondamentaux"
        title="Principes éthiques fondamentaux"
        description="L'éthique de l'IA repose sur plusieurs principes clés qui guident le développement et l'utilisation responsables des technologies d'intelligence artificielle."
        center
      />

      <div className="mt-10">
        <FeatureGrid features={ethicalPrinciples} columns={3} />
      </div>
    </section>
  );
};

export default EthicalPrinciplesSection;
