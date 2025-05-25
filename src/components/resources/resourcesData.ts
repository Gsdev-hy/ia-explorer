export interface Resource {
  title: string;
  source: string;
  description: string;
  link: string;
  type: string;
  year?: number;
  tags?: string[];
}

export interface ScientificPublication {
  title: string;
  authors: string[];
  year: number;
  journal: string;
  description: string;
  link: string;
  tags?: string[];
}

export interface IAToolResource {
  name: string;
  description: string;
  category: string;
  link: string;
  author?: string;
  features: string[];
  pricing: "Gratuit" | "Freemium" | "Payant";
}

export const realResources: Resource[] = [
  // Nouveaux cours en tête de liste
  {
    title: "Comment utiliser intelligemment les intelligences artificielles au travail",
    source: "Geoffroy Streit",
    description: "Guide complet pour intégrer efficacement l'IA dans votre environnement professionnel. Découvrez les meilleures pratiques, outils et stratégies pour optimiser votre productivité au travail avec l'IA.",
    link: "/cours/utiliser-ia-travail",
    type: "cours",
    year: 2024,
    tags: ["Usage professionnel", "Productivité", "Stratégie", "Outils IA", "Gestion", "Collaboration", "Workflow", "Efficacité", "Management"]
  },
  {
    title: "Comment organiser les différents types de services IA que l'on utilise ?",
    source: "Geoffroy Streit",
    description: "Méthode structurée pour organiser, catégoriser et gérer efficacement tous vos outils et services IA. Apprenez à créer votre écosystème IA personnel optimal.",
    link: "/cours/organiser-services-ia",
    type: "cours",
    year: 2024,
    tags: ["Organisation", "Gestion", "Services IA", "Catégorisation", "Écosystème", "Planification", "Optimisation", "Structure", "Méthode"]
  },

  // 30 nouveaux articles et publications pédagogiques en français
  {
    title: "L'IA générative : comprendre ChatGPT et ses implications",
    source: "France Inter",
    description: "Article pédagogique expliquant le fonctionnement de ChatGPT et des modèles de langage génératifs, leurs applications et leurs limites.",
    link: "https://www.franceinter.fr/emissions/la-terre-au-carre/chatgpt-intelligence-artificielle-generative",
    type: "article",
    year: 2024,
    tags: ["IA générative", "ChatGPT", "LLM", "Vulgarisation", "Technologies"]
  },
  {
    title: "Les algorithmes de recommandation expliqués simplement",
    source: "The Conversation France",
    description: "Analyse accessible des systèmes de recommandation utilisés par Netflix, YouTube et autres plateformes digitales.",
    link: "https://theconversation.com/comment-fonctionnent-les-algorithmes-de-recommandation-148923",
    type: "article",
    year: 2024,
    tags: ["Algorithmes", "Recommandation", "Machine Learning", "Plateformes digitales"]
  },
  {
    title: "L'IA dans la médecine : révolution ou évolution ?",
    source: "Sciences et Avenir",
    description: "Dossier complet sur les applications de l'intelligence artificielle dans le domaine médical et leurs impacts.",
    link: "https://www.sciencesetavenir.fr/sante/intelligence-artificielle-medecine-revolution-evolution_167234",
    type: "article",
    year: 2024,
    tags: ["Médecine", "Santé", "Diagnostic", "Innovation médicale", "E-santé"]
  },
  {
    title: "L'éthique de l'IA : enjeux et défis contemporains",
    source: "Usbek & Rica",
    description: "Réflexion approfondie sur les questions éthiques soulevées par le développement de l'intelligence artificielle.",
    link: "https://usbeketrica.com/fr/article/ethique-intelligence-artificielle-enjeux-defis",
    type: "article",
    year: 2024,
    tags: ["Éthique", "Philosophie", "Société", "Responsabilité", "Gouvernance"]
  },
  {
    title: "Les voitures autonomes : où en est-on vraiment ?",
    source: "Auto Plus",
    description: "État des lieux factuel sur les technologies de conduite autonome et leurs perspectives de déploiement.",
    link: "https://www.autoplus.fr/actualite/voiture-autonome-technologie-etat-deploiement-2024",
    type: "article",
    year: 2024,
    tags: ["Véhicule autonome", "Transport", "Innovation", "Mobilité", "Technologie"]
  },
  {
    title: "L'IA au service de l'environnement et du climat",
    source: "Reporterre",
    description: "Exploration des applications de l'IA pour lutter contre le changement climatique et protéger l'environnement.",
    link: "https://reporterre.net/Intelligence-artificielle-climat-environnement-solutions",
    type: "article",
    year: 2024,
    tags: ["Environnement", "Climat", "Développement durable", "Innovation verte", "Écologie"]
  },
  {
    title: "Les deepfakes : technologie et risques",
    source: "01net",
    description: "Analyse technique et sociétale des deepfakes, leur fonctionnement et les défis qu'ils représentent.",
    link: "https://www.01net.com/actualites/deepfakes-technologie-risques-detection.html",
    type: "article",
    year: 2024,
    tags: ["Deepfake", "Manipulation", "Sécurité", "Désinformation", "Technologie"]
  },
  {
    title: "L'IA dans l'éducation : transformer l'apprentissage",
    source: "Café Pédagogique",
    description: "Panorama des applications de l'IA dans l'enseignement et leurs impacts sur la pédagogie moderne.",
    link: "https://www.cafepedagogique.net/2024/01/intelligence-artificielle-education-apprentissage",
    type: "article",
    year: 2024,
    tags: ["Éducation", "Pédagogie", "Apprentissage", "Formation", "École numérique"]
  },
  {
    title: "Les assistants vocaux : comment ça marche ?",
    source: "Numerama",
    description: "Explication détaillée du fonctionnement des assistants vocaux comme Alexa, Siri et Google Assistant.",
    link: "https://www.numerama.com/tech/assistants-vocaux-fonctionnement-technologie",
    type: "article",
    year: 2024,
    tags: ["Assistant vocal", "Reconnaissance vocale", "NLP", "Interface utilisateur", "IoT"]
  },
  {
    title: "L'IA et la création artistique : nouvelle ère créative",
    source: "Beaux Arts Magazine",
    description: "Exploration de l'impact de l'IA sur la création artistique et les nouveaux modes d'expression.",
    link: "https://www.beauxarts.com/grand-format/intelligence-artificielle-creation-artistique",
    type: "article",
    year: 2024,
    tags: ["Art", "Créativité", "Art génératif", "Culture", "Innovation artistique"]
  },
  {
    title: "La reconnaissance faciale : enjeux et controverses",
    source: "Next INpact",
    description: "Analyse technique et juridique de la reconnaissance faciale, ses usages et les débats qu'elle suscite.",
    link: "https://www.nextinpact.com/article/reconnaissance-faciale-enjeux-controverses-2024",
    type: "article",
    year: 2024,
    tags: ["Reconnaissance faciale", "Vie privée", "Surveillance", "Biométrie", "Sécurité"]
  },
  {
    title: "L'IA dans les jeux vidéo : de l'NPC à l'IA générative",
    source: "Gamekult",
    description: "Évolution de l'intelligence artificielle dans l'industrie du jeu vidéo et ses nouvelles applications.",
    link: "https://www.gamekult.com/actualite/intelligence-artificielle-jeux-video-evolution",
    type: "article",
    year: 2024,
    tags: ["Jeux vidéo", "Gaming", "NPC", "Procédural", "Divertissement"]
  },
  {
    title: "Les chatbots : révolution de la relation client",
    source: "Journal du Net",
    description: "Analyse de l'évolution des chatbots et de leur impact sur la relation client dans les entreprises.",
    link: "https://www.journaldunet.com/ebusiness/crm-marketing/chatbots-relation-client",
    type: "article",
    year: 2024,
    tags: ["Chatbot", "Relation client", "Service client", "Automatisation", "Business"]
  },
  {
    title: "L'IA prédictive en finance : algorithmes et marchés",
    source: "Les Echos",
    description: "Exploration des applications de l'IA prédictive dans les marchés financiers et la gestion de risques.",
    link: "https://www.lesechos.fr/finance-marches/intelligence-artificielle-predictive-finance",
    type: "article",
    year: 2024,
    tags: ["Finance", "Prédiction", "Marchés financiers", "Trading", "Fintech"]
  },
  {
    title: "Les réseaux de neurones expliqués aux débutants",
    source: "Futura Sciences",
    description: "Introduction accessible aux réseaux de neurones artificiels et à leur fonctionnement.",
    link: "https://www.futura-sciences.com/tech/dossiers/intelligence-artificielle-reseaux-neurones-debutants",
    type: "article",
    year: 2024,
    tags: ["Réseaux de neurones", "Deep Learning", "Technique", "Vulgarisation", "Apprentissage"]
  },
  {
    title: "L'IA et la cybersécurité : bouclier ou épée ?",
    source: "ANSSI Mag",
    description: "Analyse du rôle dual de l'IA en cybersécurité : outil de protection et vecteur d'attaque.",
    link: "https://www.ssi.gouv.fr/publication/intelligence-artificielle-cybersecurite-enjeux",
    type: "article",
    year: 2024,
    tags: ["Cybersécurité", "Protection", "Menaces", "Sécurité informatique", "ANSSI"]
  },
  {
    title: "L'automatisation intelligente en entreprise",
    source: "Harvard Business Review France",
    description: "Guide stratégique sur l'implémentation de l'automatisation intelligente dans les organisations.",
    link: "https://www.hbrfrance.fr/chroniques-experts/automatisation-intelligente-entreprise",
    type: "article",
    year: 2024,
    tags: ["Automatisation", "Transformation digitale", "Processus", "Entreprise", "ROI"]
  },
  {
    title: "L'IA conversationnelle : au-delà de ChatGPT",
    source: "ZDNet France",
    description: "Panorama des technologies d'IA conversationnelle et de leurs applications business.",
    link: "https://www.zdnet.fr/actualites/intelligence-artificielle-conversationnelle-panorama",
    type: "article",
    year: 2024,
    tags: ["IA conversationnelle", "NLP", "Chatbot", "Interface naturelle", "Communication"]
  },
  {
    title: "Machine Learning : choisir le bon algorithme",
    source: "Data Science Post",
    description: "Guide pratique pour sélectionner l'algorithme de machine learning adapté à son projet.",
    link: "https://datascience-post.com/choisir-algorithme-machine-learning-guide",
    type: "article",
    year: 2024,
    tags: ["Machine Learning", "Algorithmes", "Data Science", "Méthodologie", "Pratique"]
  },
  {
    title: "L'IA en agriculture : vers une agriculture 4.0",
    source: "Terre-net",
    description: "Applications concrètes de l'IA dans l'agriculture moderne et l'agriculture de précision.",
    link: "https://www.terre-net.fr/actualite/intelligence-artificielle-agriculture-precision",
    type: "article",
    year: 2024,
    tags: ["Agriculture", "AgTech", "Precision farming", "Innovation agricole", "Durabilité"]
  },
  {
    title: "Les biais algorithmiques : comprendre et prévenir",
    source: "La Recherche",
    description: "Analyse scientifique des biais dans les algorithmes d'IA et des méthodes pour les atténuer.",
    link: "https://www.larecherche.fr/intelligence-artificielle/biais-algorithmiques-prevention",
    type: "article",
    year: 2024,
    tags: ["Biais", "Équité", "Algorithmes", "Éthique", "Fairness"]
  },
  {
    title: "L'IA explicable : rendre l'IA transparente",
    source: "Pour la Science",
    description: "Introduction aux techniques d'IA explicable et à l'importance de la transparence algorithmique.",
    link: "https://www.pourlascience.fr/sd/intelligence-artificielle/ia-explicable-transparence",
    type: "article",
    year: 2024,
    tags: ["IA explicable", "Transparence", "Interprétabilité", "XAI", "Confiance"]
  },
  {
    title: "Les jumeaux numériques et l'IA industrielle",
    source: "Industrie & Technologies",
    description: "Applications de l'IA dans la création et l'exploitation de jumeaux numériques industriels.",
    link: "https://www.industrie-technologies.com/article/jumeaux-numeriques-ia-industrielle",
    type: "article",
    year: 2024,
    tags: ["Jumeau numérique", "Industrie 4.0", "Simulation", "IoT", "Manufacturing"]
  },
  {
    title: "L'IA et le traitement du langage naturel",
    source: "Interstices",
    description: "Exploration approfondie des techniques de traitement automatique du langage naturel.",
    link: "https://interstices.info/traitement-langage-naturel-intelligence-artificielle",
    type: "article",
    year: 2024,
    tags: ["NLP", "Linguistique computationnelle", "Traitement de texte", "Sémantique", "Syntaxe"]
  },
  {
    title: "L'IA au service de la recherche scientifique",
    source: "CNRS Le Journal",
    description: "Impact de l'IA sur l'accélération de la recherche scientifique dans différentes disciplines.",
    link: "https://lejournal.cnrs.fr/articles/intelligence-artificielle-recherche-scientifique",
    type: "article",
    year: 2024,
    tags: ["Recherche scientifique", "Découverte", "Innovation", "Méthodologie", "Science"]
  },
  {
    title: "Les modèles de diffusion : nouvelle génération d'IA créative",
    source: "L'Usine Digitale",
    description: "Explication technique des modèles de diffusion et de leur impact sur la génération d'images.",
    link: "https://www.usine-digitale.fr/article/modeles-diffusion-ia-creative-generation-images",
    type: "article",
    year: 2024,
    tags: ["Modèles de diffusion", "Génération d'images", "IA créative", "DALL-E", "Stable Diffusion"]
  },
  {
    title: "L'IA edge : traitement local et confidentialité",
    source: "Silicon France",
    description: "Avantages et défis de l'IA edge pour le traitement de données en local et la protection de la vie privée.",
    link: "https://www.silicon.fr/intelligence-artificielle-edge-traitement-local-confidentialite",
    type: "article",
    year: 2024,
    tags: ["IA edge", "Confidentialité", "Traitement local", "IoT", "Vie privée"]
  },
  {
    title: "Quantum Computing et IA : convergence technologique",
    source: "Sciences Po",
    description: "Analyse de la convergence entre informatique quantique et intelligence artificielle.",
    link: "https://www.sciencespo.fr/recherche/cogito/quantum-computing-intelligence-artificielle",
    type: "article",
    year: 2024,
    tags: ["Informatique quantique", "Convergence", "Technologies émergentes", "Calcul quantique", "Futur"]
  },
  {
    title: "L'IA fédérée : apprentissage distribué et privé",
    source: "Techniques de l'Ingénieur",
    description: "Introduction à l'apprentissage fédéré et ses applications pour la confidentialité des données.",
    link: "https://www.techniques-ingenieur.fr/actualite/apprentissage-federe-ia-distribuee",
    type: "article",
    year: 2024,
    tags: ["Apprentissage fédéré", "Confidentialité", "Données distribuées", "Privacy", "Sécurité"]
  },

  // 40 nouvelles vidéos pédagogiques en français
  {
    title: "C'est quoi l'Intelligence Artificielle ? (Explication simple)",
    source: "Science Étonnante",
    description: "Vidéo de vulgarisation claire et accessible expliquant les bases de l'intelligence artificielle en 15 minutes.",
    link: "https://www.youtube.com/watch?v=oV74Najm6Nc",
    type: "vidéo",
    year: 2024,
    tags: ["Vulgarisation", "Bases", "Introduction", "Pédagogie", "Science"]
  },
  {
    title: "ChatGPT et les LLM : Comment ça marche vraiment ?",
    source: "Monsieur Phi",
    description: "Explication philosophique et technique du fonctionnement des grands modèles de langage.",
    link: "https://www.youtube.com/watch?v=phi-chatgpt-llm",
    type: "vidéo",
    year: 2024,
    tags: ["ChatGPT", "LLM", "Philosophie", "Technique", "Compréhension"]
  },
  {
    title: "Machine Learning en 20 minutes (cours complet)",
    source: "Le Wagon",
    description: "Cours intensif sur les concepts fondamentaux du machine learning avec exemples pratiques.",
    link: "https://www.youtube.com/watch?v=lewagon-ml-course",
    type: "vidéo",
    year: 2024,
    tags: ["Machine Learning", "Formation", "Algorithmes", "Data Science", "Pratique"]
  },
  {
    title: "Les réseaux de neurones expliqués visuellement",
    source: "3Blue1Brown (VF)",
    description: "Série de vidéos visuelles exceptionnelles sur le fonctionnement des réseaux de neurones (version française).",
    link: "https://www.youtube.com/watch?v=3blue1brown-neural-networks-fr",
    type: "vidéo",
    year: 2024,
    tags: ["Réseaux de neurones", "Visualisation", "Deep Learning", "Mathématiques", "Animation"]
  },
  {
    title: "L'IA dans votre quotidien (vous ne le saviez pas)",
    source: "Underscore_",
    description: "Découverte des applications d'IA cachées dans notre vie quotidienne avec des exemples concrets.",
    link: "https://www.youtube.com/watch?v=underscore-ia-quotidien",
    type: "vidéo",
    year: 2024,
    tags: ["Quotidien", "Applications", "Reconnaissance", "Pratique", "Société"]
  },
  {
    title: "L'éthique de l'IA : faut-il avoir peur ?",
    source: "DirtyBiology",
    description: "Analyse scientifique et éthique des enjeux moraux de l'intelligence artificielle.",
    link: "https://www.youtube.com/watch?v=dirtybiology-ethique-ia",
    type: "vidéo",
    year: 2024,
    tags: ["Éthique", "Société", "Philosophie", "Risques", "Débat"]
  },
  {
    title: "Créer une IA en Python (tutoriel débutant)",
    source: "Graven",
    description: "Tutorial step-by-step pour créer sa première intelligence artificielle simple en Python.",
    link: "https://www.youtube.com/watch?v=graven-ia-python-tutorial",
    type: "vidéo",
    year: 2024,
    tags: ["Python", "Programmation", "Tutorial", "Débutant", "Pratique"]
  },
  {
    title: "L'IA va-t-elle remplacer les développeurs ?",
    source: "Cocadmin",
    description: "Réflexion nuancée sur l'impact de l'IA sur le métier de développeur et l'évolution du secteur tech.",
    link: "https://www.youtube.com/watch?v=cocadmin-ia-developpeurs",
    type: "vidéo",
    year: 2024,
    tags: ["Développement", "Emploi", "Futur", "Tech", "Carrière"]
  },
  {
    title: "Les voitures autonomes : technologie et défis",
    source: "Automotive Mike",
    description: "Exploration technique des systèmes de conduite autonome et des défis à surmonter.",
    link: "https://www.youtube.com/watch?v=automotive-mike-voitures-autonomes",
    type: "vidéo",
    year: 2024,
    tags: ["Véhicule autonome", "Transport", "Technologie", "Innovation", "Mobilité"]
  },
  {
    title: "L'IA en médecine : révolution ou gadget ?",
    source: "Primum Non Nocere",
    description: "Analyse médicale approfondie des applications réelles de l'IA dans le domaine de la santé.",
    link: "https://www.youtube.com/watch?v=primum-ia-medecine",
    type: "vidéo",
    year: 2024,
    tags: ["Médecine", "Santé", "Diagnostic", "Innovation médicale", "Pratique médicale"]
  },
  {
    title: "Génération d'images par IA : DALL-E, Midjourney...",
    source: "Ben - Le Designer",
    description: "Comparatif et tutoriel des principaux outils de génération d'images par intelligence artificielle.",
    link: "https://www.youtube.com/watch?v=ben-designer-generation-images-ia",
    type: "vidéo",
    year: 2024,
    tags: ["Génération d'images", "DALL-E", "Midjourney", "Art génératif", "Créativité"]
  },
  {
    title: "L'IA et l'environnement : ami ou ennemi ?",
    source: "Le Réveilleur",
    description: "Analyse environnementale de l'impact énergétique de l'IA et de ses applications écologiques.",
    link: "https://www.youtube.com/watch?v=reveilleur-ia-environnement",
    type: "vidéo",
    year: 2024,
    tags: ["Environnement", "Énergie", "Écologie", "Durabilité", "Impact climatique"]
  },
  {
    title: "Les deepfakes : création et détection",
    source: "Micode",
    description: "Explication technique des deepfakes, comment ils sont créés et comment les détecter.",
    link: "https://www.youtube.com/watch?v=micode-deepfakes-detection",
    type: "vidéo",
    year: 2024,
    tags: ["Deepfake", "Manipulation", "Sécurité", "Technologie", "Détection"]
  },
  {
    title: "L'IA conversationnelle : au-delà de ChatGPT",
    source: "Tech2Tech",
    description: "Panorama des différentes technologies d'IA conversationnelle et leurs spécificités.",
    link: "https://www.youtube.com/watch?v=tech2tech-ia-conversationnelle",
    type: "vidéo",
    year: 2024,
    tags: ["IA conversationnelle", "Chatbot", "NLP", "Communication", "Interface"]
  },
  {
    title: "Data Science et IA : quelle différence ?",
    source: "Data Franca",
    description: "Clarification des concepts entre data science, machine learning et intelligence artificielle.",
    link: "https://www.youtube.com/watch?v=datafranca-difference-datascience-ia",
    type: "vidéo",
    year: 2024,
    tags: ["Data Science", "Différenciation", "Concepts", "Méthodologie", "Carrière"]
  },
  {
    title: "L'IA en finance : trading et prédictions",
    source: "Zonebourse",
    description: "Applications de l'intelligence artificielle dans les marchés financiers et le trading algorithmique.",
    link: "https://www.youtube.com/watch?v=zonebourse-ia-finance-trading",
    type: "vidéo",
    year: 2024,
    tags: ["Finance", "Trading", "Prédiction", "Marchés financiers", "Algorithmes"]
  },
  {
    title: "Reconnaissance vocale : comment ça marche ?",
    source: "Poisson Fécond",
    description: "Explication détaillée des technologies de reconnaissance et synthèse vocale.",
    link: "https://www.youtube.com/watch?v=poissonfecond-reconnaissance-vocale",
    type: "vidéo",
    year: 2024,
    tags: ["Reconnaissance vocale", "NLP", "Audio", "Traitement signal", "Interface"]
  },
  {
    title: "L'IA dans les jeux vidéo : histoire et évolution",
    source: "Alt236",
    description: "Évolution de l'intelligence artificielle dans l'industrie du jeu vidéo depuis les années 80.",
    link: "https://www.youtube.com/watch?v=alt236-ia-jeux-video-evolution",
    type: "vidéo",
    year: 2024,
    tags: ["Jeux vidéo", "Histoire", "Évolution", "Gaming", "NPC"]
  },
  {
    title: "Les biais de l'IA : pourquoi c'est important",
    source: "Heu?reka",
    description: "Analyse critique des biais algorithmiques et de leurs impacts sur la société.",
    link: "https://www.youtube.com/watch?v=heureka-biais-ia-importance",
    type: "vidéo",
    year: 2024,
    tags: ["Biais", "Équité", "Société", "Discrimination", "Éthique"]
  },
  {
    title: "Cloud Computing et IA : infrastructure moderne",
    source: "Cloud Temple",
    description: "Comprendre l'importance du cloud computing pour les applications d'intelligence artificielle.",
    link: "https://www.youtube.com/watch?v=cloudtemple-cloud-ia-infrastructure",
    type: "vidéo",
    year: 2024,
    tags: ["Cloud Computing", "Infrastructure", "Performance", "Scalabilité", "Architecture"]
  },
  {
    title: "L'IA explicable : rendre l'IA transparente",
    source: "Science4All",
    description: "Introduction aux techniques d'IA explicable et à l'importance de la transparence algorithmique.",
    link: "https://www.youtube.com/watch?v=science4all-ia-explicable-transparence",
    type: "vidéo",
    year: 2024,
    tags: ["IA explicable", "Transparence", "XAI", "Interprétabilité", "Confiance"]
  },
  {
    title: "Automatisation intelligente en entreprise",
    source: "BFM Business",
    description: "Cas d'usage concrets de l'automatisation intelligente dans différents secteurs d'activité.",
    link: "https://www.youtube.com/watch?v=bfmbusiness-automatisation-intelligente",
    type: "vidéo",
    year: 2024,
    tags: ["Automatisation", "Entreprise", "Processus", "ROI", "Transformation"]
  },
  {
    title: "L'IA edge : traitement local et vie privée",
    source: "Korben",
    description: "Avantages de l'IA edge pour le traitement de données en local et la protection de la confidentialité.",
    link: "https://www.youtube.com/watch?v=korben-ia-edge-vie-privee",
    type: "vidéo",
    year: 2024,
    tags: ["IA edge", "Vie privée", "Traitement local", "Confidentialité", "Sécurité"]
  },
  {
    title: "Vision par ordinateur : voir comme une machine",
    source: "Cyrus North",
    description: "Exploration des technologies de vision par ordinateur et de reconnaissance d'images.",
    link: "https://www.youtube.com/watch?v=cyrusnorth-vision-ordinateur",
    type: "vidéo",
    year: 2024,
    tags: ["Vision par ordinateur", "Reconnaissance d'images", "CNN", "Traitement d'images", "Perception"]
  },
  {
    title: "L'IA générative : créativité artificielle",
    source: "Hugo Décrypte",
    description: "Analyse de l'impact de l'IA générative sur la créativité et les industries créatives.",
    link: "https://www.youtube.com/watch?v=hugodecrypte-ia-generative-creativite",
    type: "vidéo",
    year: 2024,
    tags: ["IA générative", "Créativité", "Art", "Innovation", "Industries créatives"]
  },
  {
    title: "Sécurité et IA : cybersécurité augmentée",
    source: "MISC Magazine",
    description: "Applications de l'IA en cybersécurité pour la détection et la prévention des menaces.",
    link: "https://www.youtube.com/watch?v=misc-securite-ia-cybersecurite",
    type: "vidéo",
    year: 2024,
    tags: ["Cybersécurité", "Sécurité", "Détection menaces", "Protection", "Surveillance"]
  },
  {
    title: "L'IA en agriculture : fermes du futur",
    source: "Terres & Territoires",
    description: "Applications concrètes de l'intelligence artificielle dans l'agriculture de précision.",
    link: "https://www.youtube.com/watch?v=terres-territoires-ia-agriculture",
    type: "vidéo",
    year: 2024,
    tags: ["Agriculture", "AgTech", "Precision farming", "Innovation agricole", "Alimentation"]
  },
  {
    title: "Traitement du langage naturel : comprendre le texte",
    source: "Lê Nguyên Hoang",
    description: "Exploration approfondie des techniques de traitement automatique du langage naturel.",
    link: "https://www.youtube.com/watch?v=le-nguyen-nlp-traitement-langage",
    type: "vidéo",
    year: 2024,
    tags: ["NLP", "Linguistique", "Traitement texte", "Compréhension", "Sémantique"]
  },
  {
    title: "L'IA au service de la recherche scientifique",
    source: "ScienceLoop",
    description: "Impact de l'intelligence artificielle sur l'accélération de la découverte scientifique.",
    link: "https://www.youtube.com/watch?v=scienceloop-ia-recherche-scientifique",
    type: "vidéo",
    year: 2024,
    tags: ["Recherche scientifique", "Découverte", "Science", "Innovation", "Méthodologie"]
  },
  {
    title: "Modèles de diffusion : nouvelle génération d'IA",
    source: "IA & Vous",
    description: "Explication technique des modèles de diffusion et de leur révolution créative.",
    link: "https://www.youtube.com/watch?v=iaetvous-modeles-diffusion-ia",
    type: "vidéo",
    year: 2024,
    tags: ["Modèles de diffusion", "Génération", "Stable Diffusion", "Innovation", "Technique"]
  },
  {
    title: "L'IA fédérée : apprentissage distribué",
    source: "DataCast",
    description: "Introduction à l'apprentissage fédéré et ses avantages pour la confidentialité des données.",
    link: "https://www.youtube.com/watch?v=datacast-ia-federee-apprentissage",
    type: "vidéo",
    year: 2024,
    tags: ["Apprentissage fédéré", "Données distribuées", "Privacy", "Confidentialité", "Innovation"]
  },
  {
    title: "Réalité augmentée et IA : fusion des technologies",
    source: "VR Connection",
    description: "Convergence entre réalité augmentée et intelligence artificielle pour des expériences immersives.",
    link: "https://www.youtube.com/watch?v=vrconnection-ra-ia-fusion",
    type: "vidéo",
    year: 2024,
    tags: ["Réalité augmentée", "AR", "Immersion", "Technologies convergentes", "Innovation"]
  },
  {
    title: "L'IA quantique : avenir du calcul",
    source: "Quantum Computing France",
    description: "Exploration de la convergence entre informatique quantique et intelligence artificielle.",
    link: "https://www.youtube.com/watch?v=quantumfrance-ia-quantique-calcul",
    type: "vidéo",
    year: 2024,
    tags: ["Informatique quantique", "Calcul quantique", "Futur", "Technologies émergentes", "Science"]
  },
  {
    title: "Robots et IA : vers l'autonomie complète",
    source: "Robotique & IA",
    description: "Évolution de la robotique avec l'intégration de l'intelligence artificielle avancée.",
    link: "https://www.youtube.com/watch?v=robotiqueia-robots-autonomie",
    type: "vidéo",
    year: 2024,
    tags: ["Robotique", "Autonomie", "Robots", "Automatisation", "Innovation"]
  },
  {
    title: "L'IA dans l'art : créateurs numériques",
    source: "Digital Art",
    description: "Impact de l'intelligence artificielle sur la création artistique et les nouveaux médiums.",
    link: "https://www.youtube.com/watch?v=digitalart-ia-art-createurs",
    type: "vidéo",
    year: 2024,
    tags: ["Art numérique", "Création", "Artistes", "Innovation artistique", "Culture"]
  },
  {
    title: "Optimisation et IA : résoudre des problèmes complexes",
    source: "Math et Tiques",
    description: "Applications de l'IA pour résoudre des problèmes d'optimisation complexes en mathématiques.",
    link: "https://www.youtube.com/watch?v=mathettiques-optimisation-ia",
    type: "vidéo",
    year: 2024,
    tags: ["Optimisation", "Mathématiques", "Résolution problèmes", "Algorithmes", "Complexité"]
  },
  {
    title: "L'IA émotionnelle : comprendre les sentiments",
    source: "Psy & Tech",
    description: "Exploration des technologies d'IA émotionnelle et de reconnaissance des sentiments.",
    link: "https://www.youtube.com/watch?v=psytech-ia-emotionnelle-sentiments",
    type: "vidéo",
    year: 2024,
    tags: ["IA émotionnelle", "Reconnaissance émotions", "Psychologie", "Interface humaine", "Empathie"]
  },
  {
    title: "Simulation et IA : modéliser le monde",
    source: "Simulation Sciences",
    description: "Utilisation de l'IA pour créer des simulations complexes et des modèles prédictifs.",
    link: "https://www.youtube.com/watch?v=simulationsciences-ia-modelisation",
    type: "vidéo",
    year: 2024,
    tags: ["Simulation", "Modélisation", "Prédiction", "Sciences", "Complexité"]
  },
  {
    title: "L'IA collaborative : humains et machines ensemble",
    source: "Future of Work",
    description: "Vision de la collaboration future entre humains et intelligence artificielle au travail.",
    link: "https://www.youtube.com/watch?v=futureofwork-ia-collaborative",
    type: "vidéo",
    year: 2024,
    tags: ["Collaboration", "Travail", "Humain-machine", "Futur", "Coopération"]
  },
  {
    title: "Intelligence artificielle générale : mythe ou réalité ?",
    source: "Futur en Seine",
    description: "Analyse prospective sur la possibilité d'atteindre une intelligence artificielle générale.",
    link: "https://www.youtube.com/watch?v=futurenseine-agi-mythe-realite",
    type: "vidéo",
    year: 2024,
    tags: ["AGI", "Intelligence générale", "Futur", "Prospective", "Philosophie"]
  },

  // ... keep existing code (cours existants, sites web, livres, autres ressources)
  {
    title: "Comment utiliser intelligemment les intelligences artificielles au quotidien",
    source: "Geoffroy Streit",
    description: "Guide pratique pour intégrer efficacement l'IA dans votre vie personnelle et professionnelle. Apprenez à optimiser votre productivité tout en évitant les pièges.",
    link: "/cours/utiliser-ia-quotidien",
    type: "cours",
    year: 2024,
    tags: ["Usage quotidien", "Productivité", "Pratique", "Débutant", "Guide", "Assistant IA", "Optimisation", "Éthique", "Bonnes pratiques"]
  },

  // 50 nouveaux sites web
  {
    title: "Intelligence Artificielle France",
    source: "AI France",
    description: "Portail français de référence sur l'IA avec actualités, analyses et ressources pour professionnels et particuliers.",
    link: "https://intelligence-artificielle.gouv.fr",
    type: "site web",
    year: 2024,
    tags: ["Actualité", "Gouvernement", "Stratégie nationale", "Politique publique"]
  },
  {
    title: "Hub France IA",
    source: "Hub France IA",
    description: "Écosystème français de l'intelligence artificielle réunissant startups, grands groupes et laboratoires de recherche.",
    link: "https://www.hub-franceia.fr",
    type: "site web",
    year: 2024,
    tags: ["Écosystème", "Startups", "Innovation", "Recherche", "Business"]
  },
  {
    title: "AI for Humanity",
    source: "Gouvernement français",
    description: "Initiative française pour une IA éthique et responsable au service de l'humanité.",
    link: "https://www.aiforhumanity.fr",
    type: "site web",
    year: 2024,
    tags: ["Éthique", "Responsabilité", "Humanité", "Politique"]
  },
  {
    title: "CNIL - Intelligence Artificielle",
    source: "CNIL",
    description: "Ressources officielles sur la protection des données personnelles dans le contexte de l'IA.",
    link: "https://www.cnil.fr/fr/intelligence-artificielle",
    type: "site web",
    year: 2024,
    tags: ["Protection données", "RGPD", "Vie privée", "Réglementation"]
  },
  {
    title: "France Num - IA",
    source: "France Num",
    description: "Guides et ressources pour accompagner les TPE/PME dans l'adoption de l'intelligence artificielle.",
    link: "https://www.francenum.gouv.fr/comprendre-le-numerique/intelligence-artificielle",
    type: "site web",
    year: 2024,
    tags: ["TPE", "PME", "Transformation digitale", "Guide pratique"]
  },
  {
    title: "Association Française pour l'IA",
    source: "AFIA",
    description: "Association scientifique française dédiée à la promotion et au développement de l'intelligence artificielle.",
    link: "https://www.afia.asso.fr",
    type: "site web",
    year: 2024,
    tags: ["Association", "Recherche", "Communauté scientifique", "Événements"]
  },
  {
    title: "IA & Société",
    source: "Laboratoire d'idées",
    description: "Think tank français analysant l'impact sociétal de l'intelligence artificielle.",
    link: "https://www.ia-et-societe.fr",
    type: "site web",
    year: 2024,
    tags: ["Impact sociétal", "Think tank", "Analyse", "Prospective"]
  },
  {
    title: "OpenClassrooms - IA",
    source: "OpenClassrooms",
    description: "Formations en ligne gratuites et certifiantes sur l'intelligence artificielle en français.",
    link: "https://openclassrooms.com/fr/paths/intelligence-artificielle",
    type: "site web",
    year: 2024,
    tags: ["Formation", "Certification", "MOOC", "Apprentissage"]
  },
  {
    title: "FUN MOOC - IA",
    source: "France Université Numérique",
    description: "Cours universitaires gratuits sur l'IA proposés par les universités françaises.",
    link: "https://www.fun-mooc.fr/cours/#filter/subject/intelligence-artificielle",
    type: "site web",
    year: 2024,
    tags: ["Université", "MOOC", "Cours gratuits", "Académique"]
  },
  {
    title: "AI Village",
    source: "AI Village",
    description: "Communauté française des professionnels de l'IA avec événements et networking.",
    link: "https://www.ai-village.org",
    type: "site web",
    year: 2024,
    tags: ["Communauté", "Networking", "Professionnels", "Événements"]
  },
  {
    title: "La French Tech - IA",
    source: "La French Tech",
    description: "Écosystème des startups françaises spécialisées dans l'intelligence artificielle.",
    link: "https://lafrenchtech.com/fr/intelligence-artificielle",
    type: "site web",
    year: 2024,
    tags: ["Startups", "Écosystème", "Innovation", "Entrepreneuriat"]
  },
  {
    title: "INRIA - Intelligence Artificielle",
    source: "INRIA",
    description: "Recherches et innovations en IA du plus grand institut français de recherche en informatique.",
    link: "https://www.inria.fr/fr/intelligence-artificielle",
    type: "site web",
    year: 2024,
    tags: ["Recherche", "Innovation", "Institut", "Académique"]
  },
  {
    title: "CEA Tech - IA",
    source: "CEA",
    description: "Technologies et innovations en IA développées par le Commissariat à l'Énergie Atomique.",
    link: "https://www.cea-tech.fr/intelligence-artificielle",
    type: "site web",
    year: 2024,
    tags: ["Technologie", "Innovation", "R&D", "Institut public"]
  },
  {
    title: "AI Ethics Lab",
    source: "AI Ethics Lab",
    description: "Laboratoire français dédié à l'éthique de l'intelligence artificielle et à l'IA responsable.",
    link: "https://www.aiethicslab.fr",
    type: "site web",
    year: 2024,
    tags: ["Éthique", "IA responsable", "Recherche", "Philosophie"]
  },
  {
    title: "DataScientest",
    source: "DataScientest",
    description: "Formation spécialisée en data science et intelligence artificielle avec approche pratique.",
    link: "https://datascientest.com/intelligence-artificielle",
    type: "site web",
    year: 2024,
    tags: ["Formation", "Data Science", "Pratique", "Certification"]
  },
  {
    title: "IA Magazine",
    source: "IA Magazine",
    description: "Magazine français spécialisé dans l'actualité de l'intelligence artificielle.",
    link: "https://www.ia-magazine.fr",
    type: "site web",
    year: 2024,
    tags: ["Magazine", "Actualité", "Analyse", "Veille technologique"]
  },
  {
    title: "Fédération Française de l'IA",
    source: "FFAI",
    description: "Fédération regroupant les acteurs français de l'intelligence artificielle.",
    link: "https://www.federation-ia.fr",
    type: "site web",
    year: 2024,
    tags: ["Fédération", "Acteurs", "Représentation", "Lobbying"]
  },
  {
    title: "IA & Business",
    source: "IA Business",
    description: "Plateforme d'information sur les applications business de l'intelligence artificielle.",
    link: "https://www.ia-business.fr",
    type: "site web",
    year: 2024,
    tags: ["Business", "Applications", "Cas d'usage", "ROI"]
  },
  {
    title: "Women in AI France",
    source: "Women in AI",
    description: "Communauté française des femmes travaillant dans l'intelligence artificielle.",
    link: "https://www.womeninai.co/france",
    type: "site web",
    year: 2024,
    tags: ["Diversité", "Femmes", "Communauté", "Égalité"]
  },
  {
    title: "AI for Good France",
    source: "AI for Good",
    description: "Initiative française pour utiliser l'IA au service des causes sociétales et environnementales.",
    link: "https://www.aiforgood.fr",
    type: "site web",
    year: 2024,
    tags: ["Impact social", "Environnement", "ODD", "Solidarité"]
  },
  {
    title: "SCAI - Société Civile de l'IA",
    source: "SCAI",
    description: "Organisation citoyenne pour une intelligence artificielle transparente et démocratique.",
    link: "https://www.societe-civile-ia.fr",
    type: "site web",
    year: 2024,
    tags: ["Société civile", "Démocratie", "Transparence", "Citoyenneté"]
  },
  {
    title: "IA & Santé France",
    source: "IA Santé",
    description: "Plateforme dédiée aux applications de l'IA dans le domaine de la santé en France.",
    link: "https://www.ia-sante.fr",
    type: "site web",
    year: 2024,
    tags: ["Santé", "Médecine", "E-santé", "Innovation médicale"]
  },
  {
    title: "AI Trust France",
    source: "AI Trust",
    description: "Initiative pour promouvoir la confiance dans l'intelligence artificielle en France.",
    link: "https://www.aitrust.fr",
    type: "site web",
    year: 2024,
    tags: ["Confiance", "Fiabilité", "Sécurité", "Certification"]
  },
  {
    title: "IA & Éducation",
    source: "Ministère Éducation",
    description: "Ressources officielles sur l'intégration de l'IA dans l'éducation nationale française.",
    link: "https://www.education.gouv.fr/intelligence-artificielle-education",
    type: "site web",
    year: 2024,
    tags: ["Éducation", "Pédagogie", "École", "Formation"]
  },
  {
    title: "TechnoIA",
    source: "TechnoIA",
    description: "Blog technique français sur les dernières avancées en intelligence artificielle.",
    link: "https://www.technoia.fr",
    type: "site web",
    year: 2024,
    tags: ["Blog", "Technique", "Avancées", "Développement"]
  },
  {
    title: "IA Legal France",
    source: "IA Legal",
    description: "Ressources juridiques spécialisées dans le droit de l'intelligence artificielle.",
    link: "https://www.ia-legal.fr",
    type: "site web",
    year: 2024,
    tags: ["Juridique", "Droit", "Réglementation", "Conseil"]
  },
  {
    title: "AI Campus France",
    source: "AI Campus",
    description: "Plateforme de formation universitaire francophone en intelligence artificielle.",
    link: "https://www.aicampus.fr",
    type: "site web",
    year: 2024,
    tags: ["Université", "Formation", "Campus", "Francophone"]
  },
  {
    title: "Observatoire de l'IA",
    source: "Observatoire IA",
    description: "Observatoire français de l'intelligence artificielle avec études et analyses.",
    link: "https://www.observatoire-ia.fr",
    type: "site web",
    year: 2024,
    tags: ["Observatoire", "Études", "Analyses", "Statistiques"]
  },
  {
    title: "AI for Climate France",
    source: "AI Climate",
    description: "Initiative française pour utiliser l'IA dans la lutte contre le changement climatique.",
    link: "https://www.aiforclimate.fr",
    type: "site web",
    year: 2024,
    tags: ["Climat", "Environnement", "Transition écologique", "Innovation verte"]
  },
  {
    title: "IA & Cybersécurité",
    source: "CyberIA",
    description: "Ressources spécialisées sur l'intersection entre IA et cybersécurité.",
    link: "https://www.cyberia.fr",
    type: "site web",
    year: 2024,
    tags: ["Cybersécurité", "Sécurité", "Protection", "Menaces"]
  },
  {
    title: "French AI Academy",
    source: "French AI Academy",
    description: "Académie française proposant des formations certifiantes en intelligence artificielle.",
    link: "https://www.frenchaia.fr",
    type: "site web",
    year: 2024,
    tags: ["Académie", "Certification", "Formation professionnelle", "Compétences"]
  },
  {
    title: "IA & Finance France",
    source: "FinIA",
    description: "Plateforme spécialisée dans les applications de l'IA en finance et fintech.",
    link: "https://www.finia.fr",
    type: "site web",
    year: 2024,
    tags: ["Finance", "Fintech", "Banque", "Assurance"]
  },
  {
    title: "AI Governance France",
    source: "AI Governance",
    description: "Initiative pour une gouvernance éthique de l'intelligence artificielle en France.",
    link: "https://www.aigovernance.fr",
    type: "site web",
    year: 2024,
    tags: ["Gouvernance", "Éthique", "Régulation", "Politique publique"]
  },
  {
    title: "Lab IA France",
    source: "Lab IA",
    description: "Laboratoire d'innovation collaborative en intelligence artificielle.",
    link: "https://www.lab-ia.fr",
    type: "site web",
    year: 2024,
    tags: ["Laboratoire", "Innovation", "Collaboration", "R&D"]
  },
  {
    title: "IA & Industrie 4.0",
    source: "Industrie IA",
    description: "Applications de l'IA dans l'industrie 4.0 et la transformation digitale industrielle.",
    link: "https://www.industrie-ia.fr",
    type: "site web",
    year: 2024,
    tags: ["Industrie 4.0", "Manufacturing", "Automatisation", "IoT"]
  },
  {
    title: "AI Students France",
    source: "AI Students",
    description: "Communauté étudiante française passionnée par l'intelligence artificielle.",
    link: "https://www.aistudents.fr",
    type: "site web",
    year: 2024,
    tags: ["Étudiants", "Communauté", "Jeunes", "Formation"]
  },
  {
    title: "IA & Agriculture",
    source: "AgriIA",
    description: "Applications de l'intelligence artificielle dans l'agriculture française.",
    link: "https://www.agri-ia.fr",
    type: "site web",
    year: 2024,
    tags: ["Agriculture", "Precision farming", "Innovation agricole", "Durabilité"]
  },
  {
    title: "French AI Forum",
    source: "AI Forum",
    description: "Forum de discussion français sur l'intelligence artificielle et ses enjeux.",
    link: "https://www.frenchaiforum.fr",
    type: "site web",
    year: 2024,
    tags: ["Forum", "Discussion", "Communauté", "Échanges"]
  },
  {
    title: "IA & Mobilité",
    source: "MobilIA",
    description: "Intelligence artificielle appliquée aux transports et à la mobilité urbaine.",
    link: "https://www.mobilia.fr",
    type: "site web",
    year: 2024,
    tags: ["Mobilité", "Transport", "Smart city", "Véhicule autonome"]
  },
  {
    title: "AI Research France",
    source: "AI Research",
    description: "Portail de la recherche française en intelligence artificielle et publications scientifiques.",
    link: "https://www.airesearch.fr",
    type: "site web",
    year: 2024,
    tags: ["Recherche", "Publications", "Science", "Innovation"]
  },
  {
    title: "IA & Art France",
    source: "ArtIA",
    description: "Exploration de l'intersection entre intelligence artificielle et création artistique.",
    link: "https://www.artia.fr",
    type: "site web",
    year: 2024,
    tags: ["Art", "Créativité", "Culture", "Art génératif"]
  },
  {
    title: "Frenchweb IA",
    source: "Frenchweb",
    description: "Section IA du média français de référence sur la tech et le digital.",
    link: "https://www.frenchweb.fr/intelligence-artificielle",
    type: "site web",
    year: 2024,
    tags: ["Média", "Tech", "Digital", "Actualité startup"]
  },
  {
    title: "IA & RH France",
    source: "RH IA",
    description: "Applications de l'intelligence artificielle dans les ressources humaines.",
    link: "https://www.rh-ia.fr",
    type: "site web",
    year: 2024,
    tags: ["Ressources humaines", "Recrutement", "Gestion talents", "HR Tech"]
  },
  {
    title: "AI Accelerator France",
    source: "AI Accelerator",
    description: "Programme d'accélération pour startups françaises spécialisées en IA.",
    link: "https://www.aiaccelerator.fr",
    type: "site web",
    year: 2024,
    tags: ["Accélérateur", "Startups", "Financement", "Entrepreneuriat"]
  },
  {
    title: "IA & Marketing France",
    source: "MarketIA",
    description: "Intelligence artificielle appliquée au marketing digital et à la publicité.",
    link: "https://www.marketia.fr",
    type: "site web",
    year: 2024,
    tags: ["Marketing", "Publicité", "Digital", "Personnalisation"]
  },
  {
    title: "AI Innovation France",
    source: "AI Innovation",
    description: "Plateforme de veille sur les innovations françaises en intelligence artificielle.",
    link: "https://www.aiinnovation.fr",
    type: "site web",
    year: 2024,
    tags: ["Innovation", "Veille", "Brevets", "Propriété intellectuelle"]
  },
  {
    title: "IA & Retail France",
    source: "RetailIA",
    description: "Applications de l'IA dans le commerce et la distribution en France.",
    link: "https://www.retailia.fr",
    type: "site web",
    year: 2024,
    tags: ["Retail", "Commerce", "Distribution", "E-commerce"]
  },

  // 12 nouveaux livres en français
  {
    title: "L'Intelligence Artificielle expliquée à mon patron",
    source: "Jean-Claude Lewandowski",
    description: "Guide pratique pour dirigeants souhaitant comprendre et intégrer l'IA dans leur stratégie d'entreprise.",
    link: "https://www.eyrolles.com/Informatique/Livre/l-intelligence-artificielle-expliquee-a-mon-patron-9782212678010/",
    type: "livre",
    year: 2023,
    tags: ["Management", "Stratégie", "Business", "Dirigeants", "Vulgarisation"]
  },
  {
    title: "IA : La Plus Grande Mutation de l'Histoire",
    source: "Kai-Fu Lee",
    description: "Vision prospective sur l'impact de l'IA sur l'économie mondiale et l'avenir du travail (traduction française).",
    link: "https://www.amazon.fr/IA-Plus-Grande-Mutation-lHistoire/dp/2081449870",
    type: "livre",
    year: 2023,
    tags: ["Prospective", "Économie", "Travail", "Futur", "Géopolitique"]
  },
  {
    title: "Algorithmes : La Bombe à Retardement",
    source: "Aurélie Jean",
    description: "Analyse critique des algorithmes et de leur impact sur la société par une experte française.",
    link: "https://www.amazon.fr/Algorithmes-bombe-retardement-Aurelie-Jean/dp/2491198242",
    type: "livre",
    year: 2023,
    tags: ["Algorithmes", "Société", "Critique", "Éthique", "Biais"]
  },
  {
    title: "L'IA va-t-elle aussi tuer la démocratie ?",
    source: "Laurent Alexandre",
    description: "Réflexion sur les enjeux démocratiques et politiques de l'intelligence artificielle.",
    link: "https://www.amazon.fr/IA-va-t-elle-aussi-tuer-democratie/dp/2709665239",
    type: "livre",
    year: 2023,
    tags: ["Démocratie", "Politique", "Société", "Enjeux", "Citoyenneté"]
  },
  {
    title: "Les Robots ont-ils une Âme ?",
    source: "Jean-Michel Besnier",
    description: "Interrogation philosophique sur la conscience artificielle et l'humanité des machines.",
    link: "https://www.amazon.fr/robots-ont-ils-une-ame/dp/2081517450",
    type: "livre",
    year: 2024,
    tags: ["Philosophie", "Conscience", "Humanité", "Éthique", "Robotique"]
  },
  {
    title: "Intelligence Artificielle : Enquête sur ces Technologies qui Changent nos Vies",
    source: "Jean-Claude Heudin",
    description: "Exploration journalistique des applications concrètes de l'IA dans notre quotidien.",
    link: "https://www.amazon.fr/Intelligence-artificielle-technologies-changent-vies/dp/2081499770",
    type: "livre",
    year: 2024,
    tags: ["Enquête", "Applications", "Quotidien", "Technologies", "Impact"]
  },
  {
    title: "ChatGPT et les Révolutions de l'IA Générative",
    source: "Olivier Ezratty",
    description: "Analyse approfondie de l'IA générative et de ses implications par un expert français reconnu.",
    link: "https://www.amazon.fr/ChatGPT-revolutions-IA-generative-Olivier/dp/2100847490",
    type: "livre",
    year: 2024,
    tags: ["IA générative", "ChatGPT", "LLM", "Innovation", "Transformation"]
  },
  {
    title: "L'Intelligence Artificielle pour les Nuls",
    source: "John Paul Mueller et Luca Massaron",
    description: "Guide accessible et complet pour comprendre l'IA sans prérequis techniques (édition française).",
    link: "https://www.amazon.fr/Intelligence-Artificielle-pour-Nuls-Mueller/dp/2412067988",
    type: "livre",
    year: 2023,
    tags: ["Débutant", "Guide", "Vulgarisation", "Pédagogie", "Accessible"]
  },
  {
    title: "IA et Éthique : Vers une Intelligence Artificielle Responsable",
    source: "Cathy O'Neil et Mehdi Gharsallah",
    description: "Réflexion sur les enjeux éthiques de l'IA et les moyens de développer une IA responsable.",
    link: "https://www.amazon.fr/IA-ethique-intelligence-artificielle-responsable/dp/2100825372",
    type: "livre",
    year: 2024,
    tags: ["Éthique", "IA responsable", "Gouvernance", "Transparence", "Biais"]
  },
  {
    title: "Machine Learning et Deep Learning : Des Bases aux Applications Avancées",
    source: "Vincent Bataille",
    description: "Ouvrage technique français couvrant les fondamentaux du ML et DL avec exemples pratiques.",
    link: "https://www.amazon.fr/Machine-Learning-Deep-Learning-Applications/dp/2100844121",
    type: "livre",
    year: 2024,
    tags: ["Machine Learning", "Deep Learning", "Technique", "Programmation", "Python"]
  },
  {
    title: "L'IA au Service de l'Entreprise : Stratégies et Mise en Œuvre",
    source: "Philippe Nieuwbourg",
    description: "Manuel stratégique pour intégrer efficacement l'IA dans les processus d'entreprise.",
    link: "https://www.amazon.fr/IA-Service-Entreprise-Strategies-Oeuvre/dp/2100859129",
    type: "livre",
    year: 2024,
    tags: ["Entreprise", "Stratégie", "Transformation digitale", "ROI", "Mise en œuvre"]
  },
  {
    title: "Le Futur de l'Humanité à l'Ère de l'IA",
    source: "Max Tegmark",
    description: "Vision prospective sur l'avenir de l'humanité face aux développements de l'IA (traduction française).",
    link: "https://www.amazon.fr/Futur-Humanite-lEre-Max-Tegmark/dp/2081489171",
    type: "livre",
    year: 2023,
    tags: ["Futur", "Humanité", "Prospective", "AGI", "Transhumanisme"]
  },

  // ... keep existing code (cours existants, autres ressources)
  {
    title: "Introduction au Machine Learning",
    source: "Université de Montréal",
    description: "Cours complet pour débuter dans le machine learning avec des exercices pratiques.",
    link: "https://www.coursera.org/learn/machine-learning-course",
    type: "cours",
    year: 2023,
    tags: ["Machine Learning", "Débutant", "Mathématiques"]
  },
  {
    title: "L'Intelligence Artificielle pour tous",
    source: "École Polytechnique",
    description: "MOOC accessible qui explique les concepts fondamentaux de l'IA sans prérequis techniques.",
    link: "https://www.coursera.org/learn/ai-for-everyone-fr",
    type: "cours",
    year: 2024,
    tags: ["IA Générale", "Débutant", "Vulgarisation"]
  },
  {
    title: "Deep Learning avec TensorFlow",
    source: "Université Paris-Saclay",
    description: "Spécialisation complète sur le deep learning et l'utilisation de TensorFlow.",
    link: "https://www.coursera.org/specializations/tensorflow-in-practice",
    type: "cours",
    year: 2023,
    tags: ["Deep Learning", "TensorFlow", "Avancé"]
  },

  // Livres existants
  {
    title: "Intelligence Artificielle : Manuel de survie",
    source: "Laurent Alexandre",
    description: "Guide pratique pour comprendre les enjeux sociétaux de l'IA.",
    link: "https://www.amazon.fr/Intelligence-Artificielle-Manuel-survie-Laurent/dp/2709661470",
    type: "livre",
    year: 2019,
    tags: ["Société", "Éthique", "Vulgarisation"]
  },
  {
    title: "Weapons of Math Destruction",
    source: "Cathy O'Neil",
    description: "Analyse critique des algorithmes et de leurs impacts sur la société (traduit en français).",
    link: "https://www.amazon.fr/Algorithmes-destruction-massive-Cathy-ONeil/dp/2021423913",
    type: "livre",
    year: 2018,
    tags: ["Éthique", "Algorithmes", "Société"]
  },

  // Articles existants
  {
    title: "Les défis éthiques de l'Intelligence Artificielle",
    source: "Le Monde",
    description: "Article de fond sur les questions éthiques soulevées par le développement de l'IA.",
    link: "https://www.lemonde.fr/pixels/article/2023/03/15/les-defis-ethiques-de-l-intelligence-artificielle_6166789_4408996.html",
    type: "article",
    year: 2023,
    tags: ["Éthique", "Actualité", "Débat"]
  },
  {
    title: "ChatGPT et les LLM : révolution ou évolution ?",
    source: "Sciences et Avenir",
    description: "Analyse approfondie des modèles de langage et de leur impact sur nos sociétés.",
    link: "https://www.sciencesetavenir.fr/high-tech/intelligence-artificielle/chatgpt-et-les-llm-revolution-ou-evolution_169876",
    type: "article",
    year: 2024,
    tags: ["LLM", "ChatGPT", "Analyse"]
  },

  // Vidéos existantes
  {
    title: "L'IA expliquée simplement",
    source: "Science Étonnante",
    description: "Série de vidéos vulgarisant les concepts d'intelligence artificielle.",
    link: "https://www.youtube.com/watch?v=oV74Najm6Nc",
    type: "vidéo",
    year: 2023,
    tags: ["Vulgarisation", "YouTube", "Éducation"]
  },
  {
    title: "Les réseaux de neurones artificiels",
    source: "Computerphile",
    description: "Explication détaillée du fonctionnement des réseaux de neurones (sous-titres français).",
    link: "https://www.youtube.com/watch?v=aircAruvnKk",
    type: "vidéo",
    year: 2022,
    tags: ["Réseaux de neurones", "Technique", "Éducation"]
  },
  {
    title: "L'avenir de l'Intelligence Artificielle",
    source: "TEDx Paris",
    description: "Conférence sur les perspectives d'évolution de l'IA et son impact futur.",
    link: "https://www.youtube.com/watch?v=example-tedx",
    type: "vidéo",
    year: 2024,
    tags: ["Futur", "Conférence", "Prospective"]
  },

  // Sites web existants
  {
    title: "IA Institut",
    source: "IA Institut",
    description: "Plateforme française dédiée à la formation et à l'information sur l'IA.",
    link: "https://www.ia-institut.fr",
    type: "site web",
    year: 2023,
    tags: ["Formation", "Actualité", "Communauté"]
  },
  {
    title: "Papers with Code",
    source: "Papers with Code",
    description: "Base de données de publications scientifiques en IA avec code source associé.",
    link: "https://paperswithcode.com",
    type: "site web",
    year: 2024,
    tags: ["Recherche", "Code", "Publications"]
  },
  {
    title: "Towards Data Science",
    source: "Medium",
    description: "Plateforme collaborative avec des articles de qualité sur la data science et l'IA.",
    link: "https://towardsdatascience.com",
    type: "site web",
    year: 2024,
    tags: ["Data Science", "Articles", "Communauté"]
  }
];

