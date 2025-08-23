
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, Save, Download, FileTemplate } from 'lucide-react';
import WorkflowNodeLibrary from './WorkflowNodeLibrary';
import WorkflowMonitor from './WorkflowMonitor';
import WorkflowPresets from './presets/WorkflowPresets';
import WorkflowCreator from './WorkflowCreator';
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
      // Simulation d'exécution plus réaliste
      await new Promise(resolve => setTimeout(resolve, 4000));
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
        name: 'Workflow IA Personnalisé',
        creator: 'Geoffroy Streit',
        created: new Date().toISOString(),
        version: '2.0.0',
        description: 'Workflow créé avec l\'Optimiseur de Workflow IA'
      }
    };
    
    const blob = new Blob([JSON.stringify(workflow, null, 2)], {
      type: 'application/json'
    });
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `workflow-ia-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [nodes, edges]);

  const handleLoadPreset = useCallback((preset: any) => {
    setNodes(preset.nodes);
    setEdges(preset.edges);
  }, [setNodes, setEdges]);

  return (
    <div className="h-[800px] flex gap-4">
      {/* Sidebar gauche */}
      <Card className="w-80 flex-shrink-0">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Outils & Presets</CardTitle>
          <WorkflowCreator />
        </CardHeader>
        <CardContent className="p-0">
          <Tabs defaultValue="library" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mx-4 mb-4">
              <TabsTrigger value="library" className="text-xs">Nœuds</TabsTrigger>
              <TabsTrigger value="presets" className="text-xs">Presets</TabsTrigger>
            </TabsList>
            
            <TabsContent value="library" className="mt-0">
              <WorkflowNodeLibrary />
            </TabsContent>
            
            <TabsContent value="presets" className="mt-0 max-h-[600px] overflow-y-auto">
              <div className="p-4">
                <WorkflowPresets onLoadPreset={handleLoadPreset} />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Éditeur principal */}
      <div className="flex-1 flex flex-col">
        {/* Barre d'outils améliorée */}
        <div className="flex gap-2 mb-4">
          <Button onClick={handleExecute} disabled={isExecuting}>
            <Play className="h-4 w-4 mr-2" />
            {isExecuting ? 'Exécution...' : 'Exécuter le workflow'}
          </Button>
          <Button variant="outline" onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" />
            Sauvegarder
          </Button>
          <Button variant="outline" onClick={handleExport}>
            <Download className="h-4 w-4 mr-2" />
            Exporter
          </Button>
          <div className="flex-1" />
          <div className="text-sm text-muted-foreground flex items-center">
            {nodes.length} nœuds • {edges.length} connexions
          </div>
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
            <CardTitle className="text-base">Monitoring & Logs</CardTitle>
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
