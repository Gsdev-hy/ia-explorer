
# IA Explorer

Une plateforme éducative interactive sur l'intelligence artificielle, ses concepts, applications et enjeux.

## À propos du projet

IA Explorer est une application web conçue pour rendre les concepts de l'intelligence artificielle accessibles à tous. Ce projet vise à démystifier l'IA à travers des explications claires, des visualisations interactives et des exemples concrets, tout en encourageant une approche réfléchie et éthique de ces technologies.

## Capture d'écran

![IA Explorer Screenshot](/lovable-uploads/93b1a36e-0fc6-4f70-8be1-d27437de628c.png)

## Fonctionnalités

- **Contenu éducatif structuré** sur les différents types d'intelligence artificielle
- **Visualisations interactives** pour comprendre les concepts complexes
- **Design responsive** avec menu mobile optimisé et navigation accessible
- **Accessibilité renforcée** avec support clavier complet et attributs ARIA
- **Logo animé** avec effets de transition fluides
- **Animations et transitions** entre pages pour une expérience utilisateur agréable
- **Glossaire** des termes techniques avec définitions claires et section dédiée à la mémoire en IA
- **Section histoire** retraçant l'évolution de l'IA depuis ses débuts
- **Exemples pratiques** d'applications de l'IA dans différents domaines
- **Actualités** sur les dernières avancées et innovations
- **Ressources externes** pour approfondir ses connaissances
- **Guide de prompting** pour maîtriser l'art de communiquer avec les IA génératives
- **Exemples multimodaux** pour explorer le potentiel créatif des IA modernes

## Améliorations récentes

### Design et accessibilité
- **Menu mobile restructuré** avec catégories organisées et animations fluides
- **Navigation au clavier** complète avec indicateurs de focus et support ARIA
- **Logo IA Explorer animé** avec animation séquentielle des lettres et effets au survol
- **Transitions entre pages** pour une navigation plus agréable
- **Skip link** pour accéder directement au contenu principal
- **Respect des préférences** de réduction de mouvement (prefers-reduced-motion)

### Contenu enrichi
- **Page À propos** mise à jour avec informations détaillées sur l'auteur
- **Mission élargie** avec approche pédagogique et éthique renforcée
- **Section recherche de projets** pour opportunités professionnelles

## Pages principales

- **Accueil** : Introduction et navigation vers les différentes sections
- **Niveaux d'IA** : Présentation des différents niveaux d'intelligence artificielle
- **Types d'IA** : Exploration des différentes approches et techniques d'IA
  - **LLM et RLHF** : Page détaillée sur les modèles de langage et l'apprentissage par renforcement
- **Machine Learning** : Focus sur l'apprentissage automatique et ses méthodes
- **IA Multimodale** : Technologies combinant plusieurs types de médias et d'entrées
- **Cas d'usage** : Applications concrètes de l'IA dans différents secteurs
- **Éthique** : Enjeux éthiques liés au développement et à l'utilisation de l'IA
- **Éthique et Gouvernance** : Approfondissement sur la gouvernance et la réglementation de l'IA
- **Histoire de l'IA** : Chronologie des avancées majeures et figures importantes
- **Glossaire** : Définitions des termes techniques du domaine et section sur les types de mémoire en IA
- **Ressources** : Livres, cours, sites web et autres ressources pour approfondir
- **Actualités** : Dernières nouvelles du domaine de l'IA
- **À propos** : Informations sur le projet et son auteur, la mission et les objectifs

## Technologies utilisées

- **React** avec **TypeScript** pour le front-end
- **Vite** pour le build et le développement
- **Tailwind CSS** pour le styling responsive et les animations
- **Shadcn/UI** pour les composants UI accessibles et personnalisables
- **Framer Motion** pour les animations et transitions fluides
- **Recharts** pour les graphiques et visualisations de données
- **React Router** pour la navigation entre les pages
- **React Query** pour la gestion des données et des états

## Visualisations interactives

