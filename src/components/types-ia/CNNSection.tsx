
import React from 'react';
import { Eye } from 'lucide-react';
import IASection from './IASection';

const CNNSection = () => {
  const detailsCard = (
    <>
      <h4 className="text-lg font-semibold mb-4">Structure d'un CNN</h4>
      <div className="space-y-4">
        <div className="p-3 rounded-lg bg-secondary/40">
          <h5 className="font-medium">Couches de convolution</h5>
          <p className="text-sm text-muted-foreground">
            Appliquent des filtres pour détecter des motifs locaux (contours, textures, formes)
          </p>
        </div>
        <div className="p-3 rounded-lg bg-secondary/40">
          <h5 className="font-medium">Couches de pooling</h5>
          <p className="text-sm text-muted-foreground">
            Réduisent la dimension spatiale pour extraire les caractéristiques les plus importantes
          </p>
        </div>
        <div className="p-3 rounded-lg bg-secondary/40">
          <h5 className="font-medium">Couches entièrement connectées</h5>
          <p className="text-sm text-muted-foreground">
            Intègrent toutes les caractéristiques pour la classification finale
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        Cette architecture hiérarchique permet aux CNN d'apprendre progressivement des 
        représentations de plus en plus abstraites d'une image, des contours simples 
        jusqu'aux objets complexes.
      </p>
    </>
  );

  return (
    <IASection
      icon={<Eye size={32} className="text-primary" />}
      title="Réseaux de Neurones Convolutifs (CNN)"
      description="Les CNN sont des architectures de deep learning spécialement conçues pour traiter des données 
      structurées en grille, comme les images, en utilisant des opérations de convolution."
      benefits={[
        "Excellents pour la reconnaissance d'images, la classification et la segmentation",
        "Utilisés dans la vision par ordinateur, l'imagerie médicale et la surveillance",
        "Architectures connues : ResNet, VGG, EfficientNet"
      ]}
      detailsCard={detailsCard}
      delay={2}
    />
  );
};

export default CNNSection;
