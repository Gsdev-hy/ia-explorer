
import React from 'react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Bot, Code, Terminal, Database, Shield, Rocket, FlaskConical, Layers, CheckCircle } from 'lucide-react';

const CoderAvecIA = () => {
  return (
    <>
      <Hero
        title="Coder une Application avec l'IA"
        subtitle="Guide Complet des Concepts, Outils et Bonnes Pratiques"
      />

      <section className="section-container">
        <div className="prose prose-lg max-w-none dark:prose-invert mb-10">
          <h2 className="text-2xl font-bold">Introduction</h2>
          <div className="bg-primary/5 p-6 rounded-lg my-6">
            <p className="text-lg font-medium">L'IA, votre nouveau partenaire de codage</p>
            <p>
              L'intelligence artificielle révolutionne le développement d'applications en proposant 
              de nouvelles façons de coder. Il est important de distinguer deux approches complémentaires :
            </p>
            <ul>
              <li><strong>L'IA comme assistant au codage</strong> - Des outils comme GitHub Copilot ou ChatGPT qui vous aident à générer du code</li>
              <li><strong>L'IA comme fonctionnalité</strong> - L'intégration de capacités IA dans votre application, comme un chatbot intelligent</li>
            </ul>
            <p className="mt-4">
              <strong>Les avantages sont nombreux :</strong> accélération du développement, aide à la résolution de problèmes, 
              génération de code répétitif, prototypage rapide, et bien plus encore.
            </p>
          </div>
        </div>

        <Tabs defaultValue="comprendre" className="w-full mb-16">
          <TabsList className="w-full max-w-4xl mx-auto grid grid-cols-4 mb-8">
            <TabsTrigger value="comprendre">
              <div className="flex flex-col items-center gap-2 py-2">
                <Bot className="h-5 w-5" />
                <span>Comprendre les IA</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="integration">
              <div className="flex flex-col items-center gap-2 py-2">
                <Code className="h-5 w-5" />
                <span>Intégrer l'IA</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="deploiement">
              <div className="flex flex-col items-center gap-2 py-2">
                <Rocket className="h-5 w-5" />
                <span>Déploiement</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="bonnes-pratiques">
              <div className="flex flex-col items-center gap-2 py-2">
                <CheckCircle className="h-5 w-5" />
                <span>Bonnes Pratiques</span>
              </div>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="comprendre" className="animate-fade-in space-y-8">
            <SectionHeading 
              title="Comprendre les IA Génératives pour le Code" 
              description="Les concepts essentiels pour mieux utiliser les IA dans le développement"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Bot className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Les Grands Modèles de Langage (LLM)</h3>
                      <p className="text-muted-foreground mb-4">
                        Les LLM sont le moteur des IA qui comprennent et génèrent du code. Ils sont entraînés sur d'énormes
                        corpus de texte et de code source public, formant une sorte de "dictionnaire" gigantesque.
                      </p>
                      <ul className="space-y-2 list-disc pl-5">
                        <li>Entraînés sur des dépôts de code publics (GitHub, StackOverflow...)</li>
                        <li>Incorporent des documentations techniques et tutoriels</li>
                        <li>Peuvent reconnaître des patterns et produire du code adapté</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Layers className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">La Fenêtre de Contexte</h3>
                      <p className="text-muted-foreground mb-4">
                        La quantité d'information que l'IA peut "retenir" lors d'une interaction. Pour le code, c'est crucial
                        car les projets sont souvent complexes et interconnectés.
                      </p>
                      <ul className="space-y-2 list-disc pl-5">
                        <li>Limite la quantité de code que l'IA peut comprendre à la fois</li>
                        <li>Impact direct sur la cohérence des suggestions</li>
                        <li>Les modèles récents ont des fenêtres toujours plus grandes</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Terminal className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Les Tokens : l'unité de mesure</h3>
                      <p className="text-muted-foreground mb-4">
                        Les tokens sont les unités de base que l'IA traite - ce sont des morceaux de mots ou des caractères.
                        Ils déterminent la capacité et le coût d'utilisation des modèles.
                      </p>
                      <ul className="space-y-2 list-disc pl-5">
                        <li>Un token = environ 4 caractères ou 3/4 d'un mot</li>
                        <li>La facturation des API est souvent basée sur les tokens</li>
                        <li>Optimiser ses prompts permet de réduire les coûts</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <FlaskConical className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">L'Art du Prompting</h3>
                      <p className="text-muted-foreground mb-4">
                        Savoir communiquer efficacement avec l'IA est une compétence essentielle pour obtenir du code de qualité.
                      </p>
                      <div className="bg-secondary/20 p-4 rounded-lg">
                        <p className="font-medium mb-2">Exemple de bon prompt pour générer du code :</p>
                        <p className="text-sm italic">
                          "Écris une fonction React en TypeScript qui gère un formulaire de contact avec validation d'email. 
                          Utilise les hooks useState et useEffect. Voici ma structure de projet: [...]"
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="integration" className="animate-fade-in space-y-8">
            <SectionHeading 
              title="Intégrer une IA dans Votre Application" 
              description="Comment ajouter des capacités d'IA à votre application"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Code className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Appel API : La Passerelle vers l'Intelligence</h3>
                      <p className="text-muted-foreground mb-4">
                        Les API sont le pont entre votre application et les modèles d'IA hébergés par des fournisseurs comme OpenAI, Google, ou Hugging Face.
                      </p>
                      <div className="bg-secondary/20 p-4 rounded-lg">
                        <p className="font-medium mb-2">Exemple d'un appel API simple à OpenAI :</p>
                        <pre className="text-xs overflow-x-auto p-2 bg-black/70 rounded text-gray-100">
                          {`const response = await fetch('https://api.openai.com/v1/completions', {
  method: 'POST',
  headers: { 'Authorization': \`Bearer \${apiKey}\` },
  body: JSON.stringify({
    model: "gpt-4o",
    prompt: "Explique cette erreur: " + errorMessage
  })
});`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Database className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Architecture d'une Application avec IA</h3>
                      <p className="text-muted-foreground mb-4">
                        Intégrer l'IA dans votre application nécessite une architecture bien pensée.
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold">Front-end</h4>
                          <p className="text-sm">Interface utilisateur qui communique avec le back-end pour les fonctionnalités IA</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Back-end</h4>
                          <p className="text-sm">Gère la communication sécurisée avec les API d'IA et protège les clés</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Database</h4>
                          <p className="text-sm">Stocke les données, y compris les résultats des interactions avec l'IA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="deploiement" className="animate-fade-in space-y-8">
            <SectionHeading 
              title="Du Développement au Déploiement" 
              description="Comment déployer efficacement des applications intégrant l'IA"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Terminal className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Environnement Local vs. Production</h3>
                      <p className="text-muted-foreground mb-4">
                        Les applications intégrant l'IA nécessitent une attention particulière lors du passage en production.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-secondary/20 p-3 rounded-lg">
                          <h4 className="font-semibold mb-1">Local</h4>
                          <ul className="text-sm space-y-1 list-disc pl-4">
                            <li>Clés API de test</li>
                            <li>Mocks pour simulation</li>
                            <li>Développement rapide</li>
                          </ul>
                        </div>
                        <div className="bg-secondary/20 p-3 rounded-lg">
                          <h4 className="font-semibold mb-1">Production</h4>
                          <ul className="text-sm space-y-1 list-disc pl-4">
                            <li>Clés API sécurisées</li>
                            <li>Monitoring des coûts</li>
                            <li>Gestion des erreurs</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Rocket className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Options de Déploiement</h3>
                      <p className="text-muted-foreground mb-4">
                        Plusieurs options s'offrent à vous pour déployer votre application avec IA.
                      </p>
                      <ul className="space-y-2 list-disc pl-5">
                        <li><strong>Plateformes Cloud</strong> - AWS, Google Cloud, Azure</li>
                        <li><strong>PaaS</strong> - Heroku, Vercel, Netlify</li>
                        <li><strong>Conteneurisation</strong> - Docker, Kubernetes</li>
                        <li><strong>Edge Functions</strong> - Idéales pour les appels API d'IA</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="bonnes-pratiques" className="animate-fade-in space-y-8">
            <SectionHeading 
              title="Défis, Contraintes et Bonnes Pratiques" 
              description="Optimisez votre utilisation de l'IA pour le développement"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Shield className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Règles de Sécurité Essentielles</h3>
                      <p className="text-muted-foreground mb-4">
                        La sécurité est primordiale lors de l'intégration d'IA dans vos applications.
                      </p>
                      <ul className="space-y-2 list-disc pl-5">
                        <li><strong>Protection des clés API</strong> - Jamais côté client, utilisez des variables d'environnement</li>
                        <li><strong>Validation des entrées</strong> - Évitez les attaques par injection de prompt</li>
                        <li><strong>Gestion des données sensibles</strong> - Anonymisez les données avant envoi aux API</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Astuces et Conseils Pratiques</h3>
                      <p className="text-muted-foreground mb-4">
                        Quelques recommandations pour tirer le meilleur parti de l'IA dans vos projets.
                      </p>
                      <ul className="space-y-2 list-disc pl-5">
                        <li>Commencez petit et itérez progressivement</li>
                        <li>Vérifiez toujours le code généré par une IA</li>
                        <li>Utilisez l'IA pour apprendre, pas seulement pour produire</li>
                        <li>Documentez vos prompts efficaces pour réutilisation</li>
                        <li>Tenez-vous informé des évolutions constantes des modèles</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <Separator className="my-12" />
          
          <h2 className="text-2xl font-bold">Conclusion</h2>
          <p>
            L'IA transforme profondément le développement d'applications, offrant de nouvelles possibilités pour accélérer 
            et améliorer le processus de création. Qu'elle soit utilisée comme un assistant pour générer du code ou 
            comme une fonctionnalité intégrée dans l'application, l'IA agit comme un multiplicateur de productivité 
            et un catalyseur d'innovation.
          </p>

          <p>
            Cependant, l'IA reste un outil qui augmente les capacités des développeurs sans les remplacer. La connaissance 
            des fondamentaux du développement, l'esprit critique et la capacité à vérifier la qualité du code restent 
            indispensables. L'avenir appartient aux développeurs qui sauront combiner leur expertise technique avec 
            une utilisation intelligente et éthique de l'IA.
          </p>

          <div className="bg-primary/10 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-3">À retenir</h3>
            <ul className="space-y-2">
              <li>L'IA est un partenaire de développement puissant, mais qui nécessite une utilisation réfléchie</li>
              <li>La qualité de vos prompts détermine la qualité du code généré</li>
              <li>La sécurité ne doit jamais être compromise lors de l'intégration d'IA</li>
              <li>L'évolution rapide des modèles d'IA continuera d'offrir de nouvelles possibilités</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoderAvecIA;
