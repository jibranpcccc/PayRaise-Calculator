import { SEOHead } from "@/components/seo/head";
import { SchemaGenerator } from "@/components/seo/schema-generator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { InternalLink } from "@/components/seo/internal-link-checker";
import { AlertTriangle, XCircle, CheckCircle, TrendingDown, DollarSign } from "lucide-react";

const COMMON_MISTAKES = [
  {
    category: "Timing Mistakes",
    icon: "🕐",
    mistakes: [
      {
        mistake: "Asking during company financial stress",
        impact: "High",
        why: "Companies are focused on cost-cutting, not salary increases",
        solution: "Wait for positive financial news or improved company performance before requesting raises"
      },
      {
        mistake: "Requesting raise immediately after poor performance",
        impact: "High", 
        why: "Your recent mistakes are fresh in management's mind",
        solution: "Allow recovery time, demonstrate improved performance for 3-6 months before approaching"
      },
      {
        mistake: "Asking during peak busy seasons",
        impact: "Medium",
        why: "Managers are overwhelmed and may not give proper consideration",
        solution: "Schedule conversations during calmer business periods when managers can focus"
      }
    ]
  },
  {
    category: "Preparation Mistakes",
    icon: "📋",
    mistakes: [
      {
        mistake: "Not researching market rates",
        impact: "High",
        why: "Without data, you can't justify your request or negotiate effectively",
        solution: "Use multiple salary sources, industry reports, and peer comparisons for accurate market data"
      },
      {
        mistake: "Failing to document achievements",
        impact: "High",
        why: "Managers need concrete evidence of your value and contributions",
        solution: "Maintain ongoing record of accomplishments, metrics, and positive feedback"
      },
      {
        mistake: "Not practicing the conversation",
        impact: "Medium",
        why: "Nervousness can lead to poor presentation and weak negotiation",
        solution: "Rehearse with trusted colleagues or mentors, prepare for various responses"
      }
    ]
  },
  {
    category: "Approach Mistakes",
    icon: "💬",
    mistakes: [
      {
        mistake: "Making it about personal financial needs",
        impact: "High",
        why: "Companies pay for value delivered, not personal circumstances",
        solution: "Focus on market value, performance achievements, and business contribution"
      },
      {
        mistake: "Threatening to quit without alternatives",
        impact: "High",
        why: "Empty threats damage relationships and can backfire",
        solution: "Only mention competing offers if you actually have them and are prepared to leave"
      },
      {
        mistake: "Asking via email instead of in-person",
        impact: "Medium",
        why: "Salary discussions require nuanced conversation and relationship building",
        solution: "Request face-to-face meetings for important compensation discussions"
      }
    ]
  },
  {
    category: "Negotiation Mistakes",
    icon: "🤝",
    mistakes: [
      {
        mistake: "Accepting the first 'no' as final",
        impact: "Medium",
        why: "Initial rejections often aren't permanent decisions",
        solution: "Ask what needs to happen for reconsideration, create development plan"
      },
      {
        mistake: "Not considering total compensation",
        impact: "Medium",
        why: "Non-salary benefits can have significant value",
        solution: "Explore flexible work, additional PTO, professional development, or equity options"
      },
      {
        mistake: "Demanding immediate decisions",
        impact: "Medium",
        why: "Salary decisions often require budget approval and time",
        solution: "Agree on reasonable timeline for decision-making process"
      }
    ]
  }
];

