export function LoadingSpinner() {
  return (
    <div className="loading">
      <div className="spinner"></div>
    </div>
  );
}

export function ComponentSkeleton() {
  return (
    <div className="animate-pulse space-y-4 p-6">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      <div className="h-32 bg-gray-200 rounded"></div>
    </div>
  );
}