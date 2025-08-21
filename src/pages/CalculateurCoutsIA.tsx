
import React from 'react';
import Hero from '@/components/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, DollarSign } from 'lucide-react';

const CalculateurCoutsIA = () => {
  return (
    <>
      <Hero
        title="Calculateur de Coûts IA"
        subtitle="Estimez et comparez les coûts des différents services d'IA pour optimiser votre budget et prendre des décisions éclairées"
      />
      
      <section className="section-container">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-primary/10 px-4 py-2 rounded-lg mb-4">
            <Calculator className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Outil en cours de développement</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Estimation des coûts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Calculez les coûts pour OpenAI, Anthropic, Google, et autres fournisseurs d'IA selon votre usage.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Comparaison détaillée</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Comparez les tarifs entre différents modèles et fournisseurs pour trouver la solution la plus économique.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Optimisation budget</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Recevez des recommandations pour optimiser vos coûts et maximiser votre retour sur investissement.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default CalculateurCoutsIA;
