
// Templates par catégorie
export { llmTemplates, llmCategories } from './llmTemplates';
export { imageTemplates, imageCategories } from './imageTemplates';
export { audioTemplates, audioCategories } from './audioTemplates';
export { videoTemplates, videoCategories } from './videoTemplates';
export { ragTemplates, ragCategories } from './ragTemplates';
export { businessTemplates, businessCategories } from './businessTemplates';
export { educationTemplates, educationCategories } from './educationTemplates';

// Nouveaux templates spécialisés
export { visionTemplates, visionCategories } from './visionTemplates';
export { mediaGenerationTemplates, mediaGenerationCategories } from './mediaGenerationTemplates';
export { audioAnalysisTemplates, audioAnalysisCategories } from './audioAnalysisTemplates';

// Export combiné pour faciliter l'utilisation
import { llmTemplates, llmCategories } from './llmTemplates';
import { imageTemplates, imageCategories } from './imageTemplates';
import { audioTemplates, audioCategories } from './audioTemplates';
import { videoTemplates, videoCategories } from './videoTemplates';
import { ragTemplates, ragCategories } from './ragTemplates';
import { businessTemplates, businessCategories } from './businessTemplates';
import { educationTemplates, educationCategories } from './educationTemplates';
import { visionTemplates, visionCategories } from './visionTemplates';
import { mediaGenerationTemplates, mediaGenerationCategories } from './mediaGenerationTemplates';
import { audioAnalysisTemplates, audioAnalysisCategories } from './audioAnalysisTemplates';

export const allSpecializedTemplates = [
  ...llmTemplates,
  ...imageTemplates,
  ...audioTemplates,
  ...videoTemplates,
  ...ragTemplates,
  ...businessTemplates,
  ...educationTemplates,
  ...visionTemplates,
  ...mediaGenerationTemplates,
  ...audioAnalysisTemplates
];

export const allSpecializedCategories = [
  ...llmCategories,
  ...imageCategories,
  ...audioCategories,
  ...videoCategories,
  ...ragCategories,
  ...businessCategories,
  ...educationCategories,
  ...visionCategories,
  ...mediaGenerationCategories,
  ...audioAnalysisCategories
];
