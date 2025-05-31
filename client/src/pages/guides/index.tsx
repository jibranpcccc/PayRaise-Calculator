import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/seo/head";
import { 
  BookOpen, 
  Target, 
  TrendingUp, 
  Users, 
  Clock, 
  FileText,
  Award,
  Building2,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function GuidesIndex() {
  const guides = [
    {
      title: "Understanding Pay Raises: The Complete Employee Guide 2025",
      description: "Comprehensive guide covering all types of pay raises, calculations, and economic context",
      href: "/guides/understanding-pay-raises-complete",
      icon: <BookOpen className="h-8 w-8" />,
      readTime: "15 min read",
      difficulty: "Beginner",
      topics: ["Pay Raise Types", "Calculations", "Economic Context", "Industry Trends"],
      featured: true
    },
    {
      title: "Negotiating Salary Increase Strategies",
      description: "Step-by-step strategies for successful salary negotiations and raise requests",
      href: "/guides/negotiating-salary-increase-strategies",
      icon: <Target className="h-8 w-8" />,
      readTime: "12 min read",
      difficulty: "Intermediate",
      topics: ["Negotiation Tactics", "Preparation", "Scripts", "Timing"]
    },
    {
      title: "Performance Review Raise Preparation",
      description: "Essential preparation for annual review discussions and raise requests",
      href: "/guides/performance-review-raise-preparation",
      icon: <Award className="h-8 w-8" />,
      readTime: "10 min read",
      difficulty: "Beginner",
      topics: ["Achievement Documentation", "Goal Setting", "Self-Assessment", "Timing"]
    },
    {
      title: "Factors Influencing Pay Raises",
      description: "Understanding what drives salary increases in modern workplaces",
      href: "/guides/factors-influencing-pay-raises",
      icon: <TrendingUp className="h-8 w-8" />,
      readTime: "8 min read",
      difficulty: "Beginner",
      topics: ["Performance", "Market Conditions", "Company Health", "Skills"]
    },
    {
      title: "Market Value Salary Research",
      description: "How to research and determine your market value for negotiation",
      href: "/guides/market-value-salary-research",
      icon: <Building2 className="h-8 w-8" />,
      readTime: "12 min read",
      difficulty: "Intermediate",
      topics: ["Market Research", "Salary Surveys", "Benchmarking", "Data Sources"]
    },
    {
      title: "Cost of Living Adjustment Guide",
      description: "Understanding COLA raises and geographic salary variations",
      href: "/guides/cost-living-adjustment-guide",
      icon: <Users className="h-8 w-8" />,
      readTime: "9 min read",
      difficulty: "Beginner",
      topics: ["COLA Calculations", "Geographic Factors", "Inflation Impact", "Remote Work"]
    },
    {
      title: "Merit Increase vs Promotion",
      description: "Understanding the difference between merit raises and promotional increases",
      href: "/guides/merit-increase-vs-promotion",
      icon: <FileText className="h-8 w-8" />,
      readTime: "7 min read",
      difficulty: "Beginner",
      topics: ["Merit vs Promotion", "Increase Types", "Career Planning", "Expectations"]
    },
    {
      title: "Salary Increase Timing Guide",
      description: "When and how to ask for a raise for maximum success",
      href: "/guides/salary-increase-timing-guide",
      icon: <Clock className="h-8 w-8" />,
      readTime: "6 min read",
      difficulty: "Beginner",
      topics: ["Timing Strategy", "Company Cycles", "Performance Reviews", "Market Timing"]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Salary and Pay Raise Guides",
    "description": "Comprehensive guides on understanding, negotiating, and maximizing pay raises and salary increases.",
    "url": "https://payraisepercentagecalculator.com/guides",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": guides.length,
      "itemListElement": guides.map((guide, index) => ({
        "@type": "Article",
        "position": index + 1,
        "name": guide.title,
        "description": guide.description,
        "url": `https://payraisepercentagecalculator.com${guide.href}`
      }))
    }
  };

  return (
    <>
      <SEOHead
        title="Salary Guides - Complete Pay Raise & Negotiation Resources"
        description="Comprehensive guides on understanding, negotiating, and maximizing pay raises. Free expert advice on salary increases and career advancement."
        canonical="/guides"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Salary & Pay Raise Guides
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive guides on understanding, negotiating, and maximizing pay raises. 
                Expert advice to help you advance your career and increase your income.
              </p>
              <div className="mt-8 flex justify-center space-x-4">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Expert-written content
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Actionable strategies
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  2025 market data
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Guide */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Guide</h2>
              {guides.filter(guide => guide.featured).map((guide) => (
                <Card key={guide.href} className="calculator-shadow border-2 border-primary">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-12 gap-6">
                      <div className="lg:col-span-2 flex justify-center lg:justify-start">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white">
                          {guide.icon}
                        </div>
                      </div>
                      <div className="lg:col-span-8 text-center lg:text-left">
                        <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-3">
                          <Badge className={getDifficultyColor(guide.difficulty)}>
                            {guide.difficulty}
                          </Badge>
                          <Badge variant="outline">
                            <Clock className="h-3 w-3 mr-1" />
                            {guide.readTime}
                          </Badge>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700">
                            Featured
                          </Badge>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                        <p className="text-gray-600 mb-4">{guide.description}</p>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                          {guide.topics.slice(0, 4).map((topic) => (
                            <span key={topic} className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="lg:col-span-2 flex items-center justify-center lg:justify-end">
                        <Link href={guide.href}>
                          <Button className="bg-primary hover:bg-blue-700">
                            Read Guide
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

        {/* All Guides Grid */}
        <section className="pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">All Guides</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.filter(guide => !guide.featured).map((guide) => (
                <Card key={guide.href} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
                        {guide.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap gap-1 mb-2">
                          <Badge className={getDifficultyColor(guide.difficulty)} variant="outline">
                            {guide.difficulty}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            <Clock className="h-3 w-3 mr-1" />
                            {guide.readTime}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{guide.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{guide.description}</p>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {guide.topics.slice(0, 3).map((topic) => (
                          <span key={topic} className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            {topic}
                          </span>
                        ))}
                        {guide.topics.length > 3 && (
                          <span className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            +{guide.topics.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    <Link href={guide.href}>
                      <Button variant="outline" className="w-full">
                        Read Guide
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Ready to Take Action?</h2>
              <p className="mt-2 text-lg text-gray-600">
                Use our professional tools to put these strategies into practice
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Calculate Your Raise</h3>
                  <p className="text-gray-600 mb-4">
                    Use our advanced calculator to plan your salary increase strategy
                  </p>
                  <Link href="/">
                    <Button variant="outline" className="w-full">
                      Use Calculator
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Building2 className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Benchmarks</h3>
                  <p className="text-gray-600 mb-4">
                    Compare your raise against current industry standards
                  </p>
                  <Link href="/industry-raise-benchmarks-2025">
                    <Button variant="outline" className="w-full">
                      View Benchmarks
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <FileText className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Negotiation Guide</h3>
                  <p className="text-gray-600 mb-4">
                    Get our complete step-by-step salary negotiation guide
                  </p>
                  <Link href="/salary-negotiation-complete-guide">
                    <Button variant="outline" className="w-full">
                      Get Guide
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
