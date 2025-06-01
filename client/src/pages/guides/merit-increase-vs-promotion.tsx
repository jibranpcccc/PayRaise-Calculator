import { SEOHead } from "@/components/seo/head";
import { SchemaGenerator } from "@/components/seo/schema-generator";
import { InternalLink } from "@/components/seo/internal-link-checker";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Star, Calculator, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

export default function MeritIncreaseVsPromotion() {
  const comparisonData = [
    {
      aspect: "Typical Increase Amount",
      merit: "2-8% of current salary",
      promotion: "10-25% of current salary",
      winner: "promotion"
    },
    {
      aspect: "Frequency",
      merit: "Annual or bi-annual",
      promotion: "Every 2-5 years typically",
      winner: "merit"
    },
    {
      aspect: "Requirements",
      merit: "Good performance ratings",
      promotion: "Exceptional performance + new skills",
      winner: "merit"
    },
    {
      aspect: "Career Impact",
      merit: "Maintains current trajectory",
      promotion: "Accelerates career growth",
      winner: "promotion"
    },
    {
      aspect: "Negotiation Difficulty",
      merit: "Moderate - based on performance",
      promotion: "High - requires business case",
      winner: "merit"
    }
  ];

  const meritStrategies = [
    {
      title: "Document Performance Consistently",
      description: "Maintain detailed records of achievements, KPIs met, and contributions throughout the review period."
    },
    {
      title: "Exceed Expectations Regularly",
      description: "Go beyond basic job requirements and demonstrate value-add behaviors consistently."
    },
    {
      title: "Seek Feedback Proactively",
      description: "Regular check-ins with supervisors to ensure you're meeting or exceeding performance standards."
    }
  ];

  const promotionStrategies = [
    {
      title: "Develop Next-Level Skills",
      description: "Acquire competencies required for the target position before the promotion opportunity arises."
    },
    {
      title: "Demonstrate Leadership",
      description: "Take on additional responsibilities and show ability to manage projects or mentor others."
    },
    {
      title: "Build Strategic Relationships",
      description: "Network within the organization and gain visibility with decision-makers in target departments."
    }
  ];

  return (
    <>
      <SEOHead
        title="Merit Increase vs Promotion: Salary Growth Strategies Compared 2025"
        description="Understanding the key differences between merit increases and promotional raises. Compare salary growth potential, requirements, and strategies for both paths to maximize your income."
        keywords="merit increase vs promotion, salary increase types, promotional raise, merit raise, career advancement salary"
        structuredData={SchemaGenerator.article({
          headline: "Merit Increase vs Promotion: Complete Comparison Guide",
          description: "Comprehensive comparison of merit increases and promotional raises, including salary impacts, requirements, and strategic approaches for each path.",
          url: "https://payraisepercentagecalculator.com/guides/merit-increase-vs-promotion",
          datePublished: "2025-01-01",
          author: "PayRaise Calculator Team"
        })}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Salary Growth Strategy</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Merit Increase vs Promotion: Which Path to Higher Pay?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Understanding the fundamental differences between merit increases and promotional raises 
              can help you choose the right strategy for maximizing your salary growth and career advancement.
            </p>
          </div>

          {/* Quick Comparison Card */}
          <Card className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <TrendingUp className="mr-3 h-6 w-6 text-blue-600" />
                Quick Comparison Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-4">
                    <Star className="h-6 w-6 text-yellow-500 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">Merit Increase</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Performance-based salary adjustment within your current role</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Typical Range:</span>
                      <span className="font-medium text-green-600">2-8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Frequency:</span>
                      <span className="font-medium">Annual</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Difficulty:</span>
                      <span className="font-medium text-yellow-600">Moderate</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-indigo-100">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-purple-500 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">Promotion</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Role advancement with increased responsibilities and compensation</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Typical Range:</span>
                      <span className="font-medium text-green-600">10-25%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Frequency:</span>
                      <span className="font-medium">2-5 years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Difficulty:</span>
                      <span className="font-medium text-red-600">High</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Comparison Table */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Detailed Side-by-Side Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Aspect</th>
                      <th className="text-left py-3 px-4 font-semibold text-blue-600">Merit Increase</th>
                      <th className="text-left py-3 px-4 font-semibold text-purple-600">Promotion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-4 px-4 font-medium text-gray-900">{row.aspect}</td>
                        <td className={`py-4 px-4 ${row.winner === 'merit' ? 'bg-green-50 font-medium text-green-800' : 'text-gray-600'}`}>
                          {row.merit}
                          {row.winner === 'merit' && <CheckCircle className="inline ml-2 h-4 w-4 text-green-600" />}
                        </td>
                        <td className={`py-4 px-4 ${row.winner === 'promotion' ? 'bg-green-50 font-medium text-green-800' : 'text-gray-600'}`}>
                          {row.promotion}
                          {row.winner === 'promotion' && <CheckCircle className="inline ml-2 h-4 w-4 text-green-600" />}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Strategies Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Merit Increase Strategies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Star className="mr-2 h-5 w-5 text-yellow-500" />
                  Merit Increase Strategies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Focus on consistent performance and measurable contributions within your current role.
                </p>
                <div className="space-y-4">
                  {meritStrategies.map((strategy, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{strategy.title}</h4>
                      <p className="text-sm text-gray-600">{strategy.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <InternalLink href="/tools/salary-negotiation-calculator">
                    <Button className="w-full">Calculate Merit Increase Target</Button>
                  </InternalLink>
                </div>
              </CardContent>
            </Card>

            {/* Promotion Strategies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Users className="mr-2 h-5 w-5 text-purple-500" />
                  Promotion Strategies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Demonstrate readiness for increased responsibility and leadership roles.
                </p>
                <div className="space-y-4">
                  {promotionStrategies.map((strategy, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{strategy.title}</h4>
                      <p className="text-sm text-gray-600">{strategy.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <InternalLink href="/tools/promotion-salary-calculator">
                    <Button className="w-full">Calculate Promotion Salary</Button>
                  </InternalLink>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* When to Choose Each Path */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">When to Choose Each Path</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Choose Merit Increase When:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-800">You're satisfied with your current role and responsibilities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-800">Your performance consistently exceeds expectations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-800">Market rates for your position have increased</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-800">You want regular, predictable salary growth</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">Choose Promotion When:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-purple-800">You're ready for increased responsibility</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-purple-800">You've outgrown your current role</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-purple-800">You want accelerated career advancement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-purple-800">Significant salary increases are your priority</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Real-World Examples */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Real-World Salary Impact Examples</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Merit Increase Example</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Current Salary:</span>
                      <span className="font-medium">$70,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Merit Increase:</span>
                      <span className="font-medium text-green-600">5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">New Salary:</span>
                      <span className="font-bold text-green-700">$73,500</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Annual Increase:</span>
                      <span className="text-green-600">+$3,500</span>
                    </div>
                  </div>
                </div>
                
                <div className="border border-purple-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-900 mb-4">Promotion Example</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Current Salary:</span>
                      <span className="font-medium">$70,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Promotion Increase:</span>
                      <span className="font-medium text-green-600">18%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">New Salary:</span>
                      <span className="font-bold text-green-700">$82,600</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Annual Increase:</span>
                      <span className="text-green-600">+$12,600</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <InternalLink href="/">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <Calculator className="mr-2 h-5 w-5" />
                    Calculate Your Scenario
                  </Button>
                </InternalLink>
              </div>
            </CardContent>
          </Card>

          {/* Related Resources */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Related Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Negotiation Strategies</h4>
                  <p className="text-sm text-gray-600 mb-3">Learn proven tactics for both merit and promotion discussions.</p>
                  <InternalLink href="/guides/negotiating-salary-increase-strategies">
                    <Button variant="outline" size="sm" className="w-full">
                      Read Guide <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </InternalLink>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Performance Review Prep</h4>
                  <p className="text-sm text-gray-600 mb-3">Prepare effectively for discussions about merit increases.</p>
                  <InternalLink href="/guides/performance-review-raise-preparation">
                    <Button variant="outline" size="sm" className="w-full">
                      Get Prepared <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </InternalLink>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Industry Benchmarks</h4>
                  <p className="text-sm text-gray-600 mb-3">Compare your potential increases against market standards.</p>
                  <InternalLink href="/industry-raise-benchmarks-2025">
                    <Button variant="outline" size="sm" className="w-full">
                      View Data <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </InternalLink>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </>
  );
}