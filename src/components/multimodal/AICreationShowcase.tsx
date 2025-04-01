
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
  ExternalLink,
  Sparkles,
  FileCode,
  Zap
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
      imagePath: "/lovable-uploads/93b1a36e-0fc6-4f70-8be1-d27437de628c.png", // L'image téléchargée
      prompt: "Illustration d'un explorateur futuriste dans une jungle alien luminescente, avec des plantes bioluminescentes et des créatures étranges. Style mélange d'art conceptuel de film et d'aquarelle, palette dominante bleu-violet.",
      tools: ["DALL-E 3", "Midjourney", "Photoshop"],
      link: "https://openai.com/blog/dall-e/",
      icon: <ImagePlus className="h-5 w-5 text-fuchsia-500" aria-hidden="true" />
    },
    {
      title: "Composition ambient",
      category: "Audio",
      description: "Pièce musicale générative créée à partir d'une description d'ambiance",
      imagePath: "/placeholder.svg",
      customIcon: <Sparkles className="w-20 h-20 text-blue-500/70" aria-hidden="true" />,
      prompt: "Crée une pièce ambient atmosphérique inspirée par une forêt nordique sous la neige. Utilise des pad synthétiques éthérés, des field recordings de vent et de pas dans la neige, et de subtils éléments de piano distant.",
      tools: ["Suno AI", "Soundraw", "Ableton Live"],
      link: "https://www.suno.ai/",
      icon: <Music className="h-5 w-5 text-blue-500" aria-hidden="true" />
    },
    {
      title: "Court-métrage généré par IA",
      category: "Vidéo",
      description: "Séquence vidéo produite à partir d'un script et d'images de référence",
      imagePath: "/placeholder.svg",
      customIcon: <Video className="w-20 h-20 text-amber-500/70" aria-hidden="true" />,
      prompt: "Crée une courte séquence vidéo montrant une transformation progressive d'une graine en arbre, avec un time-lapse accéléré, une esthétique cinématographique et des détails sur la croissance des racines.",
      tools: ["Runway Gen-2", "Pika Labs", "DaVinci Resolve"],
      link: "https://runwayml.com/",
      icon: <Video className="h-5 w-5 text-amber-500" aria-hidden="true" />
    },
    {
      title: "Dialogue multimodal",
      category: "Conversation",
      description: "Échange avec une IA utilisant texte et images pour résoudre un problème",
      imagePath: "/placeholder.svg",
      customIcon: <Zap className="w-20 h-20 text-indigo-500/70" aria-hidden="true" />,
      prompt: "[Image d'un circuit électronique] \"Peux-tu identifier les composants de ce circuit et m'expliquer leur fonction? Ensuite, suggère des améliorations possibles pour optimiser l'efficacité énergétique.\"",
      tools: ["GPT-4 Vision", "Claude Opus", "Gemini"],
      link: "https://openai.com/research/gpt-4v-system-card",
      icon: <MessageSquare className="h-5 w-5 text-indigo-500" aria-hidden="true" />
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
            <div className="relative w-full aspect-video bg-muted flex items-center justify-center overflow-hidden">
              {item.imagePath === "/placeholder.svg" || item.imagePath === "" ? (
                // Afficher une icône générique si pas d'image
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
                  {item.customIcon}
                </div>
              ) : (
                <img 
                  src={item.imagePath} 
                  alt={`Exemple de ${item.title}`} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              )}
              <Badge variant="secondary" className="absolute top-3 left-3 flex items-center gap-1">
                {item.icon}
                <span>{item.category}</span>
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
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Voir un exemple de ${item.title} (s'ouvre dans un nouvel onglet)`}
                >
                  <span>Voir l'exemple</span>
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
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
