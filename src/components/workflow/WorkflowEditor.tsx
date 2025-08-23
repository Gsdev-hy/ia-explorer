
import React, { useCallback, useState } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Save, Download } from 'lucide-react';
import WorkflowNodeLibrary from './WorkflowNodeLibrary';
import WorkflowMonitor from './WorkflowMonitor';
import { workflowNodes, workflowEdges } from './workflowData';

interface WorkflowEditorProps {
  onExecute?: (nodes: Node[], edges: Edge[]) => void;
  onSave?: (workflow: { nodes: Node[]; edges: Edge[] }) => void;
}

const WorkflowEditor: React.FC<WorkflowEditorProps> = ({ onExecute, onSave }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(workflowNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(workflowEdges);
  const [isExecuting, setIsExecuting] = useState(false);
  const [showMonitor, setShowMonitor] = useState(false);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const handleExecute = useCallback(async () => {
    setIsExecuting(true);
    setShowMonitor(true);
    
    try {
      if (onExecute) {
        await onExecute(nodes, edges);
      }
      // Simulation d'exécution
      await new Promise(resolve => setTimeout(resolve, 3000));
    } catch (error) {
      console.error('Erreur lors de l\'exécution du workflow:', error);
    } finally {
      setIsExecuting(false);
    }
  }, [nodes, edges, onExecute]);

  const handleSave = useCallback(() => {
    if (onSave) {
      onSave({ nodes, edges });
    }
  }, [nodes, edges, onSave]);

  const handleExport = useCallback(() => {
    const workflow = {
      nodes,
      edges,
      metadata: {
        name: 'Mon Workflow IA',
        created: new Date().toISOString(),
        version: '1.0.0'
      }
    };
    
    const blob = new Blob([JSON.stringify(workflow, null, 2)], {
      type: 'application/json'
    });
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'workflow-ia.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [nodes, edges]);

  return (
    <div className="h-[800px] flex gap-4">
      {/* Bibliothèque de nœuds */}
      <Card className="w-80 flex-shrink-0">
        <CardHeader>
          <CardTitle>Bibliothèque de Nœuds</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <WorkflowNodeLibrary />
        </CardContent>
      </Card>

      {/* Éditeur principal */}
      <div className="flex-1 flex flex-col">
        {/* Barre d'outils */}
        <div className="flex gap-2 mb-4">
          <Button onClick={handleExecute} disabled={isExecuting}>
            <Play className="h-4 w-4 mr-2" />
            {isExecuting ? 'Exécution...' : 'Exécuter'}
          </Button>
          <Button variant="outline" onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" />
            Sauvegarder
          </Button>
          <Button variant="outline" onClick={handleExport}>
            <Download className="h-4 w-4 mr-2" />
            Exporter
          </Button>
        </div>

        {/* Canvas React Flow */}
        <div className="flex-1 border rounded-lg overflow-hidden">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            attributionPosition="top-right"
            style={{ backgroundColor: "#F7F9FB" }}
          >
            <MiniMap zoomable pannable />
            <Controls />
            <Background />
          </ReactFlow>
        </div>
      </div>

      {/* Panneau de monitoring */}
      {showMonitor && (
        <Card className="w-80 flex-shrink-0">
          <CardHeader>
            <CardTitle>Monitoring</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <WorkflowMonitor 
              isExecuting={isExecuting}
              nodes={nodes}
              edges={edges}
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default WorkflowEditor;
