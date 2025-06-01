import { SEOHead } from "@/components/seo/head";
import { SchemaGenerator } from "@/components/seo/schema-generator";
import { InternalLink } from "@/components/seo/internal-link-checker";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCw, Target, Calendar, MessageSquare, TrendingUp, CheckCircle } from "lucide-react";

export default function RaiseRejectionNextSteps() {
  const immediateSteps = [
    {
      title: "Stay Professional and Gracious",
      description: "Thank your manager for their time and consideration, regardless of disappointment",
      timeline: "Immediately",
      priority: "Critical"
    },
    {
      title: "Request Specific Feedback",
      description: "Ask for detailed reasons why the request was denied and what needs to change",
      timeline: "Same meeting",
      priority: "High"
    },
    {
      title: "Understand the Timeline",
      description: "Ask when you can revisit the conversation and what timeline is realistic",
      timeline: "Before leaving meeting",
      priority: "High"
    },
    {
      title: "Document the Conversation",
      description: "Write down key points, feedback, and any commitments made during discussion",
      timeline: "Within 24 hours",
      priority: "Medium"
    }
  ];

  const commonReasons = [
    {
      reason: "Budget Constraints",
      percentage: "35%",
      strategy: "Ask about alternative compensation, future budget cycles, or performance bonuses",
      timeline: "3-6 months"
    },
    {
      reason: "Performance Gaps",
      percentage: "28%",
      strategy: "Create specific improvement plan with measurable goals and regular check-ins",
      timeline: "6-12 months"
    },
    {
      reason: "Market Rate Justification",
      percentage: "22%",
      strategy: "Provide additional market research and expand role responsibilities",
      timeline: "1-3 months"
    },
    {
      reason: "Timing Issues",
      percentage: "15%",
      strategy: "Understand optimal timing and prepare for next review cycle",
      timeline: "6-12 months"
    }
  ];

  const alternativeOptions = [
    {
      option: "Professional Development Budget",
      description: "Request funding for conferences, courses, or certifications",
      value: "High long-term value",
      difficulty: "Low"
    },
    {
      option: "Flexible Work Arrangements",
      description: "Remote work options, flexible hours, or compressed schedules",
      value: "Quality of life improvement",
      difficulty: "Low"
    },
    {
      option: "Additional Responsibilities",
      description: "Take on projects that justify future salary increases",
      value: "Career advancement",
      difficulty: "Medium"
    },
    {
      option: "Performance Bonus Structure",
      description: "Negotiate bonus based on specific achievements or metrics",
      value: "Performance-linked income",
      difficulty: "Medium"
    },
    {
      option: "Promotion Timeline Discussion",
      description: "Clear path and timeline for advancement to next role level",
      value: "Future salary growth",
      difficulty: "High"
    }
  ];

  const recoveryPlan = [
    {
      phase: "Week 1-2: Process and Plan",
      actions: [
        "Process the feedback objectively without taking it personally",
        "Create action plan based on specific feedback received",
        "Research market rates and gather additional compensation data",
        "Schedule follow-up meeting to discuss improvement plan"
      ]
    },
    {
      phase: "Month 1-3: Demonstrate Value",
      actions: [
        "Exceed expectations in areas specifically mentioned in feedback",
        "Take on additional responsibilities to show growth potential",
        "Document all achievements and contributions meticulously",
        "Seek additional training or certifications if skill gaps identified"
      ]
    },
    {
      phase: "Month 3-6: Build Your Case",
      actions: [
        "Compile comprehensive portfolio of improvements and achievements",
        "Gather updated market research and salary data",
        "Obtain positive feedback from colleagues, clients, or other managers",
        "Prepare stronger negotiation strategy based on demonstrable results"
      ]
    },
    {
      phase: "Month 6+: Re-approach Strategically",
      actions: [
        "Schedule formal review meeting to discuss progress",
        "Present evidence of improvement and increased value contribution",
        "Propose specific salary figure based on enhanced performance",
        "Be prepared with alternative scenarios and compensation packages"
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="Raise Rejection: Next Steps and Recovery Strategies | Salary Negotiation Guide"
        description="What to do after your raise request is denied. Learn professional strategies to handle rejection, improve your position, and successfully negotiate a salary increase in the future."
        keywords="raise rejection, denied salary increase, what to do after raise rejection, salary negotiation recovery, handle raise denial"
        structuredData={SchemaGenerator.howToGuide({
          name: "How to Handle Salary Raise Rejection Professionally",
          description: "Complete guide for recovering from raise rejection and positioning yourself for future success",
          url: "https://payraisepercentagecalculator.com/guides/raise-rejection-next-steps",
          steps: [
            { name: "Stay professional", text: "Respond graciously and request specific feedback" },
            { name: "Analyze the reasons", text: "Understand why the request was denied" },
            { name: "Create improvement plan", text: "Address specific issues raised by management" },
            { name: "Explore alternatives", text: "Negotiate non-salary benefits and development opportunities" },
            { name: "Re-approach strategically", text: "Return with stronger case after demonstrating improvement" }
          ]
        })}
      />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Recovery Strategy</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Raise Rejection: Your Professional Recovery Plan
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A raise rejection doesn't mean the end of your salary growth journey. Learn how to handle 
              rejection professionally, understand the reasons, and position yourself for future success.
            </p>
          </div>

          {/* Key Statistics */}
          <Card className="mb-12 bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">68%</div>
                  <div className="text-gray-600">Get approved on second attempt with improved approach</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">43%</div>
                  <div className="text-gray-600">Of employees experience raise rejection at least once</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                  <div className="text-gray-600">Improve their position within 12 months after rejection</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Immediate Response Steps */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <AlertCircle className="mr-3 h-6 w-6 text-orange-600" />
                Immediate Response Steps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {immediateSteps.map((step, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                      <div className="text-right ml-4">
                        <Badge variant={step.priority === 'Critical' ? 'destructive' : step.priority === 'High' ? 'default' : 'secondary'}>
                          {step.priority}
                        </Badge>
                        <div className="text-sm text-gray-500 mt-1">{step.timeline}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Common Rejection Reasons */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <MessageSquare className="mr-3 h-6 w-6 text-blue-600" />
                Common Rejection Reasons & Response Strategies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {commonReasons.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 mr-3">{item.reason}</h3>
                          <Badge variant="outline">{item.percentage} of cases</Badge>
                        </div>
                        <p className="text-gray-600 mb-3">{item.strategy}</p>
                        <div className="text-sm text-blue-600">
                          <strong>Typical Recovery Timeline:</strong> {item.timeline}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Alternative Compensation Options */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <RefreshCw className="mr-3 h-6 w-6 text-green-600" />
                Alternative Compensation Options
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                When salary increases aren't possible, these alternatives can provide value while you work toward your next raise opportunity.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {alternativeOptions.map((option, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{option.option}</h3>
                      <Badge variant={option.difficulty === 'Low' ? 'secondary' : option.difficulty === 'Medium' ? 'default' : 'destructive'}>
                        {option.difficulty} effort
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-3">{option.description}</p>
                    <div className="text-sm text-green-600 font-medium">{option.value}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recovery Timeline */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Calendar className="mr-3 h-6 w-6 text-purple-600" />
                Professional Recovery Plan Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {recoveryPlan.map((phase, index) => (
                  <div key={index} className="border-l-4 border-purple-200 pl-6">
                    <h3 className="text-xl font-semibold text-purple-900 mb-4">{phase.phase}</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {phase.actions.map((action, actionIndex) => (
                        <div key={actionIndex} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sample Follow-up Email */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Sample Follow-up Email Template</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-lg border">
                <div className="space-y-4 text-sm">
                  <div><strong>Subject:</strong> Follow-up on our salary discussion - Next steps</div>
                  <div className="border-t pt-4">
                    <p className="mb-4">Dear [Manager's Name],</p>
                    <p className="mb-4">
                      Thank you for taking the time to discuss my salary request yesterday. I appreciate your honest feedback 
                      about [specific reason for rejection, e.g., "current budget constraints" or "areas for performance improvement"].
                    </p>
                    <p className="mb-4">
                      I'd like to work together to address the concerns you raised. Based on our conversation, I understand that 
                      [summarize key feedback]. I'm committed to [specific improvement areas] and would welcome the opportunity 
                      to discuss a timeline for revisiting this conversation.
                    </p>
                    <p className="mb-4">
                      In the meantime, I'd appreciate discussing alternative ways to recognize my contributions, such as 
                      [mention 1-2 specific alternatives from the list above].
                    </p>
                    <p className="mb-4">
                      Could we schedule a brief follow-up meeting in [suggested timeframe] to discuss my progress and next steps?
                    </p>
                    <p>
                      Thank you again for your guidance and support.<br />
                      Best regards,<br />
                      [Your Name]
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tools and Resources */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Target className="mr-3 h-6 w-6 text-blue-600" />
                Tools to Strengthen Your Next Request
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Performance Tracking</h3>
                  <p className="text-sm text-blue-700 mb-4">
                    Document achievements and improvements to build a stronger case for your next request.
                  </p>
                  <InternalLink href="/guides/performance-review-raise-preparation">
                    <Button variant="outline" size="sm" className="w-full">
                      Preparation Guide
                    </Button>
                  </InternalLink>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Market Research</h3>
                  <p className="text-sm text-green-700 mb-4">
                    Gather comprehensive salary data to support your value proposition.
                  </p>
                  <InternalLink href="/guides/market-value-salary-research">
                    <Button variant="outline" size="sm" className="w-full">
                      Research Methods
                    </Button>
                  </InternalLink>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-3">Negotiation Strategy</h3>
                  <p className="text-sm text-purple-700 mb-4">
                    Develop a more effective approach for your next salary conversation.
                  </p>
                  <InternalLink href="/guides/negotiating-salary-increase-strategies">
                    <Button variant="outline" size="sm" className="w-full">
                      Strategy Guide
                    </Button>
                  </InternalLink>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* When to Consider Looking Elsewhere */}
          <Card className="mb-12 border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-orange-900">
                <AlertCircle className="mr-3 h-5 w-5" />
                When to Consider External Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-800 mb-4">
                Sometimes, despite your best efforts, internal advancement may be limited. Consider external opportunities if:
              </p>
              <ul className="space-y-2 text-orange-800">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-orange-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Multiple raise requests have been denied without clear improvement path</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-orange-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Your salary is significantly below market rate despite strong performance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-orange-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Limited growth opportunities or advancement potential in current role</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-orange-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Company culture doesn't value or reward employee development</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Turn Rejection into Your Next Success</h2>
              <p className="text-lg opacity-90 mb-6">
                Use our tools to plan your recovery strategy and calculate your target for the next opportunity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <InternalLink href="/">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Calculate Target Raise
                  </Button>
                </InternalLink>
                <InternalLink href="/guides/performance-review-raise-preparation">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    Plan Your Comeback
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