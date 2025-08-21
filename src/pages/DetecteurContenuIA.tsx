
import React from 'react';
import Hero from '@/components/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, FileText, Image, Music } from 'lucide-react';

const DetecteurContenuIA = () => {
  return (
    <>
      <Hero
        title="Détecteur de Contenu IA"
        subtitle="Analysez et détectez si un contenu (texte, image, audio) a été généré par une IA. Outil de vérification et d'authentification"
      />
      
      <section className="section-container">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-primary/10 px-4 py-2 rounded-lg mb-4">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Outil en cours de développement</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Détection de texte
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Analysez si un texte a été généré par ChatGPT, Claude, ou d'autres modèles de langage.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Image className="h-5 w-5" />
                Analyse d'images
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Détectez si une image a été créée par Midjourney, DALL-E, Stable Diffusion ou autres générateurs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Music className="h-5 w-5" />
                Détection audio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Identifiez les voix synthétiques et la musique générée par IA avec des scores de confiance détaillés.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default DetecteurContenuIA;
