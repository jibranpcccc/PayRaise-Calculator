import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo/head";
import {
  Calculator,
  TrendingUp,
  PiggyBank,
  Target,
  DollarSign,
  Clock,
  FileText,
  Users,
  MapPin,
  BarChart3,
  Percent,
  Building2
} from "lucide-react";

export default function ToolsIndex() {
  const calculatorTools = [
    {
      title: "Pay Raise Calculator",
      description: "Calculate your new salary with percentage, flat amount, or target salary inputs",
      icon: <Calculator className="h-8 w-8" />,
      href: "/",
      image: "/images/calculators/pay-raise-calculator.png",
      featured: true,
      category: "Core"
    },
    {
      title: "Compound Raise Calculator",
      description: "Project salary growth over multiple years with compound percentage increases",
      icon: <TrendingUp className="h-8 w-8" />,
      href: "/tools/compound-raise-calculator",
      image: "/images/calculators/compound-raise-calculator.png",
      category: "Advanced"
    },
    {
      title: "Inflation-Adjusted Raise Calculator",
      description: "See your real purchasing power after accounting for inflation",
      icon: <PiggyBank className="h-8 w-8" />,
      href: "/tools/inflation-adjusted-raise-calculator",
      image: "/images/calculators/inflation-adjusted-raise-calculator.png",
      category: "Advanced"
    },
    {
      title: "Promotion Salary Calculator",
      description: "Calculate expected salary increases for job promotions and role changes",
      icon: <Target className="h-8 w-8" />,
      href: "/tools/promotion-salary-calculator",
      category: "Specialized"
    },
    {
      title: "Bonus Impact Calculator",
      description: "Analyze how annual bonuses affect your total compensation",
      icon: <DollarSign className="h-8 w-8" />,
      href: "/tools/bonus-impact-calculator",
      category: "Specialized"
    },
    {
      title: "COLA Calculator",
      description: "Calculate cost-of-living adjustments based on geographic and economic factors",
      icon: <BarChart3 className="h-8 w-8" />,
      href: "/tools/cola-calculator",
      category: "Specialized"
    },
    {
      title: "Hourly to Salary Converter",
      description: "Convert between hourly wages and annual salaries with precision",
      icon: <Clock className="h-8 w-8" />,
      href: "/tools/hourly-to-salary-converter",
      category: "Conversion"
    },
    {
      title: "Pay Raise Tax Impact Calculator",
      description: "See how federal and state taxes affect your net salary increase",
      icon: <FileText className="h-8 w-8" />,
      href: "/tools/pay-raise-tax-impact-calculator",
      category: "Advanced"
    },
    {
      title: "Gender Pay Gap Calculator",
      description: "Analyze and calculate pay equity across gender demographics",
      icon: <Users className="h-8 w-8" />,
      href: "/tools/gender-pay-gap-calculator",
      category: "Analysis"
    },
    {
      title: "Remote Work Location Adjuster",
      description: "Calculate salary adjustments for remote work and location changes",
      icon: <MapPin className="h-8 w-8" />,
      href: "/tools/remote-work-location-adjuster",
      category: "Modern"
    },
    {
      title: "Overtime Pay Calculator",
      description: "Calculate overtime compensation and its impact on total earnings",
      icon: <Percent className="h-8 w-8" />,
      href: "/tools/overtime-pay-calculator",
      category: "Specialized"
    },
    {
      title: "Raise vs Bonus Calculator",
      description: "Compare the long-term value of salary raises versus one-time bonuses",
      icon: <TrendingUp className="h-8 w-8" />,
      href: "/tools/raise-vs-bonus-calculator",
      category: "Comparison"
    },
    {
      title: "Salary Negotiation Calculator",
      description: "Strategic tool for planning and preparing salary negotiation scenarios",
      icon: <Building2 className="h-8 w-8" />,
      href: "/tools/salary-negotiation-calculator",
      category: "Strategy"
    },
    {
      title: "Promotion Calculator",
      description: "Calculate expected salary increases for career advancement and role changes",
      icon: <Target className="h-8 w-8" />,
      href: "/tools/promotion-calculator",
      category: "Specialized"
    }
  ];

  const categories = ["All", "Core", "Advanced", "Specialized", "Analysis", "Conversion", "Modern", "Comparison", "Strategy"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTools = selectedCategory === "All"
    ? calculatorTools
    : calculatorTools.filter(tool => tool.category === selectedCategory);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Pay Raise Calculator Tools",
    "description": "Comprehensive collection of salary and pay raise calculation tools for employees and HR professionals.",
    "url": "https://payraisepercentagecalculator.com/tools",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": calculatorTools.length,
      "itemListElement": calculatorTools.map((tool, index) => ({
        "@type": "SoftwareApplication",
        "position": index + 1,
        "name": tool.title,
        "description": tool.description,
        "url": `https://payraisepercentagecalculator.com${tool.href}`,
        "applicationCategory": "FinanceApplication"
      }))
    }
  };

  return (
    <>
      <SEOHead
        title="All Calculator Tools - Pay Raise & Salary Calculators"
        description="Comprehensive collection of 14+ professional salary and pay raise calculators. Free tools for compound raises, inflation adjustments, tax impact, negotiation planning, and more."
        canonical="/tools"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Professional Calculator Tools
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive suite of salary and pay raise calculators designed for accurate
                financial planning and negotiation preparation. All tools are free and require no registration.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="mb-2"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool, index) => (
                <Card
                  key={index}
                  className={`hover:shadow-lg transition-shadow ${tool.featured ? 'ring-2 ring-primary' : ''}`}
                >
                  <div className="relative">
                    {tool.image && (
                      <div className="h-40 w-full overflow-hidden rounded-t-xl">
                        <img
                          src={tool.image}
                          alt={tool.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${tool.featured ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}>
                          {tool.icon}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg font-semibold text-gray-900">
                            {tool.title}
                            {tool.featured && (
                              <span className="ml-2 text-xs bg-primary text-white px-2 py-1 rounded-full">
                                Featured
                              </span>
                            )}
                          </CardTitle>
                          <div className="text-sm text-gray-500">{tool.category}</div>
                        </div>
                      </div>
                    </CardHeader>
                  </div>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{tool.description}</p>
                    <Link href={tool.href}>
                      <Button
                        className={`w-full ${tool.featured ? 'bg-primary hover:bg-blue-700' : ''}`}
                        variant={tool.featured ? "default" : "outline"}
                      >
                        Use Calculator
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
              <h2 className="text-3xl font-bold text-gray-900">Need More Than Calculators?</h2>
              <p className="mt-2 text-lg text-gray-600">
                Explore our comprehensive guides and resources
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Benchmarks</h3>
                  <p className="text-gray-600 mb-4">
                    See how your raise compares to industry standards and market trends
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
                  <FileText className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Salary Guides</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive guides on understanding and negotiating pay raises
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
                  <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Negotiation Help</h3>
                  <p className="text-gray-600 mb-4">
                    Step-by-step strategies for successful salary negotiations
                  </p>
                  <Link href="/salary-negotiation-complete-guide">
                    <Button variant="outline" className="w-full">
                      Get Strategy
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
