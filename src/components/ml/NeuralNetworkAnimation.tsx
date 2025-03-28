
import { useEffect, useState } from 'react';

/**
 * Composant qui affiche une animation illustrant le processus d'apprentissage d'un réseau de neurones
 * @returns {JSX.Element} Le composant NeuralNetworkAnimation
 */
const NeuralNetworkAnimation = () => {
  const [activeNeurons, setActiveNeurons] = useState<number[]>([]);
  const [activeConnections, setActiveConnections] = useState<string[]>([]);
  const [step, setStep] = useState(0);

  // Simulation d'un processus d'apprentissage
  useEffect(() => {
    const interval = setInterval(() => {
      // Cycle d'animation en 4 étapes
      const newStep = (step + 1) % 4;
      setStep(newStep);
      
      // Activation aléatoire de neurones dans différentes couches
      const neurons = [];
      for (let i = 0; i < 3; i++) {
        neurons.push(Math.floor(Math.random() * 4) + i * 4);
      }
      setActiveNeurons(neurons);

      // Activation de connexions entre les neurones actifs
      const connections = [];
      for (let i = 0; i < neurons.length - 1; i++) {
        connections.push(`${neurons[i]}-${neurons[i + 1]}`);
      }
      setActiveConnections(connections);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [step]);

  // Construction des cercles représentant les neurones
  const renderNeuron = (id: number, x: number, y: number) => {
    const isActive = activeNeurons.includes(id);
    return (
      <circle 
        key={`neuron-${id}`}
        cx={x} 
        cy={y} 
        r="10" 
        fill={isActive ? "rgb(147, 51, 234)" : "#9ca3af"}
        opacity={isActive ? "1" : "0.5"}
        className={isActive ? "animate-pulse" : ""}
      />
    );
  };

  // Construction des lignes représentant les connexions entre neurones
  const renderConnection = (id: string, x1: number, y1: number, x2: number, y2: number) => {
    const isActive = activeConnections.includes(id);
    return (
      <line 
        key={`connection-${id}`}
        x1={x1} 
        y1={y1} 
        x2={x2} 
        y2={y2} 
        stroke={isActive ? "rgb(147, 51, 234)" : "#9ca3af"}
        strokeWidth={isActive ? "2" : "1"}
        opacity={isActive ? "0.8" : "0.3"}
      />
    );
  };

  // Layout du réseau de neurones
  const layers = 3;
  const neuronsPerLayer = 4;
  const width = 280;
  const height = 180;
  const layerGap = width / (layers + 1);
  const neuronGap = height / (neuronsPerLayer + 1);

  const neurons = [];
  const connections = [];

  // Création des neurones
  for (let l = 0; l < layers; l++) {
    const layerX = (l + 1) * layerGap;
    
    for (let n = 0; n < neuronsPerLayer; n++) {
      const neuronY = (n + 1) * neuronGap;
      const neuronId = l * neuronsPerLayer + n;
      
      neurons.push(renderNeuron(neuronId, layerX, neuronY));
      
      // Création des connexions avec la couche précédente
      if (l > 0) {
        for (let pn = 0; pn < neuronsPerLayer; pn++) {
          const prevNeuronId = (l - 1) * neuronsPerLayer + pn;
          const prevLayerX = l * layerGap;
          const prevNeuronY = (pn + 1) * neuronGap;
          
          connections.push(
            renderConnection(
              `${prevNeuronId}-${neuronId}`, 
              prevLayerX, 
              prevNeuronY, 
              layerX, 
              neuronY
            )
          );
        }
      }
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {connections}
        {neurons}
      </svg>
      <div className="flex justify-center mt-2 text-xs text-muted-foreground">
        <div className="flex items-center mr-4">
          <span className="inline-block w-3 h-3 mr-1 bg-primary rounded-full opacity-50"></span>
          <span>Neurone inactif</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 mr-1 bg-primary rounded-full animate-pulse"></span>
          <span>Neurone actif</span>
        </div>
      </div>
    </div>
  );
};

export default NeuralNetworkAnimation;
