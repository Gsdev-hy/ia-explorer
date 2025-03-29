# Changelog - IA Explorer

Ce fichier documente les changements et améliorations apportés au projet IA Explorer, une ressource éducative sur l'intelligence artificielle.

## Structure du projet

```
IA-Explorer/
├── public/                     # Ressources statiques
├── src/                        # Code source
│   ├── components/             # Composants réutilisables
│   │   ├── ethics/            # Composants pour la section éthique
│   │   ├── glossary/          # Composants pour le glossaire
│   │   ├── memory/            # Composants pour la section mémoire d'IA
│   │   ├── ml/                # Composants pour le Machine Learning
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
├── README.md                   # Documentation du projet
└── ...                         # Autres fichiers de configuration
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

### 30/09/2024 - Corrections et documentation
- **Correction du bug d'icône** dans Home.tsx (remplacement de Robot par Bot)
- **Création du fichier CHANGELOG.md** pour documenter l'évolution du projet
- **Clarification de la structure des routes**: l'application a actuellement deux pages d'accueil (Index.tsx et Home.tsx), avec Index.tsx étant la page par défaut

### 01/10/2024 - Optimisations et corrections
- **Mise à jour du routage**: Home.tsx est maintenant la page d'accueil par défaut
- **Optimisation des flux RSS dans Actualités**:
  - Suppression des flux INRIA et HAL Science (non fonctionnels)
  - Ajout du flux TLDR Tech
  - Conservation des flux Interstices, Usbek & Rica et Siècle Digital

## Note sur les pages d'accueil
Actuellement, le projet comporte deux pages d'accueil:
- **Index.tsx**: Route par défaut (`/`), version plus récente et simplifiée
- **Home.tsx**: Accessible via `/home`, version plus détaillée mais potentiellement redondante

Une rationalisation future pourrait consister à fusionner ces deux pages pour une expérience utilisateur plus cohérente.
