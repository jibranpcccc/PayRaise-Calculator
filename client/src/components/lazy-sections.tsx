import { lazy, Suspense } from "react";
import { ComponentSkeleton } from "./ui/loading-spinner";

// Lazy load heavy sections with preload hints
export const LazyBlogSection = lazy(() => 
  import(
    /* webpackChunkName: "blog-section" */ 
    /* webpackPreload: true */ 
    "./widgets/featured-blog-section"
  )
);

export const LazyToolsGrid = lazy(() => 
  import(
    /* webpackChunkName: "tools-grid" */ 
    /* webpackPrefetch: true */ 
    "./widgets/calculator-tools-grid"
  )
);

export const LazyTestimonialsSection = lazy(() => 
  import(
    /* webpackChunkName: "testimonials" */ 
    /* webpackPrefetch: true */ 
    "./widgets/testimonials-section"
  )
);

export const LazyIndustryBenchmarks = lazy(() => 
  import(
    /* webpackChunkName: "benchmarks" */ 
    /* webpackPrefetch: true */ 
    "./widgets/industry-benchmarks-widget"
  )
);

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