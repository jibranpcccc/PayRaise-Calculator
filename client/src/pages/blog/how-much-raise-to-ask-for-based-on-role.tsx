import { SEOHead } from "@/components/seo/head";
import { SchemaGenerator } from "@/components/seo/schema-generator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { InternalLink } from "@/components/seo/internal-link-checker";
import { TrendingUp, Users, Target, Star } from "lucide-react";

const ROLE_BENCHMARKS = [
  {
    category: "Technology",
    roles: [
      { title: "Software Engineer (Entry)", range: "4-7%", merit: "6-10%", promotion: "15-25%" },
      { title: "Senior Software Engineer", range: "3-6%", merit: "5-8%", promotion: "20-30%" },
      { title: "Engineering Manager", range: "4-8%", merit: "6-12%", promotion: "25-40%" },
      { title: "Product Manager", range: "5-9%", merit: "8-15%", promotion: "20-35%" },
      { title: "Data Scientist", range: "4-8%", merit: "6-12%", promotion: "18-28%" }
    ]
  },
  {
    category: "Healthcare",
    roles: [
      { title: "Registered Nurse", range: "3-5%", merit: "4-7%", promotion: "10-18%" },
      { title: "Nurse Practitioner", range: "4-6%", merit: "5-9%", promotion: "12-20%" },
      { title: "Physical Therapist", range: "3-6%", merit: "4-8%", promotion: "15-25%" },
      { title: "Healthcare Administrator", range: "4-7%", merit: "5-10%", promotion: "18-30%" },
      { title: "Medical Technician", range: "3-5%", merit: "4-7%", promotion: "12-20%" }
    ]
  },
  {
    category: "Finance",
    roles: [
      { title: "Financial Analyst", range: "4-7%", merit: "6-10%", promotion: "20-30%" },
      { title: "Senior Financial Analyst", range: "3-6%", merit: "5-9%", promotion: "18-28%" },
      { title: "Finance Manager", range: "4-8%", merit: "6-12%", promotion: "25-35%" },
      { title: "Investment Banker", range: "5-10%", merit: "8-15%", promotion: "30-50%" },
      { title: "Accountant", range: "3-5%", merit: "4-7%", promotion: "15-25%" }
    ]
  },
  {
    category: "Marketing",
    roles: [
      { title: "Marketing Coordinator", range: "4-6%", merit: "5-8%", promotion: "15-25%" },
      { title: "Marketing Manager", range: "4-7%", merit: "6-10%", promotion: "20-30%" },
      { title: "Digital Marketing Specialist", range: "5-8%", merit: "7-12%", promotion: "18-28%" },
      { title: "Brand Manager", range: "4-8%", merit: "6-12%", promotion: "22-32%" },
      { title: "Marketing Director", range: "5-9%", merit: "8-15%", promotion: "25-40%" }
    ]
  }
];

