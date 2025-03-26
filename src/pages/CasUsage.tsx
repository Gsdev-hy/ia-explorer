import React from 'react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import Card from '@/components/Card';
import { FeatureGrid } from '@/components';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Factory, ShoppingBag, Building2, Stethoscope, 
  Bus, Car, Shield, BadgeDollarSign, BookOpen, 
  BrainCircuit, Bot
} from 'lucide-react';

/**
 * Page présentant des cas d'usage de l'IA dans différents secteurs
 * @returns {JSX.Element} Le composant de la page Cas d'Usage
 */
const CasUsage = () => {
  const casUsages = [
    {
      title: "Industrie manufacturière",
      description: "Optimisation de la chaîne de production, maintenance prédictive des équipements, contrôle qualité automatisé.",
      icon: <Factory size={24} />,
      link: "#"
    },
    {
      title: "Commerce de détail",
      description: "Personnalisation de l'expérience client, gestion des stocks optimisée, prédiction des ventes.",
      icon: <ShoppingBag size={24} />,
      link: "#"
    },
    {
      title: "Secteur public",
      description: "Amélioration des services aux citoyens, optimisation des infrastructures urbaines, gestion des ressources.",
      icon: <Building2 size={24} />,
      link: "#"
    },
    {
      title: "Santé",
      description: "Diagnostic médical assisté, découverte de nouveaux médicaments, suivi personnalisé des patients.",
      icon: <Stethoscope size={24} />,
      link: "#"
    },
    {
      title: "Transport",
      description: "Véhicules autonomes, optimisation des itinéraires, gestion du trafic en temps réel.",
      icon: <Bus size={24} />,
      link: "#"
    },
    {
      title: "Automobile",
      description: "Aide à la conduite avancée, maintenance prédictive des véhicules, personnalisation de l'expérience de conduite.",
      icon: <Car size={24} />,
      link: "#"
    },
    {
      title: "Sécurité",
      description: "Surveillance intelligente, détection de fraudes, analyse prédictive des risques.",
      icon: <Shield size={24} />,
      link: "#"
    },
    {
      title: "Finance",
      description: "Analyse des risques, détection de fraudes, conseil financier personnalisé.",
      icon: <BadgeDollarSign size={24} />,
      link: "#"
    },
    {
      title: "Éducation",
      description: "Personnalisation de l'apprentissage, tutorat intelligent, évaluation automatisée.",
      icon: <BookOpen size={24} />,
      link: "#"
    },
    {
      title: "Recherche",
      description: "Analyse de données massives, simulation et modélisation, découverte de connaissances.",
      icon: <BrainCircuit size={24} />,
      link: "#"
    },
    {
      title: "Robotique",
      description: "Automatisation des tâches, assistance aux personnes, exploration de milieux hostiles.",
      icon: <Bot size={24} />,
      link: "#"
    },
  ];

  return (
    <>
      <Hero
        title="Cas d'usage de l'IA"
        subtitle="Découvrez comment l'intelligence artificielle est appliquée dans divers secteurs pour résoudre des problèmes concrets et créer de la valeur."
      />

      <section className="section-container">
        <SectionHeading
          pretitle="Secteurs"
          title="Applications concrètes de l'IA"
          description="L'IA transforme de nombreux domaines d'activité, de l'industrie à la santé en passant par le commerce et les services publics."
          center
        />

        <div className="mt-10">
          <FeatureGrid features={casUsages} columns={3} />
        </div>
      </section>

      <section className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            pretitle="Explorer"
            title="Approfondir les connaissances"
            description="Découvrez d'autres aspects de l'intelligence artificielle en explorant les sections suivantes."
            center
          />

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="animate-fade-in">
              <Link to="/niveaux-ia">
                Niveaux d'IA
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <Link to="/types-ia">
                Types d'IA
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Link to="/ethique">
                Éthique de l'IA
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CasUsage;
