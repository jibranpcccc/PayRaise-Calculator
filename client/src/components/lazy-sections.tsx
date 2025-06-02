import { lazy, Suspense } from "react";
import { ComponentSkeleton } from "./ui/loading-spinner";

// Lazy load heavy sections to reduce initial bundle
export const LazyBlogSection = lazy(() => import("./widgets/featured-blog-section"));
export const LazyToolsGrid = lazy(() => import("./widgets/calculator-tools-grid"));
export const LazyTestimonialsSection = lazy(() => import("./widgets/testimonials-section"));
export const LazyIndustryBenchmarks = lazy(() => import("./widgets/industry-benchmarks-widget"));

interface LazyWrapperProps {
  children: React.ReactNode;
  height?: string;
}

export function LazyWrapper({ children, height = "200px" }: LazyWrapperProps) {
  return (
    <Suspense fallback={<ComponentSkeleton />}>
      <div style={{ minHeight: height }}>
        {children}
      </div>
    </Suspense>
  );
}