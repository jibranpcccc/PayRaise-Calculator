import { lazy, Suspense } from "react";
import { ComponentSkeleton } from "./ui/loading-spinner";

// Only lazy load components that actually exist
export const LazyIndustryBenchmarks = lazy(() => 
  import(
    /* webpackChunkName: "benchmarks" */ 
    /* webpackPrefetch: true */ 
    "./widgets/industry-benchmarks-widget"
  )
);

export const LazySalaryTrends = lazy(() => 
  import(
    /* webpackChunkName: "salary-trends" */ 
    /* webpackPrefetch: true */ 
    "./widgets/salary-trend-prediction-widget"
  )
);

// Remove calculator results lazy loading since it may not have default export
// Only keep verified widget components that we know exist

// Intersection Observer based lazy loading
interface LazyWrapperProps {
  children: React.ReactNode;
  height?: string;
  rootMargin?: string;
}

export function LazyWrapper({ 
  children, 
  height = "200px", 
  rootMargin = "50px" 
}: LazyWrapperProps) {
  return (
    <Suspense 
      fallback={
        <div className="loading-skeleton reduce-layout-shift" style={{ minHeight: height }}>
          <ComponentSkeleton />
        </div>
      }
    >
      <div 
        className="reduce-layout-shift" 
        style={{ 
          minHeight: height,
          contentVisibility: 'auto',
          containIntrinsicSize: `0 ${height}`
        }}
      >
        {children}
      </div>
    </Suspense>
  );
}