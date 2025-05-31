import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/seo/head";
import { 
  BookOpen, 
  TrendingUp, 
  Calculator, 
  Building2, 
  DollarSign,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Info
} from "lucide-react";

export default function UnderstandingPayRaisesComplete() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Understanding Pay Raises: The Complete Employee Guide 2025",
    "description": "Comprehensive guide covering all types of pay raises, calculations, and economic context for employees.",
    "author": {
      "@type": "Organization",
      "name": "PayRaise Calculator"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PayRaise Calculator",
      "logo": {
        "@type": "ImageObject",
        "url": "https://payraisepercentagecalculator.com/logo.png"
      }
    },
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-01"
  };

  return (
    <>
      <SEOHead
        title="Understanding Pay Raises: Complete Employee Guide 2025"
        description="Comprehensive guide covering all types of pay raises, calculations, and economic context. Learn about merit increases, COLA, promotions, and market adjustments."
        canonical="/guides/understanding-pay-raises-complete"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Understanding Pay Raises: The Complete Employee Guide 2025
              </h1>
              <div className="flex justify-center space-x-4 mb-6">
                <Badge className="bg-green-100 text-green-800">Beginner Friendly</Badge>
                <Badge variant="outline">15 min read</Badge>
                <Badge variant="outline">Updated 2025</Badge>
              </div>
              <p className="text-xl text-gray-600">
                Everything you need to know about pay raises, from types and calculations 
                to economic context and industry trends.
              </p>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg">Table of Contents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <a href="#what-is-pay-raise" className="block text-blue-600 hover:text-blue-800 text-sm">
                      1. What Exactly is a Pay Raise?
                    </a>
                    <a href="#types-of-raises" className="block text-blue-600 hover:text-blue-800 text-sm">
                      2. Types of Pay Raises Explained
                    </a>
                    <a href="#mathematics" className="block text-blue-600 hover:text-blue-800 text-sm">
                      3. The Mathematics of Pay Raise Calculations
                    </a>
                    <a href="#economic-context" className="block text-blue-600 hover:text-blue-800 text-sm">
                      4. Economic Context: How Raises Compare to Inflation
                    </a>
                  </div>
                  <div className="space-y-2">
                    <a href="#industry-patterns" className="block text-blue-600 hover:text-blue-800 text-sm">
                      5. Industry-Specific Raise Patterns
                    </a>
                    <a href="#factors-influencing" className="block text-blue-600 hover:text-blue-800 text-sm">
                      6. Factors Influencing Pay Raises
                    </a>
                    <a href="#planning-strategy" className="block text-blue-600 hover:text-blue-800 text-sm">
                      7. Planning Your Raise Strategy
                    </a>
                    <a href="#common-mistakes" className="block text-blue-600 hover:text-blue-800 text-sm">
                      8. Common Mistakes to Avoid
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
            
            {/* Section 1 */}
            <div id="what-is-pay-raise" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Info className="mr-3 h-8 w-8 text-primary" />
                What Exactly is a Pay Raise?
              </h2>
              
              <Card className="mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4">
                    A pay raise is an increase in your base salary or hourly wage, typically expressed as 
                    a percentage or dollar amount. It represents your employer's recognition of your value, 
                    performance, or market conditions.
                  </p>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Statistical Context</h4>
                    <ul className="text-blue-800 text-sm space-y-1">
                      <li>• 87% of employees receive annual performance reviews</li>
                      <li>• 65% of performance reviews result in some form of raise</li>
                      <li>• Average annual raise in 2025: 4.2% across all industries</li>
                      <li>• 78% of workers have received a raise in the past 2 years</li>
                    </ul>
                  </div>

                  <p className="text-gray-700">
                    Pay raises serve multiple purposes from both employee and employer perspectives. 
                    For employees, they provide financial growth and recognition. For employers, 
                    they help retain talent, maintain competitiveness, and reward performance.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Section 2 */}
            <div id="types-of-raises" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="mr-3 h-8 w-8 text-success" />
                Types of Pay Raises Explained
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-green-700">Cost-of-Living Adjustments (COLA)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">
                      Adjustments to maintain purchasing power against inflation.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>2025 COLA average:</span>
                        <span className="font-semibold">3.2%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Based on:</span>
                        <span>Social Security adjustments</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-3">
                      COLA varies by geographic location and local economic conditions.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-700">Merit-Based Increases</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">
                      Performance-driven raises based on individual achievements.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Typical range:</span>
                        <span className="font-semibold">2-8%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Based on:</span>
                        <span>Performance ratings</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-3">
                      Connected to annual performance review cycles and goal achievement.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-700">Promotional Raises</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">
                      Salary increases accompanying role advancement or increased responsibilities.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Average increase:</span>
                        <span className="font-semibold">10-20%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Range:</span>
                        <span>8-35% depending on level</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-3">
                      Varies significantly based on the scope of new responsibilities.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-orange-700">Market Adjustments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">
                      Raises to maintain competitive positioning in the job market.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Typical range:</span>
                        <span className="font-semibold">5-15%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Purpose:</span>
                        <span>Retention & competitiveness</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-3">
                      Often triggered by salary surveys or competitive job offers.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Section 3 */}
            <div id="mathematics" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Calculator className="mr-3 h-8 w-8 text-primary" />
                The Mathematics of Pay Raise Calculations
              </h2>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Core Formulas Every Employee Should Know</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Percentage Calculation</h4>
                      <code className="block bg-white p-3 rounded border text-sm font-mono">
                        Percentage = ((New Salary - Current Salary) / Current Salary) × 100
                      </code>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">New Salary Calculation</h4>
                      <code className="block bg-white p-3 rounded border text-sm font-mono">
                        New Salary = Current Salary × (1 + Raise Percentage / 100)
                      </code>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Annual to Hourly Conversion</h4>
                      <code className="block bg-white p-3 rounded border text-sm font-mono">
                        Hourly Rate = Annual Salary ÷ (Hours per Week × 52)
                      </code>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Real-World Calculation Examples</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-3">Example 1: 5% raise on $50,000</h4>
                      <div className="space-y-2 text-sm">
                        <div>Current: $50,000</div>
                        <div>Calculation: $50,000 × 1.05</div>
                        <div className="font-semibold">New Salary: $52,500</div>
                        <div className="text-green-700">Monthly increase: +$208</div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-3">Example 2: $3,000 flat increase</h4>
                      <div className="space-y-2 text-sm">
                        <div>Current: $60,000</div>
                        <div>Increase: +$3,000</div>
                        <div className="font-semibold">New Salary: $63,000</div>
                        <div className="text-blue-700">Percentage: 5.0%</div>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-3">Example 3: Hourly to salary</h4>
                      <div className="space-y-2 text-sm">
                        <div>Current: $25/hour</div>
                        <div>40 hrs/week × 52 weeks</div>
                        <div className="font-semibold">Annual: $52,000</div>
                        <div className="text-purple-700">$2 raise = 8% increase</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <Link href="/">
                  <Button className="bg-primary hover:bg-blue-700">
                    <Calculator className="mr-2 h-4 w-4" />
                    Try Our Calculator
                  </Button>
                </Link>
              </div>
            </div>

            {/* Section 4 */}
            <div id="economic-context" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <BarChart3 className="mr-3 h-8 w-8 text-yellow-600" />
                Economic Context: How Raises Compare to Inflation
              </h2>

              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Current Economic Indicators</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between p-3 bg-yellow-50 rounded">
                          <span>Current CPI:</span>
                          <span className="font-semibold text-yellow-700">3.1%</span>
                        </div>
                        <div className="flex justify-between p-3 bg-green-50 rounded">
                          <span>Average 2025 raise:</span>
                          <span className="font-semibold text-green-700">4.2%</span>
                        </div>
                        <div className="flex justify-between p-3 bg-blue-50 rounded">
                          <span>Real wage growth:</span>
                          <span className="font-semibold text-blue-700">1.1%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Understanding Real vs. Nominal</h4>
                      <p className="text-gray-600 mb-3">
                        <strong>Nominal raise:</strong> The actual percentage increase in your salary.
                      </p>
                      <p className="text-gray-600 mb-3">
                        <strong>Real raise:</strong> Your purchasing power increase after accounting for inflation.
                      </p>
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3">
                        <p className="text-sm text-yellow-800">
                          <strong>Key insight:</strong> A 3.1% raise in 2025 maintains your purchasing power, 
                          while anything above creates real income growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Historical Raise vs. Inflation Trends (2020-2025)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { year: "2020", raise: 3.0, inflation: 1.2, real: 1.8 },
                      { year: "2021", raise: 3.2, inflation: 4.7, real: -1.5 },
                      { year: "2022", raise: 4.1, inflation: 8.0, real: -3.9 },
                      { year: "2023", raise: 4.5, inflation: 3.4, real: 1.1 },
                      { year: "2024", raise: 4.3, inflation: 2.9, real: 1.4 },
                      { year: "2025", raise: 4.2, inflation: 3.1, real: 1.1 }
                    ].map((data) => (
                      <div key={data.year} className="grid grid-cols-4 gap-4 p-3 bg-gray-50 rounded text-sm">
                        <div className="font-semibold">{data.year}</div>
                        <div>Avg raise: {data.raise}%</div>
                        <div>Inflation: {data.inflation}%</div>
                        <div className={`font-semibold ${data.real > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          Real: {data.real > 0 ? '+' : ''}{data.real}%
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Section 5 */}
            <div id="industry-patterns" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Building2 className="mr-3 h-8 w-8 text-blue-600" />
                Industry-Specific Raise Patterns
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-700">Above-Market Industries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between p-2 bg-green-50 rounded">
                        <span>Technology</span>
                        <span className="font-semibold">4.2%</span>
                      </div>
                      <div className="flex justify-between p-2 bg-green-50 rounded">
                        <span>Finance</span>
                        <span className="font-semibold">4.0%</span>
                      </div>
                      <div className="flex justify-between p-2 bg-green-50 rounded">
                        <span>Professional Services</span>
                        <span className="font-semibold">3.9%</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-3">
                      High demand for specialized skills drives competitive compensation.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-orange-700">Market-Average Industries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between p-2 bg-yellow-50 rounded">
                        <span>Healthcare</span>
                        <span className="font-semibold">3.8%</span>
                      </div>
                      <div className="flex justify-between p-2 bg-yellow-50 rounded">
                        <span>Manufacturing</span>
                        <span className="font-semibold">3.5%</span>
                      </div>
                      <div className="flex justify-between p-2 bg-yellow-50 rounded">
                        <span>Retail</span>
                        <span className="font-semibold">3.2%</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-3">
                      Steady growth with regional and company-size variations.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Link href="/industry-raise-benchmarks-2025">
                  <Button variant="outline">
                    View Complete Industry Analysis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-primary text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Calculate Your Raise?</h3>
              <p className="text-blue-100 mb-6">
                Use our professional calculator to plan your salary increase strategy
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/">
                  <Button className="bg-white text-primary hover:bg-gray-100">
                    <Calculator className="mr-2 h-4 w-4" />
                    Calculate My Raise
                  </Button>
                </Link>
                <Link href="/salary-negotiation-complete-guide">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    Negotiation Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
