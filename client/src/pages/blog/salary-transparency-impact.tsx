import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo/head";
import { Link } from "wouter";
import { 
  Eye, 
  TrendingUp, 
  Users,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Scale,
  Building2,
  BarChart3,
  MapPin
} from "lucide-react";

export default function SalaryTransparencyImpact() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Salary Transparency Impact: How Pay Disclosure Laws Change Negotiations",
    "description": "Explore how salary transparency laws are transforming pay negotiations. Learn strategies for leveraging transparency in your career advancement and salary discussions.",
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
    "datePublished": "2025-01-12",
    "dateModified": "2025-01-12"
  };

  const transparencyLaws = [
    {
      location: "New York City",
      status: "Active",
      requirement: "Salary ranges in job postings",
      effective: "November 2022",
      coverage: "4+ employees",
      penalties: "Up to $250,000",
      impact: "High compliance, increased applications"
    },
    {
      location: "California",
      status: "Active",
      requirement: "Pay scale disclosure upon request",
      effective: "January 2023",
      coverage: "15+ employees",
      penalties: "Up to $10,000 per violation",
      impact: "Statewide adoption, litigation increase"
    },
    {
      location: "Colorado",
      status: "Active",
      requirement: "Salary ranges in all postings",
      effective: "January 2021",
      coverage: "All employers",
      penalties: "Up to $10,000",
      impact: "Pioneer state, model for others"
    },
    {
      location: "Washington",
      status: "Active",
      requirement: "Pay disclosure upon request",
      effective: "January 2023",
      coverage: "15+ employees",
      penalties: "Up to $5,000",
      impact: "Tech industry focus, high compliance"
    },
    {
      location: "Connecticut",
      status: "Active",
      requirement: "Salary range disclosure",
      effective: "October 2021",
      coverage: "All employers",
      penalties: "Civil penalties",
      impact: "Early adopter, comprehensive coverage"
    }
  ];

  const negotiationImpacts = [
    {
      aspect: "Information Asymmetry",
      before: "Employers held salary information advantage",
      after: "Candidates have market data access",
      advantage: "Employees",
      strategy: "Use disclosed ranges as anchoring points in negotiations"
    },
    {
      aspect: "Salary Anchoring",
      before: "First offer often became anchor point",
      after: "Published ranges set negotiation boundaries",
      advantage: "Both parties",
      strategy: "Target upper range based on qualifications and experience"
    },
    {
      aspect: "Market Research",
      before: "Time-intensive salary research required",
      after: "Transparent ranges readily available",
      advantage: "Employees",
      strategy: "Compare ranges across companies and roles systematically"
    },
    {
      aspect: "Pay Equity",
      before: "Hidden disparities in compensation",
      after: "Visible commitment to fair pay practices",
      advantage: "Underrepresented groups",
      strategy: "Leverage transparency to address historical pay gaps"
    }
  ];

  const employerResponses = [
    {
      strategy: "Wide Salary Ranges",
      description: "Posting very broad ranges to maintain flexibility",
      example: "$50,000 - $150,000 annually",
      pros: ["Legal compliance", "Flexibility retained"],
      cons: ["Reduced candidate trust", "Unclear expectations"],
      candidate_response: "Ask for role-specific range based on your experience level"
    },
    {
      strategy: "Total Compensation Focus",
      description: "Emphasizing benefits and equity beyond base salary",
      example: "Base + bonus + equity + benefits package",
      pros: ["Attractive total package", "Competitive positioning"],
      cons: ["Complex comparisons", "Variable components"],
      candidate_response: "Request detailed breakdown of each compensation component"
    },
    {
      strategy: "Experience-Based Ranges",
      description: "Different ranges for different experience levels",
      example: "Entry: $60K-70K, Mid: $75K-90K, Senior: $95K-120K",
      pros: ["Clear progression", "Fair leveling"],
      cons: ["Limited flexibility", "Rigid structures"],
      candidate_response: "Demonstrate qualification for higher level if applicable"
    },
    {
      strategy: "Geographic Variations",
      description: "Location-based salary adjustments",
      example: "NY: $80K-100K, Austin: $70K-85K, Remote: $75K-90K",
      pros: ["Cost-of-living adjustment", "Location flexibility"],
      cons: ["Remote work complications", "Inequality perception"],
      candidate_response: "Research cost of living to justify location premiums"
    }
  ];

  const leverageStrategies = [
    {
      strategy: "Range Research",
      description: "Systematically collect and analyze salary ranges across companies",
      steps: [
        "Track ranges from multiple job postings",
        "Note variations by company size and industry",
        "Identify patterns in compensation structures",
        "Create personal market rate database"
      ],
      tools: ["Job board filtering", "Spreadsheet tracking", "Industry reports"],
      outcome: "Comprehensive market understanding for negotiations"
    },
    {
      strategy: "Positioning Within Range",
      description: "Strategic positioning based on qualifications and experience",
      steps: [
        "Assess your qualifications against job requirements",
        "Identify unique value propositions",
        "Map experience to salary range segments",
        "Prepare justification for target position"
      ],
      tools: ["Skills assessment", "Achievement documentation", "Market comparison"],
      outcome: "Confident targeting of appropriate range segment"
    },
    {
      strategy: "Transparency Leverage",
      description: "Using transparency data in negotiation conversations",
      steps: [
        "Reference published ranges in discussions",
        "Compare offers against market standards",
        "Request explanation for below-range offers",
        "Negotiate based on transparent data"
      ],
      tools: ["Published ranges", "Comparable role data", "Industry benchmarks"],
      outcome: "Data-driven negotiation conversations"
    }
  ];

  const futureImplications = [
    {
      trend: "Expanding Coverage",
      description: "More states and cities adopting transparency laws",
      timeline: "2025-2027",
      impact: "National normalization of salary disclosure",
      preparation: "Build transparency skills regardless of current location"
    },
    {
      trend: "AI-Powered Matching",
      description: "Technology enabling precise salary-skill matching",
      timeline: "2024-2026",
      impact: "More accurate compensation benchmarking",
      preparation: "Develop clear skill documentation and portfolio"
    },
    {
      trend: "Real-Time Adjustments",
      description: "Dynamic salary ranges based on market conditions",
      timeline: "2026-2028",
      impact: "Continuous compensation optimization",
      preparation: "Stay informed about market trends and skill demands"
    },
    {
      trend: "Global Standardization",
      description: "International adoption of transparency practices",
      timeline: "2027-2030",
      impact: "Worldwide compensation comparability",
      preparation: "Understand global market rates for your role"
    }
  ];

  return (
    <>
      <SEOHead
        title="Salary Transparency Impact: How Pay Disclosure Laws Change Negotiations"
        description="Explore how salary transparency laws are transforming pay negotiations. Learn strategies for leveraging transparency in your career advancement and salary discussions."
        canonical="/blog/salary-transparency-impact"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Eye className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Salary Transparency Impact
              </h1>
              <div className="flex justify-center space-x-4 mb-6">
                <Badge className="bg-blue-100 text-blue-800">Legal Changes</Badge>
                <Badge variant="outline">Market Analysis</Badge>
                <Badge variant="outline">9 min read</Badge>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore how salary transparency laws are transforming pay negotiations. 
                Learn strategies for leveraging transparency in your career advancement and salary discussions.
              </p>
            </div>
          </div>
        </section>

        {/* Current Laws Overview */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Current Salary Transparency Laws
            </h2>
            
            <div className="overflow-x-auto">
              <div className="space-y-4">
                {transparencyLaws.map((law, index) => (
                  <Card key={index} className="calculator-shadow">
                    <CardContent className="p-6">
                      <div className="grid lg:grid-cols-7 gap-4 items-center">
                        <div className="lg:col-span-1">
                          <h3 className="font-semibold text-gray-900 flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-primary" />
                            {law.location}
                          </h3>
                          <Badge className="bg-green-100 text-green-800 mt-1">{law.status}</Badge>
                        </div>
                        <div className="lg:col-span-2">
                          <div className="text-sm text-gray-600">Requirement:</div>
                          <div className="text-sm font-medium">{law.requirement}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Effective:</div>
                          <div className="text-sm font-medium">{law.effective}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Coverage:</div>
                          <div className="text-sm font-medium">{law.coverage}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Penalties:</div>
                          <div className="text-sm font-medium">{law.penalties}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Impact:</div>
                          <div className="text-sm text-gray-900">{law.impact}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Negotiation Impact Analysis */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How Transparency Changes Negotiations
            </h2>
            
            <div className="space-y-6">
              {negotiationImpacts.map((impact, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary flex items-center">
                      <Scale className="mr-2 h-5 w-5" />
                      {impact.aspect}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-4 gap-6">
                      <div>
                        <h4 className="font-semibold text-red-700 mb-2">Before Transparency</h4>
                        <p className="text-sm text-gray-600">{impact.before}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">After Transparency</h4>
                        <p className="text-sm text-gray-600">{impact.after}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-blue-700 mb-2">Primary Advantage</h4>
                        <Badge className="bg-blue-100 text-blue-800">{impact.advantage}</Badge>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Strategy</h4>
                        <p className="text-sm text-gray-600">{impact.strategy}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Employer Response Strategies */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How Employers Are Adapting
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {employerResponses.map((response, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary flex items-center">
                      <Building2 className="mr-2 h-5 w-5" />
                      {response.strategy}
                    </CardTitle>
                    <p className="text-sm text-gray-600">{response.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-3">
                        <div className="text-sm font-medium text-blue-800 mb-1">Example:</div>
                        <div className="text-sm text-blue-700">{response.example}</div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <div className="font-medium text-green-700 mb-1">Pros:</div>
                          <ul className="space-y-1">
                            {response.pros.map((pro, proIndex) => (
                              <li key={proIndex} className="text-gray-600">• {pro}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="font-medium text-red-700 mb-1">Cons:</div>
                          <ul className="space-y-1">
                            {response.cons.map((con, conIndex) => (
                              <li key={conIndex} className="text-gray-600">• {con}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 border-l-4 border-green-400 p-3">
                        <div className="text-sm font-medium text-green-800 mb-1">Your Response:</div>
                        <div className="text-sm text-green-700">{response.candidate_response}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leverage Strategies */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How to Leverage Salary Transparency
            </h2>
            
            <div className="space-y-6">
              {leverageStrategies.map((strategy, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary flex items-center">
                      <BarChart3 className="mr-2 h-5 w-5" />
                      {strategy.strategy}
                    </CardTitle>
                    <p className="text-gray-600">{strategy.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Action Steps</h4>
                        <ol className="space-y-2 text-sm">
                          {strategy.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start">
                              <span className="bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                                {stepIndex + 1}
                              </span>
                              <span className="text-gray-600">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Tools & Resources</h4>
                        <ul className="space-y-1">
                          {strategy.tools.map((tool, toolIndex) => (
                            <li key={toolIndex} className="text-sm text-gray-600 flex items-center">
                              <CheckCircle className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                              {tool}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Expected Outcome</h4>
                        <div className="bg-green-50 border-l-4 border-green-400 p-3">
                          <p className="text-sm text-green-800">{strategy.outcome}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Future Implications */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Future of Salary Transparency
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {futureImplications.map((implication, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5" />
                      {implication.trend}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-600">{implication.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm font-medium text-gray-700">Timeline:</div>
                          <div className="text-sm text-gray-600">{implication.timeline}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-700">Impact:</div>
                          <div className="text-sm text-gray-600">{implication.impact}</div>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-3">
                        <div className="text-sm font-medium text-blue-800 mb-1">How to Prepare:</div>
                        <div className="text-sm text-blue-700">{implication.preparation}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Action Items */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Your Transparency Action Plan
            </h2>
            
            <Card className="calculator-shadow">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Eye className="mr-2 h-5 w-5 text-blue-600" />
                      Research Phase
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Track salary ranges in job postings
                      </li>
                      <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Build company comparison database
                      </li>
                      <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Monitor transparency law changes
                      </li>
                      <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Network for internal insights
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Users className="mr-2 h-5 w-5 text-green-600" />
                      Preparation Phase
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Document achievements and metrics
                      </li>
                      <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Position yourself within ranges
                      </li>
                      <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Practice transparency-based conversations
                      </li>
                      <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Prepare range justifications
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Scale className="mr-2 h-5 w-5 text-primary" />
                      Negotiation Phase
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Reference published ranges
                      </li>
                      <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Ask for range explanations
                      </li>
                      <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Negotiate based on data
                      </li>
                      <li className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Document agreements clearly
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="calculator-shadow">
              <CardContent className="p-8 text-center">
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Embrace the Transparency Revolution</h2>
                <p className="text-gray-600 mb-6">
                  Salary transparency is reshaping how we negotiate compensation. Use these insights 
                  to your advantage and advocate for fair pay with confidence and data.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/guides/negotiating-salary-increase-strategies">
                    <Button className="bg-primary hover:bg-blue-700">
                      Master Negotiation Strategies
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button variant="outline">
                      Calculate Your Target Salary
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}