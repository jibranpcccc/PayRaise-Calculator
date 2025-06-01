interface FeaturedImageProps {
  title: string;
  category: string;
  gradient: string;
  icon: React.ReactNode;
  className?: string;
}

export function FeaturedImage({ title, category, gradient, icon, className = "" }: FeaturedImageProps) {
  return (
    <div className={`relative w-full h-64 rounded-lg overflow-hidden ${gradient} ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 400 300" className="w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="mb-4 flex justify-center">
            <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
              {icon}
            </div>
          </div>
          <div className="mb-2">
            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
              {category}
            </span>
          </div>
          <h1 className="text-xl md:text-2xl font-bold max-w-sm mx-auto leading-tight px-4">
            {title}
          </h1>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full"></div>
      <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full"></div>
      <div className="absolute top-1/2 left-8 w-6 h-6 bg-white/10 rounded-full"></div>
    </div>
  );
}