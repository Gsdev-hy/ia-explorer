
import React from 'react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Brain, BookOpen, Sparkles, BarChart3, Code, MessageSquare, Share2, ChevronRight, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ExploreMoreSection from '@/components/common/ExploreMoreSection';

/**
 * Page dédiée aux techniques avancées des modèles de langage (LLM)
 * @returns {JSX.Element} Le composant de la page détaillée sur les LLM
 */
const LLMDetails = () => {
  const containerAnimations = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      } 
    }
  };

  const itemAnimations = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const explorationLinks = [
    {
      to: "/types-ia",
      label: "Types d'IA",
      variant: "default" as const
    },
    {
      to: "/machine-learning",
      label: "Machine Learning",
      variant: "outline" as const
    },
    {
      to: "/niveaux-ia",
      label: "Niveaux d'IA",
      variant: "secondary" as const
    }
  ];

  return (
    <main>
      <Hero
        title="Large Language Models & RLHF"
        subtitle="Exploration approfondie des modèles de langage et des techniques d'apprentissage par renforcement avec feedback humain (RLHF)"
        primaryAction={{
          label: "Explorer les techniques RLHF",
          href: "#rlhf-section"
        }}
        secondaryAction={{
          label: "Cas d'utilisation",
          href: "#use-cases"
        }}
      />

      <div className="section-container mb-12">
        <div className="mb-8">
          <Link to="/types-ia" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft size={16} />
            <span>Retour aux Types d'IA</span>
          </Link>

          <SectionHeading
            pretitle="Fondamentaux"
            title="Comprendre les Modèles de Langage"
            description="Les Large Language Models (LLM) représentent une avancée majeure dans le domaine de l'intelligence artificielle, transformant notre façon d'interagir avec les machines."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-primary/5 border-primary/10">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Brain className="text-primary" size={24} />
              </div>
              <CardTitle>Architecture neuronale</CardTitle>
              <CardDescription>Structure et fonctionnement interne des LLM</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Les LLM sont basés sur des architectures Transformer composées de couches d'attention qui permettent au modèle d'examiner différentes parties du texte simultanément, établissant des connexions complexes entre les mots et comprenant le contexte à grande échelle.
              </p>
              <div className="mt-4 p-3 rounded-lg bg-secondary/40 text-sm">
                <p className="font-semibold">Structure typique :</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                  <li>Couche d'embedding (conversion des mots en vecteurs)</li>
                  <li>Multiples couches d'attention (self-attention)</li>
                  <li>Réseaux feed-forward</li>
                  <li>Couche de normalisation</li>
                  <li>Couche de sortie (prédiction du prochain token)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/10">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <BookOpen className="text-primary" size={24} />
              </div>
              <CardTitle>Processus d'entraînement</CardTitle>
              <CardDescription>Comment les LLM apprennent et s'améliorent</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                L'entraînement des LLM se déroule généralement en plusieurs phases, chacune ayant un objectif spécifique, de l'apprentissage général du langage à l'alignement sur les préférences humaines.
              </p>
              <div className="mt-4 p-3 rounded-lg bg-secondary/40 text-sm">
                <p className="font-semibold">Phases d'entraînement :</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                  <li><span className="font-medium">Pré-entraînement</span> : Apprentissage non supervisé sur d'énormes corpus de texte</li>
                  <li><span className="font-medium">Fine-tuning supervisé</span> : Ajustement sur des données spécifiques avec annotations</li>
                  <li><span className="font-medium">RLHF</span> : Apprentissage par renforcement avec feedback humain</li>
                  <li><span className="font-medium">Évaluation continue</span> : Tests rigoureux et mesures de performance</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/10">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Sparkles className="text-primary" size={24} />
              </div>
              <CardTitle>Capacités émergentes</CardTitle>
              <CardDescription>Comportements inattendus et propriétés émergentes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Les LLM de grande taille démontrent des capacités "émergentes" — des compétences qui n'apparaissent qu'à partir d'une certaine échelle et qui n'ont pas été explicitement programmées ou entraînées.
              </p>
              <div className="mt-4 p-3 rounded-lg bg-secondary/40 text-sm">
                <p className="font-semibold">Exemples de propriétés émergentes :</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                  <li>Résolution de problèmes en chaîne de pensée</li>
                  <li>Génération de code fonctionnel</li>
                  <li>Raisonnement mathématique complexe</li>
                  <li>Compréhension de blagues et d'humour subtil</li>
                  <li>Adaptation au style d'écriture demandé</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div id="rlhf-section" className="scroll-mt-24">
          <SectionHeading
            pretitle="Technique avancée"
            title="RLHF : Apprentissage par renforcement avec feedback humain"
            description="Le RLHF permet d'aligner les modèles de langage sur les préférences humaines, améliorant considérablement leur utilité et leur sécurité."
          />

          <motion.div 
            className="mt-10 mb-16 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerAnimations}
          >
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-[40px] w-0.5 bg-gradient-to-b from-primary/40 to-secondary/20"></div>
              
              <motion.div className="relative pl-20 pb-12" variants={itemAnimations}>
                <div className="absolute left-[28px] top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground text-xs font-bold">1</span>
                </div>
                <h3 className="heading-sm mb-3">Collecte de données préférentielles</h3>
                <div className="glass-card p-5 rounded-xl">
                  <p className="text-muted-foreground mb-4">
                    Des évaluateurs humains produisent des comparaisons de paires de réponses générées par le modèle, indiquant laquelle est préférable selon différents critères : précision, sécurité, utilité, absence de toxicité, et plus encore.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                    <div className="bg-secondary/30 p-3 rounded-lg">
                      <p className="font-medium mb-1 text-sm">Avantages</p>
                      <ul className="list-disc pl-5 text-xs text-muted-foreground">
                        <li>Reflète les préférences humaines réelles</li>
                        <li>Peut capturer des nuances éthiques</li>
                        <li>Adaptable à différents contextes culturels</li>
                      </ul>
                    </div>
                    <div className="bg-secondary/30 p-3 rounded-lg">
                      <p className="font-medium mb-1 text-sm">Défis</p>
                      <ul className="list-disc pl-5 text-xs text-muted-foreground">
                        <li>Processus coûteux et chronophage</li>
                        <li>Risque de biais des annotateurs</li>
                        <li>Difficulté d'obtenir un consensus</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div className="relative pl-20 pb-12" variants={itemAnimations}>
                <div className="absolute left-[28px] top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground text-xs font-bold">2</span>
                </div>
                <h3 className="heading-sm mb-3">Entraînement d'un modèle de récompense</h3>
                <div className="glass-card p-5 rounded-xl">
                  <p className="text-muted-foreground mb-4">
                    Un modèle de récompense est entraîné pour prédire les préférences humaines en se basant sur les données collectées. Ce modèle apprend à attribuer un score à chaque réponse potentielle du LLM.
                  </p>
                  <div className="bg-secondary/20 p-4 rounded-lg mb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 size={18} className="text-primary" />
                      <p className="font-medium text-sm">Architecture du modèle de récompense</p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Généralement, un modèle de langage similaire au LLM principal est ajusté pour prédire un score numérique représentant la qualité d'une réponse plutôt que de générer du texte. Ce modèle reçoit en entrée une paire (prompt, réponse) et produit un score.
                    </p>
                  </div>
                  <div className="bg-secondary/20 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Code size={18} className="text-primary" />
                      <p className="font-medium text-sm">Fonction objectif</p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Le modèle est entraîné à maximiser l'écart de score entre les réponses préférées et non préférées, généralement via une fonction de perte de type Bradley-Terry qui modélise la probabilité qu'une réponse soit préférée à une autre.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div className="relative pl-20 pb-12" variants={itemAnimations}>
                <div className="absolute left-[28px] top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground text-xs font-bold">3</span>
                </div>
                <h3 className="heading-sm mb-3">Apprentissage par renforcement (RL)</h3>
                <div className="glass-card p-5 rounded-xl">
                  <p className="text-muted-foreground mb-4">
                    Le LLM est affiné à l'aide de l'apprentissage par renforcement, où le modèle de récompense guide le processus d'optimisation. Cette étape utilise souvent des algorithmes comme PPO (Proximal Policy Optimization).
                  </p>
                  <div className="bg-secondary/30 p-4 rounded-lg mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Share2 size={18} className="text-primary" />
                      <p className="font-medium text-sm">Processus itératif</p>
                    </div>
                    <ol className="list-decimal pl-5 text-xs text-muted-foreground space-y-2">
                      <li>Le LLM génère plusieurs réponses pour un prompt donné</li>
                      <li>Le modèle de récompense évalue ces réponses</li>
                      <li>Le LLM est mis à jour pour maximiser la récompense attendue</li>
                      <li>Une régularisation KL est appliquée pour éviter de trop s'éloigner du modèle initial</li>
                    </ol>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">Note technique :</span> La régularisation KL (Kullback-Leibler) est cruciale car elle empêche le modèle de trop s'éloigner de ses capacités linguistiques initiales tout en optimisant pour les préférences humaines, maintenant ainsi un équilibre entre performance et généralisation.
                  </p>
                </div>
              </motion.div>
              
              <motion.div className="relative pl-20" variants={itemAnimations}>
                <div className="absolute left-[28px] top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground text-xs font-bold">4</span>
                </div>
                <h3 className="heading-sm mb-3">Évaluation et itération</h3>
                <div className="glass-card p-5 rounded-xl">
                  <p className="text-muted-foreground mb-4">
                    Le modèle aligné est évalué sur divers benchmarks et avec des tests utilisateurs. Les résultats alimentent de nouvelles itérations du processus RLHF pour améliorer continuellement l'alignement.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <p className="font-medium mb-2 text-sm">Métriques d'évaluation</p>
                      <ul className="list-disc pl-5 text-xs text-muted-foreground">
                        <li>Alignement avec les valeurs humaines</li>
                        <li>Réduction des réponses toxiques</li>
                        <li>Traitement équitable des sujets sensibles</li>
                        <li>Qualité et précision des informations</li>
                        <li>Refus d'exécuter des instructions nuisibles</li>
                      </ul>
                    </div>
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <p className="font-medium mb-2 text-sm">Défis persistants</p>
                      <ul className="list-disc pl-5 text-xs text-muted-foreground">
                        <li>Suroptimisation pour les métriques de récompense</li>
                        <li>Difficulté à capturer la diversité des valeurs humaines</li>
                        <li>Risque d'introduire de nouveaux biais</li>
                        <li>Équilibre entre sécurité et utilité</li>
                        <li>Dégradation des capacités natives du modèle</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div id="use-cases" className="scroll-mt-24 mb-16">
          <SectionHeading
            pretitle="Applications"
            title="Cas d'utilisation et impacts des LLM avancés"
            description="Les modèles de langage alignés grâce au RLHF ont révolutionné de nombreux domaines et continuent d'ouvrir de nouvelles possibilités."
          />

          <Tabs defaultValue="creativity" className="mt-8">
            <TabsList className="mb-8 w-full max-w-3xl mx-auto grid grid-cols-4">
              <TabsTrigger value="creativity">Créativité</TabsTrigger>
              <TabsTrigger value="productivity">Productivité</TabsTrigger>
              <TabsTrigger value="education">Éducation</TabsTrigger>
              <TabsTrigger value="research">Recherche</TabsTrigger>
            </TabsList>

            <TabsContent value="creativity" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare size={20} className="text-primary" />
                      Assistance à la création
                    </CardTitle>
                    <CardDescription>
                      Les LLM comme collaborateurs créatifs dans divers domaines artistiques
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <ChevronRight size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Écriture collaborative</p>
                          <p className="text-sm text-muted-foreground">Assistants d'écriture créative, élaboration de scénarios, développement de personnages et d'univers fictifs.</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <ChevronRight size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Génération musicale</p>
                          <p className="text-sm text-muted-foreground">Composition de paroles, suggestions d'arrangements, et création de descriptions pour des instructions musicales.</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <ChevronRight size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Design et conception</p>
                          <p className="text-sm text-muted-foreground">Génération de prompts détaillés pour des modèles d'IA visuelle, brainstorming de concepts de design.</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles size={20} className="text-primary" />
                      Expériences interactives
                    </CardTitle>
                    <CardDescription>
                      Nouvelles formes d'expériences numériques basées sur les LLM
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <ChevronRight size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Jeux vidéo dynamiques</p>
                          <p className="text-sm text-muted-foreground">PNJ conversationnels avancés, narration adaptative et génération procédurale de quêtes et de dialogues.</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <ChevronRight size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Histoires interactives</p>
                          <p className="text-sm text-muted-foreground">Fictions interactives où l'intrigue évolue en fonction des choix de l'utilisateur, avec un potentiel narratif quasi infini.</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <ChevronRight size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Compagnons virtuels</p>
                          <p className="text-sm text-muted-foreground">Agents conversationnels thématiques pour divertissement, jeu de rôle ou expériences immersives.</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="productivity" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code size={20} className="text-primary" />
                      Développement logiciel
                    </CardTitle>
                    <CardDescription>
                      Transformation du processus de développement et de documentation technique
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <ChevronRight size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Programmation assistée</p>
                          <p className="text-sm text-muted-foreground">Génération et explication de code, débogage, optimisation, et conversion entre langages de programmation.</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <ChevronRight size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Documentation automatisée</p>
                          <p className="text-sm text-muted-foreground">Création de documentation claire et complète pour le code, les API et les systèmes complexes.</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <ChevronRight size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Tests et assurance qualité</p>
                          <p className="text-sm text-muted-foreground">Génération de tests unitaires et d'intégration, analyse de scénarios de test, et identification de vulnérabilités potentielles.</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Share2 size={20} className="text-primary" />
                      Analyse de données et business
                    </CardTitle>
                    <CardDescription>
                      Applications transformatives pour l'analyse et la prise de décision
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <ChevronRight size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Analyse de données complexes</p>
                          <p className="text-sm text-muted-foreground">Interprétation de tendances, génération de rapports contextuels, et visualisation de données en langage naturel.</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <ChevronRight size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Aide à la décision stratégique</p>
                          <p className="text-sm text-muted-foreground">Synthèse de grandes quantités d'informations, analyse d'impact, et élaboration de scénarios alternatifs.</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <ChevronRight size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Automatisation avancée</p>
                          <p className="text-sm text-muted-foreground">Interfaces en langage naturel pour systèmes métier, extraction d'informations structurées à partir de données non structurées.</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="education" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap size={20} className="text-primary" />
                      Enseignement personnalisé
                    </CardTitle>
                    <CardDescription>
                      Transformation de l'expérience d'apprentissage adaptée à chaque apprenant
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <ChevronRight size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Tuteurs virtuels intelligents</p>
                          <p className="text-sm text-muted-foreground">Assistants pédagogiques capables d'adapter leur enseignement au niveau, au style d'apprentissage et aux intérêts de l'apprenant.</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <ChevronRight size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Exercices et évaluations personnalisés</p>
                          <p className="text-sm text-muted-foreground">Génération de problèmes et de défis adaptés au niveau de compétence actuel de l'apprenant avec feedback constructif.</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <ChevronRight size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Aide à la compréhension</p>
                          <p className="text-sm text-muted-foreground">Clarification de concepts complexes, reformulation à différents niveaux de complexité, et création d'analogies personnalisées.</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen size={20} className="text-primary" />
                      Ressources éducatives
                    </CardTitle>
                    <CardDescription>
                      Création et adaptation de matériel pédagogique de haute qualité
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <ChevronRight size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Matériel pédagogique adaptatif</p>
                          <p className="text-sm text-muted-foreground">Génération de cours, de résumés et d'explications adaptés à différents niveaux de connaissance et différents styles d'apprentissage.</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <ChevronRight size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Traduction et localisation</p>
                          <p className="text-sm text-muted-foreground">Adaptation de contenu éducatif à différentes langues et contextes culturels tout en préservant les objectifs pédagogiques.</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <ChevronRight size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Simulations et scénarios</p>
                          <p className="text-sm text-muted-foreground">Création d'environnements d'apprentissage interactifs où les apprenants peuvent appliquer leurs connaissances dans des contextes réalistes.</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="research" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain size={20} className="text-primary" />
                      Accélération scientifique
                    </CardTitle>
                    <CardDescription>
                      Utilisation des LLM pour amplifier la recherche et l'innovation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <ChevronRight size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Revue de littérature automatisée</p>
                          <p className="text-sm text-muted-foreground">Analyse et synthèse de grandes quantités de publications scientifiques, identification de tendances et de lacunes dans la recherche.</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <ChevronRight size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Formulation d'hypothèses</p>
                          <p className="text-sm text-muted-foreground">Génération de nouvelles hypothèses de recherche basées sur les connaissances existantes et identification de connexions non évidentes.</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <ChevronRight size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Interprétation de résultats complexes</p>
                          <p className="text-sm text-muted-foreground">Aide à l'analyse de résultats d'expériences, suggestion d'explications alternatives et identification de biais potentiels.</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 size={20} className="text-primary" />
                      Gouvernance et éthique des LLM
                    </CardTitle>
                    <CardDescription>
                      Recherche sur les impacts sociétaux et le développement responsable
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <ChevronRight size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Méthodes d'évaluation avancées</p>
                          <p className="text-sm text-muted-foreground">Développement de nouvelles approches pour mesurer les biais, la toxicité, la véracité et l'alignement avec les valeurs humaines.</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <ChevronRight size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Équité et inclusion</p>
                          <p className="text-sm text-muted-foreground">Recherche sur la représentation équitable des différentes perspectives, cultures et groupes démographiques dans les réponses des LLM.</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <ChevronRight size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Gouvernance adaptative</p>
                          <p className="text-sm text-muted-foreground">Exploration de cadres réglementaires et de normes évolutives pour guider le développement et le déploiement responsables des LLM.</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mb-20">
          <SectionHeading
            pretitle="Perspectives"
            title="L'avenir des LLM et du RLHF"
            description="Les directions futures et défis émergents dans l'évolution des modèles de langage alignés"
          />

          <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              <div>
                <h3 className="heading-sm flex items-center gap-2 mb-4">
                  <Sparkles className="h-5 w-5 text-primary" /> Tendances émergentes
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight size={14} className="text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">RLAIF (RL from AI Feedback)</span> - Utilisation d'autres modèles d'IA pour évaluer et fournir du feedback, réduisant la dépendance aux annotateurs humains.
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight size={14} className="text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Constitutional AI</span> - Approche où le modèle s'auto-critique et s'améliore selon des principes prédéfinis, réduisant le besoin d'annotations humaines pour les contenus problématiques.
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight size={14} className="text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Alignment at scale</span> - Méthodes pour aligner efficacement des modèles toujours plus grands avec des ressources d'annotation limitées.
                    </p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="heading-sm flex items-center gap-2 mb-4">
                  <Brain className="h-5 w-5 text-primary" /> Défis fondamentaux
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight size={14} className="text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Diversité des valeurs</span> - Comment concilier les différentes valeurs et préférences culturelles dans un modèle global.
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight size={14} className="text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Alignement profond</span> - Dépasser les comportements superficiels pour un alignement au niveau des objectifs et des valeurs fondamentales.
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight size={14} className="text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Objectifs contradictoires</span> - Équilibrer des objectifs parfois en opposition comme l'utilité, la sécurité, l'efficacité et la créativité.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-primary/10">
              <p className="text-center text-muted-foreground italic">
                "Le véritable défi n'est pas de créer des modèles de langage plus puissants, mais de comprendre comment les aligner sur les valeurs humaines et les faire servir nos objectifs communs."
              </p>
              <p className="text-center text-sm mt-2">— Dr. Yoshua Bengio, pionnier de l'IA, avril 2025</p>
            </div>
          </div>
        </div>
      </div>

      <ExploreMoreSection links={explorationLinks} />
    </main>
  );
};

export default LLMDetails;
