
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import { ChevronRight, BookOpen, Lightbulb, Sparkles, BarChart3, Brain } from "lucide-react";

/**
 * Page d'accueil du site AI Avenir
 * @returns {JSX.Element} Le composant de la page d'accueil
 */
const Index = () => {
  const keyFeatures = [
    {
      icon: <Brain className="w-12 h-12 text-primary" />,
      title: "Niveaux d'IA",
      description: "Découvrez les 7 niveaux d'intelligence artificielle, de l'IA réactive aux systèmes conscients.",
      link: "/niveaux-ia"
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-primary" />,
      title: "Types d'IA",
      description: "Explorez les différentes technologies d'IA comme les LLM, RAG, CNN, NLP et plus encore.",
      link: "/types-ia"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      title: "Machine Learning",
      description: "Comprenez les principes fondamentaux du machine learning et ses différentes approches.",
      link: "/machine-learning"
    },
    {
      icon: <Sparkles className="w-12 h-12 text-primary" />,
      title: "Cas d'usage",
      description: "Découvrez comment l'IA révolutionne différents domaines comme la génération de code, la musique, et plus.",
      link: "/cas-usage"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-primary" />,
      title: "Éthique",
      description: "Explorez les questions éthiques liées au développement et à l'utilisation de l'IA.",
      link: "/ethique"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-background to-secondary/20">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold !leading-tight animate-slide-up">
                Comprendre l'IA <span className="text-primary">simplement</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground animate-slide-up" style={{ animationDelay: '100ms' }}>
                Explorez le monde fascinant de l'intelligence artificielle à travers nos ressources pédagogiques accessibles à tous.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 animate-slide-up" style={{ animationDelay: '200ms' }}>
                <Button asChild size="lg">
                  <Link to="/niveaux-ia">
                    Explorer les niveaux d'IA
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/ressources">
                    Consulter nos ressources
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-64 md:h-auto rounded-lg bg-gradient-to-tr from-primary/10 to-primary/30 p-1 animate-fade-in">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1677442135072-d406c3ce761a')] bg-cover bg-center rounded-lg opacity-70 mix-blend-overlay"></div>
              <div className="relative h-full w-full rounded-lg border border-primary/20 backdrop-blur-sm flex items-center justify-center p-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">L'avenir est IA</h3>
                  <p className="text-muted-foreground">Préparez-vous aux technologies qui transforment notre monde</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key topics section */}
      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto max-w-6xl">
          <SectionHeading 
            pretitle="Explorez nos thématiques"
            title="Une approche complète de l'IA"
            description="Parcourez nos sections thématiques pour comprendre tous les aspects de l'intelligence artificielle, des fondamentaux techniques aux considérations éthiques."
            center={true}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {keyFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="relative group bg-card rounded-lg border p-6 hover:shadow-md transition-all animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <Button variant="link" className="p-0" asChild>
                  <Link to={feature.link} className="flex items-center gap-1">
                    En savoir plus <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-primary/5 border-y">
        <div className="container px-4 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Prêt à explorer le monde de l'IA ?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
            Commencez votre voyage à travers les différents niveaux et types d'intelligence artificielle, et découvrez comment cette technologie révolutionne notre monde.
          </p>
          <Button size="lg" asChild className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <Link to="/niveaux-ia">
              Commencer l'exploration
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
