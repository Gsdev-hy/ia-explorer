
// Templates par catégorie
export { llmTemplates, llmCategories } from './llmTemplates';
export { imageTemplates, imageCategories } from './imageTemplates';
export { audioTemplates, audioCategories } from './audioTemplates';
export { videoTemplates, videoCategories } from './videoTemplates';
export { ragTemplates, ragCategories } from './ragTemplates';

// Export combiné pour faciliter l'utilisation
import { llmTemplates, llmCategories } from './llmTemplates';
import { imageTemplates, imageCategories } from './imageTemplates';
import { audioTemplates, audioCategories } from './audioTemplates';
import { videoTemplates, videoCategories } from './videoTemplates';
export { ragTemplates, ragCategories } from './ragTemplates';

export const allSpecializedTemplates = [
  ...llmTemplates,
  ...imageTemplates,
  ...audioTemplates,
  ...videoTemplates,
  ...ragTemplates
];

export const allSpecializedCategories = [
  ...llmCategories,
  ...imageCategories,
  ...audioCategories,
  ...videoCategories,
  ...ragCategories
];
