import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Users, UserCircle } from "lucide-react";

interface Node {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  isCore: boolean;
  iconType?: 'user' | 'users' | 'userCircle';
}

interface Connection {
  id: string;
  from: number;
  to: number;
}

interface VisibleNode extends Node {
  spawnTime: number;
  lifetime: number;
}

  // Pool of all possible node positions - blue, purple, green, orange only
const nodePool: Node[] = [
  // Core nodes (always visible) - 7 nodes with various icon types
  { id: 0, x: 50, y: 50, size: 32, color: "hsl(220 90% 56%)", isCore: true, iconType: 'userCircle' },
  { id: 1, x: 20, y: 30, size: 26, color: "hsl(280 90% 60%)", isCore: true, iconType: 'users' },
  { id: 2, x: 80, y: 30, size: 26, color: "hsl(280 90% 60%)", isCore: true, iconType: 'users' },
  { id: 3, x: 50, y: 85, size: 26, color: "hsl(220 90% 56%)", isCore: true, iconType: 'userCircle' },
  { id: 4, x: 35, y: 15, size: 22, color: "hsl(120 90% 50%)", isCore: true, iconType: 'user' },
  { id: 5, x: 15, y: 60, size: 22, color: "hsl(30 90% 60%)", isCore: true, iconType: 'user' },
  { id: 6, x: 85, y: 60, size: 22, color: "hsl(280 90% 60%)", isCore: true, iconType: 'users' },
  
  // Dynamic nodes (appear/disappear) - 13 additional nodes
  { id: 7, x: 30, y: 50, size: 20, color: "hsl(120 90% 50%)", isCore: false, iconType: 'user' },
  { id: 8, x: 70, y: 50, size: 20, color: "hsl(30 90% 60%)", isCore: false, iconType: 'user' },
  { id: 9, x: 65, y: 15, size: 20, color: "hsl(280 90% 60%)", isCore: false, iconType: 'users' },
  { id: 10, x: 40, y: 40, size: 18, color: "hsl(120 90% 50%)", isCore: false, iconType: 'user' },
  { id: 11, x: 60, y: 40, size: 18, color: "hsl(30 90% 60%)", isCore: false, iconType: 'user' },
  { id: 12, x: 10, y: 45, size: 18, color: "hsl(120 90% 50%)", isCore: false, iconType: 'user' },
  { id: 13, x: 90, y: 45, size: 18, color: "hsl(30 90% 60%)", isCore: false, iconType: 'user' },
  { id: 14, x: 40, y: 70, size: 20, color: "hsl(280 90% 60%)", isCore: false, iconType: 'users' },
  { id: 15, x: 60, y: 70, size: 20, color: "hsl(280 90% 60%)", isCore: false, iconType: 'users' },
  { id: 16, x: 25, y: 75, size: 18, color: "hsl(120 90% 50%)", isCore: false, iconType: 'user' },
  { id: 17, x: 75, y: 75, size: 18, color: "hsl(30 90% 60%)", isCore: false, iconType: 'user' },
  { id: 18, x: 45, y: 25, size: 16, color: "hsl(120 90% 50%)", isCore: false, iconType: 'user' },
  { id: 19, x: 55, y: 25, size: 16, color: "hsl(30 90% 60%)", isCore: false, iconType: 'user' },
];

// Core connections that always exist - balanced density
const coreConnections: Connection[] = [
  { id: "c-0-1", from: 0, to: 1 },
  { id: "c-0-2", from: 0, to: 2 },
  { id: "c-0-3", from: 0, to: 3 },
  { id: "c-1-4", from: 1, to: 4 },
  { id: "c-2-6", from: 2, to: 6 },
  { id: "c-3-5", from: 3, to: 5 },
];

