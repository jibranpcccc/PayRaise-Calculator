import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/seo/head";
import { 
  Target, 
  Search, 
  MessageSquare, 
  Shield, 
  Calendar,
  TrendingUp,
  FileText,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Clock,
  Award
} from "lucide-react";

export default function NegotiatingSalaryIncreaseStrategies() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Negotiating Salary Increase Strategies - Complete Guide",
    "description": "Step-by-step strategies for successful salary negotiations and raise requests. Expert tactics for preparing, presenting, and closing salary negotiations.",
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

  const negotiationSteps = [
    {
      step: 1,
      title: "Research & Preparation",
      icon: <Search className="h-6 w-6" />,
      description: "Build a solid foundation with market data and achievements",
      timeframe: "2-4 weeks before",
      actions: [
        "Research salary ranges for your role and location",
        "Document your achievements and contributions",
        "Gather performance metrics and feedback",
        "Identify your unique value propositions"
      ]
    },
    {
      step: 2,
      title: "Timing & Scheduling",
      icon: <Calendar className="h-6 w-6" />,
      description: "Choose the optimal moment for your request",
      timeframe: "1-2 weeks before",
      actions: [
        "Schedule during positive business periods",
        "Align with performance review cycles",
        "Consider your manager's schedule and mood",
        "Plan for 30-45 minute focused discussion"
      ]
    },
    {
      step: 3,
      title: "The Conversation",
      icon: <MessageSquare className="h-6 w-6" />,
      description: "Present your case professionally and confidently",
      timeframe: "Day of negotiation",
      actions: [
        "Start with appreciation and context",
        "Present your achievements and impact",
        "State your request clearly and specifically",
        "Be prepared to discuss alternatives"
      ]
    },
    {
      step: 4,
      title: "Handling Objections",
      icon: <Shield className="h-6 w-6" />,
      description: "Navigate pushback and find common ground",
      timeframe: "During discussion",
      actions: [
        "Listen actively to concerns",
        "Address budget constraints constructively",
        "Offer timeline flexibility",
        "Suggest performance-based arrangements"
      ]
    }
  ];

  const conversationScripts = [
    {
      scenario: "Opening the Discussion",
      script: "I've been reflecting on my contributions over the past year and would like to discuss my compensation. Based on my research and performance, I believe there's an opportunity to better align my salary with my current value to the team."
    },
    {
      scenario: "Presenting Your Case",
      script: "Over the past year, I've [specific achievement]. This resulted in [quantifiable impact]. Based on market research, professionals with my experience and track record typically earn between $X and $Y."
    },
    {
      scenario: "Making the Ask",
      script: "Given my performance and market research, I'd like to request a salary increase to $X, which represents a Y% increase. This would align my compensation with industry standards and reflect my contributions."
    },
    {
      scenario: "Handling 'Budget Constraints'",
      script: "I understand budget considerations are important. Would it be possible to implement this increase in phases, or could we explore other forms of compensation such as additional benefits or professional development opportunities?"
    }
  ];

  return (
    <>
      <SEOHead
        title="Negotiating Salary Increase Strategies - Complete Guide"
        description="Step-by-step strategies for successful salary negotiations and raise requests. Expert tactics for preparing, presenting, and closing salary negotiations."
        canonical="/guides/negotiating-salary-increase-strategies"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Negotiating Salary Increase Strategies
              </h1>
              <div className="flex justify-center space-x-4 mb-6">
                <Badge className="bg-yellow-100 text-yellow-800">Intermediate</Badge>
                <Badge variant="outline">12 min read</Badge>
                <Badge variant="outline">Updated 2025</Badge>
              </div>
              <p className="text-xl text-gray-600">
                Step-by-step strategies for successful salary negotiations and raise requests. 
                Master the art of presenting your value and securing the compensation you deserve.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Success Framework */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  The 4-Step Negotiation Framework
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">1</div>
                    <div className="text-sm font-medium text-green-800">Research</div>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">2</div>
                    <div className="text-sm font-medium text-green-800">Prepare</div>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">3</div>
                    <div className="text-sm font-medium text-green-800">Present</div>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">4</div>
                    <div className="text-sm font-medium text-green-800">Follow-up</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Step-by-Step Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Step-by-Step Negotiation Process
              </h2>
              
              <div className="space-y-8">
                {negotiationSteps.map((step, index) => (
                  <Card key={index} className="calculator-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                          {step.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl">Step {step.step}: {step.title}</CardTitle>
                          <p className="text-gray-600">{step.description}</p>
                          <Badge variant="outline" className="mt-2">
                            <Clock className="h-3 w-3 mr-1" />
                            {step.timeframe}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Key Actions:</h4>
                          <ul className="space-y-2">
                            {step.actions.map((action, actionIndex) => (
                              <li key={actionIndex} className="flex items-start text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                {action}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {step.step === 1 && (
                          <Card className="bg-blue-50 border-blue-200">
                            <CardContent className="p-4">
                              <h5 className="font-medium text-blue-900 mb-2">Research Tools</h5>
                              <div className="space-y-1 text-sm text-blue-800">
                                <p>• Glassdoor, PayScale, Salary.com</p>
                                <p>• LinkedIn Salary Insights</p>
                                <p>• Industry association reports</p>
                                <p>• Company financial statements</p>
                              </div>
                            </CardContent>
                          </Card>
                        )}
                        
                        {step.step === 2 && (
                          <Card className="bg-green-50 border-green-200">
                            <CardContent className="p-4">
                              <h5 className="font-medium text-green-900 mb-2">Optimal Timing</h5>
                              <div className="space-y-1 text-sm text-green-800">
                                <p>• After successful project completion</p>
                                <p>• During annual review cycles</p>
                                <p>• When company is performing well</p>
                                <p>• After receiving positive feedback</p>
                              </div>
                            </CardContent>
                          </Card>
                        )}
                        
                        {step.step === 3 && (
                          <Card className="bg-yellow-50 border-yellow-200">
                            <CardContent className="p-4">
                              <h5 className="font-medium text-yellow-900 mb-2">Presentation Tips</h5>
                              <div className="space-y-1 text-sm text-yellow-800">
                                <p>• Lead with achievements, not needs</p>
                                <p>• Use specific numbers and metrics</p>
                                <p>• Stay professional and confident</p>
                                <p>• Practice your pitch beforehand</p>
                              </div>
                            </CardContent>
                          </Card>
                        )}
                        
                        {step.step === 4 && (
                          <Card className="bg-purple-50 border-purple-200">
                            <CardContent className="p-4">
                              <h5 className="font-medium text-purple-900 mb-2">Common Objections</h5>
                              <div className="space-y-1 text-sm text-purple-800">
                                <p>• "Budget constraints this year"</p>
                                <p>• "Not the right time"</p>
                                <p>• "Need to check with HR/leadership"</p>
                                <p>• "Performance doesn't justify increase"</p>
                              </div>
                            </CardContent>
                          </Card>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Conversation Scripts */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Professional Conversation Scripts
              </h2>
              
              <div className="grid gap-6">
                {conversationScripts.map((script, index) => (
                  <Card key={index} className="bg-gray-50">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary flex items-center">
                        <MessageSquare className="mr-2 h-5 w-5" />
                        {script.scenario}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-white p-4 rounded-lg border-l-4 border-primary">
                        <p className="text-gray-700 italic">"{script.script}"</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Advanced Strategies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Advanced Negotiation Tactics
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-700 flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5" />
                      Value-Based Positioning
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <DollarSign className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Quantify your impact in revenue or cost savings</span>
                      </li>
                      <li className="flex items-start">
                        <DollarSign className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Highlight unique skills that are hard to replace</span>
                      </li>
                      <li className="flex items-start">
                        <DollarSign className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Reference external market data and benchmarks</span>
                      </li>
                      <li className="flex items-start">
                        <DollarSign className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Present future value and growth potential</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-700 flex items-center">
                      <Award className="mr-2 h-5 w-5" />
                      Alternative Compensation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Additional vacation days or flexible work arrangements</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Professional development and training budgets</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Stock options or equity participation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Title changes and expanded responsibilities</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-purple-700 flex items-center">
                      <Calendar className="mr-2 h-5 w-5" />
                      Timeline Strategies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <Clock className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Propose phased implementation over 6-12 months</span>
                      </li>
                      <li className="flex items-start">
                        <Clock className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Tie increases to specific performance milestones</span>
                      </li>
                      <li className="flex items-start">
                        <Clock className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Request review dates for future discussions</span>
                      </li>
                      <li className="flex items-start">
                        <Clock className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Establish clear criteria for next salary review</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-red-700 flex items-center">
                      <Shield className="mr-2 h-5 w-5" />
                      Handling Rejection
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Ask for specific feedback on areas for improvement</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Request a timeline for when raises will be considered</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Negotiate for non-monetary benefits in the interim</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Document the conversation and follow up in writing</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Success Metrics */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Measuring Negotiation Success
              </h2>
              
              <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">73%</div>
                      <div className="text-sm text-gray-600">Success rate when employees negotiate professionally</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">$5,000</div>
                      <div className="text-sm text-gray-600">Average annual increase from successful negotiations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">6-8%</div>
                      <div className="text-sm text-gray-600">Typical range for negotiated salary increases</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tools and Resources */}
            <div className="bg-primary text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Negotiate Your Raise?</h3>
              <p className="text-blue-100 mb-6">
                Use our tools to prepare your negotiation strategy and calculate your target increase
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/">
                  <Button className="bg-white text-primary hover:bg-gray-100">
                    <Target className="mr-2 h-4 w-4" />
                    Calculate Target Raise
                  </Button>
                </Link>
                <Link href="/tools/salary-negotiation-calculator">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    Negotiation Calculator
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
