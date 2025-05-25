
import { ScientificPublication } from '../resourcesData';

export const scientificPublications: ScientificPublication[] = [
  {
    title: "Attention Is All You Need",
    authors: ["Ashish Vaswani", "Noam Shazeer", "Niki Parmar", "Jakob Uszkoreit"],
    journal: "Advances in Neural Information Processing Systems",
    year: 2017,
    description: "Article fondateur sur l'architecture Transformer, base des LLMs modernes",
    link: "https://arxiv.org/abs/1706.03762"
  },
  {
    title: "Language Models are Few-Shot Learners",
    authors: ["Tom B. Brown", "Benjamin Mann", "Nick Ryder", "Melanie Subbiah"],
    journal: "Advances in Neural Information Processing Systems",
    year: 2020,
    description: "Présentation de GPT-3 et démonstration des capacités few-shot des grands modèles",
    link: "https://arxiv.org/abs/2005.14165"
  },
  {
    title: "Deep Residual Learning for Image Recognition",
    authors: ["Kaiming He", "Xiangyu Zhang", "Shaoqing Ren", "Jian Sun"],
    journal: "IEEE Conference on Computer Vision and Pattern Recognition",
    year: 2016,
    description: "Introduction des réseaux résiduels (ResNet) révolutionnant la vision par ordinateur",
    link: "https://arxiv.org/abs/1512.03385"
  },
  {
    title: "Generative Adversarial Networks",
    authors: ["Ian J. Goodfellow", "Jean Pouget-Abadie", "Mehdi Mirza", "Bing Xu"],
    journal: "Advances in Neural Information Processing Systems",
    year: 2014,
    description: "Article fondateur sur les GANs, révolutionnant la génération d'images",
    link: "https://arxiv.org/abs/1406.2661"
  },
  {
    title: "BERT: Pre-training of Deep Bidirectional Transformers",
    authors: ["Jacob Devlin", "Ming-Wei Chang", "Kenton Lee", "Kristina Toutanova"],
    journal: "North American Chapter of the Association for Computational Linguistics",
    year: 2019,
    description: "Présentation de BERT, modèle bidirectionnel marquant pour le NLP",
    link: "https://arxiv.org/abs/1810.04805"
  },
  {
    title: "Mastering the Game of Go with Deep Neural Networks",
    authors: ["David Silver", "Aja Huang", "Chris J. Maddison", "Arthur Guez"],
    journal: "Nature",
    year: 2016,
    description: "AlphaGo : première IA à battre un champion du monde au jeu de Go",
    link: "https://www.nature.com/articles/nature16961"
  },
  {
    title: "Training language models to follow instructions with human feedback",
    authors: ["Long Ouyang", "Jeff Wu", "Xu Jiang", "Diogo Almeida"],
    journal: "Advances in Neural Information Processing Systems",
    year: 2022,
    description: "Méthodes RLHF utilisées pour aligner les modèles comme ChatGPT",
    link: "https://arxiv.org/abs/2203.02155"
  }
];