export default function TopRaiseMistakesToAvoid() {
  const structuredData = SchemaGenerator.learningResource({
    name: "Top Salary Raise Mistakes to Avoid: Complete Prevention Guide",
    description: "Learn the most common mistakes employees make when requesting salary increases and how to avoid them for successful negotiations.",
    url: "https://payraisepercentagecalculator.com/guides/top-raise-mistakes-to-avoid"
  });

  return (
    <>
      <SEOHead
        title="Top Salary Raise Mistakes to Avoid - Complete Prevention Guide"
        description="Discover the most common mistakes employees make when asking for raises and learn proven strategies to avoid them. Increase your chances of successful salary negotiations."
        canonical="https://payraisepercentagecalculator.com/guides/top-raise-mistakes-to-avoid"
        keywords="salary raise mistakes, negotiation errors, raise request failures, salary increase mistakes"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-orange-50">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center space-x-4 mb-6">
              <Badge className="bg-white text-red-700">Mistake Prevention</Badge>
              <Badge variant="outline" className="border-white text-white">Expert Guidance</Badge>
              <Badge variant="outline" className="border-white text-white">Success Strategy</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Top Salary Raise Mistakes to Avoid
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Learn from common negotiation pitfalls and boost your chances of success. 
              Avoid the mistakes that derail 70% of salary increase requests.
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
                  Research shows that 70% of salary increase requests are unsuccessful, but it's not because 
                  employees don't deserve raises. Most failures stem from avoidable mistakes in timing, 
                  preparation, approach, or negotiation strategy. By understanding and avoiding these common 
                  pitfalls, you can dramatically improve your chances of success.
                </p>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-red-600 mr-3 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-red-800 mb-2">The Cost of Mistakes</h3>
                      <p className="text-red-700">
                        A failed raise request doesn't just mean no salary increase. It can damage your 
                        professional relationship, reduce future negotiation leverage, and delay career 
                        advancement by 6-12 months or more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Mistake Categories */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Critical Mistakes by Category
              </h2>

              <div className="space-y-8">
                {COMMON_MISTAKES.map((category, index) => (
                  <Card key={index} className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl text-red-600 flex items-center gap-3">
                        <span className="text-2xl">{category.icon}</span>
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {category.mistakes.map((item, mistakeIndex) => (
                          <div key={mistakeIndex} className="border-l-4 border-red-200 pl-6">
                            <div className="mb-4">
                              <div className="flex items-start justify-between mb-2">
                                <h3 className="font-semibold text-gray-900 text-lg flex items-center gap-2">
                                  <XCircle className="h-5 w-5 text-red-500" />
                                  {item.mistake}
                                </h3>
                                <Badge 
                                  className={`${
                                    item.impact === 'High' ? 'bg-red-100 text-red-800' : 
                                    item.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                                    'bg-blue-100 text-blue-800'
                                  }`}
                                >
                                  {item.impact} Impact
                                </Badge>
                              </div>
                              <p className="text-gray-600 mb-3">
                                <strong>Why it's problematic:</strong> {item.why}
                              </p>
                              <div className="bg-green-50 p-4 rounded-lg">
                                <div className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                  <div>
                                    <strong className="text-green-800">Better approach:</strong>
                                    <p className="text-green-700 mt-1">{item.solution}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Success Rate Statistics */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Impact of Common Mistakes on Success Rates
              </h2>

              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">15%</div>
                      <div className="text-sm text-gray-600">Success rate with poor timing</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-2">25%</div>
                      <div className="text-sm text-gray-600">Success without market research</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-600 mb-2">40%</div>
                      <div className="text-sm text-gray-600">Success with personal reasons only</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">75%</div>
                      <div className="text-sm text-gray-600">Success avoiding all major mistakes</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Pre-Flight Checklist */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Pre-Request Checklist</h2>

              <Card className="border-green-300 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800">Before You Ask for a Raise</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-green-700 mb-4">Research & Preparation</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Researched current market rates for your role</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Documented achievements from past 12 months</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Calculated specific salary targets</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Prepared clear business case</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Practiced conversation with trusted advisor</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-700 mb-4">Timing & Context</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Company is financially stable</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Your recent performance is strong</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Manager is not overwhelmed with other priorities</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>You have backup plans if initial request is denied</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>You're prepared to discuss development opportunities</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Recovery Strategies */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">When You've Already Made a Mistake</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-orange-600 flex items-center gap-2">
                      <TrendingDown className="h-5 w-5" />
                      Immediate Damage Control
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li>• <strong>Acknowledge the timing:</strong> If you asked at a bad time, acknowledge it briefly</li>
                      <li>• <strong>Refocus on value:</strong> Shift conversation from personal needs to business contribution</li>
                      <li>• <strong>Request guidance:</strong> Ask what you need to do to earn consideration in the future</li>
                      <li>• <strong>Maintain professionalism:</strong> Don't become defensive or argumentative</li>
                      <li>• <strong>Set follow-up timeline:</strong> Agree on when to revisit the conversation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600 flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      Long-term Recovery Plan
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li>• <strong>Create development plan:</strong> Work with manager to identify improvement areas</li>
                      <li>• <strong>Document progress:</strong> Keep detailed records of achievements moving forward</li>
                      <li>• <strong>Build stronger case:</strong> Gather more compelling evidence of your value</li>
                      <li>• <strong>Improve timing strategy:</strong> Wait for optimal business and personal circumstances</li>
                      <li>• <strong>Consider alternative approaches:</strong> Explore promotion tracks or lateral moves</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Industry-Specific Pitfalls */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Industry-Specific Pitfalls</h2>

              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Technology</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-red-600 mb-1">Common Mistake</h4>
                        <p className="text-sm text-gray-600">Comparing salaries to different company stages (startup vs. enterprise)</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-green-600 mb-1">Better Approach</h4>
                        <p className="text-sm text-gray-600">Use stage-appropriate comparisons and consider equity components</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Healthcare</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-red-600 mb-1">Common Mistake</h4>
                        <p className="text-sm text-gray-600">Not accounting for extensive benefits packages in negotiations</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-green-600 mb-1">Better Approach</h4>
                        <p className="text-sm text-gray-600">Factor total compensation including retirement, insurance, and continuing education</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Education</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-red-600 mb-1">Common Mistake</h4>
                        <p className="text-sm text-gray-600">Not understanding union contract constraints and processes</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-green-600 mb-1">Better Approach</h4>
                        <p className="text-sm text-gray-600">Work within established systems, focus on advancement opportunities</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Success Framework */}
            <section className="mb-12">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">The PROVEN Success Framework</h3>
                <div className="grid md:grid-cols-5 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-semibold text-blue-700 mb-2">P - Prepare</div>
                    <p className="text-blue-600">Research market rates and document achievements</p>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-blue-700 mb-2">R - Research</div>
                    <p className="text-blue-600">Understand company finances and manager's priorities</p>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-blue-700 mb-2">O - Optimize</div>
                    <p className="text-blue-600">Choose optimal timing and communication approach</p>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-blue-700 mb-2">V - Value</div>
                    <p className="text-blue-600">Focus on business value and contribution</p>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-blue-700 mb-2">E - Execute</div>
                    <p className="text-blue-600">Present professionally and negotiate thoughtfully</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-blue-700 font-medium">
                    Use our calculators to support your preparation:
                  </p>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <InternalLink href="/tools/salary-negotiation-calculator" className="text-blue-600 hover:text-blue-700 text-sm">
                      Salary Negotiation Calculator →
                    </InternalLink>
                    <InternalLink href="/tools/state-wise-raise-calculator" className="text-blue-600 hover:text-blue-700 text-sm">
                      Market Rate Analysis →
                    </InternalLink>
                  </div>
                </div>
              </div>
            </section>

            {/* Related Resources */}
            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Avoid Mistakes with These Resources</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Timing Guides</h3>
                  <div className="space-y-2 text-sm">
                    <InternalLink href="/blog/when-ask-for-raise-optimal-timing" className="block text-blue-600 hover:text-blue-700">
                      When to Ask for a Raise
                    </InternalLink>
                    <InternalLink href="/blog/best-time-of-year-to-negotiate-raise" className="block text-blue-600 hover:text-blue-700">
                      Best Time of Year Guide
                    </InternalLink>
                    <InternalLink href="/guides/performance-review-raise-preparation" className="block text-blue-600 hover:text-blue-700">
                      Performance Review Prep
                    </InternalLink>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Preparation Tools</h3>
                  <div className="space-y-2 text-sm">
                    <InternalLink href="/guides/market-value-salary-research" className="block text-blue-600 hover:text-blue-700">
                      Market Research Methods
                    </InternalLink>
                    <InternalLink href="/salary-negotiation-complete-guide" className="block text-blue-600 hover:text-blue-700">
                      Complete Negotiation Guide
                    </InternalLink>
                    <InternalLink href="/blog/raise-negotiation-scripts-templates" className="block text-blue-600 hover:text-blue-700">
                      Scripts & Templates
                    </InternalLink>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Success Strategies</h3>
                  <div className="space-y-2 text-sm">
                    <InternalLink href="/blog/how-much-raise-to-ask-for-based-on-role" className="block text-blue-600 hover:text-blue-700">
                      Role-Based Benchmarks
                    </InternalLink>
                    <InternalLink href="/guides/negotiating-salary-increase-strategies" className="block text-blue-600 hover:text-blue-700">
                      Proven Negotiation Tactics
                    </InternalLink>
                    <InternalLink href="/industry-raise-benchmarks-2025" className="block text-blue-600 hover:text-blue-700">
                      Industry Data & Trends
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