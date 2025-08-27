
import { PromptTemplate, PromptCategory } from '../promptTemplatesData';

export const imageCategories: PromptCategory[] = [
  {
    id: 'image-artistic',
    name: 'Art & Créatif',
    description: 'Templates pour la création artistique et créative',
    icon: 'Palette'
  },
  {
    id: 'image-commercial',
    name: 'Commercial',
    description: 'Templates pour la création d\'images commerciales',
    icon: 'ShoppingBag'
  },
  {
    id: 'image-technical',
    name: 'Technique',
    description: 'Templates pour les images techniques et schémas',
    icon: 'Settings'
  }
];

export const imageTemplates: PromptTemplate[] = [
  {
    id: 'image-product-photography',
    name: 'Photographie Produit Professionnelle',
    category: 'image-commercial',
    domain: 'E-commerce',
    description: 'Génère des prompts pour des photos produits de qualité professionnelle',
    template: `Crée une image de photographie produit professionnelle avec les spécifications suivantes :

**SUJET PRINCIPAL :**
{product_description}

**STYLE PHOTOGRAPHIQUE :**
- Style : {photography_style}
- Éclairage : {lighting_setup}
- Angle de vue : {camera_angle}
- Profondeur de champ : {depth_of_field}

**COMPOSITION :**
- Arrière-plan : {background_type}
- Couleurs dominantes : {color_scheme}
- Mise en scène : {staging_style}
- Props/Accessoires : {props}

**QUALITÉ TECHNIQUE :**
- Résolution : Ultra haute définition, 8K
- Netteté : Hyperréaliste, détails fins
- Rendu : {render_style}
- Format : {aspect_ratio}

**AMBIANCE :**
- Mood général : {overall_mood}
- Target démographique : {target_demographic}
- Usage prévu : {intended_use}

**SPÉCIFICATIONS MIDJOURNEY/DALL-E :**
--ar {aspect_ratio} --style {style_value} --quality 2 --seed {seed_value}

Paramètres avancés : {advanced_parameters}

**MOTS-CLÉS TECHNIQUES :**
professional product photography, commercial grade, studio lighting, clean composition, marketing ready, high-end advertising, premium quality

**ÉVITER :**
Flou, surexposition, ombres dures, arrière-plan distrayant, couleurs saturées artificiellement`,
    variables: [
      { name: 'product_description', type: 'textarea', label: 'Description du produit', placeholder: 'Montre de luxe en or, smartphone dernier cri...', required: true },
      { name: 'photography_style', type: 'select', label: 'Style photo', options: ['Minimaliste', 'Lifestyle', 'Studio classique', 'Naturel', 'Premium luxury', 'Tech moderne'], required: true },
      { name: 'lighting_setup', type: 'select', label: 'Éclairage', options: ['Softbox diffus', 'Ring light', 'Éclairage naturel', '3-point lighting', 'Dramatic side light', 'Even studio lighting'], required: true },
      { name: 'camera_angle', type: 'select', label: 'Angle caméra', options: ['Frontal', '3/4 view', 'Top-down', 'Low angle', 'High angle', 'Multiple angles'], required: true },
      { name: 'depth_of_field', type: 'select', label: 'Profondeur champ', options: ['Nette partout', 'Bokeh léger', 'Bokeh prononcé', 'Focus stacking'], required: true },
      { name: 'background_type', type: 'select', label: 'Arrière-plan', options: ['Blanc pur', 'Gradient neutre', 'Environnement naturel', 'Texture subtile', 'Transparent', 'Coloré uniforme'], required: true },
      { name: 'color_scheme', type: 'select', label: 'Palette couleurs', options: ['Monochrome', 'Tons neutres', 'Couleurs vives', 'Pastels', 'Métalliques', 'Brand colors'], required: true },
      { name: 'staging_style', type: 'select', label: 'Mise en scène', options: ['Minimal clean', 'Lifestyle context', 'Geometric props', 'Natural elements', 'Abstract shapes'], required: false },
      { name: 'props', type: 'text', label: 'Accessoires', placeholder: 'Marbre, plantes, tissus...', required: false },
      { name: 'render_style', type: 'select', label: 'Style rendu', options: ['Photoréaliste', 'Légèrement stylisé', 'Cinema4D', 'Blender render', 'Octane render'], required: true },
      { name: 'aspect_ratio', type: 'select', label: 'Format', options: ['1:1', '4:3', '16:9', '3:4', '9:16'], required: true },
      { name: 'overall_mood', type: 'select', label: 'Ambiance', options: ['Professionnelle', 'Luxueuse', 'Moderne', 'Chaleureuse', 'Innovante', 'Élégante'], required: true },
      { name: 'target_demographic', type: 'select', label: 'Cible', options: ['B2B', 'Millennials', 'Gen Z', 'Premium market', 'Mass market', 'Niche market'], required: true },
      { name: 'intended_use', type: 'select', label: 'Usage', options: ['E-commerce', 'Publicité', 'Catalogue', 'Réseaux sociaux', 'Print', 'Web'], required: true },
      { name: 'style_value', type: 'select', label: 'Style value', options: ['raw', 'expressive', 'cute', 'scenic', 'original'], required: false },
      { name: 'seed_value', type: 'text', label: 'Seed (optionnel)', placeholder: '12345', required: false },
      { name: 'advanced_parameters', type: 'textarea', label: 'Paramètres avancés', placeholder: '--chaos 10 --weird 250', required: false }
    ],
    tags: ['Text-to-Image', 'Produit', 'E-commerce', 'Professionnel'],
    quality: 4.7,
    usageCount: 1890
  },
  {
    id: 'image-concept-art',
    name: 'Concept Art Fantastique',
    category: 'image-artistic',
    domain: 'Art Digital',
    description: 'Crée des prompts pour du concept art et des illustrations fantastiques',
    template: `Génère un concept art épique dans l'univers : {fantasy_universe}

**COMPOSITION PRINCIPALE :**
- Sujet central : {main_subject}
- Action/Pose : {character_action}
- Expression : {facial_expression}
- Costume/Armure : {outfit_description}

**ENVIRONNEMENT :**
- Setting : {environment_setting}
- Époque/Ère : {time_period}
- Météo/Ambiance : {weather_mood}
- Architecture : {architectural_style}

**STYLE ARTISTIQUE :**
- Influence artistique : {art_influence}
- Technique : {art_technique}
- Palette de couleurs : {color_palette}
- Contraste : {contrast_level}

**ÉLÉMENTS MAGIQUES/FANTASTIQUES :**
- Magie/Pouvoirs : {magical_elements}
- Créatures : {fantasy_creatures}
- Objets mystiques : {mystical_objects}
- Effets spéciaux : {special_effects}

**COMPOSITION VISUELLE :**
- Cadrage : {framing_type}
- Perspective : {perspective_type}
- Focus : {focal_point}
- Dynamisme : {dynamic_level}

**RÉFÉRENCES ARTISTIQUES :**
In the style of {artist_reference}, {art_movement}, concept art for {media_reference}

**PARAMÈTRES TECHNIQUES :**
Highly detailed, epic fantasy art, professional concept art, {render_quality}, dramatic lighting, cinematic composition, {art_medium}

**MOOD KEYWORDS :**
{mood_descriptors}, {atmosphere_tags}

--ar {image_ratio} --style expressive --chaos {chaos_level}`,
    variables: [
      { name: 'fantasy_universe', type: 'select', label: 'Univers fantastique', options: ['Medieval fantasy', 'Steampunk', 'Cyberpunk', 'Post-apocalyptique', 'Space fantasy', 'Urban fantasy', 'Dark fantasy'], required: true },
      { name: 'main_subject', type: 'text', label: 'Sujet principal', placeholder: 'Guerrière elfe, Dragon ancien, Mage sombre...', required: true },
      { name: 'character_action', type: 'select', label: 'Action/Pose', options: ['Combat épique', 'Méditation mystique', 'Invocation magique', 'Vol majestueux', 'Marche héroïque', 'Pose statique'], required: true },
      { name: 'facial_expression', type: 'select', label: 'Expression', options: ['Déterminée', 'Mystérieuse', 'Colère', 'Sérénité', 'Concentration', 'Fierté'], required: true },
      { name: 'outfit_description', type: 'textarea', label: 'Costume/Équipement', placeholder: 'Armure runique, robe de mage, tenue de cuir...', required: true },
      { name: 'environment_setting', type: 'select', label: 'Environnement', options: ['Forêt enchantée', 'Château volant', 'Ruines antiques', 'Cité futuriste', 'Dimension parallèle', 'Royaume souterrain'], required: true },
      { name: 'time_period', type: 'select', label: 'Époque', options: ['Medieval', 'Renaissance', 'Victorien', 'Futuriste', 'Préhistorique', 'Intemporel'], required: true },
      { name: 'weather_mood', type: 'select', label: 'Ambiance météo', options: ['Orage mystique', 'Brouillard magique', 'Soleil doré', 'Nuit étoilée', 'Aurore boréale', 'Tempête magique'], required: true },
      { name: 'architectural_style', type: 'select', label: 'Architecture', options: ['Gothique', 'Art nouveau', 'Biomécanique', 'Cristalline', 'Organique', 'Géométrique'], required: false },
      { name: 'art_influence', type: 'select', label: 'Influence artistique', options: ['Art classique', 'Manga/Anime', 'Comics américains', 'Art nouveau', 'Surréalisme', 'Réalisme'], required: true },
      { name: 'art_technique', type: 'select', label: 'Technique', options: ['Digital painting', 'Oil painting style', 'Watercolor', 'Ink drawing', 'Mixed media', 'Photorealistic'], required: true },
      { name: 'color_palette', type: 'select', label: 'Palette couleurs', options: ['Tons chauds', 'Tons froids', 'Monochrome', 'Couleurs vives', 'Pastels mystiques', 'Contraste élevé'], required: true },
      { name: 'contrast_level', type: 'select', label: 'Contraste', options: ['Subtile', 'Modéré', 'Élevé', 'Dramatique'], required: true },
      { name: 'magical_elements', type: 'textarea', label: 'Éléments magiques', placeholder: 'Sorts de feu, aura mystique, portails dimensionnels...', required: false },
      { name: 'fantasy_creatures', type: 'text', label: 'Créatures', placeholder: 'Dragons, licornes, phénix...', required: false },
      { name: 'mystical_objects', type: 'text', label: 'Objets mystiques', placeholder: 'Épée légendaire, grimoire ancien, cristal de pouvoir...', required: false },
      { name: 'special_effects', type: 'select', label: 'Effets spéciaux', options: ['Particules lumineuses', 'Énergie cosmique', 'Fumée mystique', 'Éclairs magiques', 'Distorsion spatiale'], required: false },
      { name: 'framing_type', type: 'select', label: 'Cadrage', options: ['Portrait', 'Plan large', 'Plan moyen', 'Gros plan', 'Vue aérienne'], required: true },
      { name: 'perspective_type', type: 'select', label: 'Perspective', options: ['Frontale', 'Plongée', 'Contre-plongée', 'Profil', 'Trois-quarts'], required: true },
      { name: 'focal_point', type: 'select', label: 'Point focal', options: ['Personnage central', 'Action principale', 'Élément magique', 'Environnement', 'Multiple'], required: true },
      { name: 'dynamic_level', type: 'select', label: 'Dynamisme', options: ['Statique', 'Léger mouvement', 'Action modérée', 'Très dynamique'], required: true },
      { name: 'artist_reference', type: 'text', label: 'Référence artiste', placeholder: 'Boris Vallejo, Frank Frazetta, Yoshitaka Amano...', required: false },
      { name: 'art_movement', type: 'select', label: 'Mouvement artistique', options: ['Romantisme', 'Symbolisme', 'Art nouveau', 'Surréalisme', 'Pop art'], required: false },
      { name: 'media_reference', type: 'select', label: 'Référence média', options: ['Game of Thrones', 'Lord of the Rings', 'Final Fantasy', 'World of Warcraft', 'Studio Ghibli'], required: false },
      { name: 'render_quality', type: 'select', label: 'Qualité rendu', options: ['4K ultra detailed', '8K masterpiece', 'Professional illustration', 'Award winning art'], required: true },
      { name: 'art_medium', type: 'select', label: 'Medium artistique', options: ['Digital art', 'Oil on canvas', 'Acrylic painting', 'Mixed media'], required: true },
      { name: 'mood_descriptors', type: 'text', label: 'Descripteurs ambiance', placeholder: 'epic, majestic, mysterious, powerful...', required: true },
      { name: 'atmosphere_tags', type: 'text', label: 'Tags atmosphère', placeholder: 'cinematic, dramatic, ethereal...', required: true },
      { name: 'image_ratio', type: 'select', label: 'Ratio image', options: ['16:9', '3:4', '1:1', '4:3', '9:16'], required: true },
      { name: 'chaos_level', type: 'select', label: 'Niveau chaos', options: ['0', '25', '50', '75', '100'], required: false, defaultValue: '25' }
    ],
    tags: ['Text-to-Image', 'Concept Art', 'Fantastique', 'Artistique'],
    quality: 4.9,
    usageCount: 3240
  }
];
