import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PayRaiseCalculatorComponent } from "@/components/calculator/pay-raise-calculator";
import { IndustryBenchmarks } from "@/components/calculator/industry-benchmarks";
import { IndustryBenchmarksWidget } from "@/components/widgets/industry-benchmarks-widget";
import { SEOHead } from "@/components/seo/head";
import { InternalLink } from "@/components/seo/internal-link-checker";
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
  Building2,
  ArrowRight,
  ExternalLink,
  HelpCircle,
  Clock,
  Shield,
  DollarSign
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

  const faqData = [
    {
      question: "What's a good raise in 2025?",
      answer: "A competitive raise in 2025 ranges from 4-7%, with the average being 4.2% according to recent surveys. However, this varies significantly by industry, performance, and economic conditions. Technology and healthcare typically see higher increases (5-8%), while retail and hospitality average 3-5%. To beat inflation (3.1% in 2025), aim for at least 4% minimum."
    },
    {
      question: "How do I calculate a 5% raise?",
      answer: "To calculate a 5% raise: multiply your current salary by 0.05, then add the result to your current salary. For example: $60,000 × 0.05 = $3,000 raise, making your new salary $63,000. Our calculator handles all pay periods automatically and includes tax impact analysis."
    },
    {
      question: "Are raises taxable?",
      answer: "Yes, salary raises are fully taxable as ordinary income. The additional income may push you into a higher tax bracket, but only the amount above the bracket threshold is taxed at the higher rate. Our tax impact calculator shows exactly how much you'll take home after federal and state taxes."
    },
    {
      question: "How do I negotiate a higher salary?",
      answer: "Successful salary negotiation requires research, timing, and preparation. Start by researching market rates, documenting your achievements, and choosing the right timing (typically during performance reviews or after major accomplishments). Present data-driven arguments and be prepared to discuss your value contribution."
    },
    {
      question: "How often should I expect a raise?",
      answer: "Most companies provide annual raises, typically ranging from 2-5% for standard performance. Merit-based increases can occur more frequently, especially after promotions or significant achievements. Cost-of-living adjustments may be separate from performance raises. In high-growth industries, bi-annual reviews are common."
    },
    {
      question: "What if my raise request is denied?",
      answer: "If your raise request is denied, ask for specific feedback and a timeline for reconsideration. Document the conversation, understand the reasoning, and create an improvement plan. Sometimes alternative compensation like additional benefits, flexible work arrangements, or professional development opportunities may be available."
    }
  ];

  const structuredData = [
    {
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
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ];

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

      {/* Comprehensive Blog Section for SEO */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Pay Raise Knowledge Hub
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about salary increases, negotiation strategies, and career advancement. 
              From understanding inflation impact to mastering negotiation techniques.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Strategic Timing */}
            <Card className="card-hover efficient-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Strategic Timing</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Learn when to ask for a raise, how to time your request perfectly, and what factors influence approval rates.
                </p>
                <div className="space-y-2 mb-6">
                  <Link href="/blog/when-ask-for-raise-optimal-timing" className="block text-sm text-primary hover:underline">
                    → When to Ask for a Raise: Optimal Timing Guide
                  </Link>
                  <Link href="/guides/performance-review-raise-preparation" className="block text-sm text-primary hover:underline">
                    → Performance Review Preparation Strategies
                  </Link>
                  <Link href="/blog/raise-negotiation-scripts-templates" className="block text-sm text-primary hover:underline">
                    → Proven Negotiation Scripts & Templates
                  </Link>
                </div>
                <Link href="/tools/salary-negotiation-calculator">
                  <Button className="w-full btn-touch">Calculate Negotiation Strategy</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Financial Impact */}
            <Card className="card-hover efficient-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <PiggyBank className="h-8 w-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Financial Impact</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Understand the real value of raises, tax implications, and long-term financial benefits of salary increases.
                </p>
                <div className="space-y-2 mb-6">
                  <Link href="/blog/3-vs-5-percent-raise-long-term-impact" className="block text-sm text-primary hover:underline">
                    → 3% vs 5% Raise: Long-term Financial Impact
                  </Link>
                  <Link href="/tax-impact-salary-increases" className="block text-sm text-primary hover:underline">
                    → Tax Impact of Salary Increases
                  </Link>
                  <Link href="/blog/inflation-real-salary-impact" className="block text-sm text-primary hover:underline">
                    → Inflation's Impact on Real Salary Value
                  </Link>
                </div>
                <Link href="/tools/pay-raise-tax-impact-calculator">
                  <Button className="w-full btn-touch">Calculate Tax Impact</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Industry Analysis */}
            <Card className="card-hover efficient-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Building2 className="h-8 w-8 text-accent mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Industry Analysis</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Compare your raise against industry standards, understand market trends, and benchmark your compensation.
                </p>
                <div className="space-y-2 mb-6">
                  <Link href="/blog/average-raise-by-industry-2025" className="block text-sm text-primary hover:underline">
                    → Average Raise by Industry 2025 Data
                  </Link>
                  <Link href="/industry-raise-benchmarks-2025" className="block text-sm text-primary hover:underline">
                    → Comprehensive Industry Benchmarks
                  </Link>
                  <Link href="/blog/salary-transparency-impact" className="block text-sm text-primary hover:underline">
                    → Salary Transparency Laws Impact
                  </Link>
                </div>
                <Link href="/guides/market-value-salary-research">
                  <Button className="w-full btn-touch">Research Market Value</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Advanced Topics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Remote Work Strategies</h4>
                <p className="text-sm text-gray-600 mb-3">Navigate salary negotiations in remote work environments</p>
                <Link href="/blog/remote-work-raise-strategies" className="text-sm text-primary hover:underline">
                  Read Complete Guide →
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardContent className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Hourly vs Salary</h4>
                <p className="text-sm text-gray-600 mb-3">Understand differences in raise structures and calculations</p>
                <Link href="/blog/hourly-vs-salary-raise-differences" className="text-sm text-primary hover:underline">
                  Compare Options →
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
              <CardContent className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Legal Compliance</h4>
                <p className="text-sm text-gray-600 mb-3">State laws and regulations affecting pay raise policies</p>
                <Link href="/state-pay-raise-laws-compliance" className="text-sm text-primary hover:underline">
                  Check Your State →
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
              <CardContent className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Advanced Calculators</h4>
                <p className="text-sm text-gray-600 mb-3">Specialized tools for complex compensation scenarios</p>
                <Link href="/tools/compound-raise-calculator" className="text-sm text-primary hover:underline">
                  Explore Tools →
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Call-to-Action Section */}
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Calculate Your Perfect Raise?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Use our comprehensive calculator suite to understand your worth, plan your negotiation, and maximize your earning potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tools/compound-raise-calculator">
                <Button className="bg-white text-primary hover:bg-gray-100 btn-touch">
                  Multi-Year Projections
                </Button>
              </Link>
              <Link href="/guides/negotiating-salary-increase-strategies">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary btn-touch">
                  Negotiation Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema Markup */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-2 text-lg text-gray-600">Common questions about pay raise calculations and salary negotiations</p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircle className="h-5 w-5 text-primary mr-2" />
                  What's a good raise in 2025?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  A competitive raise in 2025 ranges from 4-7%, with the average being 4.2% according to recent surveys. 
                  However, this varies significantly by industry, performance, and economic conditions. Technology and healthcare 
                  typically see higher increases (5-8%), while retail and hospitality average 3-5%. To beat inflation (3.1% in 2025), 
                  aim for at least 4% minimum.
                </p>
                <div className="mt-4">
                  <InternalLink href="/industry-raise-benchmarks-2025" className="text-primary hover:underline">
                    View detailed industry benchmarks →
                  </InternalLink>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="h-5 w-5 text-primary mr-2" />
                  How do I calculate a 5% raise?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  To calculate a 5% raise: multiply your current salary by 0.05, then add the result to your current salary. 
                  For example: $60,000 × 0.05 = $3,000 raise, making your new salary $63,000. Our calculator handles all 
                  pay periods automatically and includes tax impact analysis.
                </p>
                <div className="mt-4">
                  <InternalLink href="/pay-raise-formulas-guide" className="text-primary hover:underline">
                    Learn all calculation formulas →
                  </InternalLink>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 text-primary mr-2" />
                  Are raises taxable?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Yes, salary raises are fully taxable as ordinary income. The additional income may push you into a higher 
                  tax bracket, but only the amount above the bracket threshold is taxed at the higher rate. Our tax impact 
                  calculator shows exactly how much you'll take home after federal and state taxes.
                </p>
                <div className="mt-4">
                  <InternalLink href="/tools/pay-raise-tax-impact-calculator" className="text-primary hover:underline">
                    Calculate your tax impact →
                  </InternalLink>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 text-primary mr-2" />
                  How do I negotiate a higher salary?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Successful salary negotiation requires research, timing, and preparation. Start by researching market rates, 
                  documenting your achievements, and choosing the right timing (typically during performance reviews or after 
                  major accomplishments). Present data-driven arguments and be prepared to discuss your value contribution.
                </p>
                <div className="mt-4">
                  <InternalLink href="/salary-negotiation-complete-guide" className="text-primary hover:underline">
                    Read complete negotiation guide →
                  </InternalLink>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-primary mr-2" />
                  How often should I expect a raise?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Most companies provide annual raises, typically ranging from 2-5% for standard performance. Merit-based 
                  increases can occur more frequently, especially after promotions or significant achievements. Cost-of-living 
                  adjustments may be separate from performance raises. In high-growth industries, bi-annual reviews are common.
                </p>
                <div className="mt-4">
                  <InternalLink href="/blog/when-ask-for-raise-optimal-timing" className="text-primary hover:underline">
                    Learn optimal timing strategies →
                  </InternalLink>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 text-primary mr-2" />
                  What if my raise request is denied?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  If your raise request is denied, ask for specific feedback and a timeline for reconsideration. Document 
                  the conversation, understand the reasoning, and create an improvement plan. Sometimes alternative 
                  compensation like additional benefits, flexible work arrangements, or professional development opportunities 
                  may be available.
                </p>
                <div className="mt-4">
                  <InternalLink href="/guides/raise-rejection-next-steps" className="text-primary hover:underline">
                    Handle rejection professionally →
                  </InternalLink>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Authority Links & Data Sources */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Trusted Data Sources</h2>
            <p className="mt-2 text-gray-600">Our calculations are based on authoritative government and industry data</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <ExternalLink className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Bureau of Labor Statistics</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Official wage and employment data from the U.S. Department of Labor
                </p>
                <a 
                  href="https://www.bls.gov/bls/wages.htm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  View Official Data →
                </a>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <ExternalLink className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">IRS Tax Information</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Current tax brackets and withholding calculator for accurate net pay calculations
                </p>
                <a 
                  href="https://apps.irs.gov/app/tax-withholding-estimator" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 text-sm font-medium"
                >
                  IRS Calculator →
                </a>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <ExternalLink className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Social Security COLA</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Cost-of-living adjustment data and inflation impact analysis
                </p>
                <a 
                  href="https://www.ssa.gov/cola/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 text-sm font-medium"
                >
                  COLA Reports →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
