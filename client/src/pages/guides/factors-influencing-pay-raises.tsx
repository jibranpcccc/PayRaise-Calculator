import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo/head";
import { Link } from "wouter";
import { 
  TrendingUp, 
  Users, 
  Building2, 
  Target, 
  BookOpen, 
  Award, 
  Clock, 
  DollarSign,
  BarChart3,
  CheckCircle
} from "lucide-react";

export default function FactorsInfluencingPayRaises() {
  const performanceFactors = [
    {
      factor: "Performance Reviews",
      impact: "High",
      description: "Consistent exceptional performance directly correlates with larger raises",
      percentage: "85%",
      details: [
        "Exceeds expectations rating typically yields 6-12% raises",
        "Meets expectations averages 3-5% annual increases",
        "Below expectations may result in 0-2% or no raise"
      ],
      icon: <Award className="h-6 w-6" />
    },
    {
      factor: "Skill Development",
      impact: "High",
      description: "New certifications and skills directly impact earning potential",
      percentage: "78%",
      details: [
        "Technical certifications can add 10-20% to salary",
        "Leadership training opens promotional pathways",
        "Industry-specific skills command premium rates"
      ],
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      factor: "Tenure & Experience",
      impact: "Medium",
      description: "Years of service and industry experience influence raise amounts",
      percentage: "65%",
      details: [
        "1-3 years: Standard market rate adjustments",
        "3-5 years: Above-average increases for loyalty",
        "5+ years: Significant raises or promotion considerations"
      ],
      icon: <Clock className="h-6 w-6" />
    }
  ];

  const companyFactors = [
    {
      factor: "Company Financial Health",
      impact: "Very High",
      description: "Profitable companies with strong revenue growth offer larger raises",
      percentage: "92%",
      details: [
        "Revenue growth >15%: Generous raise budgets",
        "Stable growth 5-15%: Standard market adjustments",
        "Declining revenue: Limited or frozen raises"
      ],
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      factor: "Company Size",
      impact: "Medium",
      description: "Larger corporations typically have more structured raise programs",
      percentage: "58%",
      details: [
        "Fortune 500: Standardized 3-8% annual programs",
        "Mid-size (100-1000): Flexible 2-10% based on performance",
        "Startups: Equity-heavy, variable cash increases"
      ],
      icon: <Building2 className="h-6 w-6" />
    },
    {
      factor: "Industry Growth Rate",
      impact: "High",
      description: "Fast-growing industries offer higher raise percentages",
      percentage: "74%",
      details: [
        "Tech/AI: 8-15% average annual increases",
        "Healthcare: 4-8% steady growth",
        "Traditional industries: 2-5% conservative raises"
      ],
      icon: <BarChart3 className="h-6 w-6" />
    }
  ];

  const marketFactors = [
    {
      factor: "Labor Market Conditions",
      impact: "Very High",
      description: "Tight labor markets drive up compensation to retain talent",
      percentage: "88%",
      details: [
        "Low unemployment: 5-12% retention raises",
        "High demand skills: Premium 10-25% increases",
        "Competitive markets: Above-market adjustments"
      ],
      icon: <Users className="h-6 w-6" />
    },
    {
      factor: "Geographic Location",
      impact: "High",
      description: "Cost of living and local market rates significantly impact raises",
      percentage: "71%",
      details: [
        "High-cost areas: 6-12% to maintain purchasing power",
        "Growing markets: 4-8% competitive adjustments",
        "Stable regions: 2-6% standard increases"
      ],
      icon: <Target className="h-6 w-6" />
    },
    {
      factor: "Economic Conditions",
      impact: "Medium",
      description: "Inflation and economic growth influence raise budgets",
      percentage: "63%",
      details: [
        "High inflation (>4%): 5-10% to maintain real wages",
        "Moderate inflation (2-4%): 3-6% standard adjustments",
        "Low inflation (<2%): 2-4% modest increases"
      ],
      icon: <DollarSign className="h-6 w-6" />
    }
  ];

  const actionableStrategies = [
    {
      strategy: "Performance Documentation",
      description: "Systematically track and document your achievements",
      steps: [
        "Maintain a weekly accomplishment log",
        "Quantify impact with specific metrics",
        "Collect positive feedback and testimonials",
        "Prepare case studies of successful projects"
      ]
    },
    {
      strategy: "Market Research",
      description: "Understand your true market value",
      steps: [
        "Research salary surveys for your role",
        "Network with industry professionals",
        "Monitor job postings for similar positions",
        "Use multiple salary comparison tools"
      ]
    },
    {
      strategy: "Skill Development",
      description: "Invest in high-value capabilities",
      steps: [
        "Identify in-demand skills in your field",
        "Pursue relevant certifications",
        "Take on stretch assignments",
        "Develop leadership capabilities"
      ]
    },
    {
      strategy: "Timing Optimization",
      description: "Choose the right moment for raise discussions",
      steps: [
        "Align with performance review cycles",
        "Capitalize on recent achievements",
        "Consider company financial calendars",
        "Avoid stressful organizational periods"
      ]
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Factors Influencing Pay Raises: Complete Analysis Guide 2025",
    "description": "Comprehensive analysis of performance, company, and market factors that influence salary increase decisions. Data-driven insights for maximizing raise potential.",
    "author": {
      "@type": "Organization",
      "name": "PayRaise Calculator"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PayRaise Calculator",
      "url": "https://payraisepercentagecalculator.com"
    },
    "datePublished": "2025-01-31",
    "dateModified": "2025-01-31",
    "url": "https://payraisepercentagecalculator.com/guides/factors-influencing-pay-raises"
  };

  return (
    <>
      <SEOHead
        title="Factors Influencing Pay Raises: Complete Analysis Guide 2025"
        description="Discover the key performance, company, and market factors that influence salary increase decisions. Data-driven strategies to maximize your raise potential."
        canonical="/guides/factors-influencing-pay-raises"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Factors Influencing Pay Raises: Complete Analysis Guide 2025
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Understanding the performance, company, and market factors that determine salary increase 
              decisions. Research-backed insights to maximize your raise potential.
            </p>
          </div>

          {/* Performance Factors */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Award className="h-6 w-6 text-primary" />
                  Performance-Based Factors
                </CardTitle>
                <p className="text-gray-600">
                  Individual performance metrics that directly impact raise decisions
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-3 gap-6">
                  {performanceFactors.map((factor, index) => (
                    <Card key={index} className="border-l-4 border-primary">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            {factor.icon}
                            <h3 className="font-semibold text-gray-900">{factor.factor}</h3>
                          </div>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            factor.impact === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {factor.impact} Impact
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{factor.description}</p>
                        <div className="mb-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-500">Influence Rate</span>
                            <span className="text-sm font-medium">{factor.percentage}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full" 
                              style={{ width: factor.percentage }}
                            ></div>
                          </div>
                        </div>
                        <ul className="space-y-1">
                          {factor.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="text-sm text-gray-600 flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Company Factors */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Building2 className="h-6 w-6 text-secondary" />
                  Company & Organizational Factors
                </CardTitle>
                <p className="text-gray-600">
                  Business conditions and policies that shape raise budgets and decisions
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-3 gap-6">
                  {companyFactors.map((factor, index) => (
                    <Card key={index} className="border-l-4 border-secondary">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            {factor.icon}
                            <h3 className="font-semibold text-gray-900">{factor.factor}</h3>
                          </div>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            factor.impact === 'Very High' ? 'bg-red-100 text-red-700' : 
                            factor.impact === 'High' ? 'bg-orange-100 text-orange-700' : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {factor.impact} Impact
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{factor.description}</p>
                        <div className="mb-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-500">Influence Rate</span>
                            <span className="text-sm font-medium">{factor.percentage}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-secondary h-2 rounded-full" 
                              style={{ width: factor.percentage }}
                            ></div>
                          </div>
                        </div>
                        <ul className="space-y-1">
                          {factor.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="text-sm text-gray-600 flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Market Factors */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <TrendingUp className="h-6 w-6 text-accent" />
                  Market & Economic Factors
                </CardTitle>
                <p className="text-gray-600">
                  External market conditions that influence compensation strategies
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-3 gap-6">
                  {marketFactors.map((factor, index) => (
                    <Card key={index} className="border-l-4 border-accent">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            {factor.icon}
                            <h3 className="font-semibold text-gray-900">{factor.factor}</h3>
                          </div>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            factor.impact === 'Very High' ? 'bg-red-100 text-red-700' : 
                            factor.impact === 'High' ? 'bg-orange-100 text-orange-700' : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {factor.impact} Impact
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{factor.description}</p>
                        <div className="mb-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-500">Influence Rate</span>
                            <span className="text-sm font-medium">{factor.percentage}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-accent h-2 rounded-full" 
                              style={{ width: factor.percentage }}
                            ></div>
                          </div>
                        </div>
                        <ul className="space-y-1">
                          {factor.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="text-sm text-gray-600 flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Actionable Strategies */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Actionable Strategies to Maximize Your Raise Potential</CardTitle>
                <p className="text-gray-600">
                  Proven tactics to influence the factors within your control
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  {actionableStrategies.map((strategy, index) => (
                    <Card key={index} className="bg-gray-50">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{strategy.strategy}</h3>
                        <p className="text-gray-600 mb-4">{strategy.description}</p>
                        <ul className="space-y-2">
                          {strategy.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start gap-2">
                              <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                                {stepIndex + 1}
                              </div>
                              <span className="text-sm text-gray-700">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Tools & Resources */}
          <section>
            <Card className="bg-primary text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Calculate Your Raise Potential</h2>
                <p className="text-lg mb-6">
                  Use our comprehensive tools to analyze your specific situation and plan your strategy
                </p>
                <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  <Link href="/">
                    <Button variant="secondary" className="w-full">
                      Pay Raise Calculator
                    </Button>
                  </Link>
                  <Link href="/tools/salary-negotiation-calculator">
                    <Button variant="secondary" className="w-full">
                      Negotiation Strategy
                    </Button>
                  </Link>
                  <Link href="/industry-raise-benchmarks-2025">
                    <Button variant="secondary" className="w-full">
                      Industry Benchmarks
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </>
  );
}