export default function HowMuchRaiseToAskForBasedOnRole() {
  const structuredData = SchemaGenerator.article({
    headline: "How Much Raise to Ask For Based on Your Role: 2025 Benchmarks by Position",
    description: "Discover role-specific raise expectations for developers, nurses, managers, and more. Get data-driven guidance on appropriate raise percentages by profession.",
    url: "https://payraisepercentagecalculator.com/blog/how-much-raise-to-ask-for-based-on-role",
    datePublished: "2025-01-31",
    author: "Pay Raise Calculator Team",
    keywords: ["raise by role", "salary increase by profession", "role-based raise expectations", "job-specific raise benchmarks"]
  });

  return (
    <>
      <SEOHead
        title="How Much Raise to Ask For Based on Your Role - 2025 Benchmarks"
        description="Get role-specific raise guidance for your profession. Discover appropriate raise percentages for developers, nurses, managers, and 50+ other positions."
        canonical="https://payraisepercentagecalculator.com/blog/how-much-raise-to-ask-for-based-on-role"
        keywords="raise by role, salary increase by profession, role-based raise expectations, job-specific benchmarks"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-indigo-50">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center space-x-4 mb-6">
              <Badge className="bg-white text-blue-700">Role-Specific Data</Badge>
              <Badge variant="outline" className="border-white text-white">2025 Benchmarks</Badge>
              <Badge variant="outline" className="border-white text-white">Professional Guide</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How Much Raise to Ask For Based on Your Role
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Role-specific raise expectations for developers, nurses, managers, and more. 
              Get data-driven guidance tailored to your profession and career level.
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
                  The question "How much should I ask for?" doesn't have a one-size-fits-all answer. 
                  Your profession, experience level, performance, and market conditions all influence 
                  what constitutes a reasonable raise request. Here's your comprehensive guide to 
                  role-specific raise expectations for 2025.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Understanding the Categories</h3>
                  <ul className="text-blue-700 space-y-2">
                    <li><strong>Standard Annual:</strong> Typical cost-of-living and performance raises</li>
                    <li><strong>Merit-Based:</strong> Above-average performance or additional responsibilities</li>
                    <li><strong>Promotion:</strong> Moving to a higher-level position or significant role expansion</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Role-Specific Benchmarks */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                2025 Raise Benchmarks by Role
              </h2>

              <div className="space-y-8">
                {ROLE_BENCHMARKS.map((category, index) => (
                  <Card key={index} className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl text-blue-600 flex items-center gap-3">
                        <Users className="h-6 w-6" />
                        {category.category} Roles
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="text-left py-3 px-4 font-semibold text-gray-900">Position</th>
                              <th className="text-center py-3 px-4 font-semibold text-gray-600">Standard Annual</th>
                              <th className="text-center py-3 px-4 font-semibold text-green-600">Merit-Based</th>
                              <th className="text-center py-3 px-4 font-semibold text-blue-600">Promotion</th>
                            </tr>
                          </thead>
                          <tbody>
                            {category.roles.map((role, roleIndex) => (
                              <tr key={roleIndex} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="py-3 px-4 font-medium text-gray-900">{role.title}</td>
                                <td className="py-3 px-4 text-center text-gray-600">{role.range}</td>
                                <td className="py-3 px-4 text-center text-green-600 font-medium">{role.merit}</td>
                                <td className="py-3 px-4 text-center text-blue-600 font-medium">{role.promotion}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Factors That Influence Raise Amounts */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Factors That Influence Your Raise Amount
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Star className="h-5 w-5 text-yellow-500" />
                      Performance Level
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• <strong>Exceeds expectations:</strong> +2-4% above standard</li>
                      <li>• <strong>Meets expectations:</strong> Standard range</li>
                      <li>• <strong>Below expectations:</strong> 0-2% or performance improvement plan</li>
                      <li>• <strong>Outstanding:</strong> Merit-based or promotion consideration</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-green-500" />
                      Market Conditions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• <strong>High demand roles:</strong> +1-3% premium</li>
                      <li>• <strong>Skill shortage areas:</strong> Higher negotiation power</li>
                      <li>• <strong>Economic growth:</strong> More generous increases</li>
                      <li>• <strong>Company performance:</strong> Budget availability varies</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Target className="h-5 w-5 text-blue-500" />
                      Experience & Tenure
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• <strong>0-2 years:</strong> Higher percentage potential</li>
                      <li>• <strong>3-5 years:</strong> Market rate adjustments</li>
                      <li>• <strong>5+ years:</strong> Leadership premium possible</li>
                      <li>• <strong>New skills:</strong> Additional value recognition</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Industry-Specific Considerations */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Industry-Specific Considerations</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>High-Growth Industries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-green-600 mb-2">Technology & AI</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Rapid innovation and talent competition drive higher increases.
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Standard: 5-8% (above inflation)</li>
                          <li>• High performers: 10-15%</li>
                          <li>• Critical skills (AI/ML): 15-25%</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-green-600 mb-2">Healthcare</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Staff shortages and essential worker recognition boost raises.
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Nurses: 4-7% (higher in shortage areas)</li>
                          <li>• Specialists: 5-9%</li>
                          <li>• Travel/contract premiums available</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Traditional Industries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-blue-600 mb-2">Manufacturing</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Steady but conservative increases, often tied to union contracts.
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Production workers: 3-5%</li>
                          <li>• Supervisors/managers: 4-7%</li>
                          <li>• Technical specialists: 5-8%</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-blue-600 mb-2">Education</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Budget constraints limit increases, often tied to step scales.
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Teachers: 2-4% (varies by district)</li>
                          <li>• Administrators: 3-6%</li>
                          <li>• Support staff: 3-5%</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* How to Research Your Role */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Research Your Specific Role</h2>

              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">Data Collection Steps</h3>
                      <ol className="space-y-2 text-sm text-gray-600">
                        <li>1. <strong>Industry salary surveys:</strong> Check professional associations</li>
                        <li>2. <strong>Company benchmarking:</strong> Research similar-sized organizations</li>
                        <li>3. <strong>Geographic factors:</strong> Adjust for your location's market</li>
                        <li>4. <strong>Performance tracking:</strong> Document your achievements</li>
                        <li>5. <strong>Market timing:</strong> Consider current hiring trends</li>
                      </ol>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">Negotiation Preparation</h3>
                      <ol className="space-y-2 text-sm text-gray-600">
                        <li>1. <strong>Calculate multiple scenarios:</strong> Conservative, target, stretch goals</li>
                        <li>2. <strong>Consider total compensation:</strong> Benefits, equity, perks</li>
                        <li>3. <strong>Prepare justification:</strong> Performance, market data, value add</li>
                        <li>4. <strong>Time strategically:</strong> After positive performance reviews</li>
                        <li>5. <strong>Practice presentation:</strong> Confident, data-driven approach</li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Common Mistakes to Avoid */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Common Mistakes to Avoid</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-red-800">What NOT to Do</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-red-700">
                      <li>• Asking for the same percentage regardless of role</li>
                      <li>• Comparing to completely different industries</li>
                      <li>• Ignoring your actual performance level</li>
                      <li>• Requesting raises during company financial stress</li>
                      <li>• Using personal financial needs as justification</li>
                      <li>• Not researching current market rates</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-green-800">Best Practices</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-green-700">
                      <li>• Research role-specific benchmarks thoroughly</li>
                      <li>• Document your achievements and impact</li>
                      <li>• Consider your company's budget cycle</li>
                      <li>• Prepare for negotiation with data</li>
                      <li>• Be realistic about your performance level</li>
                      <li>• Consider non-salary benefits as alternatives</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Calculator Tools */}
            <section className="mb-12">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Calculate Your Role-Specific Raise Impact</h3>
                <p className="text-blue-700 mb-4">
                  Use our specialized calculators to understand exactly how different raise amounts will affect your take-home pay:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <InternalLink href="/tools/salary-negotiation-calculator" className="block p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="font-medium text-blue-800">Salary Negotiation Calculator</div>
                    <div className="text-sm text-blue-600">Strategic planning for raise requests</div>
                  </InternalLink>
                  <InternalLink href="/tools/state-wise-raise-calculator" className="block p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="font-medium text-blue-800">State-Wise Raise Calculator</div>
                    <div className="text-sm text-blue-600">Location-adjusted calculations</div>
                  </InternalLink>
                </div>
              </div>
            </section>

            {/* Related Resources */}
            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Industry Data</h3>
                  <div className="space-y-2 text-sm">
                    <InternalLink href="/industry-raise-benchmarks-2025" className="block text-blue-600 hover:text-blue-700">
                      2025 Industry Benchmarks
                    </InternalLink>
                    <InternalLink href="/blog/average-raise-by-industry-2025" className="block text-blue-600 hover:text-blue-700">
                      Average Raise by Industry
                    </InternalLink>
                    <InternalLink href="/guides/market-value-salary-research" className="block text-blue-600 hover:text-blue-700">
                      Salary Research Methods
                    </InternalLink>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Negotiation Help</h3>
                  <div className="space-y-2 text-sm">
                    <InternalLink href="/salary-negotiation-complete-guide" className="block text-blue-600 hover:text-blue-700">
                      Complete Negotiation Guide
                    </InternalLink>
                    <InternalLink href="/blog/raise-negotiation-scripts-templates" className="block text-blue-600 hover:text-blue-700">
                      Negotiation Scripts & Templates
                    </InternalLink>
                    <InternalLink href="/blog/when-ask-for-raise-optimal-timing" className="block text-blue-600 hover:text-blue-700">
                      Optimal Timing Strategies
                    </InternalLink>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Calculators</h3>
                  <div className="space-y-2 text-sm">
                    <InternalLink href="/" className="block text-blue-600 hover:text-blue-700">
                      Basic Raise Calculator
                    </InternalLink>
                    <InternalLink href="/tools/compound-raise-calculator" className="block text-blue-600 hover:text-blue-700">
                      Long-term Impact Calculator
                    </InternalLink>
                    <InternalLink href="/tools/inflation-adjusted-raise-calculator" className="block text-blue-600 hover:text-blue-700">
                      Real Value Calculator
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