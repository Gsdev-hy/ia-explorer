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

  // Cours existant
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

  // Articles
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

  // Vidéos
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
