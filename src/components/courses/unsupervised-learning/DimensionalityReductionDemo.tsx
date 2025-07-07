
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingDown, Eye, Layers } from 'lucide-react';

const DimensionalityReductionDemo: React.FC = () => {
  const [currentView, setCurrentView] = useState<'3d' | '2d' | 'comparison'>('3d');
  
  // Données simulées pour la démonstration
  const dataPoints3D = [
    { x: 10, y: 8, z: 12, label: 'Point A' },
    { x: 15, y: 12, z: 8, label: 'Point B' },
    { x: 8, y: 15, z: 10, label: 'Point C' },
    { x: 12, y: 10, z: 15, label: 'Point D' },
    { x: 20, y: 5, z: 7, label: 'Point E' }
  ];

  // Projection PCA simulée (réduction 3D -> 2D)
  const dataPoints2D = dataPoints3D.map(point => ({
    x: point.x * 0.7 + point.y * 0.3,
    y: point.z * 0.8 + point.x * 0.2,
    label: point.label
  }));

  const SVG3DView = () => (
    <div className="relative">
      <svg width="300" height="200" className="border rounded bg-gradient-to-br from-blue-50 to-purple-50">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1"/>
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3"/>
          </linearGradient>
        </defs>
        
        {/* Grille 3D simulée */}
        <g stroke="#E5E7EB" strokeWidth="1" opacity="0.5">
          <line x1="50" y1="50" x2="250" y2="50" />
          <line x1="50" y1="100" x2="250" y2="100" />
          <line x1="50" y1="150" x2="250" y2="150" />
          <line x1="50" y1="50" x2="100" y2="150" />
          <line x1="150" y1="50" x2="200" y2="150" />
          <line x1="250" y1="50" x2="300" y2="150" />
        </g>
        
        {/* Points 3D */}
        {dataPoints3D.map((point, index) => (
          <g key={index}>
            <circle
              cx={50 + point.x * 8}
              cy={50 + point.y * 4 + point.z * 2}
              r="6"
              fill="#3B82F6"
              opacity="0.8"
              className="animate-pulse"
            />
            <text
              x={50 + point.x * 8 + 10}
              y={50 + point.y * 4 + point.z * 2 + 4}
              fontSize="10"
              fill="#1F2937"
            >
              {point.label}
            </text>
          </g>
        ))}
        
        <text x="150" y="25" textAnchor="middle" className="text-sm font-medium fill-gray-600">
          Vue 3D (X, Y, Z)
        </text>
      </svg>
      <Badge className="absolute top-2 right-2 bg-blue-100 text-blue-800">
        3 dimensions
      </Badge>
    </div>
  );

  const SVG2DView = () => (
    <div className="relative">
      <svg width="300" height="200" className="border rounded bg-gradient-to-br from-green-50 to-teal-50">
        {/* Grille 2D */}
        <g stroke="#E5E7EB" strokeWidth="1" opacity="0.5">
          <line x1="50" y1="50" x2="250" y2="50" />
          <line x1="50" y1="100" x2="250" y2="100" />
          <line x1="50" y1="150" x2="250" y2="150" />
          <line x1="50" y1="50" x2="50" y2="150" />
          <line x1="150" y1="50" x2="150" y2="150" />
          <line x1="250" y1="50" x2="250" y2="150" />
        </g>
        
        {/* Points 2D projetés */}
        {dataPoints2D.map((point, index) => (
          <g key={index}>
            <circle
              cx={50 + point.x * 6}
              cy={50 + point.y * 6}
              r="6"
              fill="#10B981"
              opacity="0.8"
              className="animate-pulse"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
            <text
              x={50 + point.x * 6 + 10}
              y={50 + point.y * 6 + 4}
              fontSize="10"
              fill="#1F2937"
            >
              {point.label}
            </text>
          </g>
        ))}
        
        <text x="150" y="25" textAnchor="middle" className="text-sm font-medium fill-gray-600">
          Projection 2D (PCA)
        </text>
      </svg>
      <Badge className="absolute top-2 right-2 bg-green-100 text-green-800">
        2 dimensions
      </Badge>
    </div>
  );

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingDown className="h-5 w-5 text-primary" />
          Démonstration de réduction de dimensionnalité
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={currentView === '3d' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setCurrentView('3d')}
            >
              <Layers className="h-4 w-4 mr-2" />
              Vue 3D originale
            </Button>
            <Button
              variant={currentView === '2d' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setCurrentView('2d')}
            >
              <Eye className="h-4 w-4 mr-2" />
              Projection 2D
            </Button>
            <Button
              variant={currentView === 'comparison' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setCurrentView('comparison')}
            >
              Comparaison
            </Button>
          </div>

          <div className="flex justify-center">
            {currentView === '3d' && <SVG3DView />}
            {currentView === '2d' && <SVG2DView />}
            {currentView === 'comparison' && (
              <div className="flex gap-8 items-center">
                <SVG3DView />
                <div className="flex flex-col items-center">
                  <div className="text-2xl">→</div>
                  <div className="text-xs text-muted-foreground">PCA</div>
                </div>
                <SVG2DView />
              </div>
            )}
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Qu'est-ce qui se passe ?</h4>
            <div className="text-sm space-y-2">
              {currentView === '3d' && (
                <p>
                  Nos données originales ont 3 dimensions (X, Y, Z). Imaginez que chaque point représente 
                  un client avec 3 caractéristiques : âge, revenu, et fréquence d'achat.
                </p>
              )}
              {currentView === '2d' && (
                <p>
                  Après application de l'ACP (Analyse en Composantes Principales), nous obtenons une projection 2D 
                  qui préserve au maximum la variance des données originales. Les relations entre points sont maintenues !
                </p>
              )}
              {currentView === 'comparison' && (
                <div>
                  <p className="mb-2">
                    <strong>Avantages de la réduction :</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Visualisation possible sur un graphique 2D</li>
                    <li>Calculs plus rapides avec moins de dimensions</li>
                    <li>Élimination du "bruit" dans les données</li>
                    <li>Relations principales préservées</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">3D → 2D</div>
              <div className="text-sm text-blue-700 dark:text-blue-300">Réduction de 33%</div>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
              <div className="text-2xl font-bold text-green-600">95%</div>
              <div className="text-sm text-green-700 dark:text-green-300">Variance préservée</div>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">2x</div>
              <div className="text-sm text-purple-700 dark:text-purple-300">Plus rapide</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DimensionalityReductionDemo;
