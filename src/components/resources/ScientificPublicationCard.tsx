
import React from 'react';
import { 
  Card, 
  CardContent 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge";
import { FileText } from 'lucide-react';
import { ScientificPublication } from './resourcesData';

interface ScientificPublicationCardProps {
  publication: ScientificPublication;
}

export const ScientificPublicationCard: React.FC<ScientificPublicationCardProps> = ({ publication }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-3">
          <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            {publication.year}
          </Badge>
          <Badge variant="secondary">{publication.publication}</Badge>
        </div>
        <h3 className="text-lg font-medium mb-2">{publication.title}</h3>
        <p className="text-sm text-muted-foreground mb-2 italic">{publication.authors}</p>
        <p className="text-sm text-muted-foreground mb-4 flex-grow">{publication.description}</p>
        <Button variant="outline" size="sm" className="w-full gap-2 mt-auto" asChild>
          <a href={publication.link} target="_blank" rel="noopener noreferrer">
            <FileText className="h-4 w-4" />
            Lire la publication
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ScientificPublicationCard;
