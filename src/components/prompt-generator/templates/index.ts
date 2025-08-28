
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

// Combinaison de tous les templates spécialisés (150+ templates)
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

// Combinaison de toutes les catégories spécialisées (17 catégories)
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

// Exports pour compatibilité avec l'interface
export const allPromptTemplates = allSpecializedTemplates;
export const allPromptCategories = allSpecializedCategories;

// Export des statistiques mises à jour
export const templateStats = {
  totalTemplates: allSpecializedTemplates.length,
  totalCategories: allSpecializedCategories.length,
  categoriesBreakdown: allSpecializedCategories.map(cat => ({
    name: cat.name,
    id: cat.id,
    count: allSpecializedTemplates.filter(t => t.category === cat.id).length
  }))
};

// Validation des templates pour s'assurer qu'ils respectent l'interface PromptTemplate
export const validateTemplates = () => {
  const issues = [];
  
  allSpecializedTemplates.forEach((template, index) => {
    if (!template.id || !template.name || !template.category || !template.domain || 
        !template.description || !template.template || !Array.isArray(template.variables) || 
        !Array.isArray(template.tags) || typeof template.quality !== 'number' || 
        typeof template.usageCount !== 'number') {
      issues.push(`Template ${index}: Missing required properties`);
    }
  });
  
  return issues;
};

console.log('📊 Templates Spécialisés chargés:', {
  totalTemplates: allSpecializedTemplates.length,
  totalCategories: allSpecializedCategories.length,
  validationIssues: validateTemplates()
});