L'application comprend plusieurs visualisations interactives pour faciliter la compréhension des concepts d'IA :

- Animation de réseau neuronal avec contrôles utilisateur
- Graphiques d'apprentissage machine illustrant différents algorithmes
- Visualisation des différents types d'IA et leurs relations
- Timeline interactive de l'histoire de l'IA avec événements clés
- Workflow de traitement des données en IA multimodale
- Schémas explicatifs du processus RLHF pour l'alignement des modèles
- Visualisation des différents types de mémoire utilisés en IA

## Sections spéciales

### Art du prompting

Une section complète dédiée à l'art du prompting, avec :
- Conseils pour structurer efficacement les prompts
- Exemples détaillés par domaine (image, texte, code, audio)
- FAQ sur les meilleures pratiques
- Techniques avancées pour les usages professionnels

### IA Multimodales

Exploration des technologies combinant plusieurs types de médias :
- Showcase des applications créatives (génération d'images, musique, code)
- Exemples concrets avec prompts utilisés
- Workflow interactif expliquant le fonctionnement
- Applications professionnelles dans différents secteurs

## Développement

### Prérequis

- Node.js 18+
- npm ou Yarn

### Installation

1. Cloner le dépôt
2. Installer les dépendances : `npm install` ou `yarn install`
3. Lancer le serveur de développement : `npm run dev` ou `yarn dev`

### Structure du projet

```
IA-Explorer/
├── public/                     # Ressources statiques
├── src/                        # Code source
│   ├── components/             # Composants réutilisables
│   │   ├── common/             # Composants communs à plusieurs pages
│   │   ├── ethics/             # Composants pour la section éthique
│   │   ├── glossary/           # Composants pour le glossaire
│   │   ├── memory/             # Composants pour la section mémoire d'IA
│   │   ├── ml/                 # Composants pour le Machine Learning
│   │   │   └── visualization/  # Visualisations interactives
│   │   ├── multimodal/         # Composants pour les IA multimodales
│   │   ├── news/               # Composants pour les actualités
│   │   ├── resources/          # Composants pour les ressources
│   │   ├── timeline/           # Composants pour la timeline
│   │   ├── types-ia/           # Composants pour les types d'IA
│   │   └── ui/                 # Composants UI réutilisables (shadcn/ui)
│   ├── hooks/                  # Hooks React personnalisés
│   ├── layouts/                # Layouts de page
│   ├── lib/                    # Utilitaires et fonctions
│   └── pages/                  # Pages principales de l'application
├── .gitignore
├── package.json
├── CHANGELOG.md                # Historique des changements
└── README.md                   # Documentation
```

## Roadmap (2025-2026)

- Ajout d'un système de quiz interactifs pour tester ses connaissances
- Support multilingue (français, anglais, espagnol)
- Mode hors-ligne pour consultation sans connexion
- Application mobile avec fonctionnalités spécifiques
- Intégration d'un chatbot éducatif spécialisé en IA
- Section dédiée à l'IA responsable et aux enjeux de gouvernance
- Visualisations avancées en 3D pour les concepts complexes
- Modules d'exercices pratiques pour apprendre à utiliser l'IA

## Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le repo
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/amazing-feature`)
3. Commitez vos changements (`git commit -m 'Add some amazing feature'`)
4. Poussez vers la branche (`git push origin feature/amazing-feature`)
5. Ouvrez une Pull Request

## Changelog

Consultez le [CHANGELOG.md](CHANGELOG.md) pour l'historique détaillé des versions et des améliorations.

## Contact

**Geoffroy Streit** - Créateur d'IA Explorer  
📧 Email : geoffroy.streit@gmail.com

Ancien ingénieur optronique et commercial en reconversion IT, passionné d'IA et d'éducation numérique. Actuellement à la recherche de projets techniques innovants dans les domaines des nouvelles énergies, de l'optique/électronique, ou ayant un impact humain positif.

Pour toute question, suggestion ou opportunité professionnelle, n'hésitez pas à me contacter !

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.
