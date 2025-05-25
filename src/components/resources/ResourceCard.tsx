
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
  Youtube,
  Play
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
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 h-full group hover:-translate-y-2 cursor-pointer">
      <CardContent className="p-0 flex flex-col h-full">
        {/* Miniature pour les vidéos YouTube avec effets améliorés */}
        {type === 'vidéo' && videoId && (
          <div className="relative overflow-hidden">
            <img 
              src={getYouTubeThumbnail(videoId)}
              alt={`Miniature de ${title}`}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                if (!target.src.includes('mqdefault')) {
                  target.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
                } else {
                  target.style.display = 'none';
                }
              }}
            />
            
            {/* Overlay avec bouton play animé */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                <Play className="w-6 h-6 text-white ml-1" />
              </div>
            </div>
            
            {/* Badge YouTube */}
            <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow-lg group-hover:scale-105 transition-transform">
              <Youtube className="h-3 w-3" />
              YouTube
            </div>
            
            {/* Durée simulée */}
            <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium backdrop-blur-sm">
              {Math.floor(Math.random() * 20) + 5}:{Math.floor(Math.random() * 60).toString().padStart(2, '0')}
            </div>
          </div>
        )}
        
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-3">
            <Badge variant="outline" className="mb-2 flex items-center gap-1 group-hover:border-primary/50 transition-colors">
              {getIcon()}
              {type}
            </Badge>
            {year && (
              <Badge variant="secondary" className="group-hover:bg-primary/10 transition-colors">
                {year}
              </Badge>
            )}
          </div>
          
          <h3 className="text-lg font-medium mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-1 font-medium">{source}</p>
          <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">{description}</p>
          
          {tags && tags.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag, idx) => (
                <Badge key={idx} variant="outline" className="text-xs hover:bg-primary/10 transition-colors">
                  {tag}
                </Badge>
              ))}
              {tags.length > 3 && (
                <Badge variant="outline" className="text-xs hover:bg-primary/10 transition-colors">
                  +{tags.length - 3}
                </Badge>
              )}
            </div>
          )}
          
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full gap-2 mt-auto group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 hover:shadow-lg" 
            asChild
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 group-hover:scale-110 transition-transform" />
              {type === 'vidéo' ? 'Regarder' : 'Consulter'}
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
