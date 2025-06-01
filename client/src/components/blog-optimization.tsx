import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { InternalLink } from "@/components/seo/internal-link-checker";
import { Clock, Eye, Share2, BookmarkPlus, ArrowRight } from "lucide-react";

interface BlogPostMetaProps {
  readTime: string;
  publishDate: string;
  lastUpdated: string;
  category: string;
  tags: string[];
}

export function BlogPostMeta({ readTime, publishDate, lastUpdated, category, tags }: BlogPostMetaProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
      <div className="flex items-center">
        <Clock className="h-4 w-4 mr-1" />
        {readTime} read
      </div>
      <div className="flex items-center">
        <Eye className="h-4 w-4 mr-1" />
        Published {publishDate}
      </div>
      {lastUpdated !== publishDate && (
        <div className="text-xs">
          Updated {lastUpdated}
        </div>
      )}
      <Badge variant="secondary">{category}</Badge>
    </div>
  );
}

interface RelatedPostsProps {
  posts: Array<{
    title: string;
    href: string;
    category: string;
    readTime: string;
    description: string;
  }>;
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <Card className="mt-12">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Related Articles</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <Badge variant="outline" className="mb-2">{post.category}</Badge>
              <h4 className="font-semibold text-gray-900 mb-2">{post.title}</h4>
              <p className="text-sm text-gray-600 mb-3">{post.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{post.readTime} read</span>
                <InternalLink href={post.href}>
                  <Button variant="outline" size="sm">
                    Read More <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </InternalLink>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

interface TableOfContentsProps {
  sections: Array<{
    id: string;
    title: string;
    level: number;
  }>;
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  return (
    <Card className="sticky top-4">
      <CardContent className="p-4">
        <h4 className="font-semibold text-gray-900 mb-4">Table of Contents</h4>
        <nav className="space-y-2">
          {sections.map((section, index) => (
            <a
              key={index}
              href={`#${section.id}`}
              className={`block text-sm hover:text-primary transition-colors ${
                section.level === 1 ? 'font-medium' : 'pl-4 text-gray-600'
              }`}
            >
              {section.title}
            </a>
          ))}
        </nav>
      </CardContent>
    </Card>
  );
}

interface CalculatorCalloutProps {
  title: string;
  description: string;
  href: string;
  buttonText: string;
  icon: React.ReactNode;
}

export function CalculatorCallout({ title, description, href, buttonText, icon }: CalculatorCalloutProps) {
  return (
    <Card className="my-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            {icon}
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
            <p className="text-gray-600 mb-4">{description}</p>
            <InternalLink href={href}>
              <Button className="bg-blue-600 hover:bg-blue-700">
                {buttonText} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </InternalLink>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

interface ShareButtonsProps {
  title: string;
  url: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  return (
    <div className="flex items-center space-x-4 py-4">
      <span className="text-sm font-medium text-gray-700">Share this article:</span>
      <Button variant="outline" size="sm" className="text-xs">
        <Share2 className="h-3 w-3 mr-1" />
        Share
      </Button>
      <Button variant="outline" size="sm" className="text-xs">
        <BookmarkPlus className="h-3 w-3 mr-1" />
        Save
      </Button>
    </div>
  );
}