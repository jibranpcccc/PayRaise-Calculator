import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/seo/head";
import { 
  Target, 
  Search, 
  MessageSquare, 
  Calendar,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Shield,
  Award,
  Users,
  Clock,
  FileText,
  Star,
  Lightbulb
} from "lucide-react";

export default function SalaryNegotiationCompleteGuide() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Complete Guide to Salary Negotiation: Strategies That Work in 2025",
    "description": "Comprehensive guide to successful salary negotiations. Expert strategies for preparation, presentation, and closing deals that maximize your compensation.",
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

  const negotiationPhases = [
    {
      phase: "Pre-Negotiation Preparation",
      icon: <Search className="h-8 w-8" />,
      duration: "2-4 weeks",
      color: "bg-blue-500",
      steps: [
        {
          title: "Research Your Market Value",
          description: "Use salary comparison websites, industry reports, and network insights",
          tools: ["Glassdoor", "PayScale", "LinkedIn Salary Insights", "Industry associations"]
        },
        {
          title: "Document Your Achievements",
          description: "Compile quantifiable performance metrics and value contributions",
          tools: ["Performance reviews", "Project outcomes", "Revenue impact", "Cost savings"]
        },
        {
          title: "Assess Company Health",
          description: "Research company financials and recent performance",
          tools: ["Financial statements", "News articles", "Industry trends", "Stock performance"]
        },
        {
          title: "Plan Your Strategy",
          description: "Define your target range and negotiation approach",
          tools: ["Salary calculator", "Market benchmarks", "Alternative benefits", "Timeline"]
        }
      ]
    },
    {
      phase: "The Negotiation Conversation",
      icon: <MessageSquare className="h-8 w-8" />,
      duration: "30-60 minutes",
      color: "bg-green-500",
      steps: [
        {
          title: "Opening the Discussion",
          description: "Set professional tone and establish context for the conversation",
          tools: ["Appreciation statements", "Context setting", "Meeting agenda", "Positive framing"]
        },
        {
          title: "Presenting Your Case",
          description: "Share achievements, market research, and value proposition",
          tools: ["Achievement portfolio", "Market data", "Specific examples", "Impact metrics"]
        },
        {
          title: "Making the Ask",
          description: "State your request clearly with supporting rationale",
          tools: ["Specific percentage/amount", "Justification", "Market comparison", "Timeline"]
        },
        {
          title: "Active Listening",
          description: "Understand manager's perspective and any constraints",
          tools: ["Open questions", "Clarification", "Empathy", "Note-taking"]
        }
      ]
    },
    {
      phase: "Handling Objections & Closing",
      icon: <Shield className="h-8 w-8" />,
      duration: "Ongoing",
      color: "bg-purple-500",
      steps: [
        {
          title: "Address Concerns",
          description: "Respond professionally to budget or timing objections",
          tools: ["Alternative solutions", "Phased implementation", "Performance metrics", "Future reviews"]
        },
        {
          title: "Explore Alternatives",
          description: "Discuss non-monetary compensation if salary isn't possible",
          tools: ["Benefits upgrade", "Flexible work", "Development budget", "Title change"]
        },
        {
          title: "Confirm Next Steps",
          description: "Establish timeline and follow-up process",
          tools: ["Written summary", "Decision timeline", "Review schedule", "Documentation"]
        },
        {
          title: "Professional Follow-up",
          description: "Maintain positive relationship regardless of outcome",
          tools: ["Thank you email", "Commitment reaffirmation", "Goal setting", "Relationship building"]
        }
      ]
    }
  ];

  const conversationFrameworks = [
    {
      scenario: "Opening Statement",
      framework: "STAR Method",
      example: "I've been reflecting on my contributions this year and would like to discuss my compensation. Given my performance and market research, I believe there's an opportunity to better align my salary with the value I bring to the team."
    },
    {
      scenario: "Achievement Presentation",
      framework: "CAR Method (Challenge, Action, Result)",
      example: "When we faced the client retention challenge (Challenge), I developed and implemented a new follow-up process (Action), which resulted in a 15% increase in client renewals worth $200,000 annually (Result)."
    },
    {
      scenario: "Market Data Integration",
      framework: "Benchmark Positioning",
      example: "Based on my research using Glassdoor and industry reports, professionals with my experience and track record in our market typically earn between $X and $Y. Given my performance, I believe $Z is appropriate."
    },
    {
      scenario: "Handling 'No Budget'",
      framework: "Alternative Solution",
      example: "I understand budget constraints are a reality. Could we explore a phased approach over 6 months, or discuss other forms of compensation like additional professional development or flexible work arrangements?"
    }
  ];

  const advancedStrategies = [
    {
      strategy: "Anchoring Technique",
      description: "Start with a higher number to influence the negotiation range",
      example: "If targeting $75k, open with $80k to anchor higher",
      riskLevel: "Medium",
      effectiveness: "High"
    },
    {
      strategy: "Package Bundling",
      description: "Present salary request as part of total compensation review",
      example: "Request salary increase + benefits optimization",
      riskLevel: "Low",
      effectiveness: "Medium"
    },
    {
      strategy: "Performance Guarantee",
      description: "Offer to tie increase to specific performance metrics",
      example: "Increase contingent on achieving 110% of targets",
      riskLevel: "Medium",
      effectiveness: "High"
    },
    {
      strategy: "Market Urgency",
      description: "Reference competitive job market (use carefully)",
      example: "Mention industry demand for your skills",
      riskLevel: "High",
      effectiveness: "Variable"
    }
  ];

  return (
    <>
      <SEOHead
        title="Complete Salary Negotiation Guide - Strategies That Work in 2025"
        description="Comprehensive guide to successful salary negotiations. Expert strategies for preparation, presentation, and closing deals that maximize your compensation."
        canonical="/salary-negotiation-complete-guide"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                The Complete Guide to Salary Negotiation
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Strategies That Work in 2025
              </p>
              <div className="flex justify-center space-x-4 mb-6">
                <Badge className="bg-blue-100 text-blue-800">Comprehensive</Badge>
                <Badge variant="outline">20 min read</Badge>
                <Badge variant="outline">Expert Level</Badge>
              </div>
              <p className="text-lg text-gray-600">
                Master the art of salary negotiation with proven strategies, scripts, and frameworks 
                used by successful professionals to maximize their compensation.
              </p>
            </div>
          </div>
        </section>

        {/* Success Statistics */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-center text-gray-900 mb-6">Negotiation Success Statistics</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">73%</div>
                    <div className="text-sm text-gray-600">Success rate with proper preparation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">$7,500</div>
                    <div className="text-sm text-gray-600">Average annual increase gained</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">8.5%</div>
                    <div className="text-sm text-gray-600">Typical successful raise percentage</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">6 months</div>
                    <div className="text-sm text-gray-600">ROI payback period</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Three-Phase Framework */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              The Three-Phase Negotiation Framework
            </h2>
            
            <div className="space-y-12">
              {negotiationPhases.map((phase, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 ${phase.color} rounded-full flex items-center justify-center text-white`}>
                        {phase.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl">Phase {index + 1}: {phase.phase}</CardTitle>
                        <Badge variant="outline" className="mt-2">
                          <Clock className="h-3 w-3 mr-1" />
                          {phase.duration}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {phase.steps.map((step, stepIndex) => (
                        <Card key={stepIndex} className="bg-gray-50">
                          <CardContent className="p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                            <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                            <div className="space-y-1">
                              <div className="text-xs text-gray-500 font-medium">Key Tools:</div>
                              <div className="flex flex-wrap gap-1">
                                {step.tools.map((tool) => (
                                  <span key={tool} className="inline-block bg-white text-gray-700 px-2 py-1 rounded text-xs">
                                    {tool}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Conversation Frameworks */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Professional Conversation Frameworks
            </h2>
            
            <div className="space-y-6">
              {conversationFrameworks.map((framework, index) => (
                <Card key={index} className="calculator-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-primary">{framework.scenario}</CardTitle>
                      <Badge variant="outline">{framework.framework}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-primary">
                      <p className="text-gray-700 italic">"{framework.example}"</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Strategies */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Advanced Negotiation Strategies
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {advancedStrategies.map((strategy, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary flex items-center">
                      <Star className="mr-2 h-5 w-5" />
                      {strategy.strategy}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">{strategy.description}</p>
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mb-3">
                      <p className="text-sm text-blue-800"><strong>Example:</strong> {strategy.example}</p>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div>
                        <span className="text-gray-500">Risk Level:</span>
                        <Badge 
                          variant="outline" 
                          className={`ml-2 ${
                            strategy.riskLevel === 'Low' ? 'text-green-700 border-green-300' :
                            strategy.riskLevel === 'Medium' ? 'text-yellow-700 border-yellow-300' :
                            'text-red-700 border-red-300'
                          }`}
                        >
                          {strategy.riskLevel}
                        </Badge>
                      </div>
                      <div>
                        <span className="text-gray-500">Effectiveness:</span>
                        <Badge variant="outline" className="ml-2 text-blue-700 border-blue-300">
                          {strategy.effectiveness}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Compensation Beyond Salary */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Beyond Base Salary: Total Compensation Negotiation
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-700 flex items-center">
                    <DollarSign className="mr-2 h-5 w-5" />
                    Financial Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Signing or retention bonuses</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Stock options or equity</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Performance-based bonuses</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Deferred compensation plans</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-700 flex items-center">
                    <Clock className="mr-2 h-5 w-5" />
                    Work-Life Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Additional vacation days</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Flexible work arrangements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Remote work options</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Sabbatical opportunities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-purple-700 flex items-center">
                    <Award className="mr-2 h-5 w-5" />
                    Career Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Professional development budget</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Conference and training attendance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Mentorship programs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Advanced degree support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Common Negotiation Mistakes to Avoid
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  mistake: "Negotiating based on personal needs instead of value",
                  solution: "Focus on your contributions and market value, not personal expenses"
                },
                {
                  mistake: "Accepting the first offer without discussion",
                  solution: "Always engage in professional dialogue about compensation"
                },
                {
                  mistake: "Making ultimatums or threats",
                  solution: "Present options and maintain collaborative tone"
                },
                {
                  mistake: "Negotiating without market research",
                  solution: "Come prepared with solid salary data and benchmarks"
                },
                {
                  mistake: "Focusing only on base salary",
                  solution: "Consider total compensation package and benefits"
                },
                {
                  mistake: "Poor timing (e.g., during company struggles)",
                  solution: "Choose optimal timing based on company and personal performance"
                }
              ].map((item, index) => (
                <Card key={index} className="bg-red-50 border-red-200">
                  <CardContent className="p-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-red-900 mb-2 flex items-center">
                          <span className="text-red-500 mr-2">✗</span>
                          Common Mistake
                        </h4>
                        <p className="text-sm text-red-800">{item.mistake}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900 mb-2 flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Better Approach
                        </h4>
                        <p className="text-sm text-green-800">{item.solution}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Action Plan */}
        <section className="py-12 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Negotiate Your Worth?</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Put these strategies into action with our professional tools and resources
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-6 text-center">
                  <Target className="h-8 w-8 mx-auto mb-3 text-white" />
                  <h3 className="font-semibold mb-2">Calculate Your Target</h3>
                  <p className="text-sm text-blue-100 mb-4">Determine your ideal raise amount and percentage</p>
                  <Link href="/">
                    <Button className="bg-white text-primary hover:bg-gray-100">
                      Use Calculator
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 mx-auto mb-3 text-white" />
                  <h3 className="font-semibold mb-2">Research Benchmarks</h3>
                  <p className="text-sm text-blue-100 mb-4">Compare against industry standards and market data</p>
                  <Link href="/industry-raise-benchmarks-2025">
                    <Button className="bg-white text-primary hover:bg-gray-100">
                      View Data
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-6 text-center">
                  <FileText className="h-8 w-8 mx-auto mb-3 text-white" />
                  <h3 className="font-semibold mb-2">Prepare Your Review</h3>
                  <p className="text-sm text-blue-100 mb-4">Get ready for performance review discussions</p>
                  <Link href="/guides/performance-review-raise-preparation">
                    <Button className="bg-white text-primary hover:bg-gray-100">
                      Get Prepared
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/guides/negotiating-salary-increase-strategies">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Lightbulb className="mr-2 h-4 w-4" />
                  Negotiation Strategies
                </Button>
              </Link>
              <Link href="/tools">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  All Calculator Tools
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
