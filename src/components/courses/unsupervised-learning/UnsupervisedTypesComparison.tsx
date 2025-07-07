
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, TrendingDown, ShoppingCart, Brain, Target, Zap } from 'lucide-react';

interface UnsupervisedType {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  objective: string;
  examples: string[];
  algorithms: string[];
  applications: string[];
  pros: string[];
  cons: string[];
  color: string;
}

const UnsupervisedTypesComparison: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('clustering');

  const types: UnsupervisedType[] = [
    {
      id: 'clustering',
      name: 'Clustering',
      icon: <Users className="h-6 w-6" />,
      description: 'Regrouper des données similaires en clusters homogènes',
      objective: 'Découvrir des groupes naturels dans les données',
      examples: [
        'Segmentation client',
        'Classification d\'images',
        'Regroupement de documents',
        'Analyse de réseaux sociaux'
      ],
      algorithms: ['K-means', 'DBSCAN', 'Clustering hiérarchique', 'Mean Shift'],
      applications: [
        'Marketing : segmentation client',
        'Biologie : classification d\'espèces',
        'Astronomie : classification d\'étoiles',
        'Médecine : groupes de symptômes'
      ],
      pros: [
        'Intuitive à comprendre',
        'Résultats visuellement interprétables',
        'Utile pour l\'exploration de données',
        'Pas besoin de données étiquetées'
      ],
      cons: [
        'Choix du nombre de clusters délicat',
        'Sensible aux valeurs aberrantes',
        'Performance variable selon la forme des clusters',
        'Difficile d\'évaluer la qualité'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'dimensionality',
      name: 'Réduction de dimensionnalité',
      icon: <TrendingDown className="h-6 w-6" />,
      description: 'Simplifier des données complexes en réduisant le nombre de variables',
      objective: 'Préserver l\'information essentielle avec moins de dimensions',
      examples: [
        'Visualisation de données complexes',
        'Compression d\'images',
        'Analyse de données génomiques',
        'Préprocessing pour ML'
      ],
      algorithms: ['PCA', 't-SNE', 'UMAP', 'LDA', 'ICA'],
      applications: [
        'Visualisation : graphiques 2D/3D de données HD',
        'Compression : réduction taille fichiers',
        'Performance : accélération algorithmes',
        'Nettoyage : élimination du bruit'
      ],
      pros: [
        'Permet la visualisation de données complexes',
        'Réduit la complexité computationnelle',
        'Élimine le bruit et la redondance',
        'Révèle des structures cachées'
      ],
      cons: [
        'Perte d\'information possible',
        'Interprétation des nouvelles dimensions difficile',
        'Choix de la dimensionnalité cible subjectif',
        'Peut créer des artefacts visuels'
      ],
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'association',
      name: 'Règles d\'association',
      icon: <ShoppingCart className="h-6 w-6" />,
      description: 'Découvrir des relations fréquentes entre différents éléments',
      objective: 'Identifier des patterns de co-occurrence dans les données',
      examples: [
        'Analyse panier de marché',
        'Recommandations de produits',
        'Analyse de navigation web',
        'Diagnostic médical'
      ],
      algorithms: ['Apriori', 'FP-Growth', 'Eclat', 'CHARM'],
      applications: [
        'E-commerce : "Souvent acheté ensemble"',
        'Web : analyse parcours utilisateur',
        'Médecine : associations symptômes-maladies',
        'Finance : détection de fraudes'
      ],
      pros: [
        'Résultats faciles à interpréter',
        'Applicable à de nombreux domaines',
        'Révèle des insights business précieux',
        'Règles actionnables directement'
      ],
      cons: [
        'Peut générer trop de règles',
        'Sensible aux paramètres de seuil',
        'Ne capture pas les relations causales',
        'Performance limitée sur gros datasets'
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const selectedTypeData = types.find(type => type.id === selectedType) || types[0];

  return (
    <div className="space-y-6">
      {/* Sélecteur de type */}
      <div className="flex gap-3 flex-wrap justify-center">
        {types.map((type) => (
          <Button
            key={type.id}
            variant={selectedType === type.id ? 'default' : 'outline'}
            onClick={() => setSelectedType(type.id)}
            className="flex items-center gap-2 p-3 h-auto"
          >
            {type.icon}
            <span className="hidden sm:inline">{type.name}</span>
          </Button>
        ))}
      </div>

      {/* Détails du type sélectionné */}
      <Card className="overflow-hidden">
        <div className={`h-2 bg-gradient-to-r ${selectedTypeData.color}`}></div>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Colonne gauche - Informations générales */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-full bg-gradient-to-r ${selectedTypeData.color} text-white`}>
                  {selectedTypeData.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{selectedTypeData.name}</h3>
                  <p className="text-muted-foreground">{selectedTypeData.description}</p>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-4 w-4 text-primary" />
                  <span className="font-medium">Objectif principal</span>
                </div>
                <p className="text-sm">{selectedTypeData.objective}</p>
              </div>

              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Brain className="h-4 w-4" />
                  Algorithmes populaires
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedTypeData.algorithms.map((algo, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-sm"
                    >
                      {algo}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Exemples d'utilisation</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {selectedTypeData.examples.map((example, index) => (
                    <li key={index}>{example}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Colonne droite - Applications et avantages/inconvénients */}
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Applications concrètes
                </h4>
                <div className="space-y-2">
                  {selectedTypeData.applications.map((app, index) => (
                    <div key={index} className="bg-muted/30 p-2 rounded text-sm">
                      {app}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">
                    ✅ Avantages
                  </h4>
                  <ul className="space-y-1 text-sm text-green-700 dark:text-green-300">
                    {selectedTypeData.pros.map((pro, index) => (
                      <li key={index}>• {pro}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg">
                  <h4 className="font-medium text-red-800 dark:text-red-200 mb-2">
                    ⚠️ Limitations
                  </h4>
                  <ul className="space-y-1 text-sm text-red-700 dark:text-red-300">
                    {selectedTypeData.cons.map((con, index) => (
                      <li key={index}>• {con}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UnsupervisedTypesComparison;
