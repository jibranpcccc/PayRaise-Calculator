import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { InternalLink } from "@/components/seo/internal-link-checker";
import { Clock, Calendar, ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  href: string;
  category: string;
  readTime: string;
  publishDate: string;
  tags: string[];
  featured?: boolean;
  icon?: React.ReactNode;
  gradient?: string;
}

export function BlogCard({ 
  title, 
  excerpt, 
  href, 
  category, 
  readTime, 
  publishDate, 
  tags, 
  featured = false, 
  icon,
  gradient = "bg-gradient-to-br from-blue-600 to-purple-600"
}: BlogCardProps) {
  return (
    <Card className={`blog-card-hover h-full ${featured ? 'ring-2 ring-primary/20' : ''}`}>
      {/* Featured Image */}
      <div className={`relative h-48 ${gradient} rounded-t-lg overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="mb-3 flex justify-center">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                {icon}
              </div>
            </div>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              {category}
            </Badge>
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {publishDate}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {readTime}
          </div>
          {featured && (
            <Badge variant="default" className="text-xs">Featured</Badge>
          )}
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 blog-excerpt">
          {excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <InternalLink href={href}>
          <Button variant="outline" className="w-full group">
            Read Full Article
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </InternalLink>
      </CardContent>
    </Card>
  );
}

export function BlogCardSkeleton() {
  return (
    <Card className="h-full animate-pulse">
      <div className="h-48 bg-gray-200 rounded-t-lg"></div>
      <CardContent className="p-6">
        <div className="flex gap-4 mb-3">
          <div className="h-4 bg-gray-200 rounded w-20"></div>
          <div className="h-4 bg-gray-200 rounded w-16"></div>
        </div>
        <div className="h-6 bg-gray-200 rounded mb-3"></div>
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded mb-4 w-3/4"></div>
        <div className="flex gap-2 mb-4">
          <div className="h-6 bg-gray-200 rounded w-16"></div>
          <div className="h-6 bg-gray-200 rounded w-20"></div>
        </div>
        <div className="h-10 bg-gray-200 rounded"></div>
      </CardContent>
    </Card>
  );
}