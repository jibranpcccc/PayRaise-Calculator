import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo/head";
import { Link } from "wouter";
import { 
  Calendar, 
  Clock, 
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  DollarSign,
  BarChart3
} from "lucide-react";

export default function WhenAskForRaiseOptimalTiming() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "When to Ask for a Raise: Optimal Timing Strategies That Work",
    "description": "Master the art of timing your raise request. Learn about performance review cycles, company financial calendars, and personal achievement milestones.",
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

  const optimalTimes = [
    {
      timing: "Annual Performance Review",
      successRate: "73%",
      pros: ["Expected discussion", "Budget allocated", "Performance fresh in mind"],
      cons: ["Competitive with peers", "Limited budget flexibility"],
      preparation: "3 months",
      bestFor: "First-time requesters"
    },
    {
      timing: "After Major Achievement",
      successRate: "68%",
      pros: ["Leverage recent success", "Demonstrates value", "Builds confidence"],
      cons: ["May seem opportunistic", "Achievement timing varies"],
      preparation: "2 weeks",
      bestFor: "High performers"
    },
    {
      timing: "Budget Planning Season",
      successRate: "65%",
      pros: ["Budget flexibility", "Forward planning", "Less competition"],
      cons: ["Requires industry knowledge", "Long implementation time"],
      preparation: "6 weeks",
      bestFor: "Strategic thinkers"
    },
    {
      timing: "Job Market Peak",
      successRate: "62%",
      pros: ["Market leverage", "Retention focus", "External offers"],
      cons: ["May damage relationships", "Risky without alternatives"],
      preparation: "4 weeks",
      bestFor: "Experienced professionals"
    }
  ];

  const timingCalendar = [
    {
      period: "January - March Q1",
      activities: ["Budget implementation", "Performance reviews", "Goal setting"],
      timing: "Good for annual review discussions",
      strategy: "Align with new fiscal year priorities"
    },
    {
      period: "April - June Q2",
      activities: ["Mid-year planning", "Project launches", "Hiring cycles"],
      timing: "Excellent for achievement-based requests",
      strategy: "Leverage strong Q1 performance"
    },
    {
      period: "July - September Q3",
      activities: ["Budget planning", "Strategic reviews", "Team assessments"],
      timing: "Best for budget cycle requests",
      strategy: "Position for next year's budget"
    },
    {
      period: "October - December Q4",
      activities: ["Year-end reviews", "Bonus discussions", "Planning cycles"],
      timing: "Mixed - depends on company cycle",
      strategy: "Focus on year-end achievements"
    }
  ];

  const warningSignals = [
    {
      signal: "Company Layoffs Announced",
      impact: "High Risk",
      timeframe: "Wait 6+ months",
      alternative: "Focus on value demonstration"
    },
    {
      signal: "Budget Freeze Implemented",
      impact: "High Risk",
      timeframe: "Wait until lifted",
      alternative: "Negotiate non-monetary benefits"
    },
    {
      signal: "New Manager Started",
      impact: "Medium Risk",
      timeframe: "Wait 3-6 months",
      alternative: "Build relationship first"
    },
    {
      signal: "Recent Poor Performance",
      impact: "High Risk",
      timeframe: "Address performance first",
      alternative: "Create improvement plan"
    },
    {
      signal: "Economic Uncertainty",
      impact: "Medium Risk",
      timeframe: "Monitor conditions",
      alternative: "Emphasize cost savings"
    }
  ];

  const personalMilestones = [
    {
      milestone: "Work Anniversary",
      impact: "Medium",
      timing: "1-2 weeks before",
      message: "Reflect on year's contributions"
    },
    {
      milestone: "Project Completion",
      impact: "High",
      timing: "Within 2 weeks",
      message: "Capitalize on recent success"
    },
    {
      milestone: "Certification/Degree",
      impact: "Medium",
      timing: "Immediately after",
      message: "Demonstrate increased value"
    },
    {
      milestone: "Expanded Responsibilities",
      impact: "High",
      timing: "After 90 days",
      message: "Show sustained performance"
    },
    {
      milestone: "Market Salary Research",
      impact: "Medium",
      timing: "During regular reviews",
      message: "Use data-driven approach"
    }
  ];

  return (
    <>
      <SEOHead
        title="When to Ask for a Raise: Optimal Timing Strategies That Work"
        description="Master the art of timing your raise request. Learn about performance review cycles, company financial calendars, and personal achievement milestones."
        canonical="/blog/when-ask-for-raise-optimal-timing"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                When to Ask for a Raise: Optimal Timing Strategies
              </h1>
              <div className="flex justify-center space-x-4 mb-6">
                <Badge className="bg-blue-100 text-blue-800">Timing Strategy</Badge>
                <Badge variant="outline">Success Rates</Badge>
                <Badge variant="outline">5 min read</Badge>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Timing is everything in salary negotiations. Learn when to make your move 
                for maximum success rates and minimum risk to your career relationships.
              </p>
            </div>
          </div>
        </section>

        {/* Success Rate Overview */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Optimal Timing Strategies by Success Rate
            </h2>
            
            <div className="space-y-6">
              {optimalTimes.map((timing, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl text-primary">{timing.timing}</CardTitle>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">{timing.successRate}</div>
                        <div className="text-sm text-gray-600">Success Rate</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-12 gap-6">
                      <div className="lg:col-span-3">
                        <h4 className="font-semibold text-green-700 mb-2">Advantages</h4>
                        <ul className="space-y-1">
                          {timing.pros.map((pro, proIndex) => (
                            <li key={proIndex} className="text-sm text-gray-600 flex items-center">
                              <CheckCircle className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="lg:col-span-3">
                        <h4 className="font-semibold text-red-700 mb-2">Disadvantages</h4>
                        <ul className="space-y-1">
                          {timing.cons.map((con, conIndex) => (
                            <li key={conIndex} className="text-sm text-gray-600 flex items-center">
                              <AlertTriangle className="h-3 w-3 text-red-600 mr-2 flex-shrink-0" />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="lg:col-span-3">
                        <div className="space-y-3">
                          <div>
                            <div className="text-sm font-medium text-gray-700">Preparation Time:</div>
                            <div className="text-sm text-gray-600">{timing.preparation}</div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-700">Best For:</div>
                            <div className="text-sm text-gray-600">{timing.bestFor}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="lg:col-span-3">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <Clock className="h-5 w-5 text-blue-600 mb-2" />
                          <div className="text-xs text-blue-800 font-medium">Success Rate</div>
                          <div className="text-lg font-bold text-blue-600">{timing.successRate}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quarterly Timing Calendar */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Corporate Calendar: Quarterly Timing Guide
            </h2>
            
            <div className="space-y-6">
              {timingCalendar.map((quarter, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary flex items-center">
                      <Calendar className="mr-2 h-5 w-5" />
                      {quarter.period}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Typical Activities</h4>
                        <ul className="space-y-1">
                          {quarter.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="text-sm text-gray-600">• {activity}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Timing Assessment</h4>
                        <p className="text-sm text-gray-600">{quarter.timing}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Recommended Strategy</h4>
                        <p className="text-sm text-gray-600">{quarter.strategy}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Warning Signals */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Warning Signals: When NOT to Ask
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {warningSignals.map((warning, index) => (
                <Card key={index} className="calculator-shadow border-l-4 border-red-400">
                  <CardHeader>
                    <CardTitle className="text-sm text-red-800 flex items-center">
                      <AlertTriangle className="mr-2 h-4 w-4" />
                      {warning.signal}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Risk Level:</span>
                        <Badge className={
                          warning.impact === "High Risk" ? "bg-red-100 text-red-800" :
                          "bg-yellow-100 text-yellow-800"
                        }>
                          {warning.impact}
                        </Badge>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-700">Wait Time:</div>
                        <div className="text-sm text-gray-600">{warning.timeframe}</div>
                      </div>
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-2">
                        <div className="text-xs text-blue-800">
                          <strong>Alternative:</strong> {warning.alternative}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Personal Milestones */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Personal Milestone Timing
            </h2>
            
            <div className="space-y-4">
              {personalMilestones.map((milestone, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-12 gap-6 items-center">
                      <div className="md:col-span-3">
                        <h3 className="font-semibold text-gray-900">{milestone.milestone}</h3>
                        <Badge className={
                          milestone.impact === "High" ? "bg-green-100 text-green-800 mt-2" :
                          "bg-yellow-100 text-yellow-800 mt-2"
                        }>
                          {milestone.impact} Impact
                        </Badge>
                      </div>
                      <div className="md:col-span-2">
                        <div className="text-sm font-medium text-gray-700">Timing:</div>
                        <div className="text-sm text-gray-600">{milestone.timing}</div>
                      </div>
                      <div className="md:col-span-7">
                        <div className="text-sm font-medium text-gray-700">Key Message:</div>
                        <div className="text-sm text-gray-600">{milestone.message}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Timeline */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Your 90-Day Preparation Timeline
            </h2>
            
            <Card className="calculator-shadow">
              <CardContent className="p-8">
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-6">
                      90
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Days Before: Research & Document</h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Research industry salary benchmarks</li>
                        <li>• Document achievements and contributions</li>
                        <li>• Identify optimal timing windows</li>
                        <li>• Assess company financial health</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-6">
                      30
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Days Before: Prepare & Practice</h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Craft your value proposition</li>
                        <li>• Practice conversation scenarios</li>
                        <li>• Schedule the meeting</li>
                        <li>• Prepare supporting materials</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-6">
                      Go
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">The Conversation: Execute & Follow-up</h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Present your case confidently</li>
                        <li>• Listen actively to feedback</li>
                        <li>• Negotiate professionally</li>
                        <li>• Document outcomes and next steps</li>
                      </ul>
                    </div>
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
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Plan Your Raise Request?</h2>
                <p className="text-gray-600 mb-6">
                  Now that you understand optimal timing strategies, use our tools to prepare 
                  your case and calculate the impact of your desired raise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/salary-negotiation-complete-guide">
                    <Button className="bg-primary hover:bg-blue-700">
                      Complete Negotiation Guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button variant="outline">
                      Calculate Your Raise
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