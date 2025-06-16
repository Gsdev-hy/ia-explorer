
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ResourceCard from './ResourceCard';
import { ScientificPublicationCard } from './ScientificPublicationCard';
import { IAToolCard } from './IAToolCard';
import { AuditControlPanel } from './AuditControlPanel';
import { Resource, ScientificPublication, IAToolResource } from '../resourcesData';
import { useResourceAudit } from '@/hooks/useResourceAudit';

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

  return (
    <div className="space-y-6">
      {/* Panneau de contrôle d'audit */}
      <AuditControlPanel
        auditResults={auditResults}
        qualityScores={qualityScores}
        isAuditing={isAuditing}
        onAuditAll={auditAllResources}
        totalResources={filteredResources.length}
      />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="toutes">Toutes ({filteredResources.length})</TabsTrigger>
          <TabsTrigger value="publications">Publications ({filteredScientificPublications.length})</TabsTrigger>
          <TabsTrigger value="outils">Outils IA ({filteredIATools.length})</TabsTrigger>
          <TabsTrigger value="videos">Vidéos ({filteredResources.filter(r => r.type === 'vidéo').length})</TabsTrigger>
        </TabsList>

        <TabsContent value="toutes" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
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
            ))}
          </div>
        </TabsContent>

        <TabsContent value="publications" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredScientificPublications.map((publication, index) => (
              <ScientificPublicationCard
                key={`${publication.link}-${index}`}
                title={publication.title}
                authors={publication.authors}
                journal={publication.journal}
                year={publication.year}
                description={publication.description}
                link={publication.link}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="outils" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIATools.map((tool, index) => (
              <IAToolCard
                key={`${tool.link}-${index}`}
                name={tool.name}
                description={tool.description}
                link={tool.link}
                category={tool.category}
                pricing={tool.pricing}
                features={tool.features}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources
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
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UnifiedResourcesTabsSection;
