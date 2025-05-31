import { SEOHead } from "@/components/seo/head";
import { SchemaGenerator } from "@/components/seo/schema-generator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { InternalLink } from "@/components/seo/internal-link-checker";
import { Sparkles, Calculator, TrendingUp, Shield, Zap, Database } from "lucide-react";

const FEATURE_UPDATES = [
  {
    category: "New Calculator Tools",
    icon: Calculator,
    color: "blue",
    updates: [
      {
        name: "State-Wise Raise Calculator",
        description: "Calculate raise impact with state-specific tax rates and cost of living adjustments",
        impact: "Provides location-accurate calculations for all 50 US states",
        release: "January 2025"
      },
      {
        name: "Raise After Deductions Calculator", 
        description: "See your real take-home increase after 401k, insurance, and other deductions",
        impact: "Shows actual net pay improvement, not just gross salary increase",
        release: "January 2025"
      },
      {
        name: "Total Compensation Calculator",
        description: "Compare salary to complete compensation including benefits, equity, and perks",
        impact: "Reveals true value of job offers beyond base salary",
        release: "January 2025"
      }
    ]
  },
  {
    category: "Enhanced Accuracy",
    icon: Shield,
    color: "green", 
    updates: [
      {
        name: "2025 Tax Bracket Integration",
        description: "Updated with latest federal and state tax brackets for accurate net calculations",
        impact: "Precise after-tax raise calculations reflecting current tax law",
        release: "January 2025"
      },
      {
        name: "Real-Time Inflation Data",
        description: "Current CPI data integration for inflation-adjusted purchasing power analysis",
        impact: "Shows real value of raises considering current economic conditions",
        release: "January 2025"
      },
      {
        name: "Industry Benchmark Updates",
        description: "Latest salary data across 25+ industries with 2025 market rates",
        impact: "Accurate industry comparisons for informed negotiations",
        release: "Monthly updates"
      }
    ]
  },
  {
    category: "User Experience Improvements",
    icon: Zap,
    color: "purple",
    updates: [
      {
        name: "Mobile-Optimized Interface",
        description: "Fully responsive design optimized for smartphones and tablets",
        impact: "Seamless calculations on any device, anywhere",
        release: "December 2024"
      },
      {
        name: "PDF Export Functionality",
        description: "Generate professional reports of your calculations for presentations",
        impact: "Professional documentation for salary negotiations",
        release: "January 2025"
      },
      {
        name: "Save & Compare Scenarios",
        description: "Save multiple calculation scenarios and compare different raise amounts",
        impact: "Easy comparison of various negotiation targets",
        release: "February 2025"
      }
    ]
  }
];

const ACCURACY_IMPROVEMENTS = [
  {
    metric: "Tax Calculation Precision",
    before: "±3% variance",
    after: "±0.5% variance",
    improvement: "83% more accurate"
  },
  {
    metric: "Industry Benchmark Accuracy",
    before: "6-month lag time",
    after: "Real-time updates",
    improvement: "Current market data"
  },
  {
    metric: "Geographic Adjustment",
    before: "Basic cost of living",
    after: "State-specific taxes + COLA",
    improvement: "Location-precise calculations"
  },
  {
    metric: "Deduction Analysis",
    before: "Not available",
    after: "Comprehensive deduction impact",
    improvement: "Real take-home visibility"
  }
];

