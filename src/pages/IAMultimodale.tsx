
import React from 'react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { FeatureGrid } from '@/components';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ImagePlus, Music, Code, Video, 
  MessagesSquare, FileText, Volume2, 
  Pencil, Palette, Braces
} from 'lucide-react';

/**
 * Page dédiée aux IA multimodales et à la création assistée par IA
 * @returns {JSX.Element} Le composant de la page IA Multimodale
 */
const IAMultimodale = () => {
  const multimodalExamples = [
    {
      title: "Génération d'images",
      description: "Création d'images à partir de descriptions textuelles avec Midjourney, DALL-E, Stable Diffusion. Utilisez des prompts détaillés et spécifiez le style artistique souhaité.",
      icon: <ImagePlus size={24} />,
      link: "#"
    },
    {
      title: "Création musicale",
      description: "Composition de musique avec Suno AI, MusicLM, Mubert. Décrivez l'ambiance, le genre et les instruments pour obtenir les meilleurs résultats.",
      icon: <Music size={24} />,
      link: "#"
    },
    {
      title: "Génération de code",
      description: "Assistance à la programmation avec GitHub Copilot, CodeWhisperer. Commentez clairement ce que vous souhaitez accomplir pour guider l'IA efficacement.",
      icon: <Code size={24} />,
      link: "#"
    },
    {
      title: "Création vidéo",
      description: "Production de vidéos avec Runway, Synthesia, D-ID. Combinez texte, images et narration pour des résultats optimaux.",
      icon: <Video size={24} />,
      link: "#"
    },
    {
      title: "Conversation multimodale",
      description: "Dialogues intégrant texte, images et autres médias avec GPT-4V, Claude Opus, Gemini. Posez des questions précises sur les éléments visuels.",
      icon: <MessagesSquare size={24} />,
      link: "#"
    },
    {
      title: "Rédaction assistée",
      description: "Aide à l'écriture avec ChatGPT, Claude, Notion AI. Définissez clairement le ton, le style et le public cible dans vos instructions.",
      icon: <FileText size={24} />,
      link: "#"
    },
    {
      title: "Synthèse vocale",
      description: "Conversion de texte en parole avec ElevenLabs, Resemble AI, Play.ht. Ajustez l'émotion et le rythme pour une narration naturelle.",
      icon: <Volume2 size={24} />,
      link: "#"
    },
    {
      title: "Design graphique",
      description: "Création de designs et logos avec Canva AI, Adobe Firefly. Combinez des instructions textuelles avec des références visuelles pour guider l'IA.",
      icon: <Palette size={24} />,
      link: "#"
    },
    {
      title: "Édition de contenu",
      description: "Amélioration et correction de textes avec Grammarly, DeepL Write. Spécifiez le niveau de formalité et le type de modifications souhaités.",
      icon: <Pencil size={24} />,
      link: "#"
    },
    {
      title: "Automatisation de tâches",
      description: "Intégration d'IA dans les workflows avec Zapier AI, Make.com. Utilisez des descriptifs clairs des actions à automatiser pour de meilleurs résultats.",
      icon: <Braces size={24} />,
      link: "#"
    },
  ];

  const promptingTips = [
    {
      title: "Soyez spécifique",
      description: "Plus vos instructions sont détaillées, meilleurs seront les résultats. Précisez le style, le ton, et les caractéristiques souhaitées.",
    },
    {
      title: "Itérez progressivement",
      description: "Ne cherchez pas la perfection du premier coup. Commencez avec une demande simple, puis affinez progressivement en fonction des résultats.",
    },
    {
      title: "Utilisez un langage visuel",
      description: "Pour la génération d'images, utilisez un vocabulaire riche en détails visuels et références artistiques concrètes.",
    },
    {
      title: "Combinez les techniques",
      description: "Associez différentes IA complémentaires pour obtenir des résultats plus riches (par ex. texte → image → vidéo → musique).",
    },
    {
      title: "Exploitez les références",
      description: "Fournissez des exemples ou des références pour guider l'IA vers le style ou le résultat souhaité.",
    }
  ];

  return (
    <>
      <Hero
        title="IA et Création Multimodale"
        subtitle="Découvrez comment les technologies d'intelligence artificielle transforment la création dans tous les domaines artistiques et techniques."
      />

      <section className="section-container">
        <SectionHeading
          pretitle="Applications créatives"
          title="Les IA multimodales en action"
          description="Les IA actuelles peuvent générer et manipuler divers types de médias, ouvrant de nouvelles possibilités créatives dans de nombreux domaines."
          center
        />

        <div className="mt-10">
          <FeatureGrid features={multimodalExamples} columns={3} />
        </div>
      </section>

      <section className="section-container bg-muted/30 dark:bg-secondary/10 py-16 rounded-3xl">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            pretitle="Astuces"
            title="L'art du prompting efficace"
            description="Maîtriser la façon de communiquer avec les IA est essentiel pour obtenir les meilleurs résultats. Voici quelques conseils clés."
            center
          />

          <div className="mt-8 space-y-6">
            {promptingTips.map((tip, index) => (
              <div key={index} className="glass-card p-6 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <h3 className="heading-sm mb-2">{tip.title}</h3>
                <p className="text-muted-foreground">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            pretitle="Explorer"
            title="Découvrir d'autres aspects de l'IA"
            description="Approfondissez vos connaissances sur l'intelligence artificielle en explorant les sections suivantes."
            center
          />

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="animate-fade-in">
              <Link to="/ethique">
                Éthique de l'IA
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <Link to="/types-ia">
                Types d'IA
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Link to="/machine-learning">
                Machine Learning
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default IAMultimodale;
