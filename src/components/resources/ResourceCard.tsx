
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
  ExternalLink 
} from 'lucide-react';

interface ResourceCardProps {
  title: string;
  source: string;
  description: string;
  link: string;
  type: string;
  year?: number;
  tags?: string[];
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  source,
  description,
  link,
  type,
  year,
  tags
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
  
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-3">
          <Badge variant="outline" className="mb-2">{type}</Badge>
          {year && <Badge variant="secondary">{year}</Badge>}
        </div>
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-1">Source: {source}</p>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="mb-4 flex flex-wrap gap-2 flex-grow">
          {tags && tags.map((tag, idx) => (
            <Badge key={idx} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <Button variant="outline" size="sm" className="w-full gap-2 mt-auto" asChild>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" />
            Consulter
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
