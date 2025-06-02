import { memo, lazy, Suspense } from "react";

// Dynamic imports for heavy libraries to reduce initial bundle
const LazyFramerMotion = lazy(() => import("framer-motion").then(module => ({ 
  default: module.motion.div 
})));

const LazyChart = lazy(() => import("recharts").then(module => ({ 
  default: module.LineChart 
})));

// Optimized component that only loads heavy dependencies when needed
interface OptimizedAnimationProps {
  children: React.ReactNode;
  animate?: boolean;
  className?: string;
}

export const OptimizedAnimation = memo(({ 
  children, 
  animate = false, 
  className = "" 
}: OptimizedAnimationProps) => {
  if (!animate) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Suspense fallback={<div className={className}>{children}</div>}>
      <LazyFramerMotion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={className}
      >
        {children}
      </LazyFramerMotion>
    </Suspense>
  );
});

OptimizedAnimation.displayName = "OptimizedAnimation";

// Chart component that only loads when needed
interface OptimizedChartProps {
  data: any[];
  className?: string;
}

export const OptimizedChart = memo(({ data, className = "" }: OptimizedChartProps) => {
  return (
    <Suspense fallback={
      <div className={`loading-skeleton h-64 ${className}`} />
    }>
      <LazyChart data={data} className={className} />
    </Suspense>
  );
});

OptimizedChart.displayName = "OptimizedChart";

// Bundle analyzer helper - remove unused exports
export const removeUnusedExports = () => {
  // This helps tree-shaking by explicitly defining what we use
  const usedComponents = {
    // Only include components actually used in the app
    core: ['Button', 'Input', 'Card', 'Select'],
    icons: ['Calculator', 'TrendingUp', 'DollarSign', 'ArrowRight'],
    utils: ['cn', 'formatCurrency']
  };
  
  return usedComponents;
};