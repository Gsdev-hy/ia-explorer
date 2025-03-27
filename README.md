
# IA Explorer - Guide Éducatif sur l'Intelligence Artificielle

## Présentation du Projet

**IA Explorer** est une ressource éducative complète sur l'intelligence artificielle, conçue pour rendre ce domaine complexe accessible à tous les niveaux de connaissance. La plateforme offre une exploration détaillée de tous les aspects de l'IA, des concepts fondamentaux aux applications avancées.

**URL**: https://lovable.dev/projects/ca21d6c5-36b0-4b33-bf3f-15c29fa6fead

**Auteur**: Geoffroy Streit (geoffroy.streit@gmail.com)

## Fonctionnalités principales

- **Explorations thématiques complètes** : Types d'IA, niveaux d'intelligence artificielle, machine learning, IA multimodale...
- **Resources pédagogiques** : Glossaire détaillé, études de cas, exemples pratiques principalement en français
- **Contenu multimédia** : Schémas explicatifs, timeline interactive de l'histoire de l'IA
- **Actualités sur l'IA** : Flux RSS automatisé des dernières innovations dans le domaine avec des sources francophones de qualité
- **Interface adaptative** : Support du mode clair/sombre, design responsive pour tous les appareils

## Sections du site

- **Accueil** : Présentation générale et navigation intuitive
- **Types d'IA** : IA faible vs IA forte, systèmes experts, etc.
- **Niveaux d'IA** : ANI, AGI, ASI expliqués en détail
- **Machine Learning** : Principes, types d'apprentissage, algorithmes courants
- **IA Multimodale** : IA pour la création d'images, vidéos, musique et code
- **Cas d'Usage** : Applications pratiques de l'IA dans divers secteurs
- **Histoire de l'IA** : Chronologie interactive des événements clés
- **Éthique de l'IA** : Enjeux, défis et considérations éthiques
- **Glossaire** : Définitions détaillées des termes techniques
- **Ressources** : Bibliographie, liens, outils et références complémentaires, principalement en français
- **Actualités** : Dernières nouvelles du monde de l'IA via flux RSS francophones
- **À propos** : Information sur le projet et son auteur

## Technologies utilisées

Cette application a été développée avec:

- **React** avec TypeScript pour un développement robuste et typé
- **Vite** comme outil de build ultra-rapide
- **React Router** pour la navigation entre les différentes sections
- **Tailwind CSS** pour le styling efficace et responsive
- **shadcn/ui** pour des composants UI réutilisables et accessibles
- **Lucide React** pour les icônes vectorielles
- **React Query** pour la gestion des données
- **RSS2JSON API** pour l'intégration des flux RSS
- **Mode sombre/clair** avec persistance des préférences utilisateur

## Comment utiliser ce projet

### Installation et démarrage

```sh
# Cloner le dépôt
git clone <URL_DU_DÉPÔT>

# Accéder au répertoire du projet
cd ia-explorer

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

### Personnalisation

Le contenu du site peut être facilement mis à jour en modifiant les fichiers dans les répertoires:
- `src/pages/` pour les pages principales
- `src/components/` pour les composants réutilisables
- `src/data/` pour les données (termes du glossaire, ressources, etc.)

### Sources d'actualités

Les flux RSS utilisés pour la section Actualités incluent:
- Interstices (INRIA)
- INRIA
- Usbek & Rica
- Siècle Digital
- HAL Science

Pour ajouter ou modifier des sources, consultez le fichier `src/components/news/IANews.tsx`.

## Déploiement

Pour déployer ce projet:

1. Ouvrez [Lovable](https://lovable.dev/projects/ca21d6c5-36b0-4b33-bf3f-15c29fa6fead)
2. Cliquez sur Share -> Publish

## Contribution

Les contributions à ce projet sont les bienvenues. Pour contribuer:

1. Contactez l'auteur: geoffroy.streit@gmail.com
2. Proposez des améliorations ou signaler des problèmes

## Licence

Tous droits réservés. © 2023-2025 Geoffroy Streit.
