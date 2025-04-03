
# Changelog - IA Explorer

Ce fichier documente les changements et améliorations apportés au projet IA Explorer, une ressource éducative sur l'intelligence artificielle.

## Structure du projet

```
IA-Explorer/
├── public/                     # Ressources statiques
├── src/                        # Code source
│   ├── components/             # Composants réutilisables
│   │   ├── common/             # Composants communs à plusieurs pages
│   │   ├── ethics/            # Composants pour la section éthique
│   │   ├── glossary/          # Composants pour le glossaire
│   │   ├── memory/            # Composants pour la section mémoire d'IA
│   │   ├── ml/                # Composants pour le Machine Learning
│   │   │   └── visualization/ # Sous-composants pour les visualisations
│   │   ├── multimodal/        # Composants pour les IA multimodales
│   │   ├── news/              # Composants pour les actualités
│   │   ├── resources/         # Composants pour les ressources
│   │   ├── timeline/          # Composants pour la timeline
│   │   └── ui/                # Composants UI réutilisables (shadcn/ui)
│   ├── hooks/                  # Hooks React personnalisés
│   ├── layouts/                # Layouts de page
│   ├── lib/                    # Utilitaires et fonctions
│   └── pages/                  # Pages principales de l'application
├── .gitignore                  # Fichiers ignorés par Git
├── components.json             # Configuration des composants shadcn/ui
├── CHANGELOG.md                # Ce fichier de changelog
└── README.md                   # Documentation du projet
```

## Fonctionnalités existantes

- **Navigation complète** avec menu responsive
- **Mode sombre/clair** avec persistance des préférences
- **Pages thématiques** sur l'IA:
  - Niveaux d'IA
  - Types d'IA
  - Machine Learning
  - IA Multimodale
  - Cas d'usage
  - Éthique de l'IA
  - Histoire de l'IA
  - Glossaire des termes
  - Ressources externes
  - Actualités en IA
- **Composants interactifs**:
  - Quiz sur l'éthique de l'IA
  - Timeline interactive de l'histoire de l'IA
  - Glossaire des termes avec recherche
  - Visualisation des réseaux de neurones
  - Visualisations de différents algorithmes ML

## Évolution du projet

### 05/04/2025 - Améliorations d'interface et cohérence visuelle
- **Uniformisation du style des pages**:
  - Standardisation de l'interface des pages Histoire et À propos pour correspondre aux autres pages
  - Ajout du composant Hero sur toutes les pages
  - Réduction des espaces verticaux pour une meilleure densité d'information
- **Correction du placement des images**:
  - Intégration des images dans les bonnes sections: Actualités, Cas d'usage et Histoire
  - Optimisation de l'affichage des images avec des ratios cohérents
- **Optimisations de performance**:
  - Réduction de la taille des composants Hero et SectionHeading
  - Amélioration du chargement des images avec l'attribut loading="lazy"
- **Mise à jour du changelog** pour documenter les améliorations récentes

### 04/10/2024 - Refactorisation majeure des pages volumineuses
- **Refactorisation de la page Ethique.tsx**:
  - Découpage en composants réutilisables et modulaires
  - Création de EthicalPrinciplesSection, EthicalChallengesSection, RegulatoryFrameworkSection et QuizSection
  - Amélioration de la maintenabilité et des performances
- **Refactorisation de la page IAMultimodale.tsx**:
  - Découpage en composants dédiés: ApplicationsSection et PromptingSection
  - Meilleure organisation du code et des responsabilités
- **Création du composant commun ExploreMoreSection**:
  - Composant réutilisable pour les sections de navigation entre pages
  - Utilisé dans plusieurs pages pour une expérience utilisateur cohérente
- **Optimisation des performances**:
  - Chargement plus rapide des pages volumineuses grâce à la modularisation
  - Réduction de la complexité des composants individuels

### 03/10/2024 - Améliorations et refactorisation
- **Enrichissement de la page Histoire de l'IA**:
  - Ajout d'une navigation par ères historiques avec onglets interactifs
  - Ajout d'une section sur les publications fondatrices
  - Intégration d'une bibliographie de ressources externes
  - Amélioration de la présentation des figures emblématiques
  - Enrichissement de la section sur l'impact culturel
- **Refactorisation des composants volumineux**:
  - Modularisation du composant AITypesVisualization en sous-composants spécialisés
  - Création de composants dédiés: AINodeGraph, AITypeExplanation, AICapabilitiesChart
  - Amélioration de la maintenabilité du code
- **Création d'un rapport de structure (APP_STRUCTURE.md)**:
  - Documentation détaillée de l'architecture du projet
  - Analyse des forces et faiblesses
  - Identification des opportunités d'amélioration

### 02/10/2024 - Corrections de bugs
- **Correction du bug d'icône** dans HistoireIA.tsx (remplacement de Robot par Bot)
- **Correction de l'exportation du composant** dans HistoireIA.tsx pour résoudre l'erreur d'exportation par défaut

### 01/10/2024 - Optimisations et corrections
- **Mise à jour du routage**: Home.tsx est maintenant la page d'accueil par défaut
- **Optimisation des flux RSS dans Actualités**:
  - Suppression des flux INRIA et HAL Science (non fonctionnels)
  - Ajout du flux TLDR Tech
  - Conservation des flux Interstices, Usbek & Rica et Siècle Digital

### 30/09/2024 - Corrections et documentation
- **Correction du bug d'icône** dans Home.tsx (remplacement de Robot par Bot)
- **Création du fichier CHANGELOG.md** pour documenter l'évolution du projet
- **Clarification de la structure des routes**: l'application a actuellement deux pages d'accueil (Index.tsx et Home.tsx), avec Index.tsx étant la page par défaut

### 29/09/2024 - Améliorations visuelles et contenu
- **Améliorations du composant NeuralNetworkAnimation**:
  - Ajout de contrôles (pause/reprise/réinitialisation)
  - Ajout de contrôles de vitesse
  - Amélioration du design visuel
  - Étiquettes pour les couches du réseau
  - Notifications toast pour les changements de vitesse
  - Interactivité utilisateur améliorée

- **Enrichissement de la page Machine Learning**:
  - Section sur le Deep Learning enrichie
  - Visualisations interactives des architectures CNN, Transformer et GAN
  - Descriptions détaillées des concepts clés
  - Tendances émergentes en Deep Learning
