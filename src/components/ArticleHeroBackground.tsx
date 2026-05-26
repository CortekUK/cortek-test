import { useMemo } from 'react';

interface ArticleHeroBackgroundProps {
  title: string;
  category?: string;
}

const ArticleHeroBackground = ({ title, category }: ArticleHeroBackgroundProps) => {
  // Determine category from title if not explicitly provided
  const detectedCategory = useMemo(() => {
    if (category) return category.toLowerCase();
    
    const titleLower = title.toLowerCase();
    if (titleLower.includes('automation') || titleLower.includes('automate')) return 'automation';
    if (titleLower.includes('crm') || titleLower.includes('customer')) return 'crm';
    if (titleLower.includes('workflow') || titleLower.includes('process')) return 'workflow';
    if (titleLower.includes('case') || titleLower.includes('story')) return 'case-study';
    if (titleLower.includes('integration') || titleLower.includes('api') || titleLower.includes('tech')) return 'integration';
    
    return 'default';
  }, [title, category]);

  // Category-specific background configurations
  const backgroundStyles = useMemo(() => {
    switch (detectedCategory) {
      case 'automation':
        return {
          gradient: 'from-purple-900/40 via-blue-900/30 to-indigo-900/40',
          motif: (
            <>
              {/* Radial gradient with motion blur effect */}
              <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-radial from-electric-blue/15 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
              
              {/* Faint gear/node network */}
              <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="node-network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <circle cx="50" cy="50" r="2" fill="currentColor" className="text-primary" />
                    <line x1="50" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-primary/50" />
                    <line x1="50" y1="50" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-primary/50" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#node-network)" />
              </svg>
            </>
          ),
        };
      
      case 'crm':
        return {
          gradient: 'from-violet-900/35 via-purple-900/25 to-lavender-900/30',
          motif: (
            <>
              {/* Linear gradient with faint grid lines */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-electric-blue/10" />
              
              {/* Subtle data grid pattern */}
              <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
              
              {/* Radial accents */}
              <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            </>
          ),
        };
      
      case 'workflow':
        return {
          gradient: 'from-sky-900/30 via-blue-800/20 to-slate-900/35',
          motif: (
            <>
              {/* Diagonal gradient with clean fade */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-blue-500/5 to-slate-500/10" />
              
              {/* Faint arrow/flow icons */}
              <svg className="absolute inset-0 w-full h-full opacity-[0.12]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" className="text-sky-400" />
                  </marker>
                </defs>
                <line x1="10%" y1="30%" x2="40%" y2="30%" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" className="text-sky-400/40" />
                <line x1="60%" y1="50%" x2="90%" y2="50%" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" className="text-sky-400/40" />
                <line x1="20%" y1="70%" x2="50%" y2="70%" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" className="text-sky-400/40" />
              </svg>
            </>
          ),
        };
      
      case 'case-study':
        return {
          gradient: 'from-indigo-900/30 via-slate-900/20 to-neutral-900/30',
          motif: (
            <>
              {/* Minimal solid with overlay shimmer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/8 to-transparent" />
              
              {/* Blurred concentric rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
                <div className="absolute inset-0 rounded-full border border-primary/10 blur-sm" />
                <div className="absolute inset-8 rounded-full border border-primary/8 blur-sm" />
                <div className="absolute inset-16 rounded-full border border-primary/6 blur-sm" />
              </div>
              
              {/* Shimmer effect */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/5 to-transparent blur-2xl" />
            </>
          ),
        };
      
      case 'integration':
        return {
          gradient: 'from-blue-900/35 via-teal-900/25 to-cyan-900/30',
          motif: (
            <>
              {/* Gradient with dots or connection lines */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-teal-500/8 to-cyan-500/10" />
              
              {/* Connector/API link shapes */}
              <svg className="absolute inset-0 w-full h-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="dots" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                    <circle cx="25" cy="25" r="1.5" fill="currentColor" className="text-teal-400" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dots)" />
                
                {/* Connection lines */}
                <line x1="20%" y1="25%" x2="40%" y2="35%" stroke="currentColor" strokeWidth="1.5" className="text-teal-400/30" strokeDasharray="4 4" />
                <line x1="60%" y1="40%" x2="80%" y2="60%" stroke="currentColor" strokeWidth="1.5" className="text-cyan-400/30" strokeDasharray="4 4" />
                <line x1="30%" y1="65%" x2="50%" y2="75%" stroke="currentColor" strokeWidth="1.5" className="text-blue-400/30" strokeDasharray="4 4" />
              </svg>
            </>
          ),
        };
      
      default:
        return {
          gradient: 'from-purple-900/35 via-blue-900/25 to-indigo-900/35',
          motif: (
            <>
              {/* Default Cortek gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-electric-blue/10" />
              <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-electric-blue/10 rounded-full blur-3xl" />
            </>
          ),
        };
    }
  }, [detectedCategory]);

  return (
    <div className="absolute inset-0">
      {/* Base gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${backgroundStyles.gradient}`} />
      
      {/* Category-specific motifs */}
      {backgroundStyles.motif}
      
      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-[#0a0e27]/70" />
    </div>
  );
};

export default ArticleHeroBackground;
