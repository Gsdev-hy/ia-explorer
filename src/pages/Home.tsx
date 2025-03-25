
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import FeatureGrid from '../components/FeatureGrid';
import { Brain, Layers, Code, Lightbulb, Laptop, Gauge, Server, EyeOff, Puzzle } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Page d'accueil du site
 * @returns {JSX.Element} Le composant de la page d'accueil
 */
const Home = () => {
  // Sections d'intérêt principales
  const mainTopics = [
    {
      title: "Les 7 niveaux d'IA",
      description: "De l'IA réactive à la conscience artificielle, explorez les différents niveaux de complexité.",
      link: "/niveaux-ia",
      icon: <Layers size={24} />,
      delay: 0
    },
    {
      title: "Types d'intelligence artificielle",
      description: "LLM, RAG, CNN, NLP, AGI... Découvrez les différentes approches technologiques.",
      link: "/types-ia",
      icon: <Brain size={24} />,
      delay: 100
    },
    {
      title: "Machine Learning",
      description: "Apprentissage supervisé, non supervisé, par renforcement et deep learning.",
      link: "/machine-learning",
      icon: <Code size={24} />,
      delay: 200
    },
    {
      title: "Éthique et IA",
      description: "Enjeux éthiques, biais, transparence et gouvernance des systèmes d'IA.",
      link: "/ethique",
      icon: <Lightbulb size={24} />,
      delay: 300
    }
  ];

  // Fonctionnalités principales de l'IA
  const features = [
    {
      title: "Génération de code",
      description: "Création automatique de code source et assistance au développement.",
      icon: <Code size={20} />
    },
    {
      title: "Création musicale",
      description: "Composition et génération de musique par intelligence artificielle.",
      icon: <Layers size={20} />
    },
    {
      title: "Graphisme et design",
      description: "Génération d'images, édition automatisée et création visuelle.",
      icon: <Lightbulb size={20} />
    },
    {
      title: "Résumés et rédaction",
      description: "Synthèse de textes, création de contenu et assistance rédactionnelle.",
      icon: <Laptop size={20} />
    },
    {
      title: "Traitement des données",
      description: "Analyse, classification et interprétation de grands volumes de données.",
      icon: <Server size={20} />
    },
    {
      title: "Prédiction et recommandation",
      description: "Systèmes prédictifs et moteurs de recommandation personnalisés.",
      icon: <Gauge size={20} />
    }
  ];

  return (
    <>
      <Hero
        title="L'Intelligence Artificielle Aujourd'hui et Demain"
        subtitle="Explorez les fondements, les applications et l'avenir de l'IA à travers un guide complet et accessible."
        primaryAction={{ label: "Débuter l'exploration", href: "/niveaux-ia" }}
        secondaryAction={{ label: "Découvrir les ressources", href: "/ressources" }}
      />

      {/* Section Introduction */}
      <section className="section-container">
        <SectionHeading
          pretitle="Introduction"
          title="Comprendre l'intelligence artificielle"
          description="L'intelligence artificielle (IA) transforme notre façon de vivre, de travailler et d'interagir. Nous vous proposons un parcours à travers les concepts fondamentaux, les technologies actuelles et les perspectives futures."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="glass-card rounded-2xl p-8 animate-slide-left">
            <h3 className="heading-md mb-4">Qu'est-ce que l'IA ?</h3>
            <p className="mb-4">
              L'intelligence artificielle désigne la capacité d'une machine à imiter des fonctions cognitives 
              humaines comme l'apprentissage, la résolution de problèmes et la reconnaissance de formes.
            </p>
            <p>
              Plus qu'une simple technologie, l'IA représente une nouvelle approche du traitement de l'information 
              et de l'automatisation, touchant des domaines aussi variés que la médecine, la finance, 
              les transports et la création de contenu.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 animate-slide-right">
            <h3 className="heading-md mb-4">Pourquoi s'y intéresser ?</h3>
            <p className="mb-4">
              L'IA n'est plus un sujet réservé aux experts. Elle façonne notre quotidien à travers 
              les assistants virtuels, les systèmes de recommandation, les outils de création et les 
              technologies que nous utilisons chaque jour.
            </p>
            <p>
              Comprendre l'IA permet de saisir les transformations actuelles, d'anticiper les évolutions futures 
              et de participer de manière éclairée aux débats sociétaux qu'elle suscite.
            </p>
          </div>
        </div>
      </section>

      {/* Section Thèmes */}
      <section className="section-container py-20 bg-secondary/30">
        <SectionHeading
          pretitle="Thématiques"
          title="Explorez les différentes facettes de l'IA"
          description="Notre guide couvre l'ensemble du spectre de l'intelligence artificielle, des concepts fondamentaux aux applications les plus avancées."
          center
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {mainTopics.map((topic) => (
            <Card
              key={topic.title}
              title={topic.title}
              description={topic.description}
              icon={topic.icon}
              link={topic.link}
              delay={topic.delay}
            />
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in">
          <Link
            to="/cas-usage"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
          >
            Voir tous les sujets
          </Link>
        </div>
      </section>

      {/* Section Applications */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-left">
            <SectionHeading
              pretitle="Applications"
              title="Des usages concrets dans tous les domaines"
              description="L'intelligence artificielle transforme profondément de nombreux secteurs en apportant des solutions innovantes à des problèmes complexes."
            />
            <Link
              to="/cas-usage"
              className="inline-flex items-center mt-4 text-primary hover:underline"
            >
              Explorer les cas d'usage →
            </Link>
          </div>
          
          <FeatureGrid features={features} columns={2} />
        </div>
      </section>

      {/* Section Ressources */}
      <section className="section-container bg-secondary/30 rounded-3xl my-12">
        <SectionHeading
          pretitle="Ressources"
          title="Annuaire des services et solutions d'IA"
          description="Découvrez notre sélection d'outils et de plateformes d'intelligence artificielle, disponibles en ligne ou en local."
          center
        />

        <div className="mt-8 text-center">
          <p className="mb-6 text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Notre annuaire comprend des solutions pour la génération de texte, d'image, 
            de code, ainsi que des outils d'analyse de données et d'automatisation.
          </p>
          
          <Link
            to="/ressources"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors animate-fade-in"
          >
            Consulter l'annuaire
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
