
import { SectionHeading } from "@/components";
import { ExternalLink, Mail, Users, FileText, Book, School, Code, Search } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container py-12 max-w-5xl mx-auto">
      <SectionHeading
        title="À propos d'IA Explorer"
        description="Découvrez notre mission, notre équipe et comment nous contribuons à rendre l'intelligence artificielle plus accessible et compréhensible pour tous."
      />

      <div className="space-y-12 mt-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-primary">Notre mission</h2>
          <p className="text-muted-foreground text-lg">
            IA Explorer a été créé avec un objectif clair : démystifier l'intelligence artificielle et la rendre accessible à tous. 
            Dans un monde où l'IA transforme rapidement notre société, nous croyons qu'il est essentiel que chacun puisse comprendre 
            ses principes fondamentaux, ses applications et ses implications éthiques.
          </p>
          <p className="text-muted-foreground text-lg">
            Notre plateforme éducative vise à fournir des ressources complètes, actualisées et accessibles sur tous les aspects de l'IA, 
            des concepts de base aux développements les plus récents.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-primary">Notre approche</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="mt-1">
                <Book className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Éducation accessible</h3>
                <p className="text-muted-foreground">Nous expliquons les concepts complexes de l'IA de manière claire et compréhensible, sans sacrifier la précision technique.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Recherche approfondie</h3>
                <p className="text-muted-foreground">Chaque article et ressource est le résultat d'une recherche minutieuse pour garantir des informations précises et à jour.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Exemples pratiques</h3>
                <p className="text-muted-foreground">Nous illustrons les concepts théoriques avec des exemples concrets et des cas d'usage réels pour faciliter la compréhension.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Ressources complètes</h3>
                <p className="text-muted-foreground">Notre bibliothèque de ressources couvre tous les aspects de l'IA, des fondamentaux aux applications spécialisées.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-primary">L'auteur</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="aspect-square rounded-full bg-muted flex items-center justify-center w-40 h-40 overflow-hidden">
              <Users className="h-20 w-20 text-muted-foreground" />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Geoffroy Streit</h3>
              <p className="text-muted-foreground">
                Passionné par l'intelligence artificielle et ses applications, Geoffroy Streit a créé IA Explorer pour partager ses connaissances
                et contribuer à l'éducation du public sur cette technologie transformative. Fort d'une expertise dans le domaine, il s'efforce
                de présenter l'information de manière claire, précise et accessible à tous les niveaux de compréhension.
              </p>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:geoffroy.streit@gmail.com" className="text-primary hover:underline">
                  geoffroy.streit@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-primary">Contribuer</h2>
          <p className="text-muted-foreground text-lg">
            IA Explorer est un projet en constante évolution. Si vous souhaitez contribuer ou suggérer des améliorations, n'hésitez pas à nous contacter.
            Votre feedback est précieux pour nous aider à améliorer cette ressource éducative.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <Button asChild>
              <a href="mailto:geoffroy.streit@gmail.com">
                Contacter l'auteur
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/ressources">
                Découvrir nos ressources
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
