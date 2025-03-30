
import React, { useState } from 'react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { 
  ImagePlus, 
  Music, 
  Code, 
  PanelLeft, 
  MessagesSquare,
  Copy,
  Check
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';

/**
 * Section présentant des exemples de prompts efficaces pour différents types d'IA
 */
const PromptExamplesSection = () => {
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const promptTips = [
    {
      title: "Soyez spécifique",
      description: "Plus vos instructions sont détaillées, meilleurs seront les résultats. Précisez le style, le ton, et les caractéristiques souhaitées.",
      examples: [
        "❌ \"Génère une image d'un paysage\"",
        "✅ \"Génère une image d'un paysage montagneux au coucher du soleil, avec un lac reflétant la lumière dorée, style impressionniste, couleurs chaudes\""
      ]
    },
    {
      title: "Itérez progressivement",
      description: "Ne cherchez pas la perfection du premier coup. Commencez avec une demande simple, puis affinez progressivement en fonction des résultats.",
      examples: [
        "1️⃣ \"Crée une illustration d'une maison dans la forêt\"",
        "2️⃣ \"Maintenant ajoute plus de détails à la maison, style cabane en bois, et rends la forêt plus dense et mystérieuse\"",
        "3️⃣ \"Parfait, maintenant ajoute une légère brume entre les arbres et une faible lumière provenant des fenêtres\""
      ]
    },
    {
      title: "Utilisez un langage visuel",
      description: "Pour la génération d'images, utilisez un vocabulaire riche en détails visuels et références artistiques concrètes.",
      examples: [
        "❌ \"Crée une belle image\"",
        "✅ \"Crée une image dans le style de Monet, avec des touches de pinceau visibles, représentant un jardin luxuriant aux couleurs pastel, avec des nénuphars au premier plan\""
      ]
    },
    {
      title: "Combinez les techniques",
      description: "Associez différentes IA complémentaires pour obtenir des résultats plus riches.",
      examples: [
        "1️⃣ Générer un texte descriptif détaillé avec ChatGPT",
        "2️⃣ Utiliser ce texte pour créer une image avec DALL-E",
        "3️⃣ Transformer l'image en vidéo avec Runway",
        "4️⃣ Ajouter une musique générée par Suno AI basée sur la description"
      ]
    },
    {
      title: "Exploitez les références",
      description: "Fournissez des exemples ou des références pour guider l'IA vers le style ou le résultat souhaité.",
      examples: [
        "❌ \"Écris un poème sur l'océan\"",
        "✅ \"Écris un poème sur l'océan dans le style de Victor Hugo, avec des métaphores puissantes et un rythme semblable à son poème 'Océano Nox'\""
      ]
    }
  ];

  const detailedExamples = {
    image: [
      {
        title: "Portrait artistique",
        prompt: "Génère un portrait en gros plan d'une femme âgée aux yeux expressifs, avec des rides profondes qui racontent une histoire de sagesse. Style de peinture à l'huile inspiré de Rembrandt, avec un éclairage dramatique venant de la gauche, créant un fort contraste clair-obscur. Les couleurs dominantes sont des tons de terre chaude et d'ocre, avec un arrière-plan sombre et texturé. L'expression doit être sereine et contemplative.",
        explanation: "Ce prompt est efficace car il spécifie : le sujet principal (femme âgée), le cadrage (gros plan), des détails importants (yeux expressifs, rides), une référence artistique précise (Rembrandt), des éléments techniques (éclairage, contraste), une palette de couleurs, et l'émotion recherchée."
      },
      {
        title: "Paysage fantastique",
        prompt: "Crée une illustration de style fantasy d'une cité construite dans les branches d'arbres géants millénaires. L'architecture mélange des éléments elfiques (structures organiques, courbes fluides) et steampunk (engrenages en cuivre, tuyaux émettant de la vapeur). Le temps est au crépuscule avec un ciel violet-orange. Des ponts suspendus relient les différentes sections de la cité, et de petits vaisseaux aériens ressemblant à des libellules mécaniques volent entre les branches. Quelques lanternes magiques émettent une douce lumière bleue.",
        explanation: "Ce prompt fonctionne bien car il combine plusieurs éléments distincts (nature, fantasy, steampunk), précise l'ambiance lumineuse, et ajoute des détails spécifiques qui enrichissent l'image (ponts suspendus, vaisseaux, lanternes). Les références visuelles claires (structures elfiques, libellules mécaniques) guident l'IA."
      }
    ],
    music: [
      {
        title: "Composition émotionnelle",
        prompt: "Compose une pièce musicale mélancolique pour piano et violoncelle, tempo lent (environ 65 BPM), en tonalité de Sol mineur. La mélodie devrait évoquer un sentiment de nostalgie automnale, comme le souvenir d'un amour perdu. Commence par une introduction douce au piano avec des accords mineurs, puis introduis progressivement le violoncelle avec une ligne mélodique expressive dans le registre grave. Vers le milieu, intègre une modulation vers la tonalité relative majeure (Si bémol) pour un moment d'espoir, avant de revenir à la tonalité mineure initiale. Inspiration: Ludovico Einaudi et Max Richter.",
        explanation: "Ce prompt est détaillé et technique: il spécifie les instruments, le tempo, la tonalité, la structure, l'évolution harmonique, et l'ambiance émotionnelle recherchée. Les références à des compositeurs connus aident l'IA à comprendre le style souhaité."
      },
      {
        title: "Ambiance électronique",
        prompt: "Crée un morceau de musique électronique ambient de style lo-fi avec une rythmique hip-hop détendue à 80 BPM. Utilise des samples de piano traités avec reverb et un léger effet de cassette vintage. Ajoute des sons d'ambiance comme la pluie douce et des conversations lointaines. La structure devrait être progressive: commence par une intro atmosphérique de 20 secondes, puis introduis la batterie et la ligne de basse. Le morceau devrait avoir une sensation nocturne et urbaine, parfait pour le travail ou l'étude. Références: Nujabes, Chillhop Music.",
        explanation: "Ce prompt excelle par sa précision technique (BPM, effets) et contextuelle (usage prévu pour le travail/étude). Il guide l'IA sur la structure temporelle précise et les éléments sonores spécifiques, tout en fournissant des références pertinentes."
      }
    ],
    code: [
      {
        title: "Fonction JavaScript",
        prompt: "Écris une fonction JavaScript pour trier un tableau d'objets représentant des produits. Chaque objet a les propriétés suivantes: id (nombre), name (chaîne), price (nombre), category (chaîne) et rating (nombre de 1 à 5). La fonction doit accepter deux paramètres: le tableau à trier et un objet de configuration qui spécifie la propriété de tri et l'ordre (ascendant ou descendant). Par défaut, trie par prix en ordre ascendant. Utilise des méthodes modernes (ES6+) et ajoute des commentaires explicatifs. Gère les cas où la propriété de tri n'existe pas dans les objets.",
        explanation: "Ce prompt est efficace car il définit clairement la structure des données d'entrée, les paramètres attendus, les comportements par défaut, et même les exigences techniques (ES6+, commentaires). Ces détails permettent à l'IA de générer du code précis et fonctionnel."
      },
      {
        title: "Animation CSS",
        prompt: "Crée une animation CSS pour un bouton 'Ajouter au panier'. Au survol, le bouton devrait légèrement s'agrandir (scale: 1.05) et changer progressivement de couleur (de bleu #3498db à un bleu plus foncé #2980b9). Au clic, il devrait avoir un effet de pression (scale: 0.95) pendant 200ms, puis revenir à sa taille normale. L'animation doit être fluide avec une transition de type 'ease-out'. Ajoute également une petite icône de panier qui se déplace légèrement vers la droite au survol. Le code doit fonctionner sur les navigateurs modernes et utiliser des variables CSS pour les couleurs.",
        explanation: "Ce prompt est précis sur les effets visuels (échelles exactes, codes couleur), les déclencheurs (survol, clic), les durées et le type d'animation. Il spécifie également des préoccupations de compatibilité et des bonnes pratiques (variables CSS)."
      }
    ],
    conversation: [
      {
        title: "Analyse de document visuel",
        prompt: "[Image d'un graphique financier jointe] Analyse ce graphique financier et réponds aux questions suivantes: 1) Quelle est la tendance générale du cours de l'action sur la période affichée? 2) Identifie les points de résistance et de support majeurs visibles. 3) Observe-t-on des formations techniques particulières (tête-épaules, double sommet, etc.)? 4) Quels sont les volumes d'échange aux moments clés? Fournis une analyse synthétique de 3-4 paragraphes basée sur ces observations.",
        explanation: "Ce prompt est efficace car il fournit une image spécifique et pose des questions précises et techniques qui orientent l'analyse de l'IA. Il demande des observations sur différents aspects (tendance, points techniques, volumes) et spécifie le format de réponse attendu."
      },
      {
        title: "Assistance culinaire visuelle",
        prompt: "[Photo d'ingrédients disponibles dans un réfrigérateur] Voici les ingrédients dont je dispose. Peux-tu me suggérer 3 recettes réalisables, en tenant compte des contraintes suivantes: 1) Repas pour deux personnes 2) Préparation en moins de 30 minutes 3) Régime flexitarien privilégiant les protéines végétales 4) Niveau de difficulté intermédiaire. Pour chaque suggestion, liste les ingrédients nécessaires (en précisant ceux que j'ai déjà et ceux qu'il faudrait ajouter), les étapes de préparation et une estimation calorique par portion.",
        explanation: "Ce prompt combine une information visuelle (photo des ingrédients) avec des contraintes spécifiques (temps, régime, difficulté) et une demande structurée. Il guide l'IA pour analyser le contenu visuel dans un contexte précis et fournir des recommandations pratiques."
      }
    ]
  };

  return (
    <>
      <div className="mt-8 space-y-6">
        {promptTips.map((tip, index) => (
          <motion.div 
            key={index} 
            className="glass-card p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-sm mb-2">{tip.title}</h3>
            <p className="text-muted-foreground mb-3">{tip.description}</p>
            <div className="bg-secondary/20 p-3 rounded-lg">
              {tip.examples.map((example, exIndex) => (
                <div key={exIndex} className="mb-2 last:mb-0">
                  <p className="font-mono text-sm">{example}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="heading-md text-center mb-6">Exemples détaillés par domaine</h3>
        
        <Tabs defaultValue="image" className="w-full">
          <TabsList className="grid grid-cols-4 w-full mb-6">
            <TabsTrigger value="image" className="flex gap-2 items-center">
              <ImagePlus size={16} />
              <span>Images</span>
            </TabsTrigger>
            <TabsTrigger value="music" className="flex gap-2 items-center">
              <Music size={16} />
              <span>Musique</span>
            </TabsTrigger>
            <TabsTrigger value="code" className="flex gap-2 items-center">
              <Code size={16} />
              <span>Code</span>
            </TabsTrigger>
            <TabsTrigger value="conversation" className="flex gap-2 items-center">
              <MessagesSquare size={16} />
              <span>Multimodal</span>
            </TabsTrigger>
          </TabsList>

          {Object.entries(detailedExamples).map(([category, examples]) => (
            <TabsContent key={category} value={category} className="space-y-6">
              {examples.map((example, index) => (
                <Card key={index} className="overflow-hidden border-primary/10">
                  <div className="bg-primary/5 px-6 py-4 border-b border-primary/10">
                    <h4 className="font-semibold text-lg flex items-center">
                      <PanelLeft className="mr-2 h-4 w-4 text-primary" />
                      {example.title}
                    </h4>
                  </div>
                  <CardContent className="p-0">
                    <div className="relative bg-secondary/20 p-5 font-mono text-sm overflow-x-auto">
                      {example.prompt}
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute top-2 right-2" 
                        onClick={() => copyToClipboard(example.prompt, `${category}-${index}`)}
                      >
                        {copiedIndex === `${category}-${index}` ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <div className="p-4 text-muted-foreground">
                      <p><strong className="text-foreground">Pourquoi ça marche:</strong> {example.explanation}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <div className="mt-12 bg-primary/5 rounded-xl p-6 border border-primary/10">
        <h3 className="heading-sm mb-4">FAQ - Prompting efficace</h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Quelle est la longueur idéale d'un prompt?</AccordionTrigger>
            <AccordionContent>
              La longueur optimale dépend du modèle et de la tâche. Pour les modèles récents comme GPT-4 ou Claude, des prompts détaillés de 100-300 mots fonctionnent souvent mieux que des instructions brèves. Pour la génération d'images, 50-100 mots bien structurés suffisent généralement. L'important est la qualité et la pertinence des détails, pas simplement la longueur.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Faut-il adapter son prompting selon les modèles d'IA?</AccordionTrigger>
            <AccordionContent>
              Absolument. Chaque modèle a ses propres forces, faiblesses et "dialectes" de prompting. Par exemple, Midjourney répond bien aux paramètres stylistiques spécifiques (--stylize, --chaos), DALL-E 3 excelle avec des descriptions narratives, et Stable Diffusion avec des mots-clés artistiques précis. Pour les LLM, GPT-4 gère bien les instructions complexes, tandis que des modèles plus petits nécessitent des directives plus simples et directes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Comment structurer un prompt pour des résultats cohérents?</AccordionTrigger>
            <AccordionContent>
              Une structure efficace suit généralement ce modèle: (1) Contexte/rôle ("Tu es un expert en..."), (2) Tâche précise ("Crée/Analyse/Explique..."), (3) Format souhaité ("Sous forme de liste/tableau/paragraphes..."), (4) Contraintes spécifiques ("En utilisant uniquement...", "Sans mentionner..."), (5) Exemples si nécessaire. Cette approche "Context-Task-Format-Constraints-Examples" aide à obtenir des résultats prévisibles et adaptés à vos besoins.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Comment améliorer un prompt qui ne donne pas les résultats escomptés?</AccordionTrigger>
            <AccordionContent>
              Utilisez une approche itérative: (1) Identifiez précisément ce qui ne fonctionne pas dans le résultat, (2) Ajoutez des contraintes ou précisions spécifiques pour corriger ces aspects, (3) Reformulez les parties ambiguës, (4) Ajoutez des exemples concrets de ce que vous recherchez, (5) Utilisez des techniques comme "chain-of-thought" pour guider le raisonnement de l'IA. N'hésitez pas à demander à l'IA elle-même comment améliorer votre prompt - c'est souvent très efficace!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default PromptExamplesSection;