export const AnimatedNetwork = () => {
  const [animationPhase, setAnimationPhase] = useState(0);
  const [visibleNodes, setVisibleNodes] = useState<VisibleNode[]>(() => 
    nodePool.filter(n => n.isCore).map(n => ({ 
      ...n, 
      spawnTime: Date.now(), 
      lifetime: Infinity 
    }))
  );
  const [connections, setConnections] = useState<Connection[]>(coreConnections);

  // Get icon component based on type
  const getIconComponent = (iconType: 'user' | 'users' | 'userCircle' = 'user') => {
    switch (iconType) {
      case 'users':
        return Users;
      case 'userCircle':
        return UserCircle;
      default:
        return User;
    }
  };

  // Animation phase counter - faster for more dynamic feel
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 360);
    }, 30); // Reduced from 50ms to 30ms
    return () => clearInterval(interval);
  }, []);

  // Node spawning logic - spawn multiple nodes at once for density
  const spawnNewNode = useCallback(() => {
    const currentTime = Date.now();
    const currentNodeIds = visibleNodes.map(n => n.id);
    const availableNodes = nodePool.filter(
      n => !n.isCore && !currentNodeIds.includes(n.id)
    );
    
    if (availableNodes.length === 0 || visibleNodes.length >= 11) return;
    
    // Spawn 1-2 nodes at once for smooth transitions
    const numNodesToSpawn = Math.min(Math.floor(Math.random() * 2) + 1, availableNodes.length);
    const nodesToSpawn: VisibleNode[] = [];
    const newConnections: Connection[] = [];
    
    for (let i = 0; i < numNodesToSpawn; i++) {
      const randomIndex = Math.floor(Math.random() * availableNodes.length);
      const randomNode = availableNodes.splice(randomIndex, 1)[0];
      const lifetime = 5000 + Math.random() * 3000; // 5-8 seconds
      
      nodesToSpawn.push({
        ...randomNode,
        spawnTime: currentTime,
        lifetime
      });
      
      // Create 1-2 connections per node
      const numConnections = Math.floor(Math.random() * 2) + 1;
      
      for (let j = 0; j < numConnections; j++) {
        const targetNode = visibleNodes[Math.floor(Math.random() * visibleNodes.length)];
        if (targetNode) {
          const connectionId = `c-${randomNode.id}-${targetNode.id}-${currentTime}-${j}`;
          newConnections.push({
            id: connectionId,
            from: randomNode.id,
            to: targetNode.id
          });
        }
      }
    }
    
    if (nodesToSpawn.length > 0) {
      setVisibleNodes(prev => [...prev, ...nodesToSpawn]);
      setConnections(prev => [...prev, ...newConnections]);
    }
  }, [visibleNodes]);

  // Check for nodes to remove
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = Date.now();
      
      setVisibleNodes(prev => {
        const nodesToRemove = prev.filter(
          n => !n.isCore && currentTime - n.spawnTime > n.lifetime
        );
        
        if (nodesToRemove.length > 0) {
          const removeIds = nodesToRemove.map(n => n.id);
          
          // Remove associated connections
          setConnections(prevConn => 
            prevConn.filter(c => !removeIds.includes(c.from) && !removeIds.includes(c.to))
          );
          
          return prev.filter(n => !removeIds.includes(n.id));
        }
        
        return prev;
      });
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  // Spawn new nodes periodically - smooth timing
  useEffect(() => {
    const spawnInterval = setInterval(() => {
      if (visibleNodes.length < 11) {
        spawnNewNode();
      }
    }, 2500 + Math.random() * 1500); // 2.5-4 seconds
    
    return () => clearInterval(spawnInterval);
  }, [spawnNewNode, visibleNodes.length]);


  const getConnectionGradient = (index: number) => {
    const gradients = ['gradient1', 'gradient2', 'gradient3', 'gradient4'];
    return gradients[index % gradients.length];
  };

  const getNodeById = (id: number) => visibleNodes.find(n => n.id === id);

  return (
    <div className="relative w-full h-full min-h-[400px] overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Multiple alternating gradients */}
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(220 90% 56%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(280 90% 60%)" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(280 90% 60%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(120 90% 50%)" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(120 90% 50%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(30 90% 60%)" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(30 90% 60%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(220 90% 56%)" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Connections with alternating animations */}
        <AnimatePresence>
          {connections.map((conn, index) => {
            const fromNode = getNodeById(conn.from);
            const toNode = getNodeById(conn.to);
            
            if (!fromNode || !toNode) return null;
            
            const gradientId = getConnectionGradient(index);
            const isReverse = index % 2 === 1;
            
            return (
              <motion.line
                key={conn.id}
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke={`url(#${gradientId})`}
                strokeWidth="0.8"
                strokeDasharray="6 3"
                initial={{ 
                  pathLength: 0, 
                  opacity: 0,
                  strokeDashoffset: isReverse ? -20 : 20
                }}
                animate={{ 
                  pathLength: 1, 
                  opacity: [0.4, 0.7, 0.4],
                  strokeDashoffset: isReverse ? -60 : 60
                }}
                exit={{ pathLength: 0, opacity: 0 }}
                transition={{ 
                  duration: 2, 
                  delay: index * 0.1,
                  opacity: {
                    duration: 3 + (index % 2),
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  strokeDashoffset: {
                    duration: 6 + (index % 2) * 2,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
              />
            );
          })}
        </AnimatePresence>

        {/* Nodes with Human Icons */}
        <AnimatePresence>
          {visibleNodes.map((node, index) => {
            const IconComponent = getIconComponent(node.iconType);
            const iconSize = node.size / 2.8;
            
            return (
              <motion.g
                key={`node-${node.id}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  y: [0, -0.8, 0]
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  duration: 0.4,
                  delay: node.isCore ? index * 0.1 : 0,
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }
                }}
              >
                {/* Subtle outer glow ring */}
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r={node.size / 10}
                  fill="none"
                  stroke={node.color}
                  strokeWidth="0.2"
                  opacity="0.4"
                  animate={{
                    r: [node.size / 10, node.size / 8, node.size / 10],
                    opacity: [0.4, 0.2, 0.4]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Colored human icon - no background node */}
                <motion.foreignObject
                  x={node.x - iconSize / 2}
                  y={node.y - iconSize / 2}
                  width={iconSize}
                  height={iconSize}
                  animate={{
                    scale: [1, 1.04, 1]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <IconComponent 
                    className="w-full h-full"
                    style={{ color: node.color }}
                    strokeWidth={1.8}
                  />
                </motion.foreignObject>
              </motion.g>
            );
          })}
        </AnimatePresence>

        {/* Particles - Multiple layers with alternating colors */}
        {connections.map((conn, connIndex) => {
          const fromNode = getNodeById(conn.from);
          const toNode = getNodeById(conn.to);
          
          if (!fromNode || !toNode) return null;
          
          // Particle colors cycle through gradient colors
          const particleColors = [
            "hsl(220 90% 56%)", // Blue
            "hsl(280 90% 60%)", // Purple
            "hsl(120 90% 50%)", // Green
            "hsl(30 90% 60%)"   // Orange
          ];
          
          // Create 2 particles per connection with different speeds
          return [0, 1].map((particleLayer) => {
            const speedOffset = particleLayer * 180;
            const isReverse = connIndex % 2 === 1;
            const progress = (animationPhase * (1 + particleLayer * 0.3) + connIndex * 30 + speedOffset) % 360;
            const t = isReverse ? 1 - (progress / 360) : (progress / 360);
            const x = fromNode.x + (toNode.x - fromNode.x) * t;
            const y = fromNode.y + (toNode.y - fromNode.y) * t;
            
            // Smooth opacity that never drops to zero
            const opacity = 0.5 + Math.sin((progress * Math.PI) / 180) * 0.3;
            const colorIndex = (connIndex + particleLayer) % particleColors.length;
            
            return (
              <circle
                key={`particle-${conn.id}-${particleLayer}`}
                cx={x}
                cy={y}
                r={particleLayer === 0 ? "0.4" : "0.25"}
                fill={particleColors[colorIndex]}
                opacity={opacity}
                filter="url(#glow)"
              />
            );
          });
        })}
      </svg>
    </div>
  );
};
