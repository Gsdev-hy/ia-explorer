
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, BookOpen, Video, Globe, FileText, Newspaper, Wrench } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ResourceCardProps {
  title: string;
  source?: string;
  description: string;
  link: string;
  type: string;
  year?: number;
  tags?: string[];
  isInternal?: boolean;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ 
  title, 
  source, 
  description, 
  link, 
  type, 
  year, 
  tags,
  isInternal = false
}) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isInternal) {
      // Navigation interne
      navigate(link);
    } else {
      // Ouverture dans un nouvel onglet pour les ressources externes
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'cours':
        return <BookOpen className="h-4 w-4 text-primary" />;
      case 'vidéo':
        return <Video className="h-4 w-4 text-primary" />;
      case 'site web':
        return <Globe className="h-4 w-4 text-primary" />;
      case 'livre':
        return <FileText className="h-4 w-4 text-primary" />;
      case 'article':
        return <Newspaper className="h-4 w-4 text-primary" />;
      case 'outil':
        return <Wrench className="h-4 w-4 text-primary" />;
      default:
        return <FileText className="h-4 w-4 text-primary" />;
    }
  };

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
      <CardContent className="p-6 h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            {getTypeIcon(type)}
            <Badge variant="secondary" className="text-xs">
              {type}
            </Badge>
            {isInternal && (
              <Badge variant="default" className="text-xs bg-primary/10 text-primary">
                Interne
              </Badge>
            )}
          </div>
          {year && (
            <span className="text-xs text-muted-foreground">{year}</span>
          )}
        </div>
        
        <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        {source && (
          <p className="text-sm text-primary mb-2 font-medium">{source}</p>
        )}
        
        <p className="text-sm text-muted-foreground mb-4 flex-grow">
          {description}
        </p>
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{tags.length - 3}
              </Badge>
            )}
          </div>
        )}
        
        <Button 
          onClick={handleClick}
          variant="outline" 
          size="sm" 
          className="mt-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors w-full"
        >
          {isInternal ? 'Suivre le cours' : 'Accéder au cours'}
          <ExternalLink className="ml-2 h-3 w-3" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
