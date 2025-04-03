
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from '@/components/ui/badge';
import { Mail, Github, Linkedin, Heart, Code, BookOpen, Users, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import NeuralNetworkInteractive from '@/components/ml/visualization/NeuralNetworkInteractive';

const About = () => {
  const teamMembers = [
    {
      name: "Geoffroy Streit",
      role: "Fondateur & Développeur",
      bio: "Passionné d'IA et d'éducation numérique. Expert en développement et vulgarisation technique avec une forte expérience dans le domaine de l'intelligence artificielle.",
      avatar: "/placeholder.svg",
      initials: "GS",
      links: {
        email: "geoffroy.streit@gmail.com",
        github: "https://github.com/gstreit",
        linkedin: "https://linkedin.com/in/gstreit"
      }
    }
  ];

  return (
    <>
      <Hero
        title="À propos d'IA Explorer"
        subtitle="Découvrez notre mission, notre équipe et comment nous contribuons à rendre l'intelligence artificielle plus accessible et compréhensible pour tous."
      />

      <section className="py-8 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="h-[300px] relative mb-12 rounded-xl overflow-hidden border border-primary/20 shadow-lg">
            <NeuralNetworkInteractive />
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            pretitle="Notre mission"
            title="Démystifier l'intelligence artificielle pour tous"
            description="IA Explorer a été créé avec un objectif clair : rendre l'IA accessible et compréhensible pour le grand public francophone."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-card shadow-sm">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Éducation</CardTitle>
                <CardDescription>Fournir des ressources pédagogiques de qualité sur l'IA en français</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-card shadow-sm">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Accessibilité</CardTitle>
                <CardDescription>Rendre les concepts complexes d'IA compréhensibles pour tous les publics</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-card shadow-sm">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Dialogue</CardTitle>
                <CardDescription>Favoriser une compréhension critique des enjeux éthiques et sociétaux de l'IA</CardDescription>
              </CardHeader>
            </Card>
          </div>
          
          <SectionHeading
            pretitle="Notre équipe"
            title="Le créateur d'IA Explorer"
            description="Découvrez le passionné qui a conçu et développé cette ressource éducative sur l'intelligence artificielle."
            center
          />
          
          <div className="max-w-2xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-card shadow-sm overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-16 w-16 border-2 border-primary/20">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback className="bg-primary/10 text-primary font-medium">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                      <div className="flex gap-1 mt-1">
                        <Badge variant="outline" className="text-xs">#ia</Badge>
                        <Badge variant="outline" className="text-xs">#éducation</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1" asChild>
                      <a href={`mailto:${member.links.email}`}>
                        <Mail className="h-3.5 w-3.5" />
                        <span className="text-xs">Email</span>
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1" asChild>
                      <a href={member.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3.5 w-3.5" />
                        <span className="text-xs">GitHub</span>
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1" asChild>
                      <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-3.5 w-3.5" />
                        <span className="text-xs">LinkedIn</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-2xl mx-auto text-center">
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Contribuer au projet</h3>
              <p className="text-muted-foreground mb-4">
                IA Explorer est un projet en constante évolution. Vous pouvez contribuer en suggérant des améliorations, 
                en signalant des erreurs ou en proposant du contenu.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button variant="default" className="gap-2" asChild>
                  <a href="mailto:geoffroy.streit@gmail.com">
                    <Mail className="h-4 w-4" />
                    <span>Contacter l'équipe</span>
                  </a>
                </Button>
                <Button variant="outline" className="gap-2" asChild>
                  <a href="https://github.com/gstreit/ia-explorer" target="_blank" rel="noopener noreferrer">
                    <Code className="h-4 w-4" />
                    <span>Voir le code source</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
