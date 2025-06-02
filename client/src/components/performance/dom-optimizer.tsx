import { memo, useMemo } from "react";

// Virtual list component to reduce DOM nodes
interface VirtualListProps<T> {
  items: T[];
  itemHeight: number;
  maxVisible?: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
}

export function VirtualList<T>({ 
  items, 
  itemHeight, 
  maxVisible = 10,
  renderItem,
  className = ""
}: VirtualListProps<T>) {
  const visibleItems = useMemo(() => 
    items.slice(0, maxVisible), 
    [items, maxVisible]
  );

  return (
    <div className={className} style={{ height: Math.min(items.length, maxVisible) * itemHeight }}>
      {visibleItems.map((item, index) => (
        <div key={index} style={{ height: itemHeight }}>
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  );
}

// Optimized grid that reduces DOM complexity
interface OptimizedGridProps {
  children: React.ReactNode;
  columns?: number;
  gap?: string;
  className?: string;
}

export const OptimizedGrid = memo(({ 
  children, 
  columns = 3, 
  gap = "1.5rem",
  className = ""
}: OptimizedGridProps) => {
  return (
    <div 
      className={`performance-grid ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(${300/columns}px, 1fr))`,
        gap,
        contain: 'layout style paint'
      }}
    >
      {children}
    </div>
  );
});

OptimizedGrid.displayName = "OptimizedGrid";

// Fragment wrapper that prevents unnecessary DOM nesting
export const DOMOptimizer = memo(({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
});

DOMOptimizer.displayName = "DOMOptimizer";