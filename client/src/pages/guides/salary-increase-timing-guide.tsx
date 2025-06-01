import { SEOHead } from "@/components/seo/head";
import { SchemaGenerator } from "@/components/seo/schema-generator";
import { InternalLink } from "@/components/seo/internal-link-checker";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, TrendingUp, AlertTriangle, CheckCircle, XCircle, Star } from "lucide-react";

export default function SalaryIncreaseTimingGuide() {
  const optimalTimes = [
    {
      timing: "Performance Review Period",
      probability: "85%",
      description: "Annual or bi-annual review cycles when compensation discussions are expected",
      pros: ["Built-in discussion framework", "Manager prepared for salary talks", "Budget allocated for increases"],
      cons: ["High competition with other employees", "Limited budget may constrain increases"]
    },
    {
      timing: "After Major Achievement",
      probability: "75%",
      description: "Following significant project completion, revenue generation, or cost savings",
      pros: ["Fresh evidence of value contribution", "Positive momentum", "Clear ROI demonstration"],
      cons: ["May seem opportunistic if timed poorly", "Achievement may be seen as part of regular duties"]
    },
    {
      timing: "Beginning of Fiscal Year",
      probability: "70%",
      description: "When new budgets are approved and companies plan compensation adjustments",
      pros: ["Maximum budget availability", "Strategic planning phase", "Forward-looking discussions"],
      cons: ["Many employees may have same idea", "Budget may not be finalized"]
    },
    {
      timing: "After Skills Certification",
      probability: "65%",
      description: "Following completion of relevant training, certification, or degree programs",
      pros: ["Demonstrable skill enhancement", "Increased market value", "Investment in growth"],
      cons: ["May need time to demonstrate application", "Certification alone may not justify increase"]
    }
  ];

  const poorTimes = [
    {
      timing: "During Company Struggles",
      risk: "High",
      description: "When organization faces financial difficulties, layoffs, or poor performance"
    },
    {
      timing: "Immediately After Hire",
      risk: "High", 
      description: "Before completing initial probationary period or demonstrating value"
    },
    {
      timing: "During Personal Issues",
      risk: "Medium",
      description: "When dealing with performance concerns or disciplinary actions"
    },
    {
      timing: "End of Fiscal Year",
      risk: "Medium",
      description: "When budgets are tight and focus is on cost control"
    }
  ];

  const monthlyTiming = [
    { month: "January", rating: "Excellent", reason: "New budgets, fresh start mentality" },
    { month: "February", rating: "Good", reason: "Post-holiday focus, Q1 planning" },
    { month: "March", rating: "Good", reason: "Q1 reviews, spring planning cycles" },
    { month: "April", rating: "Excellent", reason: "Mid-year planning, performance reviews" },
    { month: "May", rating: "Good", reason: "Pre-summer project completions" },
    { month: "June", rating: "Fair", reason: "Mid-year, vacation planning starts" },
    { month: "July", rating: "Poor", reason: "Summer vacations, reduced focus" },
    { month: "August", rating: "Poor", reason: "Continued vacation period" },
    { month: "September", rating: "Excellent", reason: "Back-to-work energy, Q4 planning" },
    { month: "October", rating: "Good", reason: "Performance review season" },
    { month: "November", rating: "Fair", reason: "Holiday preparations begin" },
    { month: "December", rating: "Poor", reason: "Holiday season, budget constraints" }
  ];

  const preparationSteps = [
    {
      timeline: "3-6 Months Before",
      tasks: [
        "Begin documenting achievements and contributions",
        "Research market salary data for your role",
        "Identify upcoming performance review dates",
        "Set measurable goals to exceed expectations"
      ]
    },
    {
      timeline: "1-3 Months Before", 
      tasks: [
        "Compile comprehensive achievement portfolio",
        "Practice salary negotiation conversations",
        "Identify optimal timing based on company calendar",
        "Prepare multiple salary scenarios and responses"
      ]
    },
    {
      timeline: "1-2 Weeks Before",
      tasks: [
        "Schedule meeting with supervisor",
        "Finalize presentation materials",
        "Confirm market research is current",
        "Prepare for potential objections or delays"
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="When to Ask for a Salary Increase: Perfect Timing Strategy Guide 2025"
        description="Master the art of timing your salary increase request. Learn the best times to ask for a raise, avoid poor timing, and maximize your chances of approval with our comprehensive guide."
        keywords="when to ask for raise, salary increase timing, best time for raise request, performance review timing, salary negotiation timing"
        structuredData={SchemaGenerator.howToGuide({
          name: "How to Time Your Salary Increase Request Perfectly",
          description: "Step-by-step guide to choosing the optimal timing for salary increase requests",
          url: "https://payraisepercentagecalculator.com/guides/salary-increase-timing-guide",
          steps: [
            { name: "Identify optimal timing periods", text: "Research company calendar and performance review cycles" },
            { name: "Prepare your case", text: "Document achievements and research market rates" },
            { name: "Choose specific timing", text: "Select date based on company situation and your performance" },
            { name: "Schedule the conversation", text: "Request meeting with supervisor at optimal time" }
          ]
        })}
      />

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Timing Strategy</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              When to Ask for a Salary Increase: Perfect Timing Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Timing can make or break your salary increase request. Learn when to ask for a raise 
              to maximize your chances of success and secure the compensation you deserve.
            </p>
          </div>

          {/* Key Statistics */}
          <Card className="mb-12 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                  <div className="text-gray-600">Success rate during performance reviews</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">62%</div>
                  <div className="text-gray-600">Success rate after major achievements</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">23%</div>
                  <div className="text-gray-600">Success rate during poor timing</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Optimal Timing Scenarios */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Clock className="mr-3 h-6 w-6 text-green-600" />
                Best Times to Ask for a Raise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {optimalTimes.map((time, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{time.timing}</h3>
                        <p className="text-gray-600">{time.description}</p>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {time.probability} Success Rate
                      </Badge>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-green-900 mb-2 flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Advantages
                        </h4>
                        <ul className="space-y-1">
                          {time.pros.map((pro, proIndex) => (
                            <li key={proIndex} className="text-sm text-gray-600">• {pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-orange-900 mb-2 flex items-center">
                          <AlertTriangle className="mr-2 h-4 w-4" />
                          Considerations
                        </h4>
                        <ul className="space-y-1">
                          {time.cons.map((con, conIndex) => (
                            <li key={conIndex} className="text-sm text-gray-600">• {con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Times to Avoid */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <XCircle className="mr-3 h-6 w-6 text-red-600" />
                Times to Avoid Asking for a Raise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {poorTimes.map((time, index) => (
                  <div key={index} className="border border-red-200 rounded-lg p-6 bg-red-50">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-red-900">{time.timing}</h3>
                      <Badge variant="destructive" className="bg-red-100 text-red-800">
                        {time.risk} Risk
                      </Badge>
                    </div>
                    <p className="text-red-700 text-sm">{time.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Monthly Timing Analysis */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Calendar className="mr-3 h-6 w-6 text-blue-600" />
                Month-by-Month Timing Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {monthlyTiming.map((month, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${
                    month.rating === 'Excellent' ? 'bg-green-50 border-green-200' :
                    month.rating === 'Good' ? 'bg-blue-50 border-blue-200' :
                    month.rating === 'Fair' ? 'bg-yellow-50 border-yellow-200' :
                    'bg-red-50 border-red-200'
                  }`}>
                    <h4 className="font-semibold text-gray-900 mb-1">{month.month}</h4>
                    <Badge 
                      variant="secondary" 
                      className={`text-xs mb-2 ${
                        month.rating === 'Excellent' ? 'bg-green-100 text-green-800' :
                        month.rating === 'Good' ? 'bg-blue-100 text-blue-800' :
                        month.rating === 'Fair' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}
                    >
                      {month.rating}
                    </Badge>
                    <p className="text-xs text-gray-600">{month.reason}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Preparation Timeline */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <TrendingUp className="mr-3 h-6 w-6 text-purple-600" />
                Preparation Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {preparationSteps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mr-6 flex-shrink-0">
                      {step.timeline}
                    </div>
                    <div className="flex-1">
                      <ul className="space-y-2">
                        {step.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Company-Specific Factors */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Company-Specific Timing Factors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Research Your Company's Calendar</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Star className="h-4 w-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Fiscal year start and end dates</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-4 w-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Performance review cycles and deadlines</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-4 w-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Budget planning and approval periods</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-4 w-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Major project completion dates</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Monitor Company Health</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Recent financial performance and earnings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">New contracts, clients, or revenue streams</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Recent hiring activity and team expansion</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Industry trends and competitive position</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Time Your Raise Request Perfectly?</h2>
              <p className="text-lg opacity-90 mb-6">
                Use our calculators to determine your target amount and prepare your negotiation strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <InternalLink href="/">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Calculate Your Raise
                  </Button>
                </InternalLink>
                <InternalLink href="/guides/negotiating-salary-increase-strategies">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    Learn Negotiation Strategies
                  </Button>
                </InternalLink>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </>
  );
}