import { useEffect, useState } from "react";

interface PerformanceMetrics {
  domSize: number;
  loadTime: number;
  renderTime: number;
  bundleSize: number;
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    const measurePerformance = () => {
      // Measure DOM size
      const domSize = document.querySelectorAll('*').length;
      
      // Measure load and render times
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.fetchStart;
      const renderTime = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;

      setMetrics({
        domSize,
        loadTime,
        renderTime,
        bundleSize: 0 // This would need to be tracked during build
      });
    };

    // Measure after initial render
    const timer = setTimeout(measurePerformance, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development' || !metrics) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white text-xs p-2 rounded z-50">
      <div>DOM: {metrics.domSize} elements</div>
      <div>Load: {metrics.loadTime.toFixed(0)}ms</div>
      <div>Render: {metrics.renderTime.toFixed(0)}ms</div>
    </div>
  );
}