
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';

interface ApplicationExample {
  title: string;
  description: string;
  technologies: string[];
  benefits: string[];
  challenges: string[];
}

interface AIApplication {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  examples: ApplicationExample[];
}

interface ApplicationDetailProps {
  application: AIApplication;
}

const ApplicationDetail: React.FC<ApplicationDetailProps> = ({ application }) => {
  return (
    <motion.div
      key={application.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-3 gap-8"
    >
      <ApplicationSummaryCard application={application} />
      <ApplicationExamples examples={application.examples} />
    </motion.div>
  );
};

const ApplicationSummaryCard: React.FC<{ application: AIApplication }> = ({ application }) => {
  return (
    <Card className="lg:col-span-1 h-fit border-primary/10">
      <CardHeader>
        <div className="mb-2 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
          {application.icon}
        </div>
        <CardTitle className="text-xl">{application.name}</CardTitle>
        <CardDescription>{application.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Technologies clés</h4>
            <div className="flex flex-wrap gap-2">
              {Array.from(new Set(application.examples.flatMap(ex => ex.technologies))).map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-secondary/40 rounded-full text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-2">Impact transformateur</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {Array.from(new Set(application.examples.flatMap(ex => ex.benefits))).slice(0, 5).map((benefit, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-xs mt-0.5">+</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ApplicationExamples: React.FC<{ examples: ApplicationExample[] }> = ({ examples }) => {
  return (
    <div className="lg:col-span-2 space-y-6">
      <Tabs defaultValue={examples[0].title.toLowerCase().replace(/\s+/g, '-')}>
        <TabsList className="w-full justify-start mb-4 overflow-x-auto">
          {examples.map((example, i) => (
            <TabsTrigger key={i} value={example.title.toLowerCase().replace(/\s+/g, '-')}>
              {example.title}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {examples.map((example, i) => (
          <TabsContent key={i} value={example.title.toLowerCase().replace(/\s+/g, '-')}>
            <ExampleDetailsCard example={example} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

const ExampleDetailsCard: React.FC<{ example: ApplicationExample }> = ({ example }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{example.title}</CardTitle>
        <CardDescription>{example.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Technologies</h4>
              <ul className="pl-5 space-y-1 text-sm text-muted-foreground list-disc">
                {example.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Bénéfices</h4>
              <ul className="pl-5 space-y-1 text-sm text-muted-foreground list-disc">
                {example.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Défis</h4>
              <ul className="pl-5 space-y-1 text-sm text-muted-foreground list-disc">
                {example.challenges.map((challenge, i) => (
                  <li key={i}>{challenge}</li>
                ))}
              </ul>
            </div>
            <div className="p-4 bg-secondary/30 rounded-lg mt-4 border border-border">
              <h4 className="text-sm font-medium mb-1">À retenir</h4>
              <p className="text-sm text-muted-foreground">
                L'application de l'IA dans ce domaine montre comment les différents types d'IA 
                (apprentissage supervisé, non supervisé, etc.) peuvent être combinés pour résoudre 
                des problèmes complexes et créer de la valeur.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApplicationDetail;
