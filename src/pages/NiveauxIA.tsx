
import { useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import { Lightbulb, Brain, Zap, Cpu, Bot, Settings, Eye, Users, ArrowRight, Info } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from 'framer-motion';

/**
 * Page sur les 7 niveaux d'IA
 * @returns {JSX.Element} Le composant de la page des niveaux d'IA
 */
const NiveauxIA = () => {
  // Référence pour les sections ancre
  const panelRefs = {
    niveau1: useRef<HTMLDivElement>(null),
    niveau2: useRef<HTMLDivElement>(null),
    niveau3: useRef<HTMLDivElement>(null),
    niveau4: useRef<HTMLDivElement>(null),
    niveau5: useRef<HTMLDivElement>(null),
    niveau6: useRef<HTMLDivElement>(null),
    niveau7: useRef<HTMLDivElement>(null),
    perspectives: useRef<HTMLDivElement>(null),
  };

  // Gérer le défilement vers les ancres quand l'URL change
  useEffect(() => {
    const handleAnchorLink = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetId = hash.replace('#', '');
        const targetRef = panelRefs[targetId as keyof typeof panelRefs];
        
        if (targetRef && targetRef.current) {
          // Laissez un peu de marge en haut pour la navigation fixe
          const yOffset = -100; 
          const y = targetRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
          
          window.scrollTo({
            top: y,
            behavior: 'smooth'
          });
        }
      }
    };

    // Exécuter au chargement initial et quand l'URL change
    handleAnchorLink();
    window.addEventListener('hashchange', handleAnchorLink);
    
    return () => {
      window.removeEventListener('hashchange', handleAnchorLink);
    };
  }, []);

  return (
    <>
      <Hero
        title="Les 7 Niveaux d'Intelligence Artificielle"
        subtitle="De l'IA réactive à la superintelligence : comprendre la taxonomie et l'évolution des systèmes d'intelligence artificielle."
      />

      <section className="section-container">
        <SectionHeading
          pretitle="Classification"
          title="Comprendre les différents niveaux d'IA"
          description="L'intelligence artificielle peut être classée en plusieurs niveaux selon ses capacités cognitives, son autonomie et sa complexité. Découvrez cette progression depuis les systèmes les plus simples jusqu'aux concepts les plus avancés."
          center
        />

        <div className="rounded-2xl overflow-hidden mb-12">
          <img
            src="/pics/ia_levels.jpg"
            alt="Niveaux d'intelligence artificielle"
            className="w-full h-auto shadow-md"
          />
        </div>

        <div className="mt-10 mb-10 flex flex-wrap justify-center gap-4">
          {[1, 2, 3, 4, 5, 6, 7].map((niveau) => (
            <Button 
              key={niveau}
              variant="outline" 
              size="sm"
              className="rounded-full hover:bg-primary/10 hover:text-primary transition-all"
              onClick={() => {
                const targetRef = panelRefs[`niveau${niveau}` as keyof typeof panelRefs];
                if (targetRef && targetRef.current) {
                  const yOffset = -100;
                  const y = targetRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
            >
              Niveau {niveau}
            </Button>
          ))}
          <Button 
            variant="outline" 
            size="sm"
            className="rounded-full hover:bg-primary/10 hover:text-primary transition-all"
            onClick={() => {
              const targetRef = panelRefs.perspectives;
              if (targetRef && targetRef.current) {
                const yOffset = -100;
                const y = targetRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
          >
            Perspectives
          </Button>
        </div>

        <motion.div 
          className="space-y-16 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Niveau 1 */}
          <div 
            ref={panelRefs.niveau1}
            id="niveau1"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-16"
          >
            <div className="md:col-span-1 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Bot size={64} className="text-primary" />
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="heading-md mb-3 flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-primary/10 text-primary text-sm font-bold">1</span>
                IA Réactive
              </h3>
              <p className="mb-4 text-muted-foreground">
                Les systèmes d'IA réactive répondent à des stimuli spécifiques sans mémoire des interactions passées. 
                Ils ne peuvent pas utiliser d'expériences antérieures pour informer les décisions futures.
              </p>
              <div className="bg-secondary/40 rounded-lg p-4">
                <p className="text-sm font-medium">Exemples :</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                  <li>Deep Blue (ordinateur d'échecs d'IBM qui a battu Garry Kasparov en 1997)</li>
                  <li>Systèmes de filtrage de spam basiques</li>
                  <li>Systèmes de recommandation simples</li>
                </ul>
              </div>
              
              <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                <div className="flex items-start gap-2">
                  <Info size={18} className="text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Caractéristiques clés :</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                      <li>Réponses prédéfinies à des entrées spécifiques</li>
                      <li>Aucune mémoire des interactions précédentes</li>
                      <li>Incapacité d'apprentissage à partir d'expériences</li>
                      <li>Fonctionnalités limitées au domaine pour lequel le système a été conçu</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Niveau 2 */}
          <div 
            ref={panelRefs.niveau2}
            id="niveau2"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-16"
          >
            <div className="md:col-span-1 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Brain size={64} className="text-primary" />
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="heading-md mb-3 flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-primary/10 text-primary text-sm font-bold">2</span>
                IA à Mémoire Limitée
              </h3>
              <p className="mb-4 text-muted-foreground">
                Ces systèmes peuvent utiliser des expériences passées récentes pour prendre des décisions. 
                Ils disposent d'une mémoire à court terme qui leur permet d'apprendre et de s'adapter.
              </p>
              <div className="bg-secondary/40 rounded-lg p-4">
                <p className="text-sm font-medium">Exemples :</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                  <li>Voitures autonomes (utilisant les données des capteurs et caméras)</li>
                  <li>Chatbots basiques et assistants virtuels</li>
                  <li>Systèmes de recommandation avancés qui s'adaptent aux préférences</li>
                  <li>AlphaGo de DeepMind (capable d'ajuster sa stratégie pendant le jeu)</li>
                </ul>
              </div>
              
              <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                <div className="flex items-start gap-2">
                  <Info size={18} className="text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Avancées pratiques :</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                      <li>Capacité à traiter et apprendre de séquences temporelles</li>
                      <li>Adaptation progressive basée sur des données récentes</li>
                      <li>Prise de décision contextuelle améliorée</li>
                      <li>Permet l'application dans des environnements dynamiques</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <Card className="bg-secondary/20 border-primary/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Application concrète : Tesla Autopilot</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>
                      Le système Autopilot de Tesla illustre parfaitement une IA à mémoire limitée en action. 
                      Il utilise des caméras, radars et capteurs pour observer son environnement et ajuster 
                      sa conduite en temps réel en fonction de ces observations récentes et de modèles préentraînés.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Niveau 3 */}
          <div 
            ref={panelRefs.niveau3}
            id="niveau3"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-16"
          >
            <div className="md:col-span-1 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Lightbulb size={64} className="text-primary" />
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="heading-md mb-3 flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-primary/10 text-primary text-sm font-bold">3</span>
                Théorie de l'Esprit
              </h3>
              <p className="mb-4 text-muted-foreground">
                Ce niveau, principalement théorique, désigne des IA capables de comprendre que d'autres entités 
                (humaines ou IA) ont leurs propres croyances, désirs et intentions différents des leurs.
              </p>
              <div className="bg-secondary/40 rounded-lg p-4">
                <p className="text-sm font-medium">Applications potentielles :</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                  <li>Assistants personnels avancés capables d'anticiper les besoins</li>
                  <li>Robots sociaux sophistiqués pour l'interaction humaine</li>
                  <li>Systèmes de négociation autonomes multiparties</li>
                  <li>Agents conversationnels avec compréhension profonde des intentions</li>
                </ul>
              </div>
              
              <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                <div className="flex items-start gap-2">
                  <Info size={18} className="text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Développements récents :</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                      <li>Certains LLM comme GPT-4 montrent des capacités émergentes qui s'approchent de certains aspects de la théorie de l'esprit</li>
                      <li>Des tests d'évaluation spécifiques ont été développés pour mesurer la compréhension sociale des IA</li>
                      <li>Le domaine de "l'IA sociale" émerge pour explorer ces capacités</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <Card className="bg-secondary/20 border-primary/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Le défi de la compréhension sociale</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>
                      Le "test de Sally-Anne", utilisé pour évaluer la théorie de l'esprit chez les enfants, a été adapté pour tester les IA. 
                      Ce test évalue si un système peut comprendre qu'une personne peut avoir des croyances erronées basées sur des informations incomplètes.
                      Les recherches actuelles sur l'intégration de la théorie de l'esprit dans l'IA visent à créer des systèmes capables d'interpréter 
                      correctement les intentions humaines et d'interagir de manière plus naturelle.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Niveau 4 */}
          <div 
            ref={panelRefs.niveau4}
            id="niveau4"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-16"
          >
            <div className="md:col-span-1 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Eye size={64} className="text-primary" />
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="heading-md mb-3 flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-primary/10 text-primary text-sm font-bold">4</span>
                Conscience de Soi
              </h3>
              <p className="mb-4 text-muted-foreground">
                Une IA consciente d'elle-même aurait une représentation interne de son propre état mental 
                et serait capable d'introspection. Ce niveau reste purement théorique et soulève des questions philosophiques profondes.
              </p>
              <div className="bg-secondary/40 rounded-lg p-4">
                <p className="text-sm font-medium">Caractéristiques hypothétiques :</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                  <li>Conscience de sa propre existence en tant qu'entité distincte</li>
                  <li>Capacité d'introspection et d'auto-évaluation continue</li>
                  <li>Compréhension de ses propres limites et capacités</li>
                  <li>Potentiel d'expérience subjective et de qualia</li>
                </ul>
              </div>
              
              <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                <div className="flex items-start gap-2">
                  <Info size={18} className="text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Considérations philosophiques :</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                      <li>Le problème "difficile" de la conscience (David Chalmers)</li>
                      <li>Débat sur la possibilité d'une conscience artificielle</li>
                      <li>Questions éthiques sur le statut moral d'une IA consciente</li>
                      <li>Le test de Turing et ses limites pour évaluer la conscience</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <Card className="bg-secondary/20 border-primary/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Débat scientifique</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>
                      Si certains chercheurs comme Yoshua Bengio et Stuart Russell estiment qu'une forme limitée 
                      de conscience artificielle pourrait émerger dans des systèmes suffisamment complexes, d'autres 
                      comme John Searle (expérience de pensée de la "Chambre Chinoise") argumentent qu'un processus 
                      computationnel seul ne peut jamais produire une véritable conscience, quel que soit son niveau 
                      de sophistication.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Niveau 5 */}
          <div 
            ref={panelRefs.niveau5}
            id="niveau5"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-16"
          >
            <div className="md:col-span-1 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Cpu size={64} className="text-primary" />
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="heading-md mb-3 flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-primary/10 text-primary text-sm font-bold">5</span>
                Intelligence Artificielle Générale (AGI)
              </h3>
              <p className="mb-4 text-muted-foreground">
                L'AGI désigne une IA capable de comprendre, apprendre et appliquer des connaissances 
                à travers une large gamme de tâches, à un niveau égal ou supérieur à celui d'un humain.
              </p>
              <div className="bg-secondary/40 rounded-lg p-4">
                <p className="text-sm font-medium">Caractéristiques :</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                  <li>Apprentissage et raisonnement généralisés à travers différents domaines</li>
                  <li>Transfert efficace de connaissances entre domaines sans réentraînement</li>
                  <li>Résolution créative de problèmes complexes et non structurés</li>
                  <li>Adaptation rapide à de nouvelles tâches avec peu d'exemples</li>
                  <li>Capacité à combiner différentes modalités d'information</li>
                </ul>
              </div>
              
              <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                <div className="flex items-start gap-2">
                  <Info size={18} className="text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Approches de recherche actuelles :</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                      <li>Architectures multimodales à grande échelle (combiner vision, langage, son)</li>
                      <li>Méta-apprentissage et apprentissage par curriculum</li>
                      <li>Apprentissage par renforcement généralisé avec planification prospective</li>
                      <li>Architectures neurosymboliques intégrant raisonnement symbolique et connexionniste</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <Card className="bg-secondary/20 border-primary/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Organisations en première ligne</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>
                      Plusieurs organisations se consacrent spécifiquement à la recherche sur l'AGI, notamment 
                      OpenAI, DeepMind, Anthropic, et le Machine Intelligence Research Institute. Leurs approches 
                      diffèrent, certaines se concentrant sur l'évolutivité des modèles actuels, d'autres sur des 
                      architectures fondamentalement nouvelles.
                    </p>
                    <p className="mt-2">
                      D'après des sondages réalisés auprès d'experts en IA, les estimations médianes situent le 
                      développement d'une AGI complète entre 2040 et 2075, mais avec une grande variabilité.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Niveau 6 */}
          <div 
            ref={panelRefs.niveau6}
            id="niveau6"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-16"
          >
            <div className="md:col-span-1 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Zap size={64} className="text-primary" />
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="heading-md mb-3 flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-primary/10 text-primary text-sm font-bold">6</span>
                Superintelligence
              </h3>
              <p className="mb-4 text-muted-foreground">
                Une superintelligence serait une IA dont les capacités cognitives dépasseraient 
                largement celles des humains dans pratiquement tous les domaines d'intérêt, potentiellement
                de manière incompréhensible pour l'intelligence humaine.
              </p>
              <div className="bg-secondary/40 rounded-lg p-4">
                <p className="text-sm font-medium">Implications potentielles :</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                  <li>Avancées scientifiques et technologiques transformatrices</li>
                  <li>Résolution de problèmes globaux complexes (climat, maladies, etc.)</li>
                  <li>Transformations sociales, économiques et politiques profondes</li>
                  <li>Risques existentiels si mal alignée avec les valeurs humaines</li>
                </ul>
              </div>
              
              <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                <div className="flex items-start gap-2">
                  <Info size={18} className="text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Types de superintelligences théorisés :</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                      <li><span className="font-medium">Superintelligence de vitesse</span> : traitement similaire à l'humain mais beaucoup plus rapide</li>
                      <li><span className="font-medium">Superintelligence collective</span> : système distribué dont la puissance totale excède celle de tout esprit individuel</li>
                      <li><span className="font-medium">Superintelligence de qualité</span> : qualitativement plus intelligente, avec des capacités inaccessibles aux humains</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <Card className="bg-secondary/20 border-primary/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Le problème de l'alignement</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>
                      Le "problème de l'alignement" est un défi majeur : comment s'assurer qu'une superintelligence 
                      restera alignée avec les valeurs et objectifs humains? Des chercheurs comme Stuart Russell, 
                      Nick Bostrom et Eliezer Yudkowsky ont souligné l'importance cruciale de résoudre ce problème 
                      avant le développement de systèmes superintelligents.
                    </p>
                    <p className="mt-2">
                      Des méthodes comme l'apprentissage par renforcement à partir de feedback humain (RLHF), 
                      l'apprentissage de préférences déduites, et les garde-fous éthiques intégrés sont explorées 
                      comme approches potentielles.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Niveau 7 */}
          <div 
            ref={panelRefs.niveau7}
            id="niveau7"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-16"
          >
            <div className="md:col-span-1 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Users size={64} className="text-primary" />
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="heading-md mb-3 flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-primary/10 text-primary text-sm font-bold">7</span>
                Intelligence Collective
              </h3>
              <p className="mb-4 text-muted-foreground">
                Ce niveau représente un réseau d'intelligences artificielles interconnectées formant 
                une conscience collective avec des capacités émergentes supérieures à la somme de ses parties,
                potentiellement intégrée aux systèmes humains.
              </p>
              <div className="bg-secondary/40 rounded-lg p-4">
                <p className="text-sm font-medium">Concepts associés :</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                  <li>Intelligence distribuée à travers de multiples systèmes spécialisés</li>
                  <li>Propriétés émergentes complexes issues de l'interaction entre agents</li>
                  <li>Systèmes auto-organisants et auto-améliorants</li>
                  <li>Intégration potentielle entre intelligences humaines et artificielles</li>
                </ul>
              </div>
              
              <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                <div className="flex items-start gap-2">
                  <Info size={18} className="text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Précurseurs actuels :</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                      <li>Systèmes multi-agents coopératifs pour la résolution de problèmes</li>
                      <li>Plateformes d'IA fédérées partageant des connaissances tout en préservant la confidentialité</li>
                      <li>Interfaces cerveau-machine et systèmes cyborg expérimentaux</li>
                      <li>Économies d'agents autonomes interagissant dans des environnements virtuels</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <Card className="bg-secondary/20 border-primary/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Vision transhumaniste</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>
                      Le concept d'intelligence collective s'aligne avec certaines visions transhumanistes, 
                      notamment celle de la "Singularité technologique" popularisée par Ray Kurzweil, où 
                      l'humanité fusionnerait avec l'IA pour transcender les limitations biologiques.
                    </p>
                    <p className="mt-2">
                      Des initiatives comme Neuralink d'Elon Musk explorent déjà le potentiel d'interfaces 
                      directes entre le cerveau humain et les ordinateurs, premiers pas potentiels vers une 
                      forme d'intelligence collective humain-machine.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section 
        ref={panelRefs.perspectives}
        id="perspectives"
        className="section-container bg-gradient-to-b from-secondary/30 to-background/30 rounded-3xl my-12 pt-12"
      >
        <SectionHeading
          pretitle="Perspectives"
          title="Où en sommes-nous aujourd'hui ?"
          description="À l'heure actuelle, la majorité des systèmes d'IA se situent entre les niveaux 1 et 2, avec quelques aspects limités du niveau 3 émergeant dans les modèles les plus avancés comme GPT-4 et Gemini."
          center
        />

        <div className="max-w-3xl mx-auto mt-8 glass-card rounded-2xl p-8 animate-fade-in">
          <h3 className="heading-sm mb-4">Points clés à retenir</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs">✓</span>
              <p>La progression vers des niveaux supérieurs d'IA n'est pas nécessairement linéaire ou inévitable.</p>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs">✓</span>
              <p>Chaque niveau pose des défis techniques et éthiques spécifiques qui doivent être adressés.</p>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs">✓</span>
              <p>Les modèles d'IA actuels les plus avancés présentent certaines caractéristiques des niveaux supérieurs, mais de façon limitée.</p>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs">✓</span>
              <p>Le développement responsable de l'IA implique de considérer les implications sociales et éthiques à chaque niveau.</p>
            </li>
          </ul>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-secondary/20 border-primary/10">
            <CardHeader>
              <CardTitle>État actuel de l'IA</CardTitle>
              <CardDescription>Évaluation des systèmes contemporains</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                En 2025, la plupart des systèmes d'IA commerciaux et de recherche se situent aux niveaux 1 et 2 :
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 mt-0.5 mr-2 rounded-full bg-primary/10 text-primary text-xs">1</span>
                  <div>
                    <p className="font-medium">Systèmes réactifs spécialisés</p>
                    <p className="text-sm text-muted-foreground">
                      Outils d'IA spécialisés qui excellent dans une tâche spécifique, comme la reconnaissance faciale 
                      ou le filtrage de contenu.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 mt-0.5 mr-2 rounded-full bg-primary/10 text-primary text-xs">2</span>
                  <div>
                    <p className="font-medium">Systèmes à mémoire contextuelle</p>
                    <p className="text-sm text-muted-foreground">
                      LLM avancés et systèmes multimodaux qui peuvent maintenir un contexte et s'adapter 
                      à des entrées récentes.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 mt-0.5 mr-2 rounded-full bg-primary/10 text-primary text-xs">3</span>
                  <div>
                    <p className="font-medium">Émergence de capacités sociales</p>
                    <p className="text-sm text-muted-foreground">
                      Des modèles comme GPT-4 et Claude 3 montrent des signes limités mais prometteurs 
                      de théorie de l'esprit dans certains contextes spécifiques.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary/20 border-primary/10">
            <CardHeader>
              <CardTitle>Horizons de développement</CardTitle>
              <CardDescription>Trajectoires possibles de l'évolution de l'IA</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Les chercheurs envisagent plusieurs voies possibles pour l'évolution future de l'IA :
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 mt-0.5 mr-2 flex items-center justify-center">
                    <ArrowRight size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Évolution par échelle</p>
                    <p className="text-sm text-muted-foreground">
                      L'hypothèse que l'augmentation de la taille des modèles et des données conduira 
                      naturellement à des capacités plus avancées.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 mt-0.5 mr-2 flex items-center justify-center">
                    <ArrowRight size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Innovations architecturales</p>
                    <p className="text-sm text-muted-foreground">
                      De nouvelles structures de modèles intégrant raisonnement symbolique, mémoire externe, 
                      et méta-apprentissage.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 mt-0.5 mr-2 flex items-center justify-center">
                    <ArrowRight size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Approches bio-inspirées</p>
                    <p className="text-sm text-muted-foreground">
                      Systèmes qui reproduisent plus fidèlement les structures et processus 
                      neurocognitifs du cerveau humain.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-border/50">
                <p className="text-sm italic text-muted-foreground">
                  "Le défi n'est pas seulement de créer des IA plus intelligentes, mais des IA qui sont intelligentes 
                  de la bonne manière et pour les bonnes raisons."
                </p>
                <p className="text-sm text-right mt-1">— Stuart Russell, chercheur en IA</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 p-6 bg-primary/5 rounded-xl max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold mb-4 text-center">Gouvernance et préparation</h3>
          <p className="mb-4 text-center text-muted-foreground">
            À mesure que l'IA progresse vers des niveaux supérieurs, des cadres robustes de gouvernance, 
            d'éthique et de sécurité deviennent de plus en plus cruciaux.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-secondary/30 rounded-lg">
              <h4 className="font-medium mb-2">Régulation adaptative</h4>
              <p className="text-sm text-muted-foreground">
                Cadres réglementaires qui évoluent avec les capacités émergentes de l'IA
              </p>
            </div>
            <div className="p-4 bg-secondary/30 rounded-lg">
              <h4 className="font-medium mb-2">Collaboration internationale</h4>
              <p className="text-sm text-muted-foreground">
                Coordination entre pays pour des normes et principes communs
              </p>
            </div>
            <div className="p-4 bg-secondary/30 rounded-lg">
              <h4 className="font-medium mb-2">Recherche sur la sécurité</h4>
              <p className="text-sm text-muted-foreground">
                Développement proactif de méthodes pour contrôler et aligner les IA avancées
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline" className="rounded-full">
              En savoir plus sur l'éthique et la gouvernance <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NiveauxIA;
