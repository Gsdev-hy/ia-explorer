
import React, { useState } from 'react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { FeatureGrid } from '@/components';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  ImagePlus, Music, Code, Video, 
  MessagesSquare, FileText, Volume2, 
  Pencil, Palette, Braces, Sparkles, 
  PanelTop, Lightbulb, Workflow, 
  ArrowRightCircle
} from 'lucide-react';
import PromptExamplesSection from '@/components/multimodal/PromptExamplesSection';
import AICreationShowcase from '@/components/multimodal/AICreationShowcase';
import InteractiveWorkflow from '@/components/multimodal/InteractiveWorkflow';

/**
 * Page dédiée aux IA multimodales et à la création assistée par IA
 * @returns {JSX.Element} Le composant de la page IA Multimodale
 */
const IAMultimodale = () => {
  const [activeTab, setActiveTab] = useState("applications");

  const multimodalExamples = [
    {
      title: "Génération d'images",
      description: "Création d'images à partir de descriptions textuelles avec Midjourney, DALL-E, Stable Diffusion. Utilisez des prompts détaillés et spécifiez le style artistique souhaité.",
      icon: <ImagePlus size={24} className="text-fuchsia-500" />,
      link: "#generation-images"
    },
    {
      title: "Création musicale",
      description: "Composition de musique avec Suno AI, MusicLM, Mubert. Décrivez l'ambiance, le genre et les instruments pour obtenir les meilleurs résultats.",
      icon: <Music size={24} className="text-blue-500" />,
      link: "#creation-musicale"
    },
    {
      title: "Génération de code",
      description: "Assistance à la programmation avec GitHub Copilot, CodeWhisperer. Commentez clairement ce que vous souhaitez accomplir pour guider l'IA efficacement.",
      icon: <Code size={24} className="text-emerald-500" />,
      link: "#generation-code"
    },
    {
      title: "Création vidéo",
      description: "Production de vidéos avec Runway, Synthesia, D-ID. Combinez texte, images et narration pour des résultats optimaux.",
      icon: <Video size={24} className="text-amber-500" />,
      link: "#creation-video"
    },
    {
      title: "Conversation multimodale",
      description: "Dialogues intégrant texte, images et autres médias avec GPT-4V, Claude Opus, Gemini. Posez des questions précises sur les éléments visuels.",
      icon: <MessagesSquare size={24} className="text-indigo-500" />,
      link: "#conversation-multimodale"
    },
    {
      title: "Rédaction assistée",
      description: "Aide à l'écriture avec ChatGPT, Claude, Notion AI. Définissez clairement le ton, le style et le public cible dans vos instructions.",
      icon: <FileText size={24} className="text-purple-500" />,
      link: "#redaction-assistee"
    },
    {
      title: "Synthèse vocale",
      description: "Conversion de texte en parole avec ElevenLabs, Resemble AI, Play.ht. Ajustez l'émotion et le rythme pour une narration naturelle.",
      icon: <Volume2 size={24} className="text-pink-500" />,
      link: "#synthese-vocale"
    },
    {
      title: "Design graphique",
      description: "Création de designs et logos avec Canva AI, Adobe Firefly. Combinez des instructions textuelles avec des références visuelles pour guider l'IA.",
      icon: <Palette size={24} className="text-rose-500" />,
      link: "#design-graphique"
    },
    {
      title: "Édition de contenu",
      description: "Amélioration et correction de textes avec Grammarly, DeepL Write. Spécifiez le niveau de formalité et le type de modifications souhaités.",
      icon: <Pencil size={24} className="text-cyan-500" />,
      link: "#edition-contenu"
    },
    {
      title: "Automatisation de tâches",
      description: "Intégration d'IA dans les workflows avec Zapier AI, Make.com. Utilisez des descriptifs clairs des actions à automatiser pour de meilleurs résultats.",
      icon: <Braces size={24} className="text-orange-500" />,
      link: "#automatisation-taches"
    },
  ];

  return (
    <>
      <Hero
        title="IA et Création Multimodale"
        subtitle="Découvrez comment les technologies d'intelligence artificielle transforment la création dans tous les domaines artistiques et techniques."
        primaryAction={{
          label: "Explorer les exemples",
          href: "#applications-creatives"
        }}
        secondaryAction={{
          label: "Astuces de prompting",
          href: "#prompting-efficace"
        }}
      />

      <section id="applications-creatives" className="section-container">
        <SectionHeading
          pretitle="Applications créatives"
          title="Les IA multimodales en action"
          description="Les IA actuelles peuvent générer et manipuler divers types de médias, ouvrant de nouvelles possibilités créatives dans de nombreux domaines."
          center
        />

        <Tabs defaultValue="applications" className="mt-10 mb-8" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-xl">
              <TabsTrigger value="applications" className="flex gap-2 items-center">
                <Sparkles size={16} />
                <span>Applications</span>
              </TabsTrigger>
              <TabsTrigger value="fonctionnement" className="flex gap-2 items-center">
                <PanelTop size={16} />
                <span>Fonctionnement</span>
              </TabsTrigger>
              <TabsTrigger value="showcase" className="flex gap-2 items-center">
                <Lightbulb size={16} />
                <span>Exemples</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="applications" className="animate-fade-in">
            <FeatureGrid features={multimodalExamples} columns={3} />
          </TabsContent>
          
          <TabsContent value="fonctionnement" className="animate-fade-in space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="heading-sm mb-4 flex items-center gap-2">
                  <Workflow className="text-primary" size={20} />
                  Comment fonctionnent les IA multimodales
                </h3>
                <p className="text-muted-foreground mb-4">
                  Les IA multimodales sont capables de traiter et générer différents types de médias (texte, image, son, vidéo) 
                  en utilisant une architecture neuronale unifiée qui comprend des encodeurs et décodeurs spécialisés pour chaque modalité.
                </p>
                <p className="text-muted-foreground">
                  Elles transforment différents types d'entrées en représentations vectorielles (embeddings) partageant 
                  un même espace latent, permettant ainsi des conversions et des interactions entre modalités.
                </p>
              </div>

              <InteractiveWorkflow />
            </div>
          </TabsContent>
          
          <TabsContent value="showcase" className="animate-fade-in">
            <AICreationShowcase />
          </TabsContent>
        </Tabs>

        <div className="my-10 flex justify-center">
          <Button asChild size="lg" className="rounded-full animate-pulse">
            <a href="#prompting-efficace" className="flex items-center gap-2">
              <span>Découvrir l'art du prompting</span>
              <ArrowRightCircle size={18} />
            </a>
          </Button>
        </div>
      </section>

      <section id="prompting-efficace" className="section-container bg-muted/30 dark:bg-secondary/10 py-16 rounded-3xl">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            pretitle="Astuces"
            title="L'art du prompting efficace"
            description="Maîtriser la façon de communiquer avec les IA est essentiel pour obtenir les meilleurs résultats. Voici quelques conseils clés et exemples concrets."
            center
          />

          <PromptExamplesSection />
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
