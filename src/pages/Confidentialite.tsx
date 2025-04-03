
import React from 'react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Clock, Eye, XCircle } from 'lucide-react';

const Confidentialite = () => {
  return (
    <>
      <Hero
        title="Politique de Confidentialité"
        subtitle="Comment nous protégeons et traitons vos données personnelles"
      />

      <section className="section-container">
        <div className="max-w-3xl mx-auto">
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
              </div>
              
              <SectionHeading
                title="Introduction"
                description="Notre engagement envers la protection de vos données"
                center
              />
              
              <div className="space-y-4 mt-4">
                <p className="text-muted-foreground">
                  Chez IA Explorer, nous prenons la protection de vos données personnelles très au sérieux. 
                  Cette politique de confidentialité détaille les types de données que nous pouvons collecter, comment nous les utilisons et les protégeons.
                </p>
                <p className="text-muted-foreground">
                  En utilisant notre site, vous acceptez les pratiques décrites dans cette politique.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <SectionHeading
                title="Données collectées"
                description="Les informations que nous recueillons et pourquoi"
              />
              
              <div className="space-y-4 mt-4">
                <h3 className="text-lg font-medium">Données de navigation</h3>
                <p className="text-muted-foreground">
                  Lorsque vous visitez notre site, nous pouvons collecter certaines informations automatiquement :
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Adresse IP</li>
                  <li>Type de navigateur</li>
                  <li>Pages visitées et durée de visite</li>
                  <li>Système d'exploitation</li>
                  <li>Informations sur l'appareil</li>
                </ul>
                
                <h3 className="text-lg font-medium mt-6">Données fournies volontairement</h3>
                <p className="text-muted-foreground">
                  Nous collectons également les informations que vous nous fournissez directement :
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Informations de contact (email) si vous nous contactez</li>
                  <li>Commentaires ou questions soumis via les formulaires</li>
                  <li>Réponses aux questionnaires ou sondages</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <SectionHeading
                title="Utilisation des données"
                description="Comment nous utilisons vos informations"
              />
              
              <div className="space-y-4 mt-4">
                <p className="text-muted-foreground">
                  Nous utilisons les données collectées pour les finalités suivantes :
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Améliorer notre site et son contenu</li>
                  <li>Comprendre comment les utilisateurs interagissent avec notre site</li>
                  <li>Répondre à vos demandes et questions</li>
                  <li>Analyser et suivre l'efficacité de notre contenu</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <SectionHeading
                title="Conservation des données"
                description="Durée de conservation de vos informations"
              />
              
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-5 w-5 text-primary" />
                <p className="text-muted-foreground">
                  Nous ne conservons vos données personnelles que pendant la durée nécessaire pour répondre aux finalités pour lesquelles elles ont été collectées.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <SectionHeading
                title="Vos droits"
                description="Contrôle sur vos données personnelles"
              />
              
              <div className="space-y-4 mt-4">
                <p className="text-muted-foreground">
                  Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li><strong>Droit d'accès</strong> - Vous pouvez demander une copie des données personnelles que nous détenons à votre sujet</li>
                  <li><strong>Droit de rectification</strong> - Vous pouvez nous demander de corriger ou compléter les données vous concernant</li>
                  <li><strong>Droit à l'effacement</strong> - Vous pouvez nous demander de supprimer vos données</li>
                  <li><strong>Droit à la limitation du traitement</strong> - Vous pouvez nous demander de limiter l'utilisation de vos données</li>
                  <li><strong>Droit d'opposition</strong> - Vous pouvez vous opposer au traitement de vos données</li>
                  <li><strong>Droit à la portabilité</strong> - Vous pouvez demander à recevoir vos données dans un format structuré</li>
                </ul>
                
                <p className="text-muted-foreground mt-4">
                  Pour exercer ces droits, contactez-nous à <a href="mailto:geoffroy.streit@gmail.com" className="text-primary hover:underline">geoffroy.streit@gmail.com</a>.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <SectionHeading
                title="Cookies"
                description="Utilisation des cookies sur notre site"
              />
              
              <div className="space-y-4 mt-4">
                <p className="text-muted-foreground">
                  Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers texte stockés sur votre appareil qui nous aident à :
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Comprendre comment vous utilisez notre site</li>
                  <li>Mémoriser vos préférences</li>
                  <li>Fournir des fonctionnalités pertinentes</li>
                </ul>
                
                <div className="flex items-center gap-3 mt-6">
                  <XCircle className="h-5 w-5 text-primary" />
                  <p className="text-muted-foreground">
                    Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez via les paramètres de votre navigateur.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <SectionHeading
                title="Modifications de la politique de confidentialité"
                description="Comment nous vous informons des changements"
              />
              
              <div className="space-y-4 mt-4">
                <p className="text-muted-foreground">
                  Nous pouvons mettre à jour cette politique de confidentialité de temps à autre pour refléter, par exemple, des changements dans nos pratiques ou pour d'autres raisons opérationnelles, légales ou réglementaires.
                </p>
                <p className="text-muted-foreground">
                  La dernière mise à jour de cette politique a été effectuée le 3 avril 2025.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8">
            <div className="bg-primary/5 rounded-lg p-4 inline-flex items-center gap-2">
              <Eye className="h-5 w-5 text-primary" />
              <span className="text-sm">Pour toute question concernant cette politique, contactez <a href="mailto:geoffroy.streit@gmail.com" className="text-primary hover:underline font-medium">geoffroy.streit@gmail.com</a></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Confidentialite;
