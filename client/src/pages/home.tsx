import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PayRaiseCalculatorComponent } from "@/components/calculator/pay-raise-calculator";
import { IndustryBenchmarks } from "@/components/calculator/industry-benchmarks";
import { IndustryBenchmarksWidget } from "@/components/widgets/industry-benchmarks-widget";
import { SEOHead } from "@/components/seo/head";
import { 
  CheckCircle, 
  Calculator, 
  TrendingUp, 
  Download, 
  Book, 
  BarChart3, 
  Users,
  PiggyBank,
  FileText,
  Target,
  Building2
} from "lucide-react";

export default function Home() {
  const [userRaise, setUserRaise] = useState<number | undefined>();
  const [userIndustry, setUserIndustry] = useState<string | undefined>();

  const features = [
    {
      icon: <Calculator className="h-12 w-12 text-white" />,
      title: "Inflation Adjustment Toggle",
      description: "Real-time CPI data integration showing purchasing power impact",
      color: "bg-primary",
      link: "/tools/inflation-adjusted-raise-calculator"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-white" />,
      title: "Tax Impact Calculator", 
      description: "Net pay calculations with federal/state tax considerations",
      color: "bg-secondary",
      link: "/tools/pay-raise-tax-impact-calculator"
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-white" />,
      title: "Industry Benchmarking",
      description: "Compare against current market averages for your field",
      color: "bg-accent",
      link: "/industry-raise-benchmarks-2025"
    },
    {
      icon: <Download className="h-12 w-12 text-white" />,
      title: "PDF Export",
      description: "Professional reports for salary negotiations and planning",
      color: "bg-red-500",
      link: "#"
    }
  ];

  const toolsAndResources = [
    {
      icon: <Book className="h-16 w-16 text-white" />,
      title: "Complete Negotiation Guide",
      description: "Step-by-step strategies for successful salary negotiations",
      features: [
        "Research and preparation tactics",
        "Conversation scripts and templates",
        "Handling objections and counteroffers",
        "Timing and follow-up strategies"
      ],
      color: "bg-primary",
      link: "/salary-negotiation-complete-guide"
    },
    {
      icon: <BarChart3 className="h-16 w-16 text-white" />,
      title: "Industry Benchmarks",
      description: "2025 salary increase data across all major industries",
      features: [
        "Current market rates by role",
        "Geographic salary variations",
        "Experience level breakdowns",
        "Company size comparisons"
      ],
      color: "bg-secondary",
      link: "/industry-raise-benchmarks-2025"
    },
    {
      icon: <Target className="h-16 w-16 text-white" />,
      title: "Performance Review Prep",
      description: "Essential preparation for annual review discussions",
      features: [
        "Achievement documentation",
        "Goal setting frameworks",
        "Self-assessment templates",
        "Raise request timing"
      ],
      color: "bg-accent",
      link: "/guides/performance-review-raise-preparation"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "SoftwareApplication"],
    "name": "Pay Raise Calculator 2025",
    "description": "Professional pay raise calculator with tax impact analysis, inflation adjustment, and industry benchmarks. Calculate exact salary increases and new pay rates instantly.",
    "url": "https://payraisepercentagecalculator.com",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "featureList": [
      "Multi-format salary calculations (hourly, weekly, monthly, annual)",
      "Real-time tax impact analysis",
      "Inflation adjustment calculations",
      "Industry benchmark comparisons",
      "Compound raise projections",
      "PDF export for negotiations"
    ],
    "creator": {
      "@type": "Organization",
      "name": "PayRaise Calculator",
      "url": "https://payraisepercentagecalculator.com",
      "logo": "https://payraisepercentagecalculator.com/logo.png"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "2847",
      "bestRating": "5"
    }
  };

  return (
    <>
      <SEOHead
        title="Pay Raise Calculator 2025: Calculate Your Exact Salary Increase & New Pay"
        description="Professional pay raise calculator with tax impact analysis, inflation adjustment, and 2025 industry benchmarks. Calculate exact salary increases and new pay rates instantly. Free tool trusted by 50,000+ professionals."
        canonical="/"
        keywords="pay raise calculator, salary increase calculator, wage raise calculator, new salary calculator, pay raise percentage, salary negotiation, 2025 salary trends, tax impact calculator, inflation adjusted salary"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200">
                  <Calculator className="w-4 h-4 mr-2" />
                  2025 Updated Data • Free Professional Tool
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl lg:text-6xl">
                Pay Raise Calculator:
                <span className="block text-gradient-primary mt-2">Calculate Your Exact Salary Increase</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 sm:text-xl leading-relaxed">
                Instantly calculate your new salary after any raise with our comprehensive calculator suite. 
                See real tax impact, inflation adjustments, and compare against 2025 industry benchmarks. 
                <strong className="text-gray-900">Trusted by over 50,000+ professionals</strong> for salary negotiations and career planning.
              </p>
              
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="text-success mr-2 h-4 w-4" />
                    Real-time calculations
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="text-success mr-2 h-4 w-4" />
                    Tax impact analysis
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="text-success mr-2 h-4 w-4" />
                    Industry benchmarks
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg">
                {/* Quick Stats Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Card className="gradient-primary text-white">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold">4.2%</div>
                      <div className="text-sm opacity-90">Average 2025 Raise</div>
                    </CardContent>
                  </Card>
                  <Card className="gradient-secondary text-white">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold">3.1%</div>
                      <div className="text-sm opacity-90">Current Inflation</div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Preview Calculator Card */}
                <Card className="calculator-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Calculation Preview</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Current Salary:</span>
                        <span className="font-medium text-gray-900">$60,000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Raise Percentage:</span>
                        <span className="font-medium text-primary">5%</span>
                      </div>
                      <hr className="border-gray-200" />
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-900">New Salary:</span>
                        <span className="font-bold text-xl text-success">$63,000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Monthly Increase:</span>
                        <span className="font-medium text-secondary">+$250</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Calculator */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Instantly Calculate Your New Salary After Any Raise
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Support for percentage, flat amount, or target salary inputs with automatic 
              conversion between pay periods
            </p>
          </div>
          
          <PayRaiseCalculatorComponent />
        </div>
      </section>

      {/* Understanding Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Understanding Your Pay Raise Calculation
              </h2>
              
              <div className="space-y-8">
                {/* Mathematics Section */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    The Mathematics Behind Your Raise
                  </h3>
                  <Card className="bg-gray-50">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Formula: New Salary Calculation</h4>
                          <code className="bg-white px-3 py-2 rounded border text-sm block">
                            New Salary = Current Salary × (1 + Raise Percentage)
                          </code>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Formula: Percentage Calculation</h4>
                          <code className="bg-white px-3 py-2 rounded border text-sm block">
                            Percentage = ((New Salary - Current Salary) / Current Salary) × 100
                          </code>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Real-World Example */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Real-World Example: $60,000 Salary with 5% Raise
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-blue-50">
                      <CardContent className="p-6">
                        <h4 className="font-medium text-gray-900 mb-3">Step-by-Step Calculation</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Current salary:</span>
                            <span className="font-medium">$60,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Raise percentage:</span>
                            <span className="font-medium">5%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Calculation:</span>
                            <span className="font-medium">$60,000 × 1.05</span>
                          </div>
                          <hr className="border-gray-300" />
                          <div className="flex justify-between font-semibold">
                            <span>New salary:</span>
                            <span className="text-success">$63,000</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-green-50">
                      <CardContent className="p-6">
                        <h4 className="font-medium text-gray-900 mb-3">Impact Analysis</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Annual increase:</span>
                            <span className="font-medium text-success">+$3,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Monthly increase:</span>
                            <span className="font-medium text-success">+$250</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Weekly increase:</span>
                            <span className="font-medium text-success">+$58</span>
                          </div>
                          <div className="flex justify-between">
                            <span>5-year total:</span>
                            <span className="font-medium text-success">+$15,000</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0 lg:col-span-4">
              {/* Industry Benchmarks Widget */}
              <div className="mb-6">
                <IndustryBenchmarksWidget compact={true} />
              </div>
              
              <Card className="bg-gray-50 sticky top-24">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    <Link href="/how-pay-raise-calculator-works">
                      <span className="block text-primary hover:text-blue-700 text-sm">
                        → Learn how our calculator methodology works
                      </span>
                    </Link>
                    <Link href="/pay-raise-formulas-guide">
                      <span className="block text-primary hover:text-blue-700 text-sm">
                        → Understand the formulas behind your calculations
                      </span>
                    </Link>
                    <Link href="/tax-impact-salary-increases">
                      <span className="block text-primary hover:text-blue-700 text-sm">
                        → See how taxes affect your raise
                      </span>
                    </Link>
                    <Link href="/tools/compound-raise-calculator">
                      <span className="block text-primary hover:text-blue-700 text-sm">
                        → Calculate compound raises over time
                      </span>
                    </Link>
                    <Link href="/salary-negotiation-complete-guide">
                      <span className="block text-primary hover:text-blue-700 text-sm">
                        → Plan your salary negotiation strategy
                      </span>
                    </Link>
                    <Link href="/blog/average-raise-by-industry-2025">
                      <span className="block text-primary hover:text-blue-700 text-sm">
                        → See 2025 industry raise data
                      </span>
                    </Link>
                    <Link href="/guides/factors-influencing-pay-raises">
                      <span className="block text-primary hover:text-blue-700 text-sm">
                        → Understand raise factors
                      </span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Market Context */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Current Market Context: 2025 Salary Increase Trends
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Understanding how your raise compares to industry standards
            </p>
          </div>
          
          <IndustryBenchmarks userRaise={userRaise} userIndustry={userIndustry} />
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Advanced Features That Set Us Apart
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Professional tools beyond basic percentage calculations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
                  <Link href={feature.link}>
                    <span className="text-primary hover:text-blue-700 text-sm font-medium">
                      Try Tool →
                    </span>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Resources */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Negotiation Tools & Resources
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Everything you need for successful salary negotiations
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {toolsAndResources.map((resource, index) => (
              <Card key={index} className="calculator-shadow">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 ${resource.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      {resource.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{resource.title}</h3>
                    <p className="text-gray-600 mt-2">{resource.description}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    {resource.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="text-success mr-2 h-4 w-4 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={resource.link}>
                    <Button className={`w-full ${resource.color} text-white hover:opacity-90 transition-opacity`}>
                      {resource.title.includes('Guide') ? 'Read Complete Guide' : 
                       resource.title.includes('Benchmarks') ? 'View Benchmarks' : 'Get Prepared'}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