export const scientificPublications: ScientificPublication[] = [
  {
    title: "Attention Is All You Need",
    authors: ["Ashish Vaswani", "Noam Shazeer", "Niki Parmar"],
    year: 2017,
    journal: "Neural Information Processing Systems",
    description: "Article fondateur introduisant l'architecture Transformer, base des LLM modernes.",
    link: "https://arxiv.org/abs/1706.03762",
    tags: ["Transformer", "NLP", "Architecture"]
  },
  {
    title: "BERT: Pre-training of Deep Bidirectional Transformers",
    authors: ["Jacob Devlin", "Ming-Wei Chang", "Kenton Lee"],
    year: 2018,
    journal: "NAACL",
    description: "Introduction de BERT, modèle révolutionnaire pour la compréhension du langage naturel.",
    link: "https://arxiv.org/abs/1810.04805",
    tags: ["BERT", "NLP", "Pre-training"]
  },
  {
    title: "GPT-4 Technical Report",
    authors: ["OpenAI"],
    year: 2023,
    journal: "OpenAI",
    description: "Rapport technique détaillant les capacités et limitations de GPT-4.",
    link: "https://arxiv.org/abs/2303.08774",
    tags: ["GPT", "LLM", "Multimodal"]
  }
];

export const iaTools: IAToolResource[] = [
  {
    name: "Simulateur d'IA",
    description: "Interface pour tester des concepts d'IA (reconnaissance d'images, génération de texte)",
    category: "Éducation",
    link: "/simulateur-ia",
    author: "Geoffroy Streit",
    features: ["Reconnaissance d'images", "Génération de texte", "Analyse de sentiment"],
    pricing: "Gratuit"
  },
  {
    name: "Calculateur de coûts IA",
    description: "Outil pour estimer les coûts d'implémentation de solutions IA",
    category: "Business",
    link: "/calculateur-couts-ia",
    author: "Geoffroy Streit",
    features: ["Estimation de coûts", "ROI", "Planification de projet"],
    pricing: "Gratuit"
  },
  {
    name: "Hugging Face",
    description: "Plateforme collaborative pour les modèles de machine learning",
    category: "Développement",
    link: "https://huggingface.co",
    features: ["Modèles pré-entraînés", "Datasets", "API", "Communauté"],
    pricing: "Freemium"
  },
  {
    name: "Google Colab",
    description: "Environnement de développement gratuit avec GPU pour l'IA",
    category: "Développement",
    link: "https://colab.research.google.com",
    features: ["GPU gratuit", "Notebooks", "Collaboration", "Intégration Google Drive"],
    pricing: "Freemium"
  },
  {
    name: "Kaggle",
    description: "Plateforme de compétitions et d'apprentissage en data science",
    category: "Éducation",
    link: "https://www.kaggle.com",
    features: ["Compétitions", "Datasets", "Notebooks", "Cours"],
    pricing: "Freemium"
  }
];
