
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const NeuralNetworkInteractive = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [nodes, setNodes] = useState<{ id: number; x: number; y: number; layer: number; active: boolean }[]>([]);
  const [connections, setConnections] = useState<{ id: string; from: number; to: number; active: boolean }[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isInit, setIsInit] = useState(false);

  // Initialize the neural network
  useEffect(() => {
    if (containerRef.current && !isInit) {
      const rect = containerRef.current.getBoundingClientRect();
      setDimensions({ width: rect.width, height: rect.height });
      
      // Define network structure
      const layers = 4;
      const nodesPerLayer = [6, 8, 8, 4];
      const newNodes: typeof nodes = [];
      const newConnections: typeof connections = [];
      
      // Create nodes
      let nodeId = 0;
      for (let l = 0; l < layers; l++) {
        const layerNodes = nodesPerLayer[l];
        const xPos = rect.width * (l + 1) / (layers + 1);
        
        for (let n = 0; n < layerNodes; n++) {
          const yPos = rect.height * (n + 1) / (layerNodes + 1);
          newNodes.push({
            id: nodeId,
            x: xPos,
            y: yPos,
            layer: l,
            active: false
          });
          
          // Connect to previous layer
          if (l > 0) {
            const prevLayerStart = newNodes.findIndex(node => node.layer === l - 1);
            const prevLayerCount = nodesPerLayer[l - 1];
            
            for (let prev = prevLayerStart; prev < prevLayerStart + prevLayerCount; prev++) {
              newConnections.push({
                id: `${newNodes[prev].id}-${nodeId}`,
                from: newNodes[prev].id,
                to: nodeId,
                active: false
              });
            }
          }
          
          nodeId++;
        }
      }
      
      setNodes(newNodes);
      setConnections(newConnections);
      setIsInit(true);
    }
  }, [containerRef, isInit]);

  // Update active nodes based on mouse position
  useEffect(() => {
    if (!isInit || nodes.length === 0) return;
    
    // Find distances to mouse
    const activeNodes = nodes.map(node => {
      const dx = node.x - mousePos.x;
      const dy = node.y - mousePos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      return {
        ...node,
        active: distance < 100 // Activate nodes within 100px of mouse
      };
    });

    // Update connections based on active nodes
    const activeConnections = connections.map(conn => {
      const fromNode = activeNodes.find(n => n.id === conn.from);
      const toNode = activeNodes.find(n => n.id === conn.to);
      return {
        ...conn,
        active: (fromNode?.active || toNode?.active)
      };
    });
    
    setNodes(activeNodes);
    setConnections(activeConnections);
  }, [mousePos, isInit]);

  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // Handle touch movement for mobile
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    setMousePos({
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top
    });
  };

  // Animation variants
  const nodeVariants = {
    active: { scale: 1.2, opacity: 1 },
    inactive: { scale: 1, opacity: 0.5 }
  };

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full bg-black/90 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/20" />
      
      {/* Title overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-white text-xl md:text-3xl font-bold text-center px-4 py-2 bg-black/50 backdrop-blur-sm rounded-lg">
          Explorez le Réseau Neural
        </h2>
      </div>
      
      {/* Render connections */}
      <svg className="absolute inset-0 w-full h-full">
        {connections.map(conn => {
          const fromNode = nodes.find(n => n.id === conn.from);
          const toNode = nodes.find(n => n.id === conn.to);
          if (!fromNode || !toNode) return null;
          
          return (
            <motion.line
              key={conn.id}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke={conn.active ? "#9b87f5" : "#333"}
              strokeWidth={conn.active ? 1.5 : 0.5}
              initial={{ opacity: 0.3 }}
              animate={{ 
                opacity: conn.active ? 0.8 : 0.3,
                strokeWidth: conn.active ? 1.5 : 0.5
              }}
              transition={{ duration: 0.3 }}
            />
          );
        })}
      </svg>
      
      {/* Render nodes */}
      <div className="absolute inset-0">
        {nodes.map(node => (
          <motion.div
            key={node.id}
            className="absolute rounded-full bg-purple-500"
            style={{ left: node.x, top: node.y, marginLeft: -5, marginTop: -5 }}
            initial={{ width: 10, height: 10, opacity: 0.5 }}
            animate={node.active ? "active" : "inactive"}
            variants={nodeVariants}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
      
      {/* Instructions */}
      <div className="absolute bottom-3 left-0 right-0 text-center text-white/70 text-xs">
        Déplacez votre souris ou votre doigt pour activer les neurones
      </div>
    </div>
  );
};

export default NeuralNetworkInteractive;
