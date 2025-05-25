
import { Resource } from '../resourcesData';

export const courses: Resource[] = [
  {
    title: "Introduction à l'Intelligence Artificielle",
    source: "France Université Numérique",
    description: "MOOC gratuit couvrant les bases de l'IA, ses applications et enjeux sociétaux",
    link: "https://www.fun-mooc.fr/fr/cours/intelligence-artificielle/",
    type: "cours",
    year: 2024,
    tags: ["MOOC", "gratuit", "bases", "enjeux"]
  },
  {
    title: "Machine Learning par Stanford (sous-titré français)",
    source: "Coursera",
    description: "Cours de référence d'Andrew Ng traduit en français",
    link: "https://fr.coursera.org/learn/machine-learning",
    type: "cours",
    year: 2024,
    tags: ["Stanford", "machine learning", "référence"]
  },
  {
    title: "IA pour tous - Cours d'Andrew Ng",
    source: "Coursera",
    description: "Introduction non-technique à l'IA accessible à tous",
    link: "https://fr.coursera.org/learn/ai-for-everyone-fr",
    type: "cours",
    year: 2024,
    tags: ["débutant", "non-technique", "accessible"]
  },
  {
    title: "Deep Learning",
    source: "France Université Numérique",
    description: "MOOC sur l'apprentissage profond et les réseaux de neurones",
    link: "https://www.fun-mooc.fr/fr/cours/deep-learning/",
    type: "cours",
    year: 2024,
    tags: ["deep learning", "réseaux de neurones"]
  },
  {
    title: "IA et Société",
    source: "Le Wagon",
    description: "Formation sur les enjeux sociétaux de l'intelligence artificielle",
    link: "https://www.lewagon.com/fr/data-science-course/part-time",
    type: "cours",
    year: 2024,
    tags: ["société", "enjeux", "formation"]
  }
];
