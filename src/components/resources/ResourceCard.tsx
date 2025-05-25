
import React from 'react';
import { 
  Card, 
  CardContent 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge";
import { 
  Book, 
  FileText, 
  Video, 
  Pencil, 
  Link2, 
  ExternalLink,
  Youtube
} from 'lucide-react';

interface ResourceCardProps {
  title: string;
  source: string;
  description: string;
  link: string;
  type: string;
  year?: number;
  tags?: string[];
  videoId?: string;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  source,
  description,
  link,
  type,
  year,
  tags,
  videoId
}) => {
  const getIcon = () => {
    switch (type) {
      case 'cours': return <Book className="h-5 w-5" />;
      case 'livre': return <Book className="h-5 w-5" />;
      case 'article': return <FileText className="h-5 w-5" />;
      case 'vidéo': return <Video className="h-5 w-5" />;
      case 'podcast': return <Pencil className="h-5 w-5" />;
      default: return <Link2 className="h-5 w-5" />;
    }
  };

  // Fonction pour générer l'URL de la miniature YouTube
  const getYouTubeThumbnail = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };
  
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow h-full">
      <CardContent className="p-0 flex flex-col h-full">
        {/* Miniature pour les vidéos YouTube */}
        {type === 'vidéo' && videoId && (
          <div className="relative">
            <img 
              src={getYouTubeThumbnail(videoId)}
              alt={`Miniature de ${title}`}
              className="w-full h-48 object-cover"
              onError={(e) => {
                // Fallback vers une miniature de qualité moyenne si maxres ne fonctionne pas
                const target = e.currentTarget as HTMLImageElement;
                if (!target.src.includes('mqdefault')) {
                  target.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
                } else {
                  // Si ça ne fonctionne toujours pas, on cache l'image
                  target.style.display = 'none';
                }
              }}
            />
            {/* Overlay YouTube */}
            <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
              <Youtube className="h-3 w-3" />
              YouTube
            </div>
            {/* Overlay durée (simulé pour l'exemple) */}
            <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
              {Math.floor(Math.random() * 20) + 5}:{Math.floor(Math.random() * 60).toString().padStart(2, '0')}
            </div>
          </div>
        )}
        
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-3">
            <Badge variant="outline" className="mb-2 flex items-center gap-1">
              {getIcon()}
              {type}
            </Badge>
            {year && <Badge variant="secondary">{year}</Badge>}
          </div>
          
          <h3 className="text-lg font-medium mb-2 line-clamp-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-1 font-medium">{source}</p>
          <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">{description}</p>
          
          {tags && tags.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag, idx) => (
                <Badge key={idx} variant="outline" className="text-xs">
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
          
          <Button variant="outline" size="sm" className="w-full gap-2 mt-auto" asChild>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              {type === 'vidéo' ? 'Regarder' : 'Consulter'}
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
