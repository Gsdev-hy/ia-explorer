
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResourceCard from './ResourceCard';
import ScientificPublicationCard from './ScientificPublicationCard';
import IAToolCard from './IAToolCard';
import IAQuiz from './IAQuiz';
import { FileText } from 'lucide-react';
import { Resource, ScientificPublication, IAToolResource } from './resourcesData';

interface UnifiedResourcesTabsSectionProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
  filteredResources: Resource[];
  filteredScientificPublications: ScientificPublication[];
  filteredIATools: IAToolResource[];
}

export const UnifiedResourcesTabsSection: React.FC<UnifiedResourcesTabsSectionProps> = ({
  activeTab,
  setActiveTab,
  filteredResources,
  filteredScientificPublications,
  filteredIATools
}) => {
  // Fonction pour afficher le message "Aucune ressource trouvée"
  const NoResourcesFound = ({ message = "Aucune ressource trouvée" }) => (
    <div className="col-span-full text-center py-10">
      <FileText className="mx-auto h-12 w-12 text-muted-foreground/50" />
      <h3 className="mt-4 text-lg font-medium">{message}</h3>
      <p className="text-muted-foreground">Essayez de modifier vos critères de recherche</p>
    </div>
  );

  return (
    <Tabs defaultValue="toutes" className="w-full mb-8" onValueChange={setActiveTab} value={activeTab}>
      <TabsList className="w-full max-w-6xl mx-auto grid grid-cols-8 mb-4">
        <TabsTrigger value="toutes" className="whitespace-normal">Toutes</TabsTrigger>
        <TabsTrigger value="cours" className="whitespace-normal">Cours</TabsTrigger>
        <TabsTrigger value="outils" className="whitespace-normal">Outils</TabsTrigger>
        <TabsTrigger value="quiz" className="whitespace-normal">Quiz</TabsTrigger>
        <TabsTrigger value="sites-web" className="whitespace-normal">Sites Web</TabsTrigger>
        <TabsTrigger value="livres" className="whitespace-normal">Livres</TabsTrigger>
        <TabsTrigger value="publications" className="whitespace-normal">Publications</TabsTrigger>
        <TabsTrigger value="videos" className="whitespace-normal">Vidéos</TabsTrigger>
      </TabsList>
      
      <TabsContent value="toutes" className="mt-6">
        <div className="space-y-8">
          {/* Tous les types de ressources mélangés */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.length > 0 ? (
              filteredResources.map((resource, index) => (
                <ResourceCard 
                  key={`resource-${index}`}
                  title={resource.title}
                  source={resource.source}
                  description={resource.description}
                  link={resource.link}
                  type={resource.type}
                  year={resource.year}
                  tags={resource.tags}
                />
              ))
            ) : null}
            
            {filteredIATools.length > 0 && filteredIATools.map((tool, index) => (
              <IAToolCard key={`tool-${index}`} tool={tool} />
            ))}
          </div>
          
          {/* Publications scientifiques dans une section séparée */}
          {filteredScientificPublications.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Publications scientifiques</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredScientificPublications.map((pub, index) => (
                  <ScientificPublicationCard key={`pub-${index}`} publication={pub} />
                ))}
              </div>
            </div>
          )}
          
          {filteredResources.length === 0 && filteredIATools.length === 0 && filteredScientificPublications.length === 0 && (
            <NoResourcesFound />
          )}
        </div>
      </TabsContent>
      
      <TabsContent value="cours" className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources
            .filter(resource => resource.type === "cours")
            .length > 0 ? (
            filteredResources
              .filter(resource => resource.type === "cours")
              .map((resource, index) => (
                <ResourceCard 
                  key={index} 
                  title={resource.title}
                  source={resource.source}
                  description={resource.description}
                  link={resource.link}
                  type={resource.type}
                  year={resource.year}
                  tags={resource.tags}
                />
              ))
          ) : (
            <NoResourcesFound />
          )}
        </div>
      </TabsContent>
      
      <TabsContent value="outils" className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIATools.length > 0 ? (
            filteredIATools.map((tool, index) => (
              <IAToolCard key={index} tool={tool} />
            ))
          ) : (
            <NoResourcesFound message="Aucun outil trouvé" />
          )}
        </div>
      </TabsContent>
      
      <TabsContent value="quiz" className="mt-6">
        <div className="max-w-2xl mx-auto">
          <IAQuiz />
        </div>
      </TabsContent>
      
      <TabsContent value="sites-web" className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources
            .filter(resource => resource.type === "site web")
            .length > 0 ? (
            filteredResources
              .filter(resource => resource.type === "site web")
              .map((resource, index) => (
                <ResourceCard 
                  key={index} 
                  title={resource.title}
                  source={resource.source}
                  description={resource.description}
                  link={resource.link}
                  type={resource.type}
                  year={resource.year}
                  tags={resource.tags}
                />
              ))
          ) : (
            <NoResourcesFound message="Aucun site web trouvé" />
          )}
        </div>
      </TabsContent>
      
      <TabsContent value="livres" className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources
            .filter(resource => resource.type === "livre")
            .length > 0 ? (
            filteredResources
              .filter(resource => resource.type === "livre")
              .map((resource, index) => (
                <ResourceCard 
                  key={index} 
                  title={resource.title}
                  source={resource.source}
                  description={resource.description}
                  link={resource.link}
                  type={resource.type}
                  year={resource.year}
                  tags={resource.tags}
                />
              ))
          ) : (
            <NoResourcesFound message="Aucun livre trouvé" />
          )}
        </div>
      </TabsContent>
      
      <TabsContent value="publications" className="mt-6">
        <div className="space-y-8">
          {/* Publications scientifiques */}
          {filteredScientificPublications.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Publications scientifiques</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredScientificPublications.map((pub, index) => (
                  <ScientificPublicationCard key={index} publication={pub} />
                ))}
              </div>
            </div>
          )}
          
          {/* Articles */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources
                .filter(resource => resource.type === "article")
                .length > 0 ? (
                filteredResources
                  .filter(resource => resource.type === "article")
                  .map((resource, index) => (
                    <ResourceCard 
                      key={index} 
                      title={resource.title}
                      source={resource.source}
                      description={resource.description}
                      link={resource.link}
                      type={resource.type}
                      year={resource.year}
                      tags={resource.tags}
                    />
                  ))
              ) : (
                <div className="col-span-full text-center py-6">
                  <p className="text-muted-foreground">Aucun article trouvé</p>
                </div>
              )}
            </div>
          </div>
          
          {filteredScientificPublications.length === 0 && filteredResources.filter(r => r.type === "article").length === 0 && (
            <NoResourcesFound message="Aucune publication trouvée" />
          )}
        </div>
      </TabsContent>
      
      <TabsContent value="videos" className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources
            .filter(resource => resource.type === "vidéo")
            .length > 0 ? (
            filteredResources
              .filter(resource => resource.type === "vidéo")
              .map((resource, index) => (
                <ResourceCard 
                  key={index} 
                  title={resource.title}
                  source={resource.source}
                  description={resource.description}
                  link={resource.link}
                  type={resource.type}
                  year={resource.year}
                  tags={resource.tags}
                />
              ))
          ) : (
            <NoResourcesFound message="Aucune vidéo trouvée" />
          )}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default UnifiedResourcesTabsSection;
