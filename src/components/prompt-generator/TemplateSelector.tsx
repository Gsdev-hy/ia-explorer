
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search } from 'lucide-react';
import { PromptTemplate } from './promptTemplatesData';
import { 
  promptTemplates, 
  promptCategories,
  advancedPromptTemplates, 
  advancedCategories 
} from './promptTemplatesData';
import { 
  allSpecializedTemplates, 
  allSpecializedCategories 
} from './templates';
import TemplateFilters from './TemplateFilters';
import TemplateCard from './TemplateCard';

interface TemplateSelectorProps {
  onTemplateSelect: (template: PromptTemplate) => void;
  selectedTemplate?: PromptTemplate;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ 
  onTemplateSelect, 
  selectedTemplate 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'quality' | 'usage' | 'name'>('quality');

  // Combiner tous les templates et catégories
  const allTemplates = useMemo(() => {
    return [
      ...promptTemplates, 
      ...advancedPromptTemplates,
      ...allSpecializedTemplates
    ];
  }, []);

  const allCategories = useMemo(() => {
    return [
      ...promptCategories, 
      ...advancedCategories,
      ...allSpecializedCategories
    ];
  }, []);

  const filteredTemplates = useMemo(() => {
    let templates = searchQuery 
      ? allTemplates.filter(template => 
          template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        )
      : selectedCategory === 'all' 
        ? allTemplates 
        : allTemplates.filter(template => template.category === selectedCategory);

    // Tri
    templates.sort((a, b) => {
      switch (sortBy) {
        case 'quality':
          return b.quality - a.quality;
        case 'usage':
          return b.usageCount - a.usageCount;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return templates;
  }, [allTemplates, searchQuery, selectedCategory, sortBy]);

  const getCategoryCount = (categoryId: string) => {
    return allTemplates.filter(template => template.category === categoryId).length;
  };

  const isAdvancedTemplate = (template: PromptTemplate) => {
    return [...advancedPromptTemplates, ...allSpecializedTemplates].includes(template);
  };

  return (
    <div className="space-y-4">
      {/* En-tête avec statistiques */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Bibliothèque de Templates IA ({allTemplates.length})
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Templates professionnels pour LLM, génération d'images, audio, vidéo et systèmes RAG
          </p>
        </CardHeader>
        <CardContent>
          <TemplateFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            sortBy={sortBy}
            onSortChange={(sort) => setSortBy(sort as 'quality' | 'usage' | 'name')}
            categories={allCategories}
            getCategoryCount={getCategoryCount}
            totalTemplates={allTemplates.length}
          />
        </CardContent>
      </Card>

      {/* Liste des templates */}
      <div className="grid gap-4">
        {filteredTemplates.length === 0 ? (
          <Card>
            <CardContent className="text-center py-8">
              <p className="text-muted-foreground">Aucun template trouvé pour votre recherche.</p>
            </CardContent>
          </Card>
        ) : (
          filteredTemplates.map(template => (
            <TemplateCard
              key={template.id}
              template={template}
              isSelected={selectedTemplate?.id === template.id}
              onSelect={onTemplateSelect}
              isAdvanced={isAdvancedTemplate(template)}
            />
          ))
        )}
      </div>

      {/* Statistiques de recherche */}
      {filteredTemplates.length > 0 && (
        <div className="text-center text-sm text-muted-foreground">
          {filteredTemplates.length} template{filteredTemplates.length > 1 ? 's' : ''} trouvé{filteredTemplates.length > 1 ? 's' : ''}
          {searchQuery && ` pour "${searchQuery}"`}
          {selectedCategory !== 'all' && ` dans la catégorie sélectionnée`}
        </div>
      )}
    </div>
  );
};

export default TemplateSelector;
