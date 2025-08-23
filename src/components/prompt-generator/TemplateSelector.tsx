
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, Filter, Star, Users, TrendingUp } from 'lucide-react';
import { 
  promptTemplates, 
  promptCategories, 
  PromptTemplate, 
  getTemplatesByCategory,
  searchTemplates 
} from './promptTemplatesData';

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

  const filteredTemplates = useMemo(() => {
    let templates = searchQuery 
      ? searchTemplates(searchQuery)
      : selectedCategory === 'all' 
        ? promptTemplates 
        : getTemplatesByCategory(selectedCategory);

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
  }, [searchQuery, selectedCategory, sortBy]);

  const getQualityColor = (quality: number) => {
    if (quality >= 4.5) return 'text-green-600';
    if (quality >= 4.0) return 'text-yellow-600';
    return 'text-orange-600';
  };

  return (
    <div className="space-y-4">
      {/* Barre de recherche et filtres */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Parcourir les templates
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                placeholder="Rechercher un template..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setSortBy(sortBy === 'quality' ? 'usage' : sortBy === 'usage' ? 'name' : 'quality')}
            >
              <Filter className="h-4 w-4 mr-2" />
              {sortBy === 'quality' ? 'Qualité' : sortBy === 'usage' ? 'Popularité' : 'Nom'}
            </Button>
          </div>

          {/* Catégories */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory('all')}
            >
              Tous ({promptTemplates.length})
            </Button>
            {promptCategories.map(category => {
              const count = getTemplatesByCategory(category.id).length;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name} ({count})
                </Button>
              );
            })}
          </div>
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
            <Card 
              key={template.id} 
              className={`cursor-pointer transition-all hover:shadow-md ${
                selectedTemplate?.id === template.id ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => onTemplateSelect(template)}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{template.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {template.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className={`h-4 w-4 ${getQualityColor(template.quality)}`} />
                        <span className={getQualityColor(template.quality)}>
                          {template.quality.toFixed(1)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{template.usageCount.toLocaleString()}</span>
                      </div>
                      <Badge variant="outline">{template.domain}</Badge>
                    </div>
                  </div>
                  {selectedTemplate?.id === template.id && (
                    <div className="ml-2">
                      <Badge>Sélectionné</Badge>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-1">
                  {template.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {filteredTemplates.length > 0 && (
        <div className="text-center text-sm text-muted-foreground">
          {filteredTemplates.length} template{filteredTemplates.length > 1 ? 's' : ''} trouvé{filteredTemplates.length > 1 ? 's' : ''}
        </div>
      )}
    </div>
  );
};

export default TemplateSelector;
