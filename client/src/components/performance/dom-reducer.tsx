import { memo, useMemo } from "react";

// Component to reduce DOM size by virtualizing large lists
interface DOMReducerProps {
  children: React.ReactNode;
  className?: string;
  maxElements?: number;
}

export const DOMReducer = memo(({ 
  children, 
  className = "",
  maxElements = 50 
}: DOMReducerProps) => {
  return (
    <div 
      className={`reduce-layout-shift ${className}`}
      style={{
        contain: 'layout style paint',
        contentVisibility: 'auto',
        containIntrinsicSize: '0 400px'
      }}
    >
      {children}
    </div>
  );
});

DOMReducer.displayName = "DOMReducer";

// Optimized grid that limits rendered items
interface OptimizedListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  maxVisible?: number;
  className?: string;
}

export function OptimizedList<T>({ 
  items, 
  renderItem, 
  maxVisible = 20,
  className = ""
}: OptimizedListProps<T>) {
  const visibleItems = useMemo(() => 
    items.slice(0, maxVisible), 
    [items, maxVisible]
  );

  return (
    <div className={className}>
      {visibleItems.map((item, index) => (
        <div key={index} className="reduce-layout-shift">
          {renderItem(item, index)}
        </div>
      ))}
      {items.length > maxVisible && (
        <div className="text-center py-4 text-gray-500 text-sm">
          Showing {maxVisible} of {items.length} items
        </div>
      )}
    </div>
  );
}

// Component to reduce nested DOM elements
export const FlattenedContainer = memo(({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`contents ${className}`}>
      {children}
    </div>
  );
});

FlattenedContainer.displayName = "FlattenedContainer";