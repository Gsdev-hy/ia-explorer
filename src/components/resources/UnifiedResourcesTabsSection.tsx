
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ResourceCard from './ResourceCard';
import { ScientificPublicationCard } from './ScientificPublicationCard';
import { IAToolCard } from './IAToolCard';
import { Resource, ScientificPublication, IAToolResource } from './resourcesData';
import { useResourceAudit } from '@/hooks/useResourceAudit';
import { FileText } from 'lucide-react';

interface UnifiedResourcesTabsSectionProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  filteredResources: Resource[];
  filteredScientificPublications: ScientificPublication[];
  filteredIATools: IAToolResource[];
}

const UnifiedResourcesTabsSection: React.FC<UnifiedResourcesTabsSectionProps> = ({
  activeTab,
  setActiveTab,
  filteredResources,
  filteredScientificPublications,
  filteredIATools
}) => {
  const {
    auditResults,
    qualityScores,
    isAuditing,
    auditAllResources,
    auditResource
  } = useResourceAudit(filteredResources);

  // Calculs pour les compteurs d'onglets
  const coursesCount = filteredResources.filter(r => r.type === 'cours').length;
  const videosCount = filteredResources.filter(r => r.type === 'vidéo').length;
  const booksCount = filteredResources.filter(r => r.type === 'livre').length;
  const websitesCount = filteredResources.filter(r => r.type === 'site web').length;
  const articlesCount = filteredResources.filter(r => r.type === 'article').length;

  const EmptyState = ({ title, description }: { title: string; description: string }) => (
    <div className="col-span-full text-center py-10">
      <FileText className="mx-auto h-12 w-12 text-muted-foreground/50" />
      <h3 className="mt-4 text-lg font-medium">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="toutes">Toutes ({filteredResources.length})</TabsTrigger>
          <TabsTrigger value="cours">Cours ({coursesCount})</TabsTrigger>
          <TabsTrigger value="videos">Vidéos ({videosCount})</TabsTrigger>
          <TabsTrigger value="publications">Publications ({filteredScientificPublications.length})</TabsTrigger>
          <TabsTrigger value="outils">Outils IA ({filteredIATools.length})</TabsTrigger>
          <TabsTrigger value="livres">Livres ({booksCount})</TabsTrigger>
        </TabsList>

        <TabsContent value="toutes" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.length > 0 ? (
              filteredResources.map((resource, index) => (
                <ResourceCard
                  key={`${resource.link}-${index}`}
                  title={resource.title}
                  source={resource.source}
                  description={resource.description}
                  link={resource.link}
                  type={resource.type}
                  year={resource.year}
                  tags={resource.tags}
                  isInternal={resource.isInternal}
                  videoId={resource.videoId}
                  auditResult={auditResults.get(resource.link)}
                  qualityScore={qualityScores.get(resource.link)}
                  onAuditRequest={() => auditResource(resource)}
                />
              ))
            ) : (
              <EmptyState 
                title="Aucune ressource trouvée" 
                description="Essayez de modifier vos critères de recherche" 
              />
            )}
          </div>
        </TabsContent>

        <TabsContent value="cours" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursesCount > 0 ? (
              filteredResources
                .filter(resource => resource.type === 'cours')
                .map((resource, index) => (
                  <ResourceCard
                    key={`${resource.link}-${index}`}
                    title={resource.title}
                    source={resource.source}
                    description={resource.description}
                    link={resource.link}
                    type={resource.type}
                    year={resource.year}
                    tags={resource.tags}
                    isInternal={resource.isInternal}
                    videoId={resource.videoId}
                    auditResult={auditResults.get(resource.link)}
                    qualityScore={qualityScores.get(resource.link)}
                    onAuditRequest={() => auditResource(resource)}
                  />
                ))
            ) : (
              <EmptyState 
                title="Aucun cours trouvé" 
                description="Essayez de modifier vos critères de recherche" 
              />
            )}
          </div>
        </TabsContent>

        <TabsContent value="videos" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videosCount > 0 ? (
              filteredResources
                .filter(resource => resource.type === 'vidéo')
                .map((resource, index) => (
                  <ResourceCard
                    key={`${resource.link}-${index}`}
                    title={resource.title}
                    source={resource.source}
                    description={resource.description}
                    link={resource.link}
                    type={resource.type}
                    year={resource.year}
                    tags={resource.tags}
                    isInternal={resource.isInternal}
                    videoId={resource.videoId}
                    auditResult={auditResults.get(resource.link)}
                    qualityScore={qualityScores.get(resource.link)}
                    onAuditRequest={() => auditResource(resource)}
                  />
                ))
            ) : (
              <EmptyState 
                title="Aucune vidéo trouvée" 
                description="Essayez de modifier vos critères de recherche" 
              />
            )}
          </div>
        </TabsContent>

        <TabsContent value="publications" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredScientificPublications.length > 0 ? (
              filteredScientificPublications.map((publication, index) => (
                <ScientificPublicationCard
                  key={`${publication.link}-${index}`}
                  publication={publication}
                />
              ))
            ) : (
              <EmptyState 
                title="Aucune publication trouvée" 
                description="Essayez de modifier vos critères de recherche" 
              />
            )}
          </div>
        </TabsContent>

        <TabsContent value="outils" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIATools.length > 0 ? (
              filteredIATools.map((tool, index) => (
                <IAToolCard
                  key={`${tool.link}-${index}`}
                  tool={tool}
                />
              ))
            ) : (
              <EmptyState 
                title="Aucun outil trouvé" 
                description="Essayez de modifier vos critères de recherche" 
              />
            )}
          </div>
        </TabsContent>

        <TabsContent value="livres" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {booksCount > 0 ? (
              filteredResources
                .filter(resource => resource.type === 'livre')
                .map((resource, index) => (
                  <ResourceCard
                    key={`${resource.link}-${index}`}
                    title={resource.title}
                    source={resource.source}
                    description={resource.description}
                    link={resource.link}
                    type={resource.type}
                    year={resource.year}
                    tags={resource.tags}
                    isInternal={resource.isInternal}
                    videoId={resource.videoId}
                    auditResult={auditResults.get(resource.link)}
                    qualityScore={qualityScores.get(resource.link)}
                    onAuditRequest={() => auditResource(resource)}
                  />
                ))
            ) : (
              <EmptyState 
                title="Aucun livre trouvé" 
                description="Essayez de modifier vos critères de recherche" 
              />
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UnifiedResourcesTabsSection;
