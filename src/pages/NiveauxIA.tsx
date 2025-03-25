
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import { Lightbulb, Brain, Zap, Cpu, Bot, Settings, Eye, Users } from 'lucide-react';

/**
 * Page sur les 7 niveaux d'IA
 * @returns {JSX.Element} Le composant de la page des niveaux d'IA
 */
const NiveauxIA = () => {
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

        <div className="space-y-16 mt-16">
          {/* Niveau 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center animate-slide-up">
            <div className="md:col-span-1 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
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
                  <li>Deep Blue (ordinateur d'échecs d'IBM)</li>
                  <li>Systèmes de filtrage de spam basiques</li>
                  <li>Systèmes de recommandation simples</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Niveau 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center animate-slide-up">
            <div className="md:col-span-1 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
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
                  <li>Voitures autonomes</li>
                  <li>Chatbots basiques</li>
                  <li>Systèmes de recommandation avancés</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Niveau 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center animate-slide-up">
            <div className="md:col-span-1 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                <Lightbulb size={64} className="text-primary" />
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="heading-md mb-3 flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-primary/10 text-primary text-sm font-bold">3</span>
                Théorie de l'Esprit
              </h3>
              <p className="mb-4 text-muted-foreground">
                Ce niveau, encore théorique, désigne des IA capables de comprendre que d'autres entités 
                (humaines ou IA) ont leurs propres croyances, désirs et intentions différents des leurs.
              </p>
              <div className="bg-secondary/40 rounded-lg p-4">
                <p className="text-sm font-medium">Applications potentielles :</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                  <li>Assistants personnels avancés</li>
                  <li>Robots sociaux sophistiqués</li>
                  <li>Systèmes de négociation autonomes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Niveau 4 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center animate-slide-up">
            <div className="md:col-span-1 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
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
                et serait capable d'introspection. Ce niveau reste purement théorique à l'heure actuelle.
              </p>
              <div className="bg-secondary/40 rounded-lg p-4">
                <p className="text-sm font-medium">Caractéristiques hypothétiques :</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                  <li>Conscience de sa propre existence</li>
                  <li>Capacité d'introspection</li>
                  <li>Compréhension de ses propres limites et capacités</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Niveau 5 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center animate-slide-up">
            <div className="md:col-span-1 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
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
                  <li>Apprentissage et raisonnement généralisés</li>
                  <li>Transfert de connaissances entre domaines</li>
                  <li>Résolution créative de problèmes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Niveau 6 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center animate-slide-up">
            <div className="md:col-span-1 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
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
                largement celles des humains dans pratiquement tous les domaines d'intérêt.
              </p>
              <div className="bg-secondary/40 rounded-lg p-4">
                <p className="text-sm font-medium">Implications potentielles :</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                  <li>Avancées scientifiques et technologiques rapides</li>
                  <li>Résolution de problèmes complexes (climat, maladies)</li>
                  <li>Transformations sociales et économiques profondes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Niveau 7 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center animate-slide-up">
            <div className="md:col-span-1 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
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
                une conscience collective avec des capacités émergentes supérieures à la somme de ses parties.
              </p>
              <div className="bg-secondary/40 rounded-lg p-4">
                <p className="text-sm font-medium">Concepts associés :</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                  <li>Intelligence distribuée</li>
                  <li>Conscience collective</li>
                  <li>Systèmes auto-organisants</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container bg-secondary/30 rounded-3xl my-12">
        <SectionHeading
          pretitle="Perspectives"
          title="Où en sommes-nous aujourd'hui ?"
          description="À l'heure actuelle, la majorité des systèmes d'IA se situent entre les niveaux 1 et 2. Les niveaux supérieurs restent des objectifs de recherche à long terme, suscitant à la fois fascination et préoccupations éthiques."
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
              <p>Les modèles d'IA actuels les plus avancés (comme GPT-4) présentent certaines caractéristiques des niveaux supérieurs, mais de façon limitée.</p>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs">✓</span>
              <p>Le développement responsable de l'IA implique de considérer les implications sociales et éthiques à chaque niveau.</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default NiveauxIA;
