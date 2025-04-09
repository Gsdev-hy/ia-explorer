
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  radius: number;
}

interface Connection {
  source: string;
  target: string;
  strength: number;
}

interface AINodeGraphProps {
  onNodeSelect: (nodeId: string) => void;
}

const AINodeGraph: React.FC<AINodeGraphProps> = ({ onNodeSelect }) => {
  const [selectedNode, setSelectedNode] = useState<string | null>('LLM');
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  
  // Initialize graph nodes and connections
  useEffect(() => {
    // Define nodes with optimized positioning for better visualization
    const graphNodes: Node[] = [
      { id: 'LLM', label: 'LLM', x: 30, y: 45, radius: 28 },
      { id: 'CNN', label: 'CNN', x: 60, y: 25, radius: 28 },
      { id: 'RL', label: 'RL', x: 75, y: 65, radius: 28 },
      { id: 'XAI', label: 'XAI', x: 20, y: 70, radius: 28 },
      { id: 'AGI', label: 'AGI', x: 50, y: 50, radius: 32 },
      { id: 'NLP', label: 'NLP', x: 15, y: 30, radius: 25 },
      { id: 'RAG', label: 'RAG', x: 40, y: 20, radius: 25 },
      { id: 'GAN', label: 'GAN', x: 80, y: 40, radius: 25 },
    ];
    
    // Define connections with more relationships
    const graphConnections: Connection[] = [
      { source: 'LLM', target: 'CNN', strength: 0.7 },
      { source: 'LLM', target: 'AGI', strength: 0.8 },
      { source: 'LLM', target: 'NLP', strength: 0.9 },
      { source: 'LLM', target: 'RAG', strength: 0.9 },
      { source: 'CNN', target: 'RL', strength: 0.6 },
      { source: 'CNN', target: 'GAN', strength: 0.8 },
      { source: 'RL', target: 'AGI', strength: 0.9 },
      { source: 'XAI', target: 'LLM', strength: 0.5 },
      { source: 'XAI', target: 'AGI', strength: 0.7 },
      { source: 'XAI', target: 'CNN', strength: 0.6 },
      { source: 'CNN', target: 'AGI', strength: 0.8 },
      { source: 'NLP', target: 'LLM', strength: 0.9 },
      { source: 'RAG', target: 'LLM', strength: 0.8 },
      { source: 'RAG', target: 'NLP', strength: 0.7 },
      { source: 'GAN', target: 'CNN', strength: 0.8 },
      { source: 'GAN', target: 'AGI', strength: 0.6 },
    ];
    
    setNodes(graphNodes);
    setConnections(graphConnections);
  }, []);
  
  const handleNodeClick = (nodeId: string) => {
    setSelectedNode(nodeId);
    onNodeSelect(nodeId);
  };
  
  // Calculate positions for SVG viewport
  const viewBox = "0 0 100 100";
  
  return (
    <div className="w-full h-full">
      <svg viewBox={viewBox} className="w-full h-full">
        {/* Render connections */}
        {connections.map((connection) => {
          const source = nodes.find(node => node.id === connection.source);
          const target = nodes.find(node => node.id === connection.target);
          
          if (!source || !target) return null;
          
          const isHighlighted = 
            selectedNode === source.id || 
            selectedNode === target.id;
          
          return (
            <motion.line
              key={`${source.id}-${target.id}`}
              x1={source.x}
              y1={source.y}
              x2={target.x}
              y2={target.y}
              stroke={isHighlighted ? "rgb(var(--primary))" : "#9ca3af"}
              strokeWidth={isHighlighted ? 1.5 : 1}
              strokeOpacity={isHighlighted ? 0.8 : 0.3}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          );
        })}
        
        {/* Render nodes */}
        {nodes.map((node) => (
          <g 
            key={node.id}
            onClick={() => handleNodeClick(node.id)}
            className="cursor-pointer"
            transform={`translate(${node.x}, ${node.y})`}
          >
            <motion.circle
              r={node.radius * (selectedNode === node.id ? 1.2 : 1)}
              fill={selectedNode === node.id ? "rgb(var(--primary))" : "rgb(var(--primary-foreground))"}
              stroke={selectedNode === node.id ? "rgb(var(--primary))" : "rgb(var(--primary))"}
              strokeWidth={selectedNode === node.id ? 2 : 1}
              fillOpacity={selectedNode === node.id ? 0.2 : 0.1}
              whileHover={{ 
                scale: 1.1,
                fillOpacity: 0.3,
                transition: { duration: 0.2 }
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "backOut", delay: 0.2 }}
            />
            <text
              textAnchor="middle"
              dy="0.3em"
              fontSize="4"
              fontWeight={selectedNode === node.id ? "bold" : "normal"}
              fill={selectedNode === node.id ? "rgb(var(--primary))" : "currentColor"}
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default AINodeGraph;
