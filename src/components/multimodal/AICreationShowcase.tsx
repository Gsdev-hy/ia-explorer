
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ImagePlus, 
  Music, 
  MessageSquare, 
  Video,
  ExternalLink
} from 'lucide-react';

/**
 * Composant présentant une galerie d'exemples de créations par IA
 */
const AICreationShowcase = () => {
  const showcaseItems = [
    {
      title: "Illustrations génératives",
      category: "Image",
      description: "Série d'illustrations créées avec DALL-E 3 à partir de prompts détaillés",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Illustration+Générative",
      prompt: "Illustration d'un explorateur futuriste dans une jungle alien luminescente, avec des plantes bioluminescentes et des créatures étranges. Style mélange d'art conceptuel de film et d'aquarelle, palette dominante bleu-violet.",
      tools: ["DALL-E 3", "Midjourney", "Photoshop"],
      link: "#",
      icon: <ImagePlus className="h-5 w-5 text-fuchsia-500" />
    },
    {
      title: "Composition ambient",
      category: "Audio",
      description: "Pièce musicale générative créée à partir d'une description d'ambiance",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Composition+Audio",
      prompt: "Crée une pièce ambient atmosphérique inspirée par une forêt nordique sous la neige. Utilise des pad synthétiques éthérés, des field recordings de vent et de pas dans la neige, et de subtils éléments de piano distant.",
      tools: ["Suno AI", "Soundraw", "Ableton Live"],
      link: "#",
      icon: <Music className="h-5 w-5 text-blue-500" />
    },
    {
      title: "Court-métrage généré par IA",
      category: "Vidéo",
      description: "Séquence vidéo produite à partir d'un script et d'images de référence",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Vidéo+Générative",
      prompt: "Crée une courte séquence vidéo montrant une transformation progressive d'une graine en arbre, avec un time-lapse accéléré, une esthétique cinématographique et des détails sur la croissance des racines.",
      tools: ["Runway Gen-2", "Pika Labs", "DaVinci Resolve"],
      link: "#",
      icon: <Video className="h-5 w-5 text-amber-500" />
    },
    {
      title: "Dialogue multimodal",
      category: "Conversation",
      description: "Échange avec une IA utilisant texte et images pour résoudre un problème",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Conversation+Multimodale",
      prompt: "[Image d'un circuit électronique] \"Peux-tu identifier les composants de ce circuit et m'expliquer leur fonction? Ensuite, suggère des améliorations possibles pour optimiser l'efficacité énergétique.\"",
      tools: ["GPT-4 Vision", "Claude Opus", "Gemini"],
      link: "#",
      icon: <MessageSquare className="h-5 w-5 text-indigo-500" />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {showcaseItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden h-full flex flex-col">
            <div className="relative w-full aspect-video bg-muted">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
              <Badge variant="secondary" className="absolute top-3 left-3 flex items-center gap-1">
                {item.icon}
                {item.category}
              </Badge>
            </div>
            <CardHeader className="pb-2">
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="bg-secondary/20 p-3 rounded-lg mb-3">
                <p className="text-sm font-mono italic">"{item.prompt}"</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {item.tools.map((tool, i) => (
                  <Badge key={i} variant="outline">{tool}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="ghost" size="sm" className="gap-2" asChild>
                <a href={item.link}>
                  <span>Voir l'exemple</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default AICreationShowcase;
