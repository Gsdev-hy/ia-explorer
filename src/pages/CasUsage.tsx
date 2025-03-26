
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import { Card } from '@/components/Card';
import { 
  Code, Music, VideoIcon, Book, Stethoscope, 
  ShoppingCart, BarChart3, Search, MessageSquare, 
  Image, Car, Factory
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

/**
 * Page sur les cas d'usage de l'IA
 * @returns {JSX.Element} Le composant de la page Cas d'Usage
 */
const CasUsage = () => {
  const useCases = [
    {
      title: "Développement logiciel",
      description: "Génération de code, détection de bugs, complétion intelligente et refactoring automatique.",
      icon: <Code size={36} />,
      delay: 0
    },
    {
      title: "Création musicale",
      description: "Composition assistée par IA, mastering automatique et génération de nouveaux instruments.",
      icon: <Music size={36} />,
      delay: 100
    },
    {
      title: "Production vidéo",
      description: "Édition automatisée, génération de sous-titres et amélioration de la résolution.",
      icon: <VideoIcon size={36} />,
      delay: 200
    },
    {
      title: "Éducation",
      description: "Tuteurs virtuels personnalisés, évaluation automatique et création de contenu pédagogique.",
      icon: <Book size={36} />,
      delay: 300
    },
    {
      title: "Santé",
      description: "Diagnostic assisté par IA, découverte de médicaments et imagerie médicale avancée.",
      icon: <Stethoscope size={36} />,
      delay: 400
    },
    {
      title: "E-commerce",
      description: "Recommandations personnalisées, prévisions de demande et service client automatisé.",
      icon: <ShoppingCart size={36} />,
      delay: 500
    }
  ];

  const emergingUseCases = [
    {
      title: "Analyse prédictive",
      description: "L'IA permet d'analyser de vastes ensembles de données pour prévoir des tendances et comportements futurs, optimisant la prise de décision dans les entreprises.",
      icon: <BarChart3 size={36} />
    },
    {
      title: "Recherche sémantique",
      description: "Les moteurs de recherche exploitent l'IA pour comprendre le contexte et l'intention derrière les requêtes, offrant des résultats plus pertinents et personnalisés.",
      icon: <Search size={36} />
    },
    {
      title: "Assistants virtuels",
      description: "Les agents conversationnels enrichis par l'IA peuvent désormais comprendre le langage naturel et effectuer des tâches complexes en interagissant naturellement avec les utilisateurs.",
      icon: <MessageSquare size={36} />
    },
    {
      title: "Génération d'images",
      description: "Les modèles de diffusion permettent de créer des images hautement réalistes à partir de descriptions textuelles, révolutionnant les industries créatives.",
      icon: <Image size={36} />
    },
    {
      title: "Véhicules autonomes",
      description: "L'IA alimente les systèmes de conduite autonome qui perçoivent leur environnement et prennent des décisions de navigation en temps réel.",
      icon: <Car size={36} />
    },
    {
      title: "Industrie 4.0",
      description: "L'intelligence artificielle transforme la production industrielle par la maintenance prédictive, l'optimisation des processus et l'automatisation avancée.",
      icon: <Factory size={36} />
    }
  ];

  return (
    <>
      <Hero
        title="Cas d'usage de l'IA"
        subtitle="Découvrez comment l'intelligence artificielle transforme différents secteurs et applications à travers des cas d'usage concrets."
      />

      <section className="section-container">
        <SectionHeading
          pretitle="Applications concrètes"
          title="L'IA en action"
          description="L'intelligence artificielle révolutionne de nombreux domaines avec des applications concrètes qui transforment notre façon de travailler et de vivre."
          center
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              title={useCase.title}
              description={useCase.description}
              icon={useCase.icon}
              delay={useCase.delay}
              className="h-full"
            />
          ))}
        </div>
      </section>

      <section className="section-container bg-primary/5 py-16 rounded-3xl">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            pretitle="Études de cas"
            title="Impact transformateur"
            description="Explorons quelques exemples illustrant comment l'IA révolutionne différents secteurs avec des résultats concrets."
            center
          />

          <div className="mt-12 space-y-8">
            <div className="glass-card rounded-xl p-6 md:p-8 animate-fade-in">
              <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-2">
                  <div className="aspect-video bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7')] bg-cover bg-center rounded-lg mb-4"></div>
                  <h3 className="text-lg font-semibold">GitHub Copilot</h3>
                  <p className="text-sm text-muted-foreground">Assistant de programmation basé sur l'IA</p>
                </div>
                <div className="md:col-span-3">
                  <h4 className="text-xl font-medium mb-3">Révolution du développement logiciel</h4>
                  <p className="text-muted-foreground mb-4">
                    GitHub Copilot utilise un modèle d'IA avancé pour suggérer des lignes de code ou des fonctions entières 
                    en temps réel, directement dans l'éditeur de code du développeur.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs mt-0.5">✓</div>
                      <p className="text-sm">Augmentation de la productivité des développeurs jusqu'à 55%</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs mt-0.5">✓</div>
                      <p className="text-sm">Réduction du temps consacré aux tâches répétitives</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs mt-0.5">✓</div>
                      <p className="text-sm">Démocratisation de la programmation pour les débutants</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 md:p-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-2">
                  <div className="aspect-video bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')] bg-cover bg-center rounded-lg mb-4"></div>
                  <h3 className="text-lg font-semibold">Watson for Oncology</h3>
                  <p className="text-sm text-muted-foreground">IA d'IBM pour le diagnostic du cancer</p>
                </div>
                <div className="md:col-span-3">
                  <h4 className="text-xl font-medium mb-3">Transformation des soins de santé</h4>
                  <p className="text-muted-foreground mb-4">
                    Watson for Oncology analyse les dossiers médicaux des patients et la littérature médicale mondiale pour 
                    aider les oncologues à identifier les options de traitement personnalisées les plus pertinentes.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs mt-0.5">✓</div>
                      <p className="text-sm">Concordance de 93% avec les recommandations des experts</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs mt-0.5">✓</div>
                      <p className="text-sm">Réduction du temps de diagnostic et amélioration de la précision</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs mt-0.5">✓</div>
                      <p className="text-sm">Accès aux dernières recherches médicales pour les hôpitaux du monde entier</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container">
        <SectionHeading
          pretitle="Tendances émergentes"
          title="Nouveaux horizons"
          description="Découvrez les applications émergentes de l'IA qui façonnent l'avenir de différents secteurs."
          center
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {emergingUseCases.map((useCase, index) => (
            <div key={index} className="flex gap-4 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                {useCase.icon}
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            pretitle="Explorer"
            title="Découvrez plus"
            description="Approfondissez vos connaissances en explorant les autres sections du site."
            center
          />

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="animate-fade-in">
              <Link to="/machine-learning">
                Machine Learning
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <Link to="/types-ia">
                Types d'IA
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Link to="/ethique">
                Éthique
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CasUsage;
