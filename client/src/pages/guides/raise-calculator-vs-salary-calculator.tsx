import { SEOHead } from "@/components/seo/head";
import { SchemaGenerator } from "@/components/seo/schema-generator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { InternalLink } from "@/components/seo/internal-link-checker";
import { Calculator, TrendingUp, DollarSign, CheckCircle, XCircle } from "lucide-react";

export default function RaiseCalculatorVsSalaryCalculator() {
  const structuredData = SchemaGenerator.learningResource({
    name: "Raise Calculator vs Salary Calculator: Complete Comparison Guide",
    description: "Understand the key differences between raise calculators and salary calculators, when to use each tool, and how they complement your career planning.",
    url: "https://payraisepercentagecalculator.com/guides/raise-calculator-vs-salary-calculator"
  });

  return (
    <>
      <SEOHead
        title="Raise Calculator vs Salary Calculator - Which Tool to Use When"
        description="Learn the key differences between raise calculators and salary calculators. Discover when to use each tool for optimal career and financial planning."
        canonical="https://payraisepercentagecalculator.com/guides/raise-calculator-vs-salary-calculator"
        keywords="raise calculator vs salary calculator, pay increase tools, salary comparison tools, compensation calculators"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-indigo-50">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center space-x-4 mb-6">
              <Badge className="bg-white text-blue-700">Tool Comparison</Badge>
              <Badge variant="outline" className="border-white text-white">Expert Guide</Badge>
              <Badge variant="outline" className="border-white text-white">Career Planning</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Raise Calculator vs Salary Calculator
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Understanding the differences between these essential tools and when to use each for your career advancement and financial planning.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Quick Overview */}
            <section className="mb-12">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <TrendingUp className="h-6 w-6 text-blue-600" />
                      Raise Calculator
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Focuses on calculating the impact of salary increases from your current position.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Calculate percentage or dollar increases</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Factor in taxes and inflation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Project long-term compound growth</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <DollarSign className="h-6 w-6 text-green-600" />
                      Salary Calculator
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Helps determine appropriate salary ranges for specific roles and locations.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Research market rates by position</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Compare across different locations</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Factor in experience and education</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Key Differences Table */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Differences at a Glance</h2>
              
              <Card>
                <CardContent className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Feature</th>
                          <th className="text-center py-3 px-4 font-semibold text-blue-600">Raise Calculator</th>
                          <th className="text-center py-3 px-4 font-semibold text-green-600">Salary Calculator</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr className="border-b border-gray-100">
                          <td className="py-3 px-4 font-medium">Primary Purpose</td>
                          <td className="py-3 px-4 text-center">Calculate raise impact</td>
                          <td className="py-3 px-4 text-center">Determine market rates</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 px-4 font-medium">Starting Point</td>
                          <td className="py-3 px-4 text-center">Current salary</td>
                          <td className="py-3 px-4 text-center">Job role/title</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 px-4 font-medium">Best Used For</td>
                          <td className="py-3 px-4 text-center">Existing employees</td>
                          <td className="py-3 px-4 text-center">Job seekers/career changers</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 px-4 font-medium">Time Horizon</td>
                          <td className="py-3 px-4 text-center">Short to long-term</td>
                          <td className="py-3 px-4 text-center">Current market snapshot</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 px-4 font-medium">Inflation Factor</td>
                          <td className="py-3 px-4 text-center">Often included</td>
                          <td className="py-3 px-4 text-center">Market-adjusted</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium">Tax Considerations</td>
                          <td className="py-3 px-4 text-center">Detailed impact analysis</td>
                          <td className="py-3 px-4 text-center">Basic net salary estimates</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* When to Use Each */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">When to Use Each Calculator</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">Use a Raise Calculator When:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <strong>Preparing for performance reviews</strong>
                          <p className="text-sm text-gray-600">Calculate what different raise percentages mean for your take-home pay</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <strong>Negotiating salary increases</strong>
                          <p className="text-sm text-gray-600">Understand the real value of proposed raises after taxes and inflation</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <strong>Long-term financial planning</strong>
                          <p className="text-sm text-gray-600">Project how compound raises will impact your future earnings</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <strong>Comparing job offers</strong>
                          <p className="text-sm text-gray-600">When the new offer is an increase from your current salary</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <strong>Understanding promotion impact</strong>
                          <p className="text-sm text-gray-600">Calculate the financial benefit of moving to a higher role</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">Use a Salary Calculator When:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <strong>Job searching</strong>
                          <p className="text-sm text-gray-600">Research market rates for positions you're considering</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <strong>Career planning</strong>
                          <p className="text-sm text-gray-600">Understand earning potential in different roles or industries</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <strong>Relocating for work</strong>
                          <p className="text-sm text-gray-600">Compare salaries across different cities or states</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <strong>Starting salary negotiations</strong>
                          <p className="text-sm text-gray-600">When you need baseline market data for a new position</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <strong>Hiring decisions</strong>
                          <p className="text-sm text-gray-600">If you're an employer setting competitive compensation</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Common Misconceptions */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Common Misconceptions</h2>
              
              <div className="space-y-6">
                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <XCircle className="h-6 w-6 text-red-500 mt-1" />
                      <div>
                        <h3 className="font-semibold text-red-800 mb-2">Myth: "They're the same thing"</h3>
                        <p className="text-red-700 text-sm">
                          While both deal with compensation, they serve different purposes. Raise calculators focus on increases from a baseline, 
                          while salary calculators determine market-appropriate baseline salaries.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <XCircle className="h-6 w-6 text-red-500 mt-1" />
                      <div>
                        <h3 className="font-semibold text-red-800 mb-2">Myth: "You only need one or the other"</h3>
                        <p className="text-red-700 text-sm">
                          Smart career planning involves using both tools. Use salary calculators to understand your market value, 
                          then use raise calculators to negotiate improvements from your current position.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <XCircle className="h-6 w-6 text-red-500 mt-1" />
                      <div>
                        <h3 className="font-semibold text-red-800 mb-2">Myth: "Salary calculators are only for job seekers"</h3>
                        <p className="text-red-700 text-sm">
                          Current employees should regularly check salary calculators to ensure they're not falling behind market rates. 
                          This information strengthens your case when requesting raises.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Practical Examples */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Practical Examples</h2>
              
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Scenario 1: Current Employee Seeking a Raise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <p className="text-blue-800 font-medium mb-2">Sarah's Situation:</p>
                      <p className="text-blue-700 text-sm">
                        Sarah is a marketing manager earning $65,000. She's been in her role for 2 years and wants to request a raise.
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-blue-600 mb-2">Step 1: Use Salary Calculator</h4>
                        <p className="text-sm text-gray-600">
                          Research current market rates for marketing managers with her experience level and location.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-600 mb-2">Step 2: Use Raise Calculator</h4>
                        <p className="text-sm text-gray-600">
                          Calculate what a 10% raise would mean for her take-home pay and long-term financial goals.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                      <p className="text-green-800 text-sm">
                        <strong>Result:</strong> Sarah discovers she's $8,000 below market rate and uses the raise calculator 
                        to show her manager the impact of bringing her to market level.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Scenario 2: Job Seeker Comparing Offers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <p className="text-green-800 font-medium mb-2">Mike's Situation:</p>
                      <p className="text-green-700 text-sm">
                        Mike is a software developer considering two job offers: $95,000 in Austin vs $110,000 in San Francisco.
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-green-600 mb-2">Step 1: Use Salary Calculator</h4>
                        <p className="text-sm text-gray-600">
                          Research typical developer salaries in both cities, adjusting for cost of living differences.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-green-600 mb-2">Step 2: Use Raise Calculator</h4>
                        <p className="text-sm text-gray-600">
                          Compare both offers against his current $85,000 salary to understand the real financial improvement.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-blue-800 text-sm">
                        <strong>Result:</strong> After accounting for cost of living and taxes, the Austin offer provides 
                        better purchasing power despite the lower nominal salary.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Tool Recommendations */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Tool Recommendations</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-blue-600 flex items-center gap-2">
                      <Calculator className="h-5 w-5" />
                      Raise Calculator Tools
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <InternalLink href="/" className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                        <div className="font-medium text-blue-800">Pay Raise Percentage Calculator</div>
                        <div className="text-sm text-blue-600">Basic raise calculations with tax impact</div>
                      </InternalLink>
                      <InternalLink href="/tools/compound-raise-calculator" className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                        <div className="font-medium text-blue-800">Compound Raise Calculator</div>
                        <div className="text-sm text-blue-600">Multi-year projection analysis</div>
                      </InternalLink>
                      <InternalLink href="/tools/inflation-adjusted-raise-calculator" className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                        <div className="font-medium text-blue-800">Inflation-Adjusted Calculator</div>
                        <div className="text-sm text-blue-600">Real purchasing power analysis</div>
                      </InternalLink>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="text-green-600 flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      Market Research Tools
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <InternalLink href="/tools/salary-vs-total-compensation-calculator" className="block p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                        <div className="font-medium text-green-800">Total Compensation Calculator</div>
                        <div className="text-sm text-green-600">Complete package analysis</div>
                      </InternalLink>
                      <InternalLink href="/tools/state-wise-raise-calculator" className="block p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                        <div className="font-medium text-green-800">State-Wise Calculator</div>
                        <div className="text-sm text-green-600">Location-based salary analysis</div>
                      </InternalLink>
                      <InternalLink href="/industry-raise-benchmarks-2025" className="block p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                        <div className="font-medium text-green-800">Industry Benchmarks</div>
                        <div className="text-sm text-green-600">Market data by industry</div>
                      </InternalLink>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Best Practices */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Best Practices for Using Both Tools</h2>
              
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">For Current Employees</h3>
                      <ol className="space-y-2 text-sm text-gray-600">
                        <li>1. <strong>Annual market check:</strong> Use salary calculators yearly to ensure you're at market rate</li>
                        <li>2. <strong>Pre-review preparation:</strong> Use raise calculators before performance reviews</li>
                        <li>3. <strong>Multiple scenarios:</strong> Calculate different raise percentages to find your target</li>
                        <li>4. <strong>Long-term planning:</strong> Use compound calculators for career trajectory planning</li>
                      </ol>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">For Job Seekers</h3>
                      <ol className="space-y-2 text-sm text-gray-600">
                        <li>1. <strong>Market research first:</strong> Use salary calculators before applying</li>
                        <li>2. <strong>Offer comparison:</strong> Use raise calculators to compare against current salary</li>
                        <li>3. <strong>Negotiation prep:</strong> Calculate different offer scenarios</li>
                        <li>4. <strong>Total package analysis:</strong> Include benefits and perks in calculations</li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Related Resources */}
            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Guides</h3>
                  <div className="space-y-2 text-sm">
                    <InternalLink href="/guides/understanding-pay-raises-complete" className="block text-blue-600 hover:text-blue-700">
                      Understanding Pay Raises
                    </InternalLink>
                    <InternalLink href="/guides/market-value-salary-research" className="block text-blue-600 hover:text-blue-700">
                      Salary Research Methods
                    </InternalLink>
                    <InternalLink href="/salary-negotiation-complete-guide" className="block text-blue-600 hover:text-blue-700">
                      Salary Negotiation Guide
                    </InternalLink>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Calculators</h3>
                  <div className="space-y-2 text-sm">
                    <InternalLink href="/" className="block text-blue-600 hover:text-blue-700">
                      Basic Raise Calculator
                    </InternalLink>
                    <InternalLink href="/tools/salary-vs-total-compensation-calculator" className="block text-blue-600 hover:text-blue-700">
                      Total Compensation Tool
                    </InternalLink>
                    <InternalLink href="/tools/state-wise-raise-calculator" className="block text-blue-600 hover:text-blue-700">
                      State-Wise Analysis
                    </InternalLink>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Articles</h3>
                  <div className="space-y-2 text-sm">
                    <InternalLink href="/blog/when-ask-for-raise-optimal-timing" className="block text-blue-600 hover:text-blue-700">
                      Optimal Raise Timing
                    </InternalLink>
                    <InternalLink href="/blog/average-raise-by-industry-2025" className="block text-blue-600 hover:text-blue-700">
                      Industry Benchmarks
                    </InternalLink>
                    <InternalLink href="/how-pay-raise-calculator-works" className="block text-blue-600 hover:text-blue-700">
                      How Calculators Work
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