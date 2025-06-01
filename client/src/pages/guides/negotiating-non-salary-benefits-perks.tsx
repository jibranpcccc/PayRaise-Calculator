import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/seo/head";
import { BreadcrumbNavigation, BreadcrumbPatterns } from "@/components/seo/breadcrumb-navigation";
import { InternalLink } from "@/components/seo/internal-link-checker";
import { 
  Gift, 
  Calendar, 
  Home, 
  GraduationCap,
  Heart,
  Car,
  Baby,
  Dumbbell,
  DollarSign,
  TrendingUp,
  Target,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Calculator,
  Search
} from "lucide-react";

export default function NegotiatingNonSalaryBenefitsPerks() {
  const negotiableBenefits = [
    {
      category: "Time Off & Flexibility",
      icon: <Calendar className="h-6 w-6 text-blue-600" />,
      items: [
        { name: "Additional PTO Days", value: "2-5 extra days annually", negotiability: "High" },
        { name: "Flexible Work Hours", value: "Core hours flexibility", negotiability: "High" },
        { name: "Remote Work Options", value: "1-3 days WFH per week", negotiability: "Medium" },
        { name: "Sabbatical Leave", value: "Unpaid extended leave", negotiability: "Low" }
      ]
    },
    {
      category: "Professional Development", 
      icon: <GraduationCap className="h-6 w-6 text-green-600" />,
      items: [
        { name: "Training Budget", value: "$2,000-$5,000 annually", negotiability: "High" },
        { name: "Conference Attendance", value: "1-2 conferences per year", negotiability: "Medium" },
        { name: "Certification Reimbursement", value: "Full exam and prep costs", negotiability: "High" },
        { name: "Tuition Assistance", value: "Up to $5,250 tax-free", negotiability: "Medium" }
      ]
    },
    {
      category: "Health & Wellness",
      icon: <Heart className="h-6 w-6 text-red-600" />,
      items: [
        { name: "Premium Health Plan", value: "Lower deductible option", negotiability: "Medium" },
        { name: "HSA Contribution", value: "Additional employer funding", negotiability: "Medium" },
        { name: "Gym Membership", value: "$50-100 monthly reimbursement", negotiability: "High" },
        { name: "Wellness Stipend", value: "$500-1,000 annually", negotiability: "Medium" }
      ]
    },
    {
      category: "Financial Benefits",
      icon: <DollarSign className="h-6 w-6 text-purple-600" />,
      items: [
        { name: "Higher 401k Match", value: "Additional 1-2% match", negotiability: "Low" },
        { name: "Signing Bonus", value: "$2,000-$10,000", negotiability: "Medium" },
        { name: "Stock Options/RSUs", value: "Equity compensation", negotiability: "Low" },
        { name: "Relocation Assistance", value: "$5,000-$15,000", negotiability: "High" }
      ]
    },
    {
      category: "Work Environment",
      icon: <Home className="h-6 w-6 text-orange-600" />,
      items: [
        { name: "Home Office Setup", value: "$1,000-$2,500 stipend", negotiability: "High" },
        { name: "Technology Upgrade", value: "Latest laptop/equipment", negotiability: "Medium" },
        { name: "Parking/Transit", value: "Covered commute costs", negotiability: "High" },
        { name: "Childcare Support", value: "On-site or stipend", negotiability: "Low" }
      ]
    }
  ];

  const negotiationStrategies = [
    {
      phase: "Research Phase",
      description: "Before bringing up benefits",
      actions: [
        "Research industry standard benefits packages",
        "Understand your company's current offerings",
        "Identify which benefits matter most to you",
        "Calculate the monetary value of each benefit"
      ]
    },
    {
      phase: "Timing Strategy", 
      description: "When to negotiate benefits",
      actions: [
        "After salary has been agreed upon",
        "During performance review discussions",
        "When receiving a job offer",
        "Annual benefits enrollment periods"
      ]
    },
    {
      phase: "Presentation Approach",
      description: "How to frame your requests",
      actions: [
        "Emphasize mutual benefit to company",
        "Present as package deal, not individual requests",
        "Show how benefits improve productivity",
        "Offer trade-offs where appropriate"
      ]
    }
  ];

  const realWorldExamples = [
    {
      scenario: "Tech Startup Negotiation",
      challenge: "Limited cash for salary increases",
      solution: "Negotiated equity package + flexible work arrangements",
      outcome: "2% additional equity + unlimited PTO + home office stipend"
    },
    {
      scenario: "Corporate Role Transition",
      challenge: "Relocation required for promotion", 
      solution: "Comprehensive relocation and transition support",
      outcome: "$12,000 relocation + temporary housing + flexible start date"
    },
    {
      scenario: "Senior Professional",
      challenge: "Salary capped by budget constraints",
      solution: "Enhanced professional development package",
      outcome: "$4,000 training budget + conference attendance + mentorship program"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Beyond the Paycheck: A Guide to Negotiating Non-Salary Benefits & Perks",
    "description": "Comprehensive guide to negotiating compensation elements beyond base salary. Learn strategies for improving your total rewards package through benefits and perks.",
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
    "datePublished": "2025-01-31",
    "dateModified": "2025-01-31",
    "url": "https://payraisepercentagecalculator.com/guides/negotiating-non-salary-benefits-perks"
  };

  return (
    <>
      <SEOHead
        title="Beyond the Paycheck: A Guide to Negotiating Non-Salary Benefits & Perks"
        description="Comprehensive guide to negotiating compensation elements beyond base salary. Learn strategies for improving your total rewards package through benefits and perks."
        canonical="/guides/negotiating-non-salary-benefits-perks"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          <BreadcrumbNavigation 
            items={BreadcrumbPatterns.guide("Negotiating Benefits & Perks")}
            className="mb-6"
          />

          <article>
            <header className="mb-8">
              <div className="flex items-center mb-4">
                <Gift className="h-8 w-8 text-primary mr-3" />
                <h1 className="text-4xl font-bold text-gray-900">
                  Beyond the Paycheck: A Guide to Negotiating Non-Salary Benefits & Perks
                </h1>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center">
                  <Target className="h-4 w-4 mr-1" />
                  January 31, 2025
                </div>
                <div className="flex items-center">
                  <Badge variant="outline">Negotiation Strategy</Badge>
                </div>
                <div>12 min read</div>
              </div>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                When salary budgets are tight, smart negotiators look beyond the base pay. 
                Learn how to enhance your total compensation package through strategic benefit negotiations 
                that can add thousands of dollars in value.
              </p>
            </header>

            <div className="prose max-w-none">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Negotiable Benefits and Perks</h2>
                <p className="text-gray-700 mb-8">
                  Understanding what's typically negotiable helps you approach discussions strategically. 
                  Here's a comprehensive breakdown of benefits by category and their negotiability.
                </p>

                <div className="grid gap-8">
                  {negotiableBenefits.map((category, index) => (
                    <Card key={index} className="border-2 border-gray-200">
                      <CardHeader>
                        <CardTitle className="flex items-center text-xl">
                          {category.icon}
                          <span className="ml-3">{category.category}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          {category.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="bg-gray-50 p-4 rounded-lg">
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="font-semibold text-gray-900">{item.name}</h4>
                                <Badge variant={
                                  item.negotiability === 'High' ? 'default' :
                                  item.negotiability === 'Medium' ? 'secondary' : 'outline'
                                }>
                                  {item.negotiability}
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-600">{item.value}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-4">Calculate Your Benefit Values</h3>
                  <p className="text-blue-800 mb-4">
                    Use our offer comparison tool to quantify the total value of your benefits package 
                    and see how different perks impact your overall compensation.
                  </p>
                  <InternalLink href="/tools/offer-comparison-calculator">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Calculator className="h-4 w-4 mr-2" />
                      Compare Total Compensation
                    </Button>
                  </InternalLink>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategies for Negotiating Benefits</h2>
                
                <div className="grid gap-6 mb-8">
                  {negotiationStrategies.map((strategy, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                            {index + 1}
                          </div>
                          {strategy.phase}
                        </CardTitle>
                        <p className="text-gray-600">{strategy.description}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {strategy.actions.map((action, actionIndex) => (
                            <li key={actionIndex} className="flex items-start text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              {action}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-l-yellow-500">
                  <div className="flex items-start">
                    <Lightbulb className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-900 mb-2">Pro Negotiation Tip</h4>
                      <p className="text-yellow-800 text-sm">
                        Frame benefit requests as investments in your productivity and retention. 
                        For example: "Additional professional development budget would help me stay current 
                        with industry trends and bring more value to the team."
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Real-World Examples of Successful Benefit Negotiations</h2>
                
                <div className="grid gap-6">
                  {realWorldExamples.map((example, index) => (
                    <Card key={index} className="border-l-4 border-l-green-500">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-gray-900 mb-3">{example.scenario}</h3>
                        
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-700">Challenge:</span>
                            <p className="text-gray-600 mt-1">{example.challenge}</p>
                          </div>
                          
                          <div>
                            <span className="font-medium text-gray-700">Approach:</span>
                            <p className="text-gray-600 mt-1">{example.solution}</p>
                          </div>
                          
                          <div>
                            <span className="font-medium text-gray-700">Result:</span>
                            <p className="text-green-700 mt-1 font-medium">{example.outcome}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Research and Value These Benefits</h2>
                
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Quantifying Benefit Values</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">PTO Value Calculation</h4>
                          <p className="text-sm text-gray-600">
                            Additional PTO days = (Daily salary × Number of days). 
                            Example: $75,000 salary ÷ 260 work days = $288 per day × 5 days = $1,440 value.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Health Insurance Savings</h4>
                          <p className="text-sm text-gray-600">
                            Compare premium differences, deductibles, and out-of-pocket maximums. 
                            A better plan could save $1,000-$3,000 annually.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Professional Development ROI</h4>
                          <p className="text-sm text-gray-600">
                            Training and certifications typically increase earning potential by 5-15% 
                            within 1-2 years, far exceeding the initial investment.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Research Resources</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Industry Benchmarking</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Company annual reports and SEC filings</li>
                            <li>• HR consulting firm benefit surveys</li>
                            <li>• Professional association reports</li>
                            <li>• Glassdoor and PayScale benefit data</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Internal Intelligence</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Employee handbook and policies</li>
                            <li>• HR department conversations</li>
                            <li>• Colleague experiences (discreetly)</li>
                            <li>• Previous negotiation outcomes</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-4">Market Research Tools</h3>
                  <p className="text-green-800 mb-4">
                    Before negotiating benefits, research your market value to understand your leverage 
                    and identify industry-standard packages.
                  </p>
                  <InternalLink href="/guides/market-value-salary-research">
                    <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-100">
                      <Search className="h-4 w-4 mr-2" />
                      Learn Market Research Methods
                    </Button>
                  </InternalLink>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What If They Can't Budge on Salary?</h2>
                
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="font-semibold text-blue-900 mb-4">Alternative Value Creation</h3>
                  <p className="text-blue-800 mb-4">
                    When salary budgets are frozen, creative benefit negotiations can still 
                    significantly improve your total compensation and job satisfaction.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">High-Impact, Low-Cost Benefits</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Flexible work arrangements</li>
                      <li>• Additional PTO days</li>
                      <li>• Professional development budget</li>
                      <li>• Better job title or responsibilities</li>
                      <li>• Home office equipment stipend</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Future-Focused Negotiations</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Guaranteed review timeline</li>
                      <li>• Performance-based bonus structure</li>
                      <li>• Promotion pathway discussions</li>
                      <li>• Stock option grants</li>
                      <li>• Deferred compensation plans</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Related Content */}
              <section className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Related Resources</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Calculators</h4>
                    <div className="space-y-2 text-sm">
                      <InternalLink href="/tools/offer-comparison-calculator" className="block text-blue-600 hover:text-blue-700">
                        Compare total compensation packages
                      </InternalLink>
                      <InternalLink href="/tools/effective-hourly-rate-calculator" className="block text-blue-600 hover:text-blue-700">
                        Calculate time-based compensation
                      </InternalLink>
                      <InternalLink href="/tools/pay-raise-tax-impact-calculator" className="block text-blue-600 hover:text-blue-700">
                        Analyze tax impact of benefits
                      </InternalLink>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Negotiation Guides</h4>
                    <div className="space-y-2 text-sm">
                      <InternalLink href="/salary-negotiation-complete-guide" className="block text-blue-600 hover:text-blue-700">
                        Complete salary negotiation guide
                      </InternalLink>
                      <InternalLink href="/guides/negotiating-salary-increase-strategies" className="block text-blue-600 hover:text-blue-700">
                        Core negotiation strategies
                      </InternalLink>
                      <InternalLink href="/blog/raise-negotiation-scripts-templates" className="block text-blue-600 hover:text-blue-700">
                        Negotiation scripts and templates
                      </InternalLink>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Market Research</h4>
                    <div className="space-y-2 text-sm">
                      <InternalLink href="/guides/market-value-salary-research" className="block text-blue-600 hover:text-blue-700">
                        Research your market value
                      </InternalLink>
                      <InternalLink href="/industry-raise-benchmarks-2025" className="block text-blue-600 hover:text-blue-700">
                        Industry salary benchmarks
                      </InternalLink>
                      <InternalLink href="/blog/average-raise-by-industry-2025" className="block text-blue-600 hover:text-blue-700">
                        Average raises by industry
                      </InternalLink>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}