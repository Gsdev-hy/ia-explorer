
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
import { researchTemplates, researchCategories } from './researchTemplates';
import { automationTemplates, automationCategories } from './automationTemplates';
import { creativeWritingTemplates, creativeWritingCategories } from './creativeWritingTemplates';
import { socialMediaTemplates, socialMediaCategories } from './socialMediaTemplates';
import { healthWellnessTemplates, healthWellnessCategories } from './healthWellnessTemplates';
import { technicalTemplates, technicalCategories } from './technicalTemplates';
import { gamingTemplates, gamingCategories } from './gamingTemplates';
import { extraTemplates, extraCategories } from './extraTemplates';

// Combinaison de tous les templates (150+ templates)
export const allSpecializedTemplates = [
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
  ...automationTemplates,
  ...creativeWritingTemplates,
  ...socialMediaTemplates,
  ...healthWellnessTemplates,
  ...technicalTemplates,
  ...gamingTemplates,
  ...extraTemplates
];

// Combinaison de toutes les catégories (15+ catégories)
export const allSpecializedCategories = [
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
  ...automationCategories,
  ...creativeWritingCategories,
  ...socialMediaCategories,
  ...healthWellnessCategories,
  ...technicalCategories,
  ...gamingCategories,
  ...extraCategories
];

// Exports pour compatibilité
export const allPromptTemplates = allSpecializedTemplates;
export const allPromptCategories = allSpecializedCategories;

// Export des statistiques pour vérification
export const templateStats = {
  totalTemplates: allSpecializedTemplates.length,
  totalCategories: allSpecializedCategories.length,
  categoriesBreakdown: allSpecializedCategories.map(cat => ({
    name: cat.name,
    id: cat.id,
    count: allSpecializedTemplates.filter(t => t.category === cat.id).length
  }))
};
