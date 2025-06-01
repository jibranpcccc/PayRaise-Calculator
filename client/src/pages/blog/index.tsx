import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/seo/head";
import { SchemaGenerator } from "@/components/seo/schema-generator";
import { InternalLink } from "@/components/seo/internal-link-checker";
import { FeaturedImage } from "@/components/featured-image";
import { 
  FileText, 
  TrendingUp, 
  Clock, 
  Calendar,
  User,
  ArrowRight,
  Search,
  Filter,
  Tag,
  BookOpen,
  Target,
  PiggyBank,
  Users
} from "lucide-react";

export default function BlogIndex() {
  const blogPosts = [
    {
      title: "3% vs 5% Raise: The $10,000+ Difference Over 5 Years",
      excerpt: "Discover how seemingly small percentage differences in raises compound into significant long-term financial impact. Real calculations and investment opportunity analysis.",
      href: "/blog/3-vs-5-percent-raise-long-term-impact",
      category: "Financial Analysis",
      readTime: "8 min read",
      publishDate: "2025-01-15",
      featured: true,
      tags: ["Compound Growth", "Financial Planning", "Career Strategy"],
      icon: <TrendingUp className="h-6 w-6" />,
      gradient: "bg-gradient-to-br from-green-600 to-blue-600"
    },
    {
      title: "When to Ask for a Raise: Optimal Timing Strategies",
      excerpt: "Master the art of timing your raise request. Learn about performance review cycles, company financial calendars, and personal achievement milestones.",
      href: "/blog/when-ask-for-raise-optimal-timing",
      category: "Strategy",
      readTime: "5 min read",
      publishDate: "2025-01-12",
      tags: ["Timing", "Performance Reviews", "Negotiation"]
    },
    {
      title: "Hourly vs Salary Raise: Key Differences You Need to Know",
      excerpt: "Understanding how raises work differently for hourly and salaried employees. Overtime considerations, benefits, and calculation methods explained.",
      href: "/blog/hourly-vs-salary-raise-differences",
      category: "Education",
      readTime: "4 min read",
      publishDate: "2025-01-10",
      tags: ["Hourly Workers", "Salary", "Employment Types"]
    },
    {
      title: "Raise Negotiation Scripts and Templates That Work",
      excerpt: "Professional scripts and email templates for requesting raises. Proven language that gets results, with examples for different scenarios.",
      href: "/blog/raise-negotiation-scripts-templates",
      category: "Templates",
      readTime: "8 min read",
      publishDate: "2025-01-08",
      tags: ["Negotiation", "Scripts", "Templates", "Communication"]
    },
    {
      title: "Remote Work Raise Strategies for 2025",
      excerpt: "How remote work impacts salary negotiations and raise requests. New strategies for demonstrating value and building relationships virtually.",
      href: "/blog/remote-work-raise-strategies",
      category: "Modern Work",
      readTime: "7 min read",
      publishDate: "2025-01-05",
      tags: ["Remote Work", "Modern Career", "Virtual Teams"]
    },
    {
      title: "Average Raise by Industry: 2025 Complete Data",
      excerpt: "Comprehensive analysis of raise percentages across all major industries. Current market data, trends, and what to expect in your field.",
      href: "/blog/average-raise-by-industry-2025",
      category: "Data",
      readTime: "9 min read",
      publishDate: "2025-01-03",
      tags: ["Industry Data", "Market Research", "Benchmarks"]
    },
    {
      title: "Inflation vs Real Salary: Understanding Your True Income Growth",
      excerpt: "Learn how inflation affects your salary increases and what 'real' income growth means. Tools and strategies for inflation-adjusted planning.",
      href: "/blog/inflation-real-salary-impact",
      category: "Economics",
      readTime: "6 min read",
      publishDate: "2025-01-01",
      tags: ["Inflation", "Economics", "Real Income", "Financial Planning"]
    },
    {
      title: "Understanding Total Compensation Beyond Base Salary",
      excerpt: "Comprehensive guide to evaluating and negotiating total compensation packages. Benefits, equity, perks, and hidden value analysis.",
      href: "/blog/understanding-total-compensation",
      category: "Compensation",
      readTime: "10 min read",
      publishDate: "2024-12-28",
      tags: ["Total Compensation", "Benefits", "Equity", "Package Evaluation"]
    }
  ];

  const categories = ["All", "Analysis", "Strategy", "Education", "Templates", "Modern Work", "Data", "Economics", "Compensation"];
  const selectedCategory = "All"; // In a real app, this would be state

  const filteredPosts = selectedCategory === "All" ? blogPosts : blogPosts.filter(post => post.category === selectedCategory);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Pay Raise Calculator Blog",
    "description": "Expert insights on salary increases, negotiation strategies, and career advancement. Data-driven analysis and actionable advice.",
    "url": "https://payraisepercentagecalculator.com/blog",
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://payraisepercentagecalculator.com${post.href}`,
      "datePublished": post.publishDate,
      "author": {
        "@type": "Organization",
        "name": "PayRaise Calculator"
      }
    }))
  };

  return (
    <>
      <SEOHead
        title="Blog - Expert Insights on Pay Raises & Salary Negotiation"
        description="Expert insights on salary increases, negotiation strategies, and career advancement. Data-driven analysis and actionable advice for maximizing your income."
        canonical="/blog"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Pay Raise Insights & Strategies
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Expert insights on salary increases, negotiation strategies, and career advancement. 
                Data-driven analysis and actionable advice for maximizing your income.
              </p>
              <div className="mt-8 flex justify-center space-x-6">
                <div className="flex items-center text-sm text-gray-600">
                  <FileText className="h-4 w-4 text-primary mr-2" />
                  Weekly insights
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <TrendingUp className="h-4 w-4 text-success mr-2" />
                  Data-driven analysis
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <User className="h-4 w-4 text-secondary mr-2" />
                  Expert advice
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Article</h2>
              {blogPosts.filter(post => post.featured).map((post) => (
                <Card key={post.href} className="calculator-shadow border-2 border-primary">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-12 gap-6">
                      <div className="lg:col-span-10">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge className="bg-primary text-white">Featured</Badge>
                          <Badge variant="outline">{post.category}</Badge>
                          <Badge variant="outline">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readTime}
                          </Badge>
                          <Badge variant="outline">
                            <Calendar className="h-3 w-3 mr-1" />
                            {new Date(post.publishDate).toLocaleDateString()}
                          </Badge>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h3>
                        <p className="text-gray-600 mb-4 text-lg">{post.excerpt}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <span key={tag} className="inline-flex items-center bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                              <Tag className="h-3 w-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="lg:col-span-2 flex items-center justify-center lg:justify-end">
                        <Link href={post.href}>
                          <Button className="bg-primary hover:bg-blue-700">
                            Read Article
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">All Articles</h2>
              <div className="flex items-center space-x-4">
                <Filter className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600">Filter by category:</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  className="mb-2"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.filter(post => !post.featured).map((post) => (
                <Card key={post.href} className="hover:shadow-lg transition-shadow h-full flex flex-col">
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline">{post.category}</Badge>
                      <Badge variant="outline" className="text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                    
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            +{post.tags.length - 3}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(post.publishDate).toLocaleDateString()}
                        </div>
                        <Link href={post.href}>
                          <Button variant="outline" size="sm">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-gradient-to-r from-primary to-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Stay Updated on Salary Trends</h3>
                <p className="text-blue-100 mb-6">
                  Get weekly insights on salary trends, negotiation strategies, and career advancement tips
                </p>
                <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg text-gray-900"
                  />
                  <Button className="bg-white text-primary hover:bg-gray-100">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-blue-200 mt-4">
                  No spam. Unsubscribe anytime. Privacy policy protected.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Explore More Resources</h2>
              <p className="mt-2 text-lg text-gray-600">
                Beyond blog posts - comprehensive tools and guides
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Calculator Tools</h3>
                  <p className="text-gray-600 mb-4">
                    Professional calculators for planning and negotiating raises
                  </p>
                  <Link href="/tools">
                    <Button variant="outline" className="w-full">
                      Explore Tools
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <FileText className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete Guides</h3>
                  <p className="text-gray-600 mb-4">
                    In-depth guides on salary negotiation and career advancement
                  </p>
                  <Link href="/guides">
                    <Button variant="outline" className="w-full">
                      Read Guides
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Search className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Data</h3>
                  <p className="text-gray-600 mb-4">
                    Current market data and benchmarks for all industries
                  </p>
                  <Link href="/industry-raise-benchmarks-2025">
                    <Button variant="outline" className="w-full">
                      View Data
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
