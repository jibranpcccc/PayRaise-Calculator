import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";
import { SchemaGenerator } from "./schema-generator";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbNavigationProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function BreadcrumbNavigation({ items, className = "" }: BreadcrumbNavigationProps) {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    ...items
  ];

  const structuredData = SchemaGenerator.breadcrumbList(breadcrumbItems);

  return (
    <>
      {/* Schema markup for breadcrumbs */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Visual breadcrumb navigation */}
      <nav className={`flex items-center space-x-1 text-sm text-gray-600 ${className}`} aria-label="Breadcrumb">
        <ol className="flex items-center space-x-1">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index === 0 && (
                <Home className="h-4 w-4 mr-1" />
              )}
              
              {index < breadcrumbItems.length - 1 ? (
                <>
                  <Link href={item.url}>
                    <span className="hover:text-blue-600 transition-colors cursor-pointer">
                      {item.name}
                    </span>
                  </Link>
                  <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
                </>
              ) : (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

// Common breadcrumb patterns for different page types
export const BreadcrumbPatterns = {
  // Tools pages
  tool: (toolName: string) => [
    { name: "Tools", url: "/tools" },
    { name: toolName, url: "" }
  ],
  
  // Blog pages
  blog: (articleTitle: string) => [
    { name: "Blog", url: "/blog" },
    { name: articleTitle, url: "" }
  ],
  
  // Guide pages
  guide: (guideTitle: string) => [
    { name: "Guides", url: "/guides" },
    { name: guideTitle, url: "" }
  ],
  
  // Calculator pages
  calculator: (calculatorName: string) => [
    { name: "Calculators", url: "/" },
    { name: calculatorName, url: "" }
  ],
  
  // About pages
  about: (pageName: string) => [
    { name: "About", url: "/about-us" },
    { name: pageName, url: "" }
  ]
};