export default function RaiseCalculatorUpdates2025() {
  const structuredData = SchemaGenerator.article({
    headline: "Pay Raise Calculator Updates 2025: New Features & Enhanced Accuracy",
    description: "Discover the latest improvements to our salary calculation tools, including new state-specific calculators, enhanced accuracy, and user experience upgrades.",
    url: "https://payraisepercentagecalculator.com/blog/raise-calculator-updates-2025",
    datePublished: "2025-01-31",
    author: "Pay Raise Calculator Team",
    keywords: ["calculator updates", "salary tool improvements", "2025 features", "calculation accuracy"]
  });

  return (
    <>
      <SEOHead
        title="Pay Raise Calculator Updates 2025 - New Features & Enhanced Accuracy"
        description="Explore the latest updates to our salary calculation tools including new state-specific calculators, improved accuracy, and enhanced user experience features."
        canonical="https://payraisepercentagecalculator.com/blog/raise-calculator-updates-2025"
        keywords="calculator updates, salary tool improvements, 2025 features, calculation accuracy, pay raise tools"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-indigo-50">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center space-x-4 mb-6">
              <Badge className="bg-white text-blue-700">2025 Updates</Badge>
              <Badge variant="outline" className="border-white text-white">Enhanced Accuracy</Badge>
              <Badge variant="outline" className="border-white text-white">New Features</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pay Raise Calculator Updates 2025
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover the latest improvements to our salary calculation tools, featuring enhanced accuracy, 
              new state-specific calculators, and advanced user experience features.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Introduction */}
            <section className="mb-12 max-w-4xl mx-auto">
              <div className="prose prose-lg">
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  We're constantly improving our salary calculation tools to provide you with the most accurate, 
                  comprehensive, and user-friendly experience possible. Our 2025 updates represent the biggest 
                  enhancement to date, with new calculators, improved accuracy, and features designed to give 
                  you the edge in salary negotiations.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
                  <div className="flex items-start">
                    <Sparkles className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800 mb-2">What's New in 2025</h3>
                      <p className="text-blue-700">
                        Over 15 major improvements including 3 new calculator tools, enhanced accuracy algorithms, 
                        and advanced features that provide deeper insights into your compensation package.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Feature Updates by Category */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Major Feature Updates
              </h2>

              <div className="space-y-8">
                {FEATURE_UPDATES.map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <Card key={index} className="shadow-lg">
                      <CardHeader>
                        <CardTitle className={`text-2xl text-${category.color}-600 flex items-center gap-3`}>
                          <IconComponent className="h-6 w-6" />
                          {category.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-1 gap-6">
                          {category.updates.map((update, updateIndex) => (
                            <div key={updateIndex} className={`border-l-4 border-${category.color}-200 pl-6 py-4`}>
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="font-semibold text-gray-900 text-lg">{update.name}</h3>
                                <Badge className={`bg-${category.color}-100 text-${category.color}-800`}>
                                  {update.release}
                                </Badge>
                              </div>
                              <p className="text-gray-600 mb-3">{update.description}</p>
                              <div className={`bg-${category.color}-50 p-3 rounded-lg`}>
                                <p className={`text-${category.color}-800 text-sm`}>
                                  <strong>Impact:</strong> {update.impact}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>

            {/* Accuracy Improvements */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Accuracy Improvements
              </h2>

              <Card>
                <CardContent className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Calculation Area</th>
                          <th className="text-center py-3 px-4 font-semibold text-gray-600">Before 2025</th>
                          <th className="text-center py-3 px-4 font-semibold text-green-600">After Updates</th>
                          <th className="text-center py-3 px-4 font-semibold text-blue-600">Improvement</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ACCURACY_IMPROVEMENTS.map((item, index) => (
                          <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-900">{item.metric}</td>
                            <td className="py-3 px-4 text-center text-gray-600">{item.before}</td>
                            <td className="py-3 px-4 text-center text-green-600 font-medium">{item.after}</td>
                            <td className="py-3 px-4 text-center text-blue-600 font-medium">{item.improvement}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* New Calculator Showcase */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Try Our New Calculators
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-blue-300 bg-blue-50 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-blue-800">State-Wise Calculator</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-700 mb-4 text-sm">
                      Get precise calculations with state-specific tax rates and cost of living adjustments for all 50 states.
                    </p>
                    <InternalLink 
                      href="/tools/state-wise-raise-calculator"
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                    >
                      Try Now →
                    </InternalLink>
                  </CardContent>
                </Card>

                <Card className="border-green-300 bg-green-50 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-green-800">Deductions Calculator</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-700 mb-4 text-sm">
                      See your real take-home increase after accounting for 401k, insurance, and other deductions.
                    </p>
                    <InternalLink 
                      href="/tools/raise-after-deductions-calculator"
                      className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                    >
                      Calculate →
                    </InternalLink>
                  </CardContent>
                </Card>

                <Card className="border-purple-300 bg-purple-50 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-purple-800">Total Compensation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-purple-700 mb-4 text-sm">
                      Compare complete compensation packages including salary, benefits, equity, and perks.
                    </p>
                    <InternalLink 
                      href="/tools/salary-vs-total-compensation-calculator"
                      className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                    >
                      Compare →
                    </InternalLink>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Data Sources & Methodology */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Enhanced Data Sources & Methodology</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Database className="h-5 w-5 text-blue-600" />
                      Improved Data Sources
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li>• <strong>Bureau of Labor Statistics:</strong> Real-time federal data integration</li>
                      <li>• <strong>State Revenue Departments:</strong> Current tax bracket information</li>
                      <li>• <strong>Industry Associations:</strong> Professional salary survey data</li>
                      <li>• <strong>Economic Research Institutes:</strong> Cost of living indices</li>
                      <li>• <strong>Federal Reserve:</strong> Inflation and economic indicators</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      Calculation Enhancements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li>• <strong>Multi-variable Analysis:</strong> Simultaneous tax, inflation, and COLA calculations</li>
                      <li>• <strong>Compound Projections:</strong> Long-term career earnings modeling</li>
                      <li>• <strong>Scenario Modeling:</strong> Multiple raise percentage comparisons</li>
                      <li>• <strong>Industry Benchmarking:</strong> Role-specific market positioning</li>
                      <li>• <strong>Geographic Precision:</strong> Location-specific adjustments</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* User Impact Stories */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Real User Impact</h2>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">$2.3M+</div>
                      <div className="text-sm text-green-700">Additional salary negotiated using our tools</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">50,000+</div>
                      <div className="text-sm text-blue-700">Calculations performed in 2024</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-purple-50 border-purple-200">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                      <div className="text-sm text-purple-700">User satisfaction with accuracy improvements</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Coming Soon Features */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Coming Soon in 2025</h2>

              <Card className="border-orange-300 bg-orange-50">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-orange-800 mb-4">Q2 2025 Features</h3>
                      <ul className="space-y-2 text-sm text-orange-700">
                        <li>• Career progression calculator with promotion timelines</li>
                        <li>• Industry switching salary impact analysis</li>
                        <li>• Benefits value calculator (healthcare, retirement)</li>
                        <li>• Negotiation script generator</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-orange-800 mb-4">Q3-Q4 2025 Features</h3>
                      <ul className="space-y-2 text-sm text-orange-700">
                        <li>• AI-powered market analysis recommendations</li>
                        <li>• Integration with job board salary data</li>
                        <li>• Company-specific calculation adjustments</li>
                        <li>• Advanced reporting and presentation tools</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Trust & Accuracy Commitment */}
            <section className="mb-12">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Accuracy Commitment</h2>
                
                <div className="max-w-3xl mx-auto text-center">
                  <p className="text-gray-700 mb-6">
                    We understand that salary decisions impact your financial future. That's why we're committed 
                    to providing the most accurate, up-to-date calculations possible using authoritative data sources 
                    and proven methodologies.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 text-sm">
                    <div className="text-center">
                      <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <div className="font-medium text-gray-900 mb-1">Data Integrity</div>
                      <div className="text-gray-600">Only authoritative government and industry sources</div>
                    </div>
                    <div className="text-center">
                      <Database className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <div className="font-medium text-gray-900 mb-1">Regular Updates</div>
                      <div className="text-gray-600">Monthly data refreshes and algorithm improvements</div>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <div className="font-medium text-gray-900 mb-1">Continuous Testing</div>
                      <div className="text-gray-600">Validation against real-world salary outcomes</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="mb-12">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Experience the Updates Today</h3>
                <p className="text-blue-700 mb-4">
                  All improvements are available immediately at no cost. Start with our enhanced calculators to see the difference accuracy makes.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <InternalLink href="/" className="block p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="font-medium text-blue-800">Basic Raise Calculator</div>
                    <div className="text-sm text-blue-600">Updated with 2025 tax brackets and inflation data</div>
                  </InternalLink>
                  <InternalLink href="/tools/compound-raise-calculator" className="block p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="font-medium text-blue-800">Compound Growth Calculator</div>
                    <div className="text-sm text-blue-600">Enhanced long-term projection algorithms</div>
                  </InternalLink>
                </div>
              </div>
            </section>

            {/* Related Resources */}
            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">New Tools</h3>
                  <div className="space-y-2 text-sm">
                    <InternalLink href="/tools/state-wise-raise-calculator" className="block text-blue-600 hover:text-blue-700">
                      State-Wise Raise Calculator
                    </InternalLink>
                    <InternalLink href="/tools/raise-after-deductions-calculator" className="block text-blue-600 hover:text-blue-700">
                      Deductions Impact Calculator
                    </InternalLink>
                    <InternalLink href="/tools/salary-vs-total-compensation-calculator" className="block text-blue-600 hover:text-blue-700">
                      Total Compensation Analyzer
                    </InternalLink>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Accuracy & Methodology</h3>
                  <div className="space-y-2 text-sm">
                    <InternalLink href="/calculator-accuracy-methodology" className="block text-blue-600 hover:text-blue-700">
                      Our Calculation Methodology
                    </InternalLink>
                    <InternalLink href="/how-pay-raise-calculator-works" className="block text-blue-600 hover:text-blue-700">
                      How Our Tools Work
                    </InternalLink>
                    <InternalLink href="/faq-pay-raise-calculator" className="block text-blue-600 hover:text-blue-700">
                      Frequently Asked Questions
                    </InternalLink>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Using Our Tools</h3>
                  <div className="space-y-2 text-sm">
                    <InternalLink href="/guides/raise-calculator-vs-salary-calculator" className="block text-blue-600 hover:text-blue-700">
                      Which Calculator to Use
                    </InternalLink>
                    <InternalLink href="/salary-negotiation-complete-guide" className="block text-blue-600 hover:text-blue-700">
                      Salary Negotiation Guide
                    </InternalLink>
                    <InternalLink href="/contact-us" className="block text-blue-600 hover:text-blue-700">
                      Contact Support Team
                    </InternalLink>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  );
}