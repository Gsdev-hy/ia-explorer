
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import { FeatureGrid } from '@/components';
import { 
  Shield, AlertTriangle, Users, Scale, Sparkles, 
  GraduationCap, ChevronsRight, BrainCircuit
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * Page sur l'éthique de l'IA
 * @returns {JSX.Element} Le composant de la page Éthique
 */
const Ethique = () => {
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

  const ethicalChallenges = [
    {
      question: "Comment garantir l'équité algorithmique?",
      answer: "L'équité algorithmique consiste à s'assurer que les systèmes d'IA ne perpétuent pas les biais existants. Cela implique d'utiliser des jeux de données diversifiés, d'auditer régulièrement les modèles pour détecter les biais et de mettre en place des mécanismes de correction. Il est également important d'impliquer des équipes pluridisciplinaires dans le développement des systèmes d'IA."
    },
    {
      question: "Comment concilier IA et respect de la vie privée?",
      answer: "Le respect de la vie privée dans l'IA nécessite l'application de principes comme la minimisation des données, le consentement éclairé, et l'anonymisation. Des techniques comme l'apprentissage fédéré permettent d'entraîner des modèles sans centraliser les données personnelles. La conformité aux réglementations comme le RGPD est également essentielle."
    },
    {
      question: "Quelle gouvernance pour l'IA?",
      answer: "La gouvernance de l'IA implique la création de cadres réglementaires, d'organismes de surveillance et de normes éthiques. Elle doit être à la fois internationale pour éviter les zones de non-droit, mais aussi adaptée aux contextes locaux. Les parties prenantes incluent les gouvernements, les entreprises, les chercheurs, et la société civile."
    },
    {
      question: "Comment attribuer la responsabilité des décisions de l'IA?",
      answer: "L'attribution de responsabilité est complexe dans les systèmes d'IA, notamment avec l'opacité de certains modèles. Des approches incluent la responsabilité du concepteur, de l'utilisateur, ou partagée. Des mécanismes d'explicabilité et de traçabilité sont nécessaires pour établir des chaînes de responsabilité claires."
    },
    {
      question: "Faut-il réglementer l'IA générative?",
      answer: "La réglementation de l'IA générative soulève des questions sur l'équilibre entre innovation et sécurité. Des cadres comme l'AI Act européen proposent une approche basée sur les risques. Les enjeux incluent la désinformation, les droits d'auteur, et l'impact sur l'emploi. L'autorégulation du secteur doit être complétée par des cadres législatifs adaptés."
    },
  ];

  return (
    <>
      <Hero
        title="Éthique de l'IA"
        subtitle="Explorer les enjeux éthiques et sociétaux soulevés par le développement et l'utilisation de l'intelligence artificielle."
      />

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

      <section className="section-container bg-secondary/20 rounded-3xl py-16">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            pretitle="Défis"
            title="Questions éthiques majeures"
            description="Le développement de l'IA soulève des questions éthiques complexes qui nécessitent une réflexion approfondie et des réponses nuancées."
            center
          />

          <div className="mt-10 glass-card rounded-xl p-6">
            <Accordion type="single" collapsible className="w-full">
              {ethicalChallenges.map((challenge, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium text-left">
                    {challenge.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {challenge.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              pretitle="Réglementations"
              title="Cadres juridiques et éthiques"
              description="Face aux enjeux éthiques de l'IA, différentes réglementations et initiatives ont émergé pour encadrer le développement et l'utilisation de ces technologies."
            />
            
            <ul className="mt-6 space-y-4">
              <li className="flex gap-2">
                <ChevronsRight className="text-primary mt-1 shrink-0" />
                <div>
                  <span className="font-medium">AI Act européen</span> - Premier cadre juridique complet sur l'IA au monde, basé sur une approche par niveau de risque
                </div>
              </li>
              <li className="flex gap-2">
                <ChevronsRight className="text-primary mt-1 shrink-0" />
                <div>
                  <span className="font-medium">RGPD</span> - Réglementation européenne sur la protection des données personnelles avec des implications pour les systèmes d'IA
                </div>
              </li>
              <li className="flex gap-2">
                <ChevronsRight className="text-primary mt-1 shrink-0" />
                <div>
                  <span className="font-medium">Blueprint for an AI Bill of Rights (USA)</span> - Document proposant des principes pour protéger les citoyens face à l'IA
                </div>
              </li>
              <li className="flex gap-2">
                <ChevronsRight className="text-primary mt-1 shrink-0" />
                <div>
                  <span className="font-medium">Initiatives d'autorégulation</span> - Chartes éthiques et principes adoptés par des entreprises et organisations du secteur
                </div>
              </li>
            </ul>
          </div>
          
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6')] bg-cover bg-center opacity-20"></div>
            <div className="relative z-10">
              <h3 className="heading-md mb-4">Éducation et sensibilisation</h3>
              <p className="text-muted-foreground mb-6">
                L'éducation aux enjeux éthiques de l'IA est essentielle pour former des citoyens, professionnels et décideurs conscients des implications de ces technologies.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <GraduationCap className="text-primary h-10 w-10" />
                <div>
                  <h4 className="font-medium">Formation académique</h4>
                  <p className="text-sm text-muted-foreground">Intégration de l'éthique de l'IA dans les cursus technologiques</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Users className="text-primary h-10 w-10" />
                <div>
                  <h4 className="font-medium">Sensibilisation du public</h4>
                  <p className="text-sm text-muted-foreground">Programmes d'information sur les impacts sociétaux de l'IA</p>
                </div>
              </div>
            </div>
          </div>
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
              <Link to="/cas-usage">
                Cas d'usage
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ethique;
