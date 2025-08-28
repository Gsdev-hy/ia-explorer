
import { llmTemplates, llmCategories } from './llmTemplates';
import { imageTemplates, imageCategories } from './imageTemplates';
import { videoTemplates, videoCategories } from './videoTemplates';
import { audioTemplates, audioCategories } from './audioTemplates';
import { visionTemplates, visionCategories } from './visionTemplates';
import { ragTemplates, ragCategories } from './ragTemplates';
import { mediaGenerationTemplates, mediaGenerationCategories } from './mediaGenerationTemplates';
import { audioAnalysisTemplates, audioAnalysisCategories } from './audioAnalysisTemplates';
import { businessTemplates, businessCategories } from './businessTemplates';
import { educationTemplates, educationCategories } from './educationTemplates';

// Import des nouveaux templates
import { researchTemplates, researchCategories } from './researchTemplates';
import { automationTemplates, automationCategories } from './automationTemplates';

// Combinaison de tous les templates
export const allPromptTemplates = [
  ...llmTemplates,
  ...imageTemplates,
  ...videoTemplates,
  ...audioTemplates,
  ...visionTemplates,
  ...ragTemplates,
  ...mediaGenerationTemplates,
  ...audioAnalysisTemplates,
  ...businessTemplates,
  ...educationTemplates,
  ...researchTemplates,
  ...automationTemplates
];

// Combinaison de toutes les catégories
export const allPromptCategories = [
  ...llmCategories,
  ...imageCategories,
  ...videoCategories,
  ...audioCategories,
  ...visionCategories,
  ...ragCategories,
  ...mediaGenerationCategories,
  ...audioAnalysisCategories,
  ...businessCategories,
  ...educationCategories,
  ...researchCategories,
  ...automationCategories
];

// Exports attendus par TemplateSelector (templates spécialisés uniquement)
export const allSpecializedTemplates = [
  ...visionTemplates,
  ...ragTemplates,
  ...mediaGenerationTemplates,
  ...audioAnalysisTemplates,
  ...businessTemplates,
  ...educationTemplates,
  ...researchTemplates,
  ...automationTemplates
];

export const allSpecializedCategories = [
  ...visionCategories,
  ...ragCategories,
  ...mediaGenerationCategories,
  ...audioAnalysisCategories,
  ...businessCategories,
  ...educationCategories,
  ...researchCategories,
  ...automationCategories
